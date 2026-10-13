/* ==========================================================
   EDIT THIS SECTION ONLY: your details, experience, projects.
   Everything on the page is generated from this data.
   ========================================================== */

const profile = {
  name: "Your Name",                 // <- your full name
  initials: "YN",                    // <- shown in the top-left logo
  title: "Your Job Title",           // <- e.g. "AI / Data Professional"
  location: "Nagpur, India",
  tagline:
    "1 year of professional experience at PSPR and a 6-month internship at Fireblaze AI School, building practical, results-driven projects.",

  email: "you@example.com",
  linkedin: "https://www.linkedin.com/in/your-username",
  instagram: "https://www.instagram.com/your-username",
  github: "https://github.com/your-username",
};

const about = [
  "I am a professional with 1 year of hands-on experience at PSPR, where I worked on real-world responsibilities and delivered results in a working team environment.",
  "I also completed a 6-month internship at Fireblaze AI School, where I built practical skills and worked on projects that strengthened my technical foundation.",
  "I enjoy turning ideas into working solutions and I'm now looking for the next opportunity to grow and contribute.",
];

const facts = [
  ["Location", profile.location],
  ["Experience", "1 year + 6 months internship"],
  ["Currently", "Open to opportunities"],
];

const stats = [
  ["1 yr", "Experience at PSPR"],
  ["6 mo", "Internship at Fireblaze AI School"],
  ["PROJECTS", "Projects built"], // auto-filled with your project count
];

const experience = [
  {
    role: "Your Role at PSPR",       // <- your job title
    company: "PSPR",
    period: "1 year",                // <- e.g. "Jan 2025 - Jan 2026"
    summary: "A short sentence about what you did at PSPR.",
    points: [
      "Key responsibility or achievement",
      "Another responsibility or measurable result",
      "Tools or technologies you used",
    ],
  },
  {
    role: "Intern",                  // <- your internship role
    company: "Fireblaze AI School",
    period: "6 months",              // <- e.g. "Jul 2024 - Dec 2024"
    summary: "A short sentence about what you worked on during the internship.",
    points: [
      "What you built or learned",
      "Projects or tasks you completed",
      "Tools or technologies you used",
    ],
  },
];

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
    color: "#1d4ed8",
    github: "https://github.com/your-username/project-one",
    live: "",
  },
  {
    title: "Project Two",
    category: "AI / Data",
    summary: "A tool, model or analysis that does something useful.",
    description:
      "Explain this project in two or three sentences, clear enough for a non-technical reader.",
    problem: "What problem does it solve?",
    features: ["Feature one", "Feature two", "Feature three"],
    learned: "Your main takeaway from building it.",
    tech: ["Python", "Pandas"],
    color: "#0f766e",
    github: "https://github.com/your-username/project-two",
    live: "",
  },
  {
    title: "Project Three",
    category: "App",
    summary: "An application or full-stack project.",
    description: "A short overview of the app and its audience.",
    problem: "The need or idea behind it.",
    features: ["Feature one", "Feature two", "Feature three"],
    learned: "What you learned along the way.",
    tech: ["React", "Node.js"],
    color: "#7c3aed",
    github: "https://github.com/your-username/project-three",
    live: "",
  },
];

const skills = [
  "Python", "SQL", "Machine Learning", "Data Analysis",
  "HTML & CSS", "JavaScript", "Git & GitHub", "Communication",
];

/* ==========================================================
   Site logic. You normally don't need to change anything below.
   ========================================================== */

const ICONS = {
  mail: '<path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.3.2 7.7 6.1 7.7-6.1H4.3Zm15.7 1.9-7.4 5.9a1 1 0 0 1-1.2 0L4 7.6v10.9c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V7.6Z"/>',
  linkedin: '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.700V21h-4V9.5Z"/>',
  instagram: '<path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.2-3.2a1.2 1.2 0 1 1 0 2.400 1.200 1.200 0 0 1 0-2.400Z"/>',
  github: '<path d="M12 2a10 10 0 0 0-3.2 19.500c.5.100.7-.2.7-.5v-1.800c-2.800.6-3.400-1.200-3.400-1.200-.5-1.200-1.100-1.500-1.100-1.500-.9-.6.100-.6.100-.6 1 .1 1.600 1 1.600 1 .9 1.600 2.400 1.100 3 .9.1-.7.400-1.100.7-1.400-2.200-.3-4.600-1.100-4.600-5 0-1.100.4-2 1-2.700-.1-.3-.4-1.300.1-2.700 0 0 .8-.3 2.700 1a9.300 9.300 0 0 1 5 0c1.900-1.300 2.700-1 2.700-1 .5 1.400.2 2.400.1 2.700.6.700 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .4.300.7.900.7 1.800V21c0 .3.200.6.700.5A10 10 0 0 0 12 2Z"/>',
};

function el(tag, cls, text) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
}
const $ = (id) => document.getElementById(id);

function socialLink(label, href, icon) {
  const a = el("a", "social");
  a.href = href;
  if (!href.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; }
  a.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[icon]}</svg>`;
  a.append(document.createTextNode(label));
  return a;
}
function fillSocials(container) {
  container.append(
    socialLink("Email", "mailto:" + profile.email, "mail"),
    socialLink("LinkedIn", profile.linkedin, "linkedin"),
    socialLink("Instagram", profile.instagram, "instagram"),
    socialLink("GitHub", profile.github, "github")
  );
}

/* Header / hero / about */
document.title = `${profile.name} | Portfolio`;
$("logo").textContent = profile.initials;
$("heroEyebrow").textContent = "Portfolio";
$("heroName").textContent = profile.name;
$("heroRole").textContent = profile.title;
$("heroTagline").textContent = profile.tagline;
$("footName").textContent = profile.name;
$("year").textContent = new Date().getFullYear();
fillSocials($("heroSocials"));
fillSocials($("contactSocials"));

const emailBtn = $("emailBtn");
emailBtn.href = "mailto:" + profile.email;
emailBtn.textContent = profile.email;

about.forEach((t) => $("aboutText").append(el("p", "", t)));
facts.forEach(([k, v]) => {
  const li = el("li");
  li.append(el("strong", "", k), el("span", "", v));
  $("facts").append(li);
});

stats.forEach(([n, label]) => {
  const d = el("div", "stat");
  d.append(el("b", "", n === "PROJECTS" ? String(projects.length) : n), el("span", "", label));
  $("stats").append(d);
});

/* Experience */
experience.forEach((j) => {
  const card = el("div", "job");
  const head = el("div", "job-head");
  const left = el("div");
  left.append(el("h3", "", j.role), el("div", "company", j.company));
  head.append(left, el("span", "period", j.period));
  card.append(head, el("p", "", j.summary));
  const ul = el("ul");
  j.points.forEach((p) => ul.append(el("li", "", p)));
  card.append(ul);
  $("timeline").append(card);
});

/* Projects */
const grid = $("projectGrid");
const modal = $("modal");
let lastFocused = null;
const initials = (t) => t.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

function renderProjects(filter = "All") {
  grid.innerHTML = "";
  projects
    .filter((p) => filter === "All" || p.category === filter)
    .forEach((p) => {
      const card = el("button", "card");
      card.type = "button";
      const thumb = el("div", "thumb", initials(p.title));
      thumb.style.background = `linear-gradient(135deg, ${p.color}, ${p.color}bb)`;
      const body = el("div", "body");
      body.append(el("h3", "", p.title), el("p", "", p.summary));
      const tags = el("div", "tags");
      p.tech.forEach((t) => tags.append(el("span", "tag", t)));
      body.append(tags, el("span", "more", "View details →"));
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
    $("filters").append(b);
  });
}

function openModal(p) {
  lastFocused = document.activeElement;
  const banner = $("mBanner");
  banner.textContent = initials(p.title);
  banner.style.background = `linear-gradient(135deg, ${p.color}, ${p.color}bb)`;
  $("mTitle").textContent = p.title;
  $("mDesc").textContent = p.description;
  $("mProblem").textContent = p.problem;
  $("mLearned").textContent = p.learned;

  $("mTags").innerHTML = "";
  p.tech.forEach((t) => $("mTags").append(el("span", "tag", t)));
  $("mFeatures").innerHTML = "";
  p.features.forEach((f) => $("mFeatures").append(el("li", "", f)));

  const links = $("mLinks");
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
  $("modalClose").focus();
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}
$("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

/* Skills */
skills.forEach((s) => $("skillChips").append(el("span", "chip", s)));

/* Theme toggle (remembers choice) */
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);
} catch (_) {}
$("themeToggle").addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (_) {}
});

renderFilters();
renderProjects();
