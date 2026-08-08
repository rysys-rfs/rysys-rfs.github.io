# Ryne Shelton — Engineering Portfolio & Interactive CV

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A modern, high-performance portfolio website and interactive CV for **Ryne Shelton**, Electrical & Computer Engineer (4.0 GPA). Featuring an interactive PDF resume viewer, engineering project highlights (PGE grid automation, USGS geospatial ML pipelines, Intel post-silicon validation), and an embedded ambient lo-fi music player.

---

## 🚀 Quick Start & Development

### Prerequisites

- **Node.js**: `v18.x` or higher
- **Package Manager**: `npm` (or `bun` / `yarn`)

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/rysys-rfs/rysys-rfs.github.io.git
cd rysys-rfs.github.io
npm install
```

### 2. Run Local Development Server

Start the local Vite development server:

```bash
npm run dev
```

The application will launch at:
```text
http://localhost:3000
```

---

## 📦 Production Build & Deployment

### 1. Create Production Build

Compile and bundle static assets into the `dist` directory:

```bash
npm run build
```

### 2. Preview Production Build Locally

To test the built production bundle locally:

```bash
npm run preview
```

### 3. Deploying to GitHub Pages

#### Option A: Automatic via GitHub Actions (Recommended)
This repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml`.

1. Push your repository to GitHub (`main` or `master` branch).
2. On GitHub, navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Every push to `main` will automatically build and publish your portfolio site.

#### Option B: Manual CLI Deployment
You can also deploy directly from your local terminal using the `gh-pages` script:

```bash
npm run deploy
```

This automatically runs `npm run build` and publishes the static `dist/` directory to your `gh-pages` branch.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: React 18 + TypeScript
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Assets & Documents**: Embedded PDF Resume Viewer, custom audio synthesizer & lo-fi playlist stream, official organization badges (IEEE, CAT, MECOP, OSGC)

---

## 📁 Repository Structure

```text
├── public/
│   ├── rShelton_Resume_August2026.pdf   # Official PDF Resume
│   ├── self.png                           # Profile watercolor portrait
│   ├── ieee.png, cat.jpeg, mecop.jpg      # Affiliation badges
│   └── osgc.png                           # Oregon NASA Space Grant badge
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                     # Header navigation bar
│   │   ├── Hero.tsx                       # Hero section with 4.0 GPA metrics & profile
│   │   ├── About.tsx                      # Summary & background overview
│   │   ├── Projects.tsx                   # PGE, USGS, Intel & Datalogic engineering projects
│   │   ├── ResumeViewer.tsx               # PDF viewer & formatted text mode
│   │   ├── MusicPlayer.tsx                # ChillHop ambient player & stream playlist
│   │   ├── Skills.tsx                     # ECE core competencies & tools
│   │   ├── Experience.tsx                 # Work history timeline (Intel, Hitachi, PSU, Datalogic)
│   │   ├── Contact.tsx                    # Contact card & social links
│   │   └── Footer.tsx                     # Footer navigation
│   ├── App.tsx                            # Main layout component
│   └── main.tsx                           # Application entry point
├── package.json                           # Dependencies and script definitions
├── vite.config.ts                         # Vite configuration
└── README.md                              # Documentation
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.
