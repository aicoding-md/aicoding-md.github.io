const skillListRoot = document.getElementById("skill-list");

if (skillListRoot && Array.isArray(window.SKILLS)) {
  skillListRoot.innerHTML = window.SKILLS.map(
    (skill) => `
      <a class="skill-card" href="./skill.html?slug=${skill.slug}">
        <div class="skill-card-header">
          <span class="skill-tag">${skill.category}</span>
          <span class="meta-pill">${skill.level}</span>
        </div>
        <div>
          <h3>${skill.title}</h3>
          <p class="skill-summary">${skill.summary}</p>
        </div>
        <span class="skill-link">查看完整 Skill →</span>
      </a>
    `
  ).join("");
}
