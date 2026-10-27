import React from 'react';
import { Building2, Calendar, CheckCircle2, TrendingUp } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Building2 size={14} />
            <span>Work History</span>
          </div>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">
            Corporate industry exposure building data analytics workflows, reporting pipelines, and enterprise software solutions.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-card glass-card">
              <div className="experience-top">
                <div className="experience-role-block">
                  <div className="role-icon-box">
                    <TrendingUp size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="role-title">{exp.role}</h3>
                    <h4 className="company-title">{exp.company}</h4>
                  </div>
                </div>

                <div className="experience-meta-tags">
                  <span className="exp-badge">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </span>
                  <span className="exp-type-badge">{exp.type}</span>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="experience-body">
                <h5 className="responsibilities-header">Core Contributions & Responsibilities:</h5>
                <ul className="experience-list">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="experience-item">
                      <CheckCircle2 size={16} className="text-accent" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Applied */}
                <div className="experience-skills-applied">
                  <span className="applied-label">Competencies Applied:</span>
                  <div className="applied-tags">
                    {exp.skillsApplied.map((skill) => (
                      <span key={skill} className="tag tag-accent">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
