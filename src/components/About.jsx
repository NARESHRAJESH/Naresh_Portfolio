import React from 'react';
import { Code2, Database, BarChart3, Globe, Download, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Hi, I'm <span className="text-gradient">Naresh</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="about-grid">
          {/* Main Narrative Card */}
          <div className="about-narrative glass-card">
            <h3 className="about-heading">{personalInfo.about.lead}</h3>
            
            <div className="about-text-content">
              {personalInfo.about.paragraphs.map((para, index) => (
                <p key={index} className="about-paragraph">
                  {para}
                </p>
              ))}
            </div>

            {/* Core Values / Competencies */}
            <div className="about-competencies">
              <div className="competency-item">
                <span className="competency-check">
                  <CheckCircle2 size={16} />
                </span>
                <div>
                  <h4>Clean Code & Structure</h4>
                  <p>Adhering to modular React principles and Django architectural conventions.</p>
                </div>
              </div>

              <div className="competency-item">
                <span className="competency-check">
                  <CheckCircle2 size={16} />
                </span>
                <div>
                  <h4>Relational Data Integrity</h4>
                  <p>Designing normalized MySQL schemas, query optimization, and solid constraints.</p>
                </div>
              </div>

              <div className="competency-item">
                <span className="competency-check">
                  <CheckCircle2 size={16} />
                </span>
                <div>
                  <h4>Analytical & Business Mindset</h4>
                  <p>Translating business objectives into clear API contracts and interactive dashboards.</p>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="about-actions">
              <button onClick={onOpenResume} className="btn btn-primary">
                <Download size={16} />
                <span>View Full Resume</span>
              </button>
              <a href="#skills" className="btn btn-outline">
                <span>View Skillset</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Highlights & Dubai Readiness Pillars */}
          <div className="about-pillars">
            {personalInfo.about.highlights.map((item, idx) => (
              <div key={idx} className="pillar-card glass-card">
                <div className="pillar-badge">
                  {idx === 0 && <Code2 size={20} className="text-accent" />}
                  {idx === 1 && <Database size={20} className="text-accent" />}
                  {idx === 2 && <BarChart3 size={20} className="text-accent" />}
                  {idx === 3 && <Globe size={20} className="text-accent" />}
                </div>
                <div className="pillar-details">
                  <h4 className="pillar-title">{item.title}</h4>
                  <p className="pillar-desc">{item.description}</p>
                </div>
              </div>
            ))}

            {/* Dubai Recruiter Note */}
            <div className="dubai-recruiter-box">
              <div className="recruiter-box-header">
                <Globe size={18} className="text-accent" />
                <span className="recruiter-box-title">Note for Recruiters:</span>
              </div>
              <p className="recruiter-box-text">
                I'm based in Dubai and actively applying for junior developer roles. I've completed my BCA (CGPA 7.4/10) and MCA (CGPA 8.0/10), and my academic records are available for verification on request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
