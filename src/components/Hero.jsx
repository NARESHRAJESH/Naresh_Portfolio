import React from 'react';
import { ArrowRight, Download, Send, MapPin, CheckCircle, Layers } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Intro & Call To Actions */}
        <div className="hero-content">
          {/* Availability Pill */}
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span className="hero-badge-text">
              Targeting Junior Developer Roles in <strong>Dubai, UAE</strong>
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Hi, I’m <span className="text-gradient">{personalInfo.name}</span>
            <br />
            <span className="hero-role-title">{personalInfo.role}</span>
          </h1>

          {/* Introduction paragraph */}
          <p className="hero-description">
            Building responsive web apps and scalable backends with{' '}
            <strong className="text-highlight">Python</strong>,{' '}
            <strong className="text-highlight">Django</strong>,{' '}
            <strong className="text-highlight">React</strong>, and{' '}
            <strong className="text-highlight">MySQL</strong>. Ready to deliver immediate impact for engineering teams across Dubai and the UAE.
          </p>

          {/* The 3 Required CTAs */}
          <div className="hero-cta-group">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="btn btn-primary"
            >
              <span>View Projects</span>
              <ArrowRight size={17} />
            </a>

            <button
              onClick={onOpenResume}
              className="btn btn-secondary"
              title="Download Naresh's Resume"
            >
              <Download size={17} />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="btn btn-outline"
            >
              <Send size={16} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick Credibility Stats */}
          <div className="hero-meta-grid">
            <div className="hero-meta-item">
              <span className="meta-icon">
                <MapPin size={16} className="text-accent" />
              </span>
              <div>
                <span className="meta-label">Location</span>
                <span className="meta-value">Dubai, UAE (Open to Work)</span>
              </div>
            </div>

            <div className="hero-meta-item">
              <span className="meta-icon">
                <Layers size={16} className="text-accent" />
              </span>
              <div>
                <span className="meta-label">Core Tech Stack</span>
                <span className="meta-value">Python • Django • React • MySQL</span>
              </div>
            </div>

            <div className="hero-meta-item">
              <span className="meta-icon">
                <CheckCircle size={16} className="text-accent" />
              </span>
              <div>
                <span className="meta-label">Education</span>
                <span className="meta-value">{personalInfo.educationSummary}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Developer Showcase Card */}
        <div className="hero-visual">
          <div className="developer-card glass-card">
            {/* Terminal Card Header */}
            <div className="card-topbar">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">naresh_fullstack.py</span>
              <span className="status-badge">Active</span>
            </div>

            {/* Terminal Body */}
            <div className="card-body">
              <div className="code-block">
                <p className="code-line">
                  <span className="code-keyword">class</span>{' '}
                  <span className="code-class">FullStackDeveloper</span>:
                </p>
                <p className="code-line indent-1">
                  <span className="code-keyword">def</span>{' '}
                  <span className="code-func">__init__</span>(self):
                </p>
                <p className="code-line indent-2">
                  self.name = <span className="code-string">"{personalInfo.name}"</span>
                </p>
                <p className="code-line indent-2">
                  self.role = <span className="code-string">"{personalInfo.role}"</span>
                </p>
                <p className="code-line indent-2">
                  self.location = <span className="code-string">"{personalInfo.targetLocation}"</span>
                </p>
                <p className="code-line indent-2">
                  self.core_stack = [
                </p>
                <p className="code-line indent-3">
                  <span className="code-string">"Python"</span>,{' '}
                  <span className="code-string">"Django"</span>,{' '}
                  <span className="code-string">"React"</span>,{' '}
                  <span className="code-string">"MySQL"</span>
                </p>
                <p className="code-line indent-2">]</p>
                <p className="code-line indent-1">
                  <span className="code-keyword">def</span>{' '}
                  <span className="code-func">status</span>(self):
                </p>
                <p className="code-line indent-2">
                  <span className="code-keyword">return</span>{' '}
                  <span className="code-string">"Ready for Junior Developer Opportunities in Dubai"</span>
                </p>
              </div>

              {/* Verified Links & Quick Badges */}
              <div className="card-footer-badges">
                <div className="quick-tags">
                  <span className="tag tag-accent">REST APIs</span>
                  <span className="tag">DRF</span>
                  <span className="tag">State Management</span>
                  <span className="tag">Relational DB</span>
                </div>

                <div className="social-quick-links">
                  <a
                    href={personalInfo.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="GitHub Profile"
                    title="View GitHub Profile"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={personalInfo.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="LinkedIn Profile"
                    title="Connect on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Glow Effect */}
            <div className="card-ambient-glow" />
          </div>
        </div>
      </div>
    </section>
  );
}
