import React, { useState } from 'react';
import {
  Briefcase,
  ExternalLink,
  Clock,
  Eye
} from 'lucide-react';
import { Github } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const renderVisualMockup = (project) => {
    switch (project.id) {
      case 'eventhub':
        return (
          <div className="project-preview-mockup eventhub-mockup">
            <div className="mockup-header">
              <span className="mockup-tag">EventHub Platform</span>
              <span className="mockup-badge">Role: Organizer & Attendee</span>
            </div>
            <div className="mockup-body">
              <div className="event-card-preview">
                <div className="event-date-box">
                  <span className="event-month">NOV</span>
                  <span className="event-day">15</span>
                </div>
                <div className="event-info">
                  <div className="event-name">Dubai Tech Summit 2026</div>
                  <div className="event-sub">Bookings Active • React + DRF Backend</div>
                </div>
                <span className="mockup-pill-green">Confirmed</span>
              </div>
              <div className="mockup-status-row">
                <span>MySQL Schema: 3NF Normalized</span>
                <span className="text-accent">API: /api/v1/events/book/</span>
              </div>
            </div>
          </div>
        );

      case 'quizapp':
        return (
          <div className="project-preview-mockup quizapp-mockup">
            <div className="mockup-header">
              <span className="mockup-tag">Interactive QuizApp</span>
              <span className="mockup-timer">
                <Clock size={12} /> Timer: 00:42s
              </span>
            </div>
            <div className="mockup-body">
              <div className="quiz-question-box">
                <span className="quiz-q-num">Question 4 of 10</span>
                <p className="quiz-question-text">How does React handle state persistence across re-renders?</p>
                <div className="quiz-options-grid">
                  <div className="quiz-option selected">useState & Local Storage ✓</div>
                  <div className="quiz-option">Direct DOM mutations</div>
                </div>
              </div>
              <div className="mockup-status-row">
                <span>CRUD Engine: Active</span>
                <span className="text-accent">Storage: LocalStorage Sync</span>
              </div>
            </div>
          </div>
        );

      case 'hr-analytics':
        return (
          <div className="project-preview-mockup hr-mockup">
            <div className="mockup-header">
              <span className="mockup-tag">Power BI Workforce Analytics</span>
              <span className="mockup-badge-amber">DAX Measures Active</span>
            </div>
            <div className="mockup-body">
              <div className="hr-kpi-grid">
                <div className="hr-kpi-card">
                  <span className="kpi-label">Headcount</span>
                  <span className="kpi-value">1,420</span>
                </div>
                <div className="hr-kpi-card">
                  <span className="kpi-label">Attrition Rate</span>
                  <span className="kpi-value text-accent">11.8%</span>
                </div>
                <div className="hr-kpi-card">
                  <span className="kpi-label">Avg Satisfaction</span>
                  <span className="kpi-value">4.2 / 5</span>
                </div>
              </div>
              <div className="mockup-status-row">
                <span>Data Model: Star Schema</span>
                <span className="text-accent">Cross-Filtering Enabled</span>
              </div>
            </div>
          </div>
        );

      case 'food-delivery-sql':
        return (
          <div className="project-preview-mockup sql-mockup">
            <div className="mockup-header">
              <span className="mockup-tag">MySQL Relational Engine</span>
              <span className="mockup-badge-emerald">SQL Workbench</span>
            </div>
            <div className="mockup-body">
              <div className="sql-code-snippet">
                <code>
                  <span className="sql-keyword">SELECT</span> r.name, COUNT(o.id), SUM(o.total)<br />
                  <span className="sql-keyword">FROM</span> restaurants r<br />
                  <span className="sql-keyword">JOIN</span> orders o ON r.id = o.restaurant_id<br />
                  <span className="sql-keyword">GROUP BY</span> r.name HAVING SUM(o.total) &gt; 5000;
                </code>
              </div>
              <div className="mockup-status-row">
                <span>ER Entities: 6 Normalized Tables</span>
                <span className="text-accent">Query Time: 12ms (Indexed)</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Key <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software projects showcasing full-stack development, reactive frontends, business intelligence, and relational SQL engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card glass-card">
              {/* Visual Preview Header */}
              <div className="project-visual-container">
                {renderVisualMockup(project)}
                <div className="project-category-overlay">
                  <span className="tag tag-accent">{project.category}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-content">
                <div className="project-title-row">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <p className="project-subtitle-text">{project.subtitle}</p>
                <p className="project-description">{project.shortDescription}</p>

                {/* Feature Highlights */}
                <ul className="project-highlights">
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="highlight-item">
                      <span className="highlight-bullet">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Chips */}
                <div className="project-tech-tags">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Working Links & Actions */}
                <div className="project-actions">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-secondary btn-sm"
                    title="Inspect Architecture & Features"
                  >
                    <Eye size={15} />
                    <span>Details</span>
                  </button>

                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    title="View GitHub Profile / Repository"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>

                  {project.links.demoUrl ? (
                    <a
                      href={project.links.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      title="Open Live Deployment"
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="placeholder-status-btn"
                      title="Link status details"
                    >
                      <span>Live Link Pending</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Callout Banner */}
        <div className="projects-github-cta glass-card">
          <div className="cta-left">
            <Github size={24} className="text-accent" />
            <div>
              <h4 className="cta-heading">Looking for additional repositories & code samples?</h4>
              <p className="cta-sub">
                Explore all full-stack repositories, database schema scripts, and ongoing developments on Naresh's GitHub profile.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/NARESHRAJESH"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>Visit GitHub (@NARESHRAJESH)</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
