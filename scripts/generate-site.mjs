import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { siteMeta, skills } from "./skills-source.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const skillsDir = path.join(rootDir, "skills");
const downloadsDir = path.join(rootDir, "downloads");

fs.mkdirSync(skillsDir, { recursive: true });
fs.mkdirSync(downloadsDir, { recursive: true });

for (const file of fs.readdirSync(skillsDir)) {
  if (file.endsWith(".html")) {
    fs.unlinkSync(path.join(skillsDir, file));
  }
}

for (const file of fs.readdirSync(downloadsDir)) {
  if (file.endsWith(".md")) {
    fs.unlinkSync(path.join(downloadsDir, file));
  }
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
  return `<ul class="${className}">${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function markdownList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function buildMarkdown(skill) {
  return `---
name: ${skill.slug}
description: ${skill.summary}
---

# ${skill.title}

## When to use

${skill.overview}

## Trigger

${markdownList(skill.trigger)}

## Inputs

${markdownList(skill.inputs)}

## Constraints

${markdownList(skill.constraints)}

## Workflow

${markdownList(skill.workflow)}

## Output contract

${markdownList(skill.outputs)}

## Preferred tools

${markdownList(skill.tools)}

## Coding notes

- Match the existing stack, naming, and folder structure in the target project.
- Prefer minimal, production-safe changes over broad rewrites.
- Include validation guidance when code changes are non-trivial.

## Example snippet

\`\`\`txt
${skill.snippet}
\`\`\`
`;
}

function layout({ title, description, body }) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Noto+Sans+SC:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
${body}
  </body>
</html>
`;
}

function buildSkillPage(skill) {
  return layout({
    title: `${skill.title} | ${siteMeta.title}`,
    description: skill.summary,
    body: `    <div class="page-shell detail-shell">
      <a class="back-link" href="/index.html">← 返回技能列表</a>
      <main>
        <article class="skill-detail-card">
          <header class="detail-header">
            <div>
              <span class="section-chip">${escapeHtml(skill.group)} / ${escapeHtml(skill.category)}</span>
              <h1>${escapeHtml(skill.title)}</h1>
              <p class="overview-copy">${escapeHtml(skill.overview)}</p>
            </div>
            <div class="detail-meta">
              <span class="meta-pill">Level: ${escapeHtml(skill.level)}</span>
              <span class="meta-pill">Priority: ${escapeHtml(skill.priority)}</span>
            </div>
            <a class="download-button" href="/downloads/${escapeHtml(skill.slug)}.md" download>下载 SKILL.md</a>
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
      </main>
    </div>`
  });
}

function buildIndexPage() {
  const groups = ["Frontend", "Backend", "Fullstack"];
  const sections = groups
    .map((group) => {
      const groupSkills = skills.filter((skill) => skill.group === group);
      return `
        <section class="skills-panel">
          <div class="section-heading">
            <h2>${group} Skills</h2>
            <p>${groupSkills.length} 个可直接下载的 AI skill</p>
          </div>
          <div class="skill-grid">
            ${groupSkills
              .map(
                (skill) => `
                  <a class="skill-card" href="/skills/${skill.slug}.html">
                    <div class="skill-card-header">
                      <span class="skill-tag">${escapeHtml(skill.category)}</span>
                      <span class="meta-pill">${escapeHtml(skill.level)}</span>
                    </div>
                    <div>
                      <h3>${escapeHtml(skill.title)}</h3>
                      <p class="skill-summary">${escapeHtml(skill.summary)}</p>
                    </div>
                    <span class="skill-link">查看静态详情页 →</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("\n");

  return layout({
    title: `${siteMeta.heroTitle} | ${siteMeta.title}`,
    description: siteMeta.heroCopy,
    body: `    <div class="page-shell">
      <header class="hero">
        <p class="eyebrow">AI Skill Catalog</p>
        <h1>${escapeHtml(siteMeta.heroTitle)}</h1>
        <p class="hero-copy">${escapeHtml(siteMeta.heroCopy)}</p>
      </header>
      <main>
${sections}
      </main>
    </div>`
  });
}

fs.writeFileSync(path.join(rootDir, "index.html"), buildIndexPage(), "utf8");

for (const skill of skills) {
  fs.writeFileSync(
    path.join(skillsDir, `${skill.slug}.html`),
    buildSkillPage(skill),
    "utf8"
  );
  fs.writeFileSync(
    path.join(downloadsDir, `${skill.slug}.md`),
    buildMarkdown(skill),
    "utf8"
  );
}
