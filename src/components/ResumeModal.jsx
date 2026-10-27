import React from 'react';
import { X, Printer, Download, FileText, MapPin, Mail } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo, skillsData, projectsData, experienceData, educationData, certificatesData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const resumeText = `
NARESH R.
Python Full Stack Developer
Targeting Junior Developer Roles in Dubai, UAE
GitHub: ${personalInfo.links.github}
LinkedIn: ${personalInfo.links.linkedin}
Email: ${personalInfo.links.email}

SUMMARY
${personalInfo.shortIntro}

EXPERIENCE
Data Analytics Intern
Customer Centria Enterprise Solutions Pvt. Ltd. (September 2025 – March 2026)
- Analyzed business datasets to extract trends and insights for enterprise decision making.
- Collaborated with engineering teams to clean and prepare data pipelines.
- Formulated SQL queries and supported dashboard development.

EDUCATION
Master of Computer Applications (MCA) | CGPA: 8.0/10
KGiSL Institute of Information Management, Coimbatore (2024 – 2026)

Bachelor of Computer Applications (BCA) | CGPA: 7.4/10
Sri Krishna Adithya College of Arts and Science, Coimbatore (2021 – 2024)

CERTIFICATIONS & INTERNSHIPS
- Python Full Stack Developer — IDM Tech Park, Coimbatore (15 September 2026)
- Web Developer Internship — Segalys (2 May 2026 to 31 August 2026)

TECHNICAL SKILLS
- Frontend: React.js, JavaScript (ES6+), HTML5, CSS3
- Backend: Python, Django, Django REST Framework, RESTful APIs
- Database: MySQL, Relational Database Design, SQL Queries
- Tools: Git, GitHub, Power BI, VS Code, Postman

KEY PROJECTS
1. EventHub: Full-Stack event booking & browsing platform built with React, Django, DRF, and MySQL. Features role-based access.
2. QuizApp: Interactive timed quiz application with React, JavaScript, timer countdown, full CRUD operations, and Local Storage.
3. HR Analytics Dashboard: Power BI dashboard analyzing workforce demographics, attrition rates, and retention KPIs.
4. Online Food Delivery SQL Project: MySQL relational schema design with complex joins and multi-table business analytics queries.
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Naresh_R_Python_Full_Stack_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-backdrop resume-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-title">
      <div className="resume-modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Top Control Bar */}
        <div className="resume-control-bar">
          <div className="resume-control-title">
            <FileText size={18} className="text-accent" />
            <span id="resume-title">Naresh R. — Official Resume Profile</span>
          </div>

          <div className="resume-action-btns">
            <button onClick={handlePrint} className="btn btn-sm btn-secondary" title="Print or Save as PDF">
              <Printer size={15} />
              <span>Print / PDF</span>
            </button>
            <button onClick={handleDownload} className="btn btn-sm btn-primary" title="Download Resume Document">
              <Download size={15} />
              <span>Download Text</span>
            </button>
            <button onClick={onClose} className="modal-close-btn" aria-label="Close Resume">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="resume-sheet" id="printable-resume">
          {/* Header */}
          <div className="resume-sheet-header">
            <div className="resume-name-block">
              <h1 className="resume-candidate-name">{personalInfo.name}</h1>
              <h2 className="resume-candidate-role">{personalInfo.role}</h2>
              <p className="resume-candidate-target">
                <MapPin size={14} className="inline-icon" /> Dubai, UAE (Open to Work)
              </p>
            </div>

            <div className="resume-contact-block">
              <div className="resume-contact-line">
                <Github size={13} />
                <a href={personalInfo.links.github} target="_blank" rel="noreferrer">
                  github.com/NARESHRAJESH
                </a>
              </div>
              <div className="resume-contact-line">
                <Linkedin size={13} />
                <a href={personalInfo.links.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/naresh-r-17b864250
                </a>
              </div>
              <div className="resume-contact-line">
                <Mail size={13} />
                <span>{personalInfo.links.email}</span>
              </div>
            </div>
          </div>

          <hr className="resume-divider" />

          {/* Professional Summary */}
          <div className="resume-section">
            <h3 className="resume-sec-title">PROFESSIONAL SUMMARY</h3>
            <p className="resume-summary-text">{personalInfo.shortIntro}</p>
          </div>

          {/* Experience */}
          <div className="resume-section">
            <h3 className="resume-sec-title">PROFESSIONAL EXPERIENCE</h3>
            {experienceData.map((exp, i) => (
              <div key={i} className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <strong className="resume-item-role">{exp.role}</strong> —{' '}
                    <span className="resume-item-company">{exp.company}</span>
                  </div>
                  <span className="resume-item-period">{exp.period}</span>
                </div>
                <ul className="resume-bullet-list">
                  {exp.responsibilities.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="resume-section">
            <h3 className="resume-sec-title">EDUCATION</h3>
            {educationData.map((edu, i) => (
              <div key={i} className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <strong className="resume-item-role">{edu.degree}</strong>
                    {edu.grade && <span className="resume-grade"> — {edu.grade}</span>}
                  </div>
                  <span className="resume-item-period">{edu.period}</span>
                </div>
                <div className="resume-item-company">{edu.institution}, {edu.location}</div>
              </div>
            ))}
          </div>

          {/* Certifications & Internships */}
          <div className="resume-section">
            <h3 className="resume-sec-title">CERTIFICATIONS & TRAINING</h3>
            {certificatesData.map((cert) => (
              <div key={cert.id} className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <strong className="resume-item-role">{cert.title}</strong> —{' '}
                    <span className="resume-item-company">{cert.organization}</span>
                  </div>
                  <span className="resume-item-period">{cert.date}</span>
                </div>
                <p className="resume-proj-desc">{cert.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h3 className="resume-sec-title">TECHNICAL SKILLS</h3>
            <div className="resume-skills-list">
              {skillsData.map((group) => (
                <div key={group.category} className="resume-skill-row">
                  <strong className="resume-skill-cat">{group.category}:</strong>{' '}
                  <span>{group.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="resume-section">
            <h3 className="resume-sec-title">PROJECTS</h3>
            {projectsData.map((proj) => (
              <div key={proj.id} className="resume-item">
                <div className="resume-item-header">
                  <div>
                    <strong className="resume-item-role">{proj.title}</strong> —{' '}
                    <span className="resume-proj-tech">({proj.techStack.join(', ')})</span>
                  </div>
                </div>
                <p className="resume-proj-desc">{proj.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
