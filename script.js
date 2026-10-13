/* ==========================================================
   EDIT THIS SECTION ONLY: your details, experience, projects.
   Everything on the page is generated from this data.
   ========================================================== */

const profile = {
  name: "Amey Samarth",
  initials: "AS",
  title: "Data Analyst | Data Science Enthusiast",
  location: "Nagpur, India",
  tagline: "Turning raw data into clear insights, useful dashboards, and data-driven decisions through analytics and machine learning.",
  email: "ameysamarth87@gmail.com",
  linkedin: "https://www.linkedin.com/in/amey-samarth-9b70b6321",
  instagram: "https://www.instagram.com/ameysamarth_/?hl=en",
  github: "https://github.com/AMEYASAMARTH04",
};

const about = [
  "I am a Data Analyst with hands-on experience in data cleaning, exploratory data analysis, feature engineering, predictive modeling, and interactive dashboard development.",
  "During my Data Analyst internship at Fireblaze Technologies, I worked on data validation and preparation, explored multi-source datasets, built Power BI dashboards, and supported ETL and reporting workflows.",
  "I enjoy combining SQL, Python, Excel, Power BI, and machine learning to make complex information easier to understand and act on.",
];

const facts = [
  ["Location", profile.location],
  ["Education", "B.Tech, AI & Data Science"],
  ["Focus", "Analytics & Data Science"],
  ["Currently", "Open to opportunities"],
];

const stats = [
  ["6 mo", "Data Analyst internship"],
  ["3", "Featured projects"],
  ["10+", "Dashboard KPIs (internship)"],
];

const experience = [
  {
    role: "Data Analyst Intern",
    company: "Fireblaze Technologies",
    period: "Apr 2025 – Sep 2025",
    summary: "Supported data preparation, analysis, dashboard development, and reporting workflows.",
    points: [
      "Cleaned and validated 50,000+ records using Python (Pandas) and Power Query.",
      "Designed Power BI dashboards tracking 10+ KPIs across sales, operations, and finance.",
      "Built Python ETL workflows and performed exploratory analysis to identify trends, patterns, and anomalies.",
    ],
  },
];

const projects = [
  {
    title: "Supply Chain Analysis",
    category: "Data Analytics",
    summary: "Explore supply-chain performance, delivery outcomes, sales, and operational trends.",
    description: "A data analysis project focused on exploring supply-chain data and translating operational records into business-relevant insights.",
    problem: "Supply-chain datasets can hide patterns in sales, profit, shipping performance, and order fulfillment that are difficult to see in raw tables.",
    features: ["Data cleaning and exploratory analysis", "Analysis of sales, profit, and shipping or delivery patterns", "Visual summaries to support operational decisions"],
    learned: "Structuring exploratory analysis around business questions and communicating findings clearly.",
    tech: ["Python", "Pandas", "EDA", "Data Visualization"],
    color: "#1d4ed8",
    github: "https://github.com/AMEYASAMARTH04/Supply-chain-Analysis",
    live: "",
  },
  {
    title: "Period Symptom & Date Prediction",
    category: "Machine Learning",
    summary: "Predict cycle timing and classify likely symptoms using historical cycle features.",
    description: "A predictive analytics project using historical cycle records, engineered features, and machine-learning models to estimate the next period date and classify symptom categories.",
    problem: "Tracking cycle history and symptoms manually can make it harder to identify patterns and estimate upcoming dates.",
    features: ["Feature engineering from historical cycle and symptom data", "Regression for next-cycle timing and multi-class symptom classification", "Power BI dashboard for predictions and symptom likelihood"],
    learned: "Building an end-to-end predictive workflow, comparing models, and communicating predictions with appropriate uncertainty.",
    tech: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Power BI"],
    color: "#0f766e",
    github: "https://github.com/AMEYASAMARTH04/Period-Symptom-and-Date-Prediction",
    live: "",
  },
  {
    title: "Bike Sales Prediction & Analysis",
    category: "Data Analytics",
    summary: "Analyze bike sales patterns and explore predictive modeling for sales-related outcomes.",
    description: "A project combining bike-sales analysis with prediction-oriented work to explore patterns in the data and communicate findings through analysis and visualization.",
    problem: "Sales data becomes more useful when it is cleaned, explored, and summarized into trends that can inform business decisions.",
    features: ["Exploratory analysis of bike-sales data", "Data preparation and feature exploration", "Prediction-focused analysis and visual communication"],
    learned: "Connecting data preparation and exploratory analysis with predictive thinking and clear presentation of results.",
    tech: ["Python", "Data Analysis", "Machine Learning", "Visualization"],
    color: "#7c3aed",
    github: "https://github.com/AMEYASAMARTH04/Bike-sales-prediction-and-analysis",
    live: "",
  },
];

const skills = [
  "SQL", "Python", "MS Excel", "Power BI", "Data Modeling", "Machine Learning",
  "Regression", "Classification", "Databricks", "AWS", "ETL / ELT",
  "Pipeline Orchestration", "Reporting", "Exploratory Data Analysis", "Feature Engineering",
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
