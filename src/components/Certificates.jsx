import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, FileCheck, Eye, X, AlertCircle } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [imageError, setImageError] = useState({});

  const handleImageError = (certId) => {
    setImageError((prev) => ({ ...prev, [certId]: true }));
  };

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Award size={14} />
            <span>Credentials & Training</span>
          </div>
          <h2 className="section-title">
            Certifications & <span className="text-gradient">Internships</span>
          </h2>
          <p className="section-subtitle">
            Verified professional qualifications and internship credentials in Python Full Stack Development and Web Engineering.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="certificate-card glass-card">
                <div className="cert-card-header">
                  <div className="cert-icon-container">
                    <FileCheck size={24} className="text-accent" />
                  </div>
                  <span className="cert-type-pill">{cert.type}</span>
                </div>

                <div className="cert-card-body">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-org-row">
                    <span className="cert-org-name">{cert.organization}</span>
                    {cert.location && <span className="cert-location">• {cert.location}</span>}
                  </div>

                  <div className="cert-date-badge">
                    <Calendar size={13} className="text-accent" />
                    <span>
                      <strong>{cert.dateLabel}:</strong> {cert.date}
                    </span>
                  </div>

                  <p className="cert-description">{cert.description}</p>

                  <div className="cert-skills-group">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="tag tag-accent">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="cert-card-actions">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="btn btn-primary btn-sm cert-view-btn"
                      title="View Certificate Document"
                    >
                      <Eye size={15} />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Recruiter Verification Banner */}
        <div className="certificates-verification-note glass-card">
          <div className="verification-note-left">
            <Award size={22} className="text-accent" />
            <div>
              <h4 className="verification-title">Official Documentation Verification</h4>
              <p className="verification-desc">
                Course completion certificates, internship completion letters, and training credentials can be presented upon request during Dubai technical interviews.
              </p>
            </div>
          </div>
          <span className="tag tag-accent">Verified Records</span>
        </div>
      </div>

      {/* Interactive Certificate Viewer Modal */}
      {selectedCert && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="modal-content cert-modal-content glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="tag tag-accent">{selectedCert.type}</span>
                <h3 id="cert-modal-title" className="modal-title">
                  {selectedCert.title}
                </h3>
                <p className="modal-subtitle">
                  {selectedCert.organization} • {selectedCert.location}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="modal-close-btn"
                aria-label="Close Certificate Modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body cert-modal-body">
              {/* Document Display Area */}
              <div className="cert-document-wrapper">
                {!imageError[selectedCert.id] ? (
                  <div className="cert-image-frame">
                    <img
                      src={`/certificates/${selectedCert.imageFileName}`}
                      alt={`${selectedCert.title} Certificate`}
                      className="cert-document-image"
                      onError={() => handleImageError(selectedCert.id)}
                    />
                  </div>
                ) : (
                  /* Elegant Fallback when user hasn't yet copied the image into public/certificates/ */
                  <div className="cert-placeholder-document">
                    <div className="cert-seal">
                      <Award size={48} className="text-accent" />
                    </div>
                    <div className="placeholder-cert-title">{selectedCert.title}</div>
                    <div className="placeholder-cert-org">{selectedCert.organization}</div>
                    <div className="placeholder-cert-date">
                      {selectedCert.dateLabel}: {selectedCert.date}
                    </div>

                    <div className="cert-upload-hint">
                      <AlertCircle size={16} className="text-accent inline-icon" />
                      <p>
                        <strong>Source Document Notice:</strong> To display the scanned certificate or internship letter image directly here, place your document file in{' '}
                        <code>public/certificates/{selectedCert.imageFileName}</code>.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Certificate Details */}
              <div className="cert-modal-details">
                <div className="modal-section">
                  <h4 className="modal-section-title">Credential Summary</h4>
                  <p className="modal-text">{selectedCert.description}</p>
                </div>

                <div className="modal-section">
                  <h4 className="modal-section-title">Verified Skills & Coverage</h4>
                  <div className="tech-chip-group">
                    {selectedCert.skills.map((s) => (
                      <span key={s} className="tech-chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                onClick={() => setSelectedCert(null)}
                className="btn btn-secondary btn-sm"
              >
                Close
              </button>
              {!imageError[selectedCert.id] && (
                <a
                  href={`/certificates/${selectedCert.imageFileName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <ExternalLink size={15} />
                  <span>Open Full Document</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
