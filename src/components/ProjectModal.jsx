import React from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { Github } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header */}
        <div className="modal-header">
          <div>
            <span className="tag tag-accent">{project.category}</span>
            <h3 id="modal-project-title" className="modal-title">{project.title}</h3>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close Project Details">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Overview */}
          <div className="modal-section">
            <h4 className="modal-section-title">Overview</h4>
            <p className="modal-text">{project.shortDescription}</p>
          </div>

          {/* Key Features */}
          <div className="modal-section">
            <h4 className="modal-section-title">Key Capabilities & Features</h4>
            <ul className="modal-feature-list">
              {project.features.map((feature, i) => (
                <li key={i} className="modal-feature-item">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Details */}
          {project.architecture && (
            <div className="modal-section">
              <h4 className="modal-section-title">Technical Architecture</h4>
              <div className="modal-arch-grid">
                {project.architecture.frontend && (
                  <div className="arch-item">
                    <span className="arch-label">Frontend</span>
                    <span className="arch-value">{project.architecture.frontend}</span>
                  </div>
                )}
                {project.architecture.backend && (
                  <div className="arch-item">
                    <span className="arch-label">Backend</span>
                    <span className="arch-value">{project.architecture.backend}</span>
                  </div>
                )}
                {project.architecture.database && (
                  <div className="arch-item">
                    <span className="arch-label">Database</span>
                    <span className="arch-value">{project.architecture.database}</span>
                  </div>
                )}
                {project.architecture.tool && (
                  <div className="arch-item">
                    <span className="arch-label">Analytics Tool</span>
                    <span className="arch-value">{project.architecture.tool}</span>
                  </div>
                )}
                {project.architecture.modeling && (
                  <div className="arch-item">
                    <span className="arch-label">Data Modeling</span>
                    <span className="arch-value">{project.architecture.modeling}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="modal-section">
            <h4 className="modal-section-title">Technology Stack</h4>
            <div className="tech-chip-group">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Link Notice */}
          <div className="link-status-notice">
            <AlertCircle size={16} className="text-accent" />
            <div>
              <p className="notice-title">Project Link Status:</p>
              <p className="notice-desc">
                {project.links.demoUrl
                  ? 'Live deployment is accessible.'
                  : `${project.links.demoStatus}. Source code & documentation can be inspected on Naresh's GitHub.`}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <Github size={16} />
            <span>GitHub Profile / Repo</span>
          </a>

          {project.links.demoUrl ? (
            <a
              href={project.links.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <ExternalLink size={16} />
              <span>Visit Live App</span>
            </a>
          ) : (
            <button
              onClick={() => alert(`Live link status: ${project.links.demoStatus}. You can contact Naresh directly for an interactive demo or code walkthrough.`)}
              className="btn btn-outline btn-sm demo-placeholder-btn"
            >
              <ExternalLink size={16} />
              <span>Live Demo [Pending URL]</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
