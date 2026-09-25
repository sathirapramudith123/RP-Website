export const site = {
  projectId: "R26-IT-139", // TODO: Real research project ID
  title: "Explainable AI for SME Credit & Agency Banking Risk Management", // TODO: Real project title
  subtitle:
    "A machine learning research project combining credit readiness scoring, demand forecasting, procurement risk, and agency banking analytics — each explained with SHAP.", // TODO: Real subtitle
  module: "Research Project", // TODO: e.g. "IT4010 - Research Project"
  year: 2026, // TODO: Real year
  university: "SLIIT", // TODO: Real university/faculty name
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/scope", label: "Scope" },
  { href: "/milestones", label: "Milestones" },
  { href: "/about", label: "About" },
];

export const abstract = {
  heading: "Project Overview", // TODO: Real heading
  paragraphs: [
    "TODO: Replace with the first paragraph of your project abstract, describing the problem domain and motivation.",
    "TODO: Replace with the second paragraph, describing your proposed approach and expected contribution.",
  ],
};

export const components = [
  {
    id: "C1",
    icon: "💳",
    task: "Classification",
    title: "Credit Readiness Component",
    desc: "TODO: Short description of the credit readiness ML component.", // TODO
    metric: "TODO: e.g. Accuracy 92%",
  },
  {
    id: "C2",
    icon: "📈",
    task: "Forecasting",
    title: "Demand Forecast Component",
    desc: "TODO: Short description of the demand forecasting ML component.", // TODO
    metric: "TODO: e.g. MAPE 8%",
  },
  {
    id: "C3",
    icon: "📦",
    task: "Risk Analysis",
    title: "Procurement Component",
    desc: "TODO: Short description of the procurement risk ML component.", // TODO
    metric: "TODO: e.g. F1 0.89",
  },
  {
    id: "C4",
    icon: "🏦",
    task: "Classification",
    title: "Agency Banking Component",
    desc: "TODO: Short description of the agency banking ML component.", // TODO
    metric: "TODO: e.g. Accuracy 90%",
  },
];

export const scope = {
  intro:
    "TODO: One or two sentences introducing the research scope and approach.", // TODO
  objectives: [
    "TODO: Objective 1 — e.g. Develop an explainable credit readiness scoring model.",
    "TODO: Objective 2 — e.g. Build a demand forecasting model for SME inventory planning.",
    "TODO: Objective 3 — e.g. Design a procurement risk assessment component.",
    "TODO: Objective 4 — e.g. Implement an agency banking risk classification model.",
  ],
  images: [
    { src: "/images/scope/literature_survey.svg", caption: "Literature Survey" }, // TODO: add file to public/images/scope/
    { src: "/images/scope/research_gap.svg", caption: "Research Gap" }, // TODO: add file to public/images/scope/
    { src: "/images/scope/technologies_used.svg", caption: "Technologies Used" }, // TODO: add file to public/images/scope/
    { src: "/images/scope/methodology.svg", caption: "Methodology" }, // TODO: add file to public/images/scope/
  ],
};

export const milestones = [
  {
    phase: "Proposal",
    date: "TODO: e.g. Jan 2026", // TODO
    status: "done",
    items: [
      "TODO: e.g. Topic selection and approval",
      "TODO: e.g. Proposal document submitted",
    ],
  },
  {
    phase: "Research & Design",
    date: "TODO: e.g. Mar 2026", // TODO
    status: "current",
    items: [
      "TODO: e.g. Literature survey completed",
      "TODO: e.g. System architecture designed",
    ],
  },
  {
    phase: "Implementation",
    date: "TODO: e.g. Jun 2026", // TODO
    status: "upcoming",
    items: [
      "TODO: e.g. Model development for all four components",
      "TODO: e.g. Integration and testing",
    ],
  },
  {
    phase: "Final Evaluation",
    date: "TODO: e.g. Sep 2026", // TODO
    status: "upcoming",
    items: [
      "TODO: e.g. Final report submission",
      "TODO: e.g. Viva / presentation",
    ],
  },
];

export const downloads = [
  {
    title: "Research Proposal",
    desc: "Initial project proposal document.", // TODO
    href: "/downloads/proposal.pdf",
    available: false,
  },
  {
    title: "Progress Report",
    desc: "Mid-project progress report.", // TODO
    href: "/downloads/progress-report.pdf",
    available: false,
  },
  {
    title: "Final Report",
    desc: "Final thesis / research report.", // TODO
    href: "/downloads/final-report.pdf",
    available: false,
  },
];

export const contact = {
  email: "team@example.com", // TODO: Real email
  university: "SLIIT", // TODO: Real university/faculty
  address: "Malabe, Sri Lanka", // TODO: Real address
  githubOrg: "https://github.com/", // TODO: Real GitHub org/repo link
};

export const team = {
  supervisors: [
    {
      name: "Dr. Shanta Rajapaksha Yapa", 
      role: "Supervisor",
      photo: "/images/supervisor.png", 
      university: "Sri Lanka Institute of Information Technology",
      faculty: "Faculty of Business", // TODO
      department: "Department of Information Management", 
      email: "shanta.y@sliit.lk", 
      linkType: "scholar", 
      link: "https://scholar.google.com/citations?user=hX9X2RYAAAAJ&hl=en", 
    },
    {
      name: "Ms. Suwani Hettiarachchi",
      role: "Co-Supervisor",
      photo: "/images/cosupervisor.png", 
      university: "Sri Lanka Institute of Information Technology", 
      faculty: "Faculty of Business", 
      department: "Computer Systems Engineering",
      email: "suwani.h@sliit.lk", 
      linkType: "scholar",
      link: "https://scholar.google.com/citations?user=udSXe-MAAAAJ&hl=en", 
    },
  ],
  members: [
    {
      name: "Aponsu G.M.P.S", 
      studentId: "IT22266682",
      role: "Group Member",
      componentRole: "Demand Forecast Component",
      description:
        "TODO: One or two sentences on what this component does and this member's contribution.",
      tags: ["Forecasting", "Time Series", "TODO Tag"], 
      photo: "/images/m2.png", 
      university: "Sri Lanka Institute of Information Technology", 
      faculty: "Faculty of Computing",  
      email: "parameeaponsu@icloud.com", 
      linkType: "linkedin",
      link: "https://www.linkedin.com/in/paramee-aponsu-61b43836a/", 
    },
    {
      name: "PRAMUDITH K G S", 
      studentId: "IT22152978",
      role: "Group Member",
      componentRole: "Inventory and Supplier Management Component",
      description:
        "TODO: One or two sentences on what this component does and this member's contribution.", 
      tags: ["Risk Analysis", "TODO Tag"], 
      photo: "/images/m3.png", 
      university: "Sri Lanka Institute of Information Technology",
      faculty: "Faculty of Computing",  
      email: "sathirapramudith1@gmail.com", 
      linkType: "linkedin",
      link: "https://www.linkedin.com/in/sathira-pramudith-805284318/", 
    },
    {
      name: "Ruwani P A M J", 
      studentId: "IT22268730",
      role: "Group Member",
      componentRole: "Smart Procurement &  decision Support Component",
      description:
        "TODO: One or two sentences on what this component does and this member's contribution.", 
      tags: ["Classification", "SHAP", "TODO Tag"], 
      photo: "/images/m1.png", 
      university: "Sri Lanka Institute of Information Technology", 
      faculty: "Faculty of Computing", 
      email: "maheshajayaruwani@gmail.com", 
      linkType: "linkedin",
      link: "https://www.linkedin.com/in/mahesha-jayaruwani-0507a4362/", 
    },
    {
      name: "Karunaweera L.M", 
      studentId: "IT22050212",
      role: "Group Leader",
      componentRole: "Simulated Agency Banking Component",
      description:
        "TODO: One or two sentences on what this component does and this member's contribution.", 
      tags: ["Classification", "TODO Tag"], 
      photo: "/images/m4.png", 
      university: "Sri Lanka Institute of Information Technology", 
      faculty: "Faculty of Computing", 
      email: "lakshithakarunaweera@gmail.com", 
      linkType: "linkedin",
      link: "https://www.linkedin.com/in/lakshithakarunaweera/", 
    },
  ],
};