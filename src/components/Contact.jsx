import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check
} from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate sending & trigger mailto prefill option
    setSubmitted(true);

    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hello Naresh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.links.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Optionally give user option to launch mail client
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Let’s Connect in <span className="text-gradient">Dubai</span>
          </h2>
          <p className="section-subtitle">
            Looking for a motivated Junior Python Full Stack Developer for your Dubai team? Reach out via LinkedIn, GitHub, email, or send a message directly below.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Verified Channels */}
          <div className="contact-info-column">
            {/* Dubai Location Highlight */}
            <div className="contact-card glass-card location-card">
              <div className="contact-card-icon">
                <MapPin size={22} className="text-accent" />
              </div>
              <div className="contact-card-content">
                <span className="contact-sub">Based in</span>
                <h4 className="contact-title">Dubai, United Arab Emirates</h4>
                <p className="contact-text">
                  Open to work and available for in-person interviews in Dubai.
                </p>
              </div>
            </div>

            {/* LinkedIn Link Card */}
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card glass-card link-hover-card"
            >
              <div className="contact-card-icon">
                <Linkedin size={22} className="text-accent" />
              </div>
              <div className="contact-card-content">
                <span className="contact-sub">LinkedIn Profile</span>
                <h4 className="contact-title">linkedin.com/in/naresh-r-17b864250</h4>
                <p className="contact-text">Connect for junior developer roles & discussions.</p>
              </div>
            </a>

            {/* GitHub Link Card */}
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card glass-card link-hover-card"
            >
              <div className="contact-card-icon">
                <Github size={22} className="text-accent" />
              </div>
              <div className="contact-card-content">
                <span className="contact-sub">GitHub Repositories</span>
                <h4 className="contact-title">github.com/NARESHRAJESH</h4>
                <p className="contact-text">Review code repositories, commits, and project branches.</p>
              </div>
            </a>

            {/* Direct Email Card with Copy Feature */}
            <div className="contact-card glass-card email-box">
              <div className="contact-card-icon">
                <Mail size={22} className="text-accent" />
              </div>
              <div className="contact-card-content" style={{ width: '100%' }}>
                <div className="email-label-row">
                  <span className="contact-sub">Direct Email</span>
                </div>
                <h4 className="contact-title email-address">{personalInfo.links.email}</h4>
                <div className="email-actions-row">
                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-sm btn-secondary copy-btn"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                    <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                  </button>
                  <a
                    href={`mailto:${personalInfo.links.email}`}
                    className="btn btn-sm btn-outline"
                  >
                    <span>Launch Mail Client</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-column glass-card">
            <h3 className="form-heading">Send a Direct Message</h3>
            <p className="form-subheading">
              Have an opening in Dubai or want to schedule a technical chat? Leave a message below.
            </p>

            {submitted ? (
              <div className="form-success-box">
                <div className="success-icon-wrap">
                  <Check size={28} />
                </div>
                <h4 className="success-title">Message Prepared!</h4>
                <p className="success-desc">
                  Thank you! Your inquiry was recorded and your default email app was triggered with the formatted message.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Recruiter or Hiring Manager Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Work Email <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="recruiter@company.ae"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject / Role Opportunity <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Junior Python Full Stack Developer - Dubai"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`form-input ${errors.subject ? 'error' : ''}`}
                  />
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Details about the role, team, or interview availability..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <Send size={16} />
                  <span>Send Message to Naresh</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
