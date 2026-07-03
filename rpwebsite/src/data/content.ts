// ============================================================================
//  EDIT THIS FILE ONLY — all website text lives here.
//  Replace every value marked  // TODO  with your real research details.
//  The whole site updates automatically when you change this file.
// ============================================================================

export const site = {
  projectId: "R26-IT-139", // TODO: your project / group ID
  title: "Smart Merchant Support Platform for Agency Banking and Procurement",
  subtitle:
    "A Digital Platform with Explainable Machine Learning for Rural Sri Lankan Micro-Merchants",
  degree: "BSc (Hons) in Information Technology",
  module: "IT4010 — Research Project",
  university: "Sri Lanka Institute of Information Technology (SLIIT)", // TODO: confirm
  year: "2026",
};

export const abstract = {
  heading: "Project Overview",
  paragraphs: [
    "Rural micro-merchants in Sri Lanka manage their businesses on paper and have limited access to formal banking or digital tools. This research presents a modular digital platform that combines everyday business management — sales, inventory, suppliers, procurement, and agency banking — with four explainable machine-learning components.",
    "Each machine-learning component is paired with SHAP-based explanations, so the platform not only produces a prediction but shows why. This makes the recommendations transparent and auditable for a non-technical merchant, forming the unifying research contribution of Explainable AI applied across four distinct decision problems.",
  ],
};

export const components = [
  {
    id: "C1",
    icon: "💳",
    title: "Credit Readiness",
    task: "Classification",
    desc: "Scores a merchant's readiness for a loan from their financial behaviour.",
    metric: "Test Accuracy 0.83 · ROC-AUC 0.91",
  },
  {
    id: "C2",
    icon: "📈",
    title: "Demand Forecast",
    task: "Regression",
    desc: "Predicts item demand to support proactive stock management.",
    metric: "R² 0.93 · MAE ~22",
  },
  {
    id: "C3",
    icon: "🛒",
    title: "Procurement Decision",
    task: "Classification",
    desc: "Advises whether to buy stock now or wait, from price signals.",
    metric: "Accuracy 0.74 · ROC-AUC 0.82",
  },
  {
    id: "C4",
    icon: "🛡️",
    title: "Banking Anomaly Detection",
    task: "Imbalanced classification",
    desc: "Flags suspicious agency-banking transactions.",
    metric: "ROC-AUC 0.91 · PR-AUC 0.52",
  },
];

export const scope = {
  intro:
    "The platform is built as three services — a mobile/web frontend, a Node backend, and a Python machine-learning service — that together deliver four explainable decision-support components for rural micro-merchants.",
  images: [
    { src: "/images/scope/research_gap.svg", caption: "Research Gap" },
    { src: "/images/scope/literature_survey.svg", caption: "Literature Survey" },
    { src: "/images/scope/methodology.svg", caption: "Methodology" },
    { src: "/images/scope/technologies_used.svg", caption: "Technologies Used" },
  ],
  objectives: [
    "Develop four explainable ML components for the core merchant decision points.",
    "Apply SHAP explainability uniformly across all components as the research novelty.",
    "Build an offline-capable platform suited to low-connectivity rural environments.",
    "Validate each model with rigorous evaluation and document data limitations honestly.",
  ],
};

export const milestones = [
  {
    phase: "Project Proposal",
    date: "2025", // TODO
    status: "done", // "done" | "current" | "upcoming"
    items: ["Problem identification", "Literature survey", "Research gap defined"],
  },
  {
    phase: "ML Pipeline Development",
    date: "2025", // TODO
    status: "done",
    items: [
      "Data collection & preparation (real + real-anchored)",
      "Four models built, validated, and SHAP-explained",
    ],
  },
  {
    phase: "System Implementation",
    date: "2026", // TODO
    status: "done",
    items: [
      "Node + Supabase backend",
      "Python ML microservice",
      "Web & mobile frontends",
    ],
  },
  {
    phase: "Evaluation & Thesis",
    date: "2026", // TODO
    status: "current",
    items: ["Model evaluation", "Final documentation", "Viva preparation"],
  },
];

export const downloads = [
  {
    title: "Project Proposal",
    desc: "Initial research proposal document.",
    href: "/downloads/proposal.pdf", // TODO: add the file
    available: false, // set true once the file exists
  },
  {
    title: "Final Thesis",
    desc: "Complete research thesis.",
    href: "/downloads/thesis.pdf",
    available: false,
  },
  {
    title: "Research Paper",
    desc: "Conference / journal paper.",
    href: "/downloads/paper.pdf",
    available: false,
  },
  {
    title: "Final Presentation",
    desc: "Viva presentation slides.",
    href: "/downloads/presentation.pdf",
    available: false,
  },
];

export const team = {
  supervisors: [
    {
      name: "Supervisor Name", // TODO
      role: "Supervisor",
      photo: "/images/supervisor.svg",
      affiliation: "Faculty of Computing, SLIIT", // TODO
    },
    {
      name: "Co-Supervisor Name", // TODO
      role: "Co-Supervisor",
      photo: "/images/cosupervisor.svg",
      affiliation: "Faculty of Computing, SLIIT", // TODO
    },
  ],
  members: [
    {
      name: "Member One", // TODO
      studentId: "ITxxxxxxxx", // TODO
      role: "Credit Readiness Component", // TODO
      photo: "/images/m1.svg",
      github: "https://github.com/MaheshaJayaruwani",
    },
    {
      name: "Member Two", // TODO
      studentId: "ITxxxxxxxx",
      role: "Demand Forecast Component",
      photo: "/images/m2.svg",
      github: "https://github.com/ParameeAponsu",
    },
    {
      name: "Member Three", // TODO
      studentId: "ITxxxxxxxx",
      role: "Procurement Component",
      photo: "/images/m3.svg",
      github: "https://github.com/Leshvi",
    },
    {
      name: "Member Four", // TODO
      studentId: "ITxxxxxxxx",
      role: "Agency Banking Component",
      photo: "/images/m4.svg",
      github: "https://github.com/sathirapramudith123",
    },
  ],
};

export const contact = {
  email: "group.email@example.com", // TODO
  university: "Sri Lanka Institute of Information Technology (SLIIT)", // TODO
  address: "New Kandy Road, Malabe, Sri Lanka", // TODO
  githubOrg: "https://github.com/", // TODO
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Scope", href: "/scope" },
  { label: "Milestones", href: "/milestones" },
  { label: "About Us", href: "/about" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" },
];