import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { destinations, siteMeta } from "./orchards-source.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const citiesDir = path.join(rootDir, "cities");

function ensureCleanDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

ensureCleanDir(citiesDir);

for (const staleDir of ["articles", "downloads", "skills"]) {
  fs.rmSync(path.join(rootDir, staleDir), { recursive: true, force: true });
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderList(items, className = "bullet-list") {
  return `<ul class="${className}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderParagraphs(items) {
  return items.map((item) => `<p>${escapeHtml(item)}</p>`).join("");
}

function renderOrchardTable(orchards) {
  const rows = orchards
    .map(
      (orchard) => `<tr>
              <td>${escapeHtml(orchard.name)}</td>
              <td>${escapeHtml(orchard.address)}</td>
              <td>${escapeHtml(orchard.phone)}</td>
              <td>${escapeHtml(orchard.highlight)}</td>
            </tr>`
    )
    .join("");

  return `<div class="table-wrap">
          <table class="orchard-table">
            <thead>
              <tr>
                <th>采摘园名字</th>
                <th>地址</th>
                <th>电话</th>
                <th>亮点介绍</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
        </div>`;
}

function layout({ title, description, pathname = "/", body }) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="https://caizhaiyuan.com${escapeHtml(pathname)}" />
    <link rel="preconnect" href="https://images.unsplash.com" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
${body}
  </body>
</html>
`;
}

function cityUrl(item) {
  return `/cities/${item.slug}.html`;
}

function buildIndexPage() {
  const cards = destinations
    .map(
      (item) => `
        <a class="city-card" href="${cityUrl(item)}">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt)}" loading="lazy" />
          <div class="city-card-content">
            <div class="card-meta">
              <span>${escapeHtml(item.province)}</span>
              <span>${escapeHtml(item.city)}</span>
            </div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.summary)}</p>
            <div class="tag-row">
              ${item.crops.map((crop) => `<span>${escapeHtml(crop)}</span>`).join("")}
            </div>
          </div>
        </a>
      `
    )
    .join("");

  return layout({
    title: siteMeta.title,
    description: siteMeta.description,
    pathname: "/",
    body: `    <header class="site-hero">
      <nav class="top-nav">
        <a class="brand" href="/">采摘园网</a>
        <span>caizhaiyuan.com</span>
      </nav>
      <section class="hero-grid">
        <div>
          <p class="eyebrow">中国采摘园城市指南</p>
          <h1>周末去哪摘？从一个城市开始，找到一片果香。</h1>
          <p class="hero-copy">${escapeHtml(siteMeta.description)}</p>
          <div class="hero-actions">
            <a href="#cities">查看城市采摘卡片</a>
            <span>${destinations.length} 个省级目的地</span>
          </div>
        </div>
        <div class="hero-photo">
          <img src="${escapeHtml(siteMeta.heroImage)}" alt="一家人在果园里采摘水果" />
        </div>
      </section>
    </header>

    <main class="page-shell" id="cities">
      <section class="section-head">
        <p class="eyebrow">精选城市</p>
        <h2>每个省份选一个适合周末出发的采摘城市</h2>
        <p>首页卡片聚合这座城市的采摘特色和主打水果；进入城市详情页后，可以查看多个采摘园方向的表格清单、地址线索、联系建议和出行提醒。</p>
      </section>
      <section class="city-grid">
        ${cards}
      </section>
    </main>

    <footer class="site-footer">
      <p>采摘园网 caizhaiyuan.com</p>
      <p>出行前请以园区官方公告、地图平台电话和当地文旅信息为准。</p>
    </footer>`
  });
}

function buildCityPage(item) {
  return layout({
    title: `${item.title} | 采摘园网`,
    description: item.summary,
    pathname: cityUrl(item),
    body: `    <header class="detail-hero">
      <nav class="top-nav">
        <a class="brand" href="/">采摘园网</a>
        <a href="/">返回首页</a>
      </nav>
      <div class="detail-hero-grid">
        <div>
          <p class="eyebrow">${escapeHtml(item.province)} · ${escapeHtml(item.city)}</p>
          <h1>${escapeHtml(item.title)}</h1>
          <p class="hero-copy">${escapeHtml(item.summary)}</p>
          <div class="tag-row hero-tags">
            ${item.crops.map((crop) => `<span>${escapeHtml(crop)}</span>`).join("")}
          </div>
        </div>
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt)}" />
      </div>
    </header>

    <main class="page-shell detail-layout">
      <article class="article-panel">
        <section>
          <h2>采摘园特色</h2>
          ${renderParagraphs(item.description)}
        </section>
        <section>
          <h2>${escapeHtml(item.city)}采摘园清单</h2>
          <p>下面按城市采摘线索整理多个园区方向，方便你比较采摘品类、位置范围和适合的玩法。电话和营业状态建议出发前以地图平台、园区公众号或官方公告为准。</p>
          ${renderOrchardTable(item.orchards)}
        </section>
        <section>
          <h2>适合采摘什么</h2>
          ${renderList(item.pick)}
        </section>
        <section>
          <h2>游玩亮点</h2>
          ${renderList(item.highlights)}
        </section>
        <section>
          <h2>出行建议</h2>
          ${renderList(item.tips)}
        </section>
      </article>

      <aside class="info-panel">
        <div>
          <h2>城市采摘范围</h2>
          <p>${escapeHtml(item.address)}</p>
        </div>
        <div>
          <h2>联系提醒</h2>
          <p>${escapeHtml(item.contact)}</p>
        </div>
        <div>
          <h2>推荐季节</h2>
          <p>${escapeHtml(item.season)}</p>
        </div>
        <div>
          <h2>搜索关键词</h2>
          <p>${escapeHtml(item.searchKeywords.join("、"))}</p>
        </div>
      </aside>
    </main>

    <footer class="site-footer">
      <p>采摘园网 caizhaiyuan.com</p>
      <p>采摘季节和营业状态变化较快，出发前请二次确认。</p>
    </footer>`
  });
}

fs.writeFileSync(path.join(rootDir, "index.html"), buildIndexPage(), "utf8");

for (const item of destinations) {
  fs.writeFileSync(path.join(citiesDir, `${item.slug}.html`), buildCityPage(item), "utf8");
}

const sitemapUrls = [
  "https://caizhaiyuan.com/",
  ...destinations.map((item) => `https://caizhaiyuan.com${cityUrl(item)}`)
];

fs.writeFileSync(
  path.join(rootDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join("\n")}
</urlset>
`,
  "utf8"
);

fs.writeFileSync(
  path.join(rootDir, "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: https://caizhaiyuan.com/sitemap.xml
`,
  "utf8"
);
