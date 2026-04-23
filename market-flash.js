(function () {
  const widgets = Array.from(document.querySelectorAll("[data-flash-widget]"));

  if (!widgets.length) {
    return;
  }

  function normalizeItems(payload) {
    if (Array.isArray(payload)) {
      return payload;
    }

    if (payload && Array.isArray(payload.items)) {
      return payload.items;
    }

    return [];
  }

  function render(widget, items, sourceLabel) {
    if (!items.length) {
      widget.innerHTML = '<div class="flash-empty">暂无快讯数据。</div>';
      return;
    }

    const limit = Number(widget.dataset.limit || items.length);
    const html = items.slice(0, limit).map((item) => {
      const tag = item.market || item.tag || "市场";
      const level = item.level || "normal";
      const title = item.title || "未命名快讯";
      const summary = item.summary || "";
      const time = item.time || "";
      const link = item.url
        ? `<a class="flash-link" href="${item.url}" target="_blank" rel="noopener noreferrer">查看来源</a>`
        : "";

      return `<article class="flash-item flash-${level}">
        <div class="flash-item-head">
          <span class="flash-tag">${tag}</span>
          <time>${time}</time>
        </div>
        <h3>${title}</h3>
        <p>${summary}</p>
        ${link}
      </article>`;
    }).join("");

    widget.innerHTML = `
      <div class="flash-toolbar">
        <span>数据来源：${sourceLabel}</span>
        <span>自动刷新中</span>
      </div>
      <div class="flash-list">${html}</div>
    `;
  }

  async function fetchJson(url) {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    return response.json();
  }

  async function loadWidget(widget) {
    const endpoint = widget.dataset.endpoint;
    const fallback = widget.dataset.fallback;

    try {
      if (endpoint) {
        const payload = await fetchJson(endpoint);
        render(widget, normalizeItems(payload), "动态接口");
        return;
      }

      throw new Error("No endpoint configured");
    } catch (error) {
      try {
        const payload = await fetchJson(fallback);
        render(widget, normalizeItems(payload), "本地示例数据");
      } catch (fallbackError) {
        widget.innerHTML = '<div class="flash-empty">快讯接口暂时不可用，请稍后再试。</div>';
      }
    }
  }

  widgets.forEach((widget) => {
    loadWidget(widget);
    const refreshMs = Number(widget.dataset.refreshMs || 60000);
    window.setInterval(() => loadWidget(widget), refreshMs);
  });
})();
