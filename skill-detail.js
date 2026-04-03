const detailRoot = document.getElementById("skill-detail");

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderList(items, className = "bullet-list") {
  return `<ul class="${className}">${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function renderSkillDetail(skill) {
  document.title = `${skill.title} | Frontend Skill`;

  detailRoot.innerHTML = `
    <article class="skill-detail-card">
      <header class="detail-header">
        <div>
          <span class="section-chip">${skill.category}</span>
          <h1>${escapeHtml(skill.title)}</h1>
          <p class="overview-copy">${escapeHtml(skill.overview)}</p>
        </div>
        <div class="detail-meta">
          <span class="meta-pill">Level: ${escapeHtml(skill.level)}</span>
          <span class="meta-pill">建议投入: ${escapeHtml(skill.time)}</span>
        </div>
      </header>

      <section class="content-layout">
        <div class="content-column">
          <section class="content-section">
            <h2>输出结果</h2>
            ${renderList(skill.outputs)}
          </section>

          <section class="content-section">
            <h2>执行约束</h2>
            ${renderList(skill.constraints)}
          </section>

          <section class="content-section">
            <h2>执行流程</h2>
            ${renderList(skill.workflow)}
          </section>

          <section class="content-section">
            <h2>优先工具</h2>
            ${renderList(skill.tools)}
          </section>

          <section class="content-section">
            <h2>示例片段</h2>
            <pre class="code-block"><code>${escapeHtml(skill.snippet)}</code></pre>
          </section>
        </div>

        <aside class="side-column">
          <section class="content-section">
            <h2>触发条件</h2>
            ${renderList(skill.trigger, "meta-list")}
          </section>

          <section class="content-section">
            <h2>所需输入</h2>
            ${renderList(skill.inputs, "learning-path")}
          </section>
        </aside>
      </section>
    </article>
  `;
}

function renderEmptyState() {
  detailRoot.innerHTML = `
    <section class="empty-state">
      <h1>没有找到这个 Skill</h1>
      <p>请返回列表页重新选择，或检查链接中的 <code>slug</code> 是否正确。</p>
    </section>
  `;
}

if (detailRoot && Array.isArray(window.SKILLS)) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const skill = window.SKILLS.find((item) => item.slug === slug);

  if (skill) {
    renderSkillDetail(skill);
  } else {
    renderEmptyState();
  }
}
