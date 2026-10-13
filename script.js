/* ==========================================================
   EDIT THIS SECTION: your projects and skills.
   Everything on the page is generated from this data.
   ========================================================== */

const projects = [
  {
    title: "Project One",
    category: "Web",
    summary: "One-line description of what this project does.",
    description:
      "A short paragraph explaining the project at a glance: what it is, who it is for, and why it exists.",
    problem:
      "Describe the problem you were trying to solve or the need that sparked this project.",
    features: [
      "Key feature or part you built",
      "Another notable feature",
      "A technical challenge you tackled",
    ],
    learned:
      "What this project taught you: new tools, mistakes, and what you would do differently.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "#4f46e5",
    github: "https://github.com/your-username/project-one",
    live: "https://your-username.github.io/project-one",
  },
  {
    title: "Project Two",
    category: "Python",
    summary: "A tool, script or app that does something useful.",
    description:
      "Explain this project in two or three sentences. Keep it simple and clear for a non-technical reader.",
    problem: "What problem does it solve?",
    features: ["Feature one", "Feature two", "Feature three"],
    learned: "Your main takeaway from building it.",
    tech: ["Python", "Pandas"],
    color: "#0d9488",
    github: "https://github.com/your-username/project-two",
    live: "",
  },
  {
    title: "Project Three",
    category: "App",
    summary: "A mobile or full-stack application.",
    description: "A short overview of the app and its audience.",
    problem: "The need or idea behind it.",
    features: ["Feature one", "Feature two", "Feature three"],
    learned: "What you learned along the way.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "#e11d48",
    github: "https://github.com/your-username/project-three",
    live: "",
  },
];

const skills = [
  "HTML", "CSS", "JavaScript", "Python", "React",
  "Git & GitHub", "SQL", "Problem Solving",
];

/* ==========================================================
   Site logic. You normally don't need to change anything below.
   ========================================================== */

const grid = document.getElementById("projectGrid");
const filtersEl = document.getElementById("filters");
const modal = document.getElementById("modal");
let lastFocused = null;

const initials = (t) =>
  t.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}

function renderProjects(filter = "All") {
  grid.innerHTML = "";
  projects
    .filter((p) => filter === "All" || p.category === filter)
    .forEach((p) => {
      const card = el("button", "card");
      card.type = "button";

      const thumb = el("div", "thumb", initials(p.title));
      thumb.style.background = `linear-gradient(135deg, ${p.color}, ${p.color}aa)`;

      const body = el("div", "body");
      body.append(el("h3", "", p.title), el("p", "", p.summary));

      const tags = el("div", "tags");
      p.tech.forEach((t) => tags.append(el("span", "tag", t)));
      body.append(tags, el("span", "more", "Read more →"));

      card.append(thumb, body);
      card.addEventListener("click", () => openModal(p));
      grid.append(card);
    });
}

function renderFilters() {
  const cats = ["All", ...new Set(projects.map((p) => p.category))];
  cats.forEach((c, i) => {
    const b = el("button", "filter" + (i === 0 ? " active" : ""), c);
    b.type = "button";
    b.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((f) => f.classList.remove("active"));
      b.classList.add("active");
      renderProjects(c);
    });
    filtersEl.append(b);
  });
}

function openModal(p) {
  lastFocused = document.activeElement;
  const banner = document.getElementById("mBanner");
  banner.textContent = initials(p.title);
  banner.style.background = `linear-gradient(135deg, ${p.color}, ${p.color}aa)`;

  document.getElementById("mTitle").textContent = p.title;
  document.getElementById("mDesc").textContent = p.description;
  document.getElementById("mProblem").textContent = p.problem;
  document.getElementById("mLearned").textContent = p.learned;

  const tags = document.getElementById("mTags");
  tags.innerHTML = "";
  p.tech.forEach((t) => tags.append(el("span", "tag", t)));

  const feats = document.getElementById("mFeatures");
  feats.innerHTML = "";
  p.features.forEach((f) => feats.append(el("li", "", f)));

  const links = document.getElementById("mLinks");
  links.innerHTML = "";
  if (p.live) {
    const a = el("a", "btn primary", "Live demo");
    a.href = p.live; a.target = "_blank"; a.rel = "noopener";
    links.append(a);
  }
  if (p.github) {
    const a = el("a", "btn", "View code");
    a.href = p.github; a.target = "_blank"; a.rel = "noopener";
    links.append(a);
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

/* Skills */
const chipBox = document.getElementById("skillChips");
skills.forEach((s) => chipBox.append(el("span", "chip", s)));

/* Theme toggle (remembers choice) */
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
    root.setAttribute("data-theme", "dark");
} catch (_) {}

document.getElementById("themeToggle").addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (_) {}
});

document.getElementById("year").textContent = new Date().getFullYear();

renderFilters();
renderProjects();
