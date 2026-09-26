# 🎓 Research Project Website

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-Website-black?style=for-the-badge&logo=next.js">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Developed-blue?style=for-the-badge&logo=typescript">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss">
  <img alt="React" src="https://img.shields.io/badge/React-UI-61DAFB?style=for-the-badge&logo=react">
  <img alt="Research" src="https://img.shields.io/badge/Research-Final%20Year%20Project-purple?style=for-the-badge">
</p>

<p align="center">
  <b>Research Project Website</b><br>
  Academic Research Project Presentation & Information Platform
</p>

---

## ✨ About This Website

This website is the official **Research Project Website** developed to present and communicate the research project in a clear, modern, and professional format.

The website provides a centralized platform for presenting the research background, project scope, objectives, milestones, project-related resources, team information, and contact details.

It is designed for **lecturers, supervisors, evaluators, students, and other visitors** who need to understand the research project and its progress.

The website acts as the public-facing presentation layer of the research project and provides easy access to important project information and resources.

---

## 🎯 Project Overview

The **Research Project Website** is a modern academic web application developed using **Next.js, React, TypeScript, and Tailwind CSS**.

The main purpose of the system is to provide an organized and visually engaging platform for presenting the research project and its development progress.

The website brings together important research information including:

* Research project background
* Research scope
* Project objectives
* Project milestones
* Research-related downloads
* Team member information
* Contact information
* Project updates and resources

The application follows a component-based architecture to maintain a clean, reusable, and scalable codebase.

---

## 🔍 What the Website Showcases

The website presents the research project through several dedicated sections and pages.

### 🏠 Home

The Home page provides an introduction to the research project and acts as the main entry point for visitors.

It highlights:

* Project introduction
* Research overview
* Key information
* Visual presentation
* Navigation to important sections

---

### 🎯 Research Scope

The Scope page explains the research domain and the boundaries of the project.

It presents information such as:

* Research background
* Problem area
* Research objectives
* Project scope
* Key areas covered by the research
* Research direction

---

### 📅 Project Milestones

The Milestones page presents the academic and development progress of the research project.

It can be used to showcase:

* Project phases
* Assessment milestones
* Research activities
* Development progress
* Important project dates
* Academic progress

This provides evaluators and supervisors with a clear overview of the project's development journey.

---

### 📥 Downloads

The Downloads page provides access to important project-related resources and documents.

These may include:

* Research documents
* Reports
* Project resources
* Supporting materials
* Academic documents
* Other downloadable files

The page provides a centralized location for visitors to access project resources.

---

### 👥 About

The About page provides information about the research team and the people involved in the project.

It can include:

* Team members
* Student IDs
* Student roles
* Contact information
* Supervisor information
* Research project details

---

### 📧 Contact

The Contact page provides project-related contact information and allows visitors to find the appropriate communication channels for the research team.

It is designed to make communication regarding the research project simple and accessible.

---

## 🧩 Main Website Components

The project uses reusable React components to maintain consistency throughout the application.

### 🧭 Navigation Bar

The `Navbar` component provides the main navigation system for moving between different pages of the research website.

### 🦶 Footer

The `Footer` component provides common footer information and navigation elements across the website.

### 🎨 Hero Illustration

The `HeroIllustration` component provides the main visual element used within the website's hero section.

### 📑 Section Header

The `SectionHeader` component provides a consistent heading and introduction style for different sections of the website.

### 📐 Layout

The `Layout` component helps maintain a consistent page structure and shared UI elements throughout the application.

---

## 📄 Main Website Pages

The project currently includes the following pages:

| Page       | Route         | Description                           |
| ---------- | ------------- | ------------------------------------- |
| Home       | `/`           | Research project introduction         |
| Scope      | `/scope`      | Research background and project scope |
| Milestones | `/milestones` | Project progress and milestones       |
| Downloads  | `/downloads`  | Project documents and resources       |
| About      | `/about`      | Team and supervisor information       |
| Contact    | `/contact`    | Project contact information           |

---

## 🏗️ Project Structure

```text
RP-Website/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── downloads/
│   │   ├── milestones/
│   │   ├── scope/
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   │
│   └── data/
│       └── content.ts
│
├── package.json
├── next.config.ts
└── README.md
```

---

## 🛠️ Built With

The website is developed using the following technologies:

### Frontend

* **Next.js** – React framework for building the web application
* **React** – Component-based user interface development
* **TypeScript** – Type-safe application development
* **Tailwind CSS** – Utility-first CSS framework
* **CSS** – Custom styling and responsive design

### Development Tools

* **Node.js**
* **npm**
* **Visual Studio Code**
* **ESLint**
* **Git & GitHub**

---

## ⚙️ Application Architecture

The project follows the modern **Next.js App Router** structure.

```text
src/
│
├── app/
│   ├── Page Routes
│   ├── Global Layout
│   └── Global Styles
│
├── components/
│   └── Reusable UI Components
│
├── data/
│   └── Website Content
│
└── utils/
    └── Utility Functions
```

This structure separates pages, reusable components, content, and utility functions to improve maintainability and organization.

---

## 🎨 Website Design

The website is designed with an emphasis on:

* Modern academic presentation
* Clean user interface
* Responsive design
* Consistent visual hierarchy
* Easy navigation
* Reusable components
* Professional research presentation

The design is intended to provide a clear experience for both technical and non-technical visitors.

---

## 📱 Responsive Design

The website is designed to provide a responsive experience across different screen sizes, including:

* 💻 Desktop
* 🖥️ Laptop
* 📱 Mobile
* 📟 Tablet

The interface adapts its layout and components according to the available screen size.

---

## 🚀 Getting Started

### Prerequisites

Make sure the following software is installed:

* Node.js
* npm
* Git

You can verify the installations using:

```bash
node -v
npm -v
git --version
```

---

### 📥 Clone the Repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Navigate to the project directory:

```bash
cd RP-Website
```

Then navigate to the Next.js application:

```bash
cd rpwebsite
```

---

### 📦 Install Dependencies

Run:

```bash
npm install
```

This installs all required project dependencies.

---

### ▶️ Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:3000
```

Open the URL in your browser to view the research project website.

---

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

After a successful build, start the production server using:

```bash
npm start
```

---

## 🧹 Code Quality

The project uses ESLint to help maintain code quality and consistency.

Run:

```bash
npm run lint
```

This checks the project source code for common issues and coding problems.

---

## 📌 Purpose of This Repository

This repository contains the source code for the **Research Project Website**.

It is used to:

* Present the research project professionally
* Maintain research-related website content
* Showcase project scope and objectives
* Track and present project milestones
* Provide access to research documents
* Present team and supervisor information
* Provide project contact information
* Support academic evaluations and presentations

---

## 🎓 Academic Context

This website has been developed as part of a **Final Year Research Project**.

It serves as the digital presentation platform for the research project and supports the communication of research activities, project progress, documentation, and team information.

---

## 👥 Research Team

**Research Project Group**
**Sri Lanka Institute of Information Technology (SLIIT)**
**Final Year Research Project**

The website includes a dedicated **About** section containing information about the research team, student roles, and supervisor details.

---

## 📚 Project Resources

The website provides dedicated sections for project resources, including:

* Research documentation
* Project reports
* Presentation materials
* Project milestones
* Research scope
* Team information
* Contact details

These resources help provide a complete overview of the research project.

---

## 🔮 Future Improvements

Potential future improvements include:

* Online research progress tracking
* Dynamic document management
* Research news and updates
* Interactive research visualizations
* Enhanced accessibility
* Improved mobile experience
* Online presentation integration
* Dynamic content management
* Research analytics dashboard

---

## ⭐ Summary

The **Research Project Website** is a modern academic web application designed to present a final-year research project in a clear, organized, and professional manner.

Built using **Next.js, React, TypeScript, and Tailwind CSS**, the website provides dedicated sections for the research scope, project milestones, downloadable resources, team information, and contact details.

It serves as the central online presentation platform for the research project and helps communicate the project's **research direction, progress, resources, and team** to supervisors, evaluators, lecturers, students, and other visitors.

---

## 📄 License

This project is developed for **academic and educational purposes** as part of a final-year research project at SLIIT.
