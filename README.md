# Naresh R. — Python Full Stack Developer Portfolio

A modern, high-performance, responsive portfolio website built with **React**, **Vite**, and **JavaScript**, specifically tailored for junior developer roles in **Dubai, UAE**.

---

## 🚀 Live Demo & Deployment

- **Tech Stack**: React 19, Vite 8, Lucide React, Custom CSS Design System
- **Theme**: Dark charcoal background with crisp white typography and subtle electric blue accent (`#38bdf8`)
- **Target Market**: Junior Python Full Stack Developer positions across Dubai & UAE

---

## 📂 Project Structure

```text
naresh-portfolio/
├── public/
│   ├── favicon.svg             # Custom NR monogram SVG favicon
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky header, active section tracking, mobile drawer
│   │   ├── Hero.jsx            # Dubai availability badge, intro, 3 CTAs, interactive code card
│   │   ├── About.jsx           # Concise professional profile & Dubai recruiter notes
│   │   ├── Skills.jsx          # Filterable skills tabs: Frontend, Backend, Database, Tools
│   │   ├── Projects.jsx        # EventHub, QuizApp, HR Analytics, Online Food Delivery SQL
│   │   ├── ProjectModal.jsx    # Deep-dive architecture and features modal
│   │   ├── Experience.jsx      # Data Analytics Intern at Customer Centria Enterprise Solutions
│   │   ├── Education.jsx       # MCA (CGPA 8.0/10) and BCA (CGPA 7.4/10) credentials
│   │   ├── Certificates.jsx    # IDM Tech Park & Segalys internship credentials & modal
│   │   ├── Contact.jsx         # Contact channels, one-click copy email, validated message form
│   │   ├── ResumeModal.jsx     # In-app print/PDF resume preview and text download
│   │   ├── SocialIcons.jsx     # Clean, lightweight SVG brand icons (GitHub, LinkedIn)
│   │   └── Footer.jsx          # Smooth scroll to top, copyright, social links
│   ├── data/
│   │   └── portfolioData.js    # Centralized verified data & credentials
│   ├── App.jsx                 # App root orchestrator
│   ├── App.css                 # Section layouts, visual mockups, responsive design
│   ├── index.css               # Global theme variables, reset, buttons & scrollbar
│   └── main.jsx                # React DOM entry point
├── index.html                  # SEO meta tags, OpenGraph, Plus Jakarta Sans font
├── vercel.json                 # Vercel deployment & SPA rewrites configuration
└── package.json
```

---

## 🛠️ Running Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### 1. Navigate to Project
```bash
cd "C:\Users\yashi\.gemini\antigravity\scratch\naresh-portfolio"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```
Open [http://localhost:4173](http://localhost:4173) in your browser.

---

## 🌐 Deploying to Vercel

### Method A: Deploy via GitHub (Recommended)
1. Initialize git and push to your GitHub:
   ```bash
   git init
   git add .
   git commit -m "Update Naresh R. developer portfolio"
   git branch -M main
   git remote add origin https://github.com/NARESHRAJESH/naresh-portfolio.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com).
3. Click **"Add New Project"** and select your GitHub repository.
4. Keep the default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your portfolio will be live in under 1 minute with automatic HTTPS and CDN caching.

### Method B: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the interactive CLI prompts to deploy directly from your local terminal.

---

## 📝 Certificates & Project Updates

- **Certificate Images**: Copy your certificate image to `public/certificates/python-fullstack-idm.jpg` and your internship letter image to `public/certificates/web-developer-segalys.jpg`. They will immediately render in the interactive Certificate Viewer modal.
- **Projects Live Links**: When EventHub or QuizApp live URLs are deployed, add them directly to `projectsData[x].links.demoUrl` in [`src/data/portfolioData.js`](file:///C:/Users/yashi/.gemini/antigravity/scratch/naresh-portfolio/src/data/portfolioData.js).
