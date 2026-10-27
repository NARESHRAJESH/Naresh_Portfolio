import React, { useState } from 'react';
import { Cpu, Layout, Server, Database, Wrench, Check } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const CATEGORY_ICONS = {
  Frontend: <Layout size={20} className="text-accent" />,
  Backend: <Server size={20} className="text-accent" />,
  Database: <Database size={20} className="text-accent" />,
  Tools: <Wrench size={20} className="text-accent" />
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skillsData.map((c) => c.category)];

  const filteredCategories =
    activeTab === 'All'
      ? skillsData
      : skillsData.filter((item) => item.category === activeTab);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Core technical competencies grouped across full-stack development, database architecture, and engineering tools.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-tabs" role="tablist" aria-label="Skills Category Filter">
          {categories.map((cat) => {
            const isSelected = activeTab === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveTab(cat)}
                className={`skills-tab-btn ${isSelected ? 'active' : ''}`}
              >
                {cat !== 'All' && <span className="tab-icon">{CATEGORY_ICONS[cat]}</span>}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="skills-grid">
          {filteredCategories.map((group) => (
            <div key={group.category} className="skill-category-card glass-card">
              <div className="category-header">
                <div className="category-title-wrap">
                  <span className="category-icon-box">{CATEGORY_ICONS[group.category]}</span>
                  <div>
                    <h3 className="category-name">{group.category}</h3>
                    <p className="category-tagline">{group.tagline}</p>
                  </div>
                </div>
                <span className="category-count">{group.skills.length} skills</span>
              </div>

              <div className="skills-pill-list">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-item-pill">
                    <div className="skill-item-top">
                      <span className="skill-check">
                        <Check size={14} />
                      </span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level-badge">{skill.level}</span>
                    </div>
                    {skill.note && <p className="skill-note">{skill.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Philosophy Banner */}
        <div className="skills-banner glass-card">
          <div className="banner-content">
            <h4 className="banner-title">Full-Stack Integration Focus</h4>
            <p className="banner-text">
              Strong emphasis on clean architecture: connecting Django REST API backends with performant React interfaces, backed by normalized, properly indexed MySQL relational models.
            </p>
          </div>
          <div className="banner-tags">
            <span className="tag tag-accent">REST API Contracts</span>
            <span className="tag tag-accent">CRUD Workflows</span>
            <span className="tag tag-accent">Relational Integrity</span>
            <span className="tag tag-accent">Component Reusability</span>
          </div>
        </div>
      </div>
    </section>
  );
}
