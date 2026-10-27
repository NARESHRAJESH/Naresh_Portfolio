import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal computer applications degrees with a verified record in computer science fundamentals and software engineering.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="education-grid">
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card glass-card">
              <div className="education-card-header">
                <div className="edu-icon-container">
                  <GraduationCap size={22} className="text-accent" />
                </div>
                <div className="edu-period-badge">
                  <Calendar size={13} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="education-card-body">
                <h3 className="degree-title">{edu.degree}</h3>
                <h4 className="institution-title">{edu.institution}</h4>
                <div className="location-info">
                  <MapPin size={14} className="text-muted" />
                  <span>{edu.location}</span>
                </div>

                {edu.grade && (
                  <div className="grade-badge">
                    <Award size={14} className="text-accent" />
                    <span>Academic Score: <strong>{edu.grade}</strong></span>
                  </div>
                )}

                <ul className="edu-highlights">
                  {edu.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="edu-highlight-item">
                      <CheckCircle2 size={15} className="text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Degree Verification / Document Attestation Callout */}
        <div className="education-attestation-notice glass-card">
          <div className="notice-left">
            <Award size={22} className="text-accent" />
            <div>
              <h4 className="notice-heading">Degree Verification</h4>
              <p className="notice-sub">
                Original degree certificates, transcripts, and mark sheets are available for verification and attestation whenever an employer needs them.
              </p>
            </div>
          </div>
          <span className="tag tag-accent">Verification Ready</span>
        </div>
      </div>
    </section>
  );
}
