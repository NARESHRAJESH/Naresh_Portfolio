import { ArrowUp, Mail } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="portfolio-footer">
      <div className="container footer-container">
        {/* Top Footer Divider with Glow */}
        <div className="footer-top-divider" />

        <div className="footer-content-row">
          {/* Left Column: Brand & Status */}
          <div className="footer-brand-block">
            <div className="footer-brand">
              <span className="brand-badge">NR</span>
              <span className="brand-name">{personalInfo.name}</span>
            </div>
            <p className="footer-tagline">
              Python Full Stack Developer • Targeting Junior Opportunities in Dubai, UAE.
            </p>
            <div className="footer-status-pill">
              <span className="pulse-dot"></span>
              <span>Open to Work • Based in Dubai, UAE</span>
            </div>
          </div>

          {/* Center Links */}
          <div className="footer-nav-block">
            <h5 className="footer-block-title">Navigation</h5>
            <div className="footer-links-grid">
              <a href="#hero" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About Me</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#education" className="footer-link">Education</a>
              <a href="#certificates" className="footer-link">Certificates</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          {/* Right Socials & Scroll to Top */}
          <div className="footer-social-block">
            <h5 className="footer-block-title">Connect & Profiles</h5>
            <div className="footer-social-icons">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.links.email}`}
                className="social-icon-btn"
                aria-label="Direct Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn btn-sm btn-outline back-to-top-btn"
              title="Scroll smoothly back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {CURRENT_YEAR} {personalInfo.name}. Built with React & Vite. Styled for Dubai tech recruiters.
          </p>
          <p className="footer-built-note">
            Clean code • Semantic HTML5 • Responsive Design
          </p>
        </div>
      </div>
    </footer>
  );
}
