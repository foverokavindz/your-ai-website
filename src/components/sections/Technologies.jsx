import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Container from '../ui/Container';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const categories = [
  {
    label: 'AI & LLMs',
    desc: 'Large language models and AI frameworks',
    items: [
      { name: 'Llama 3.1', role: 'Open-source LLM by Meta' },
      { name: 'Gemma 3', role: 'LLM developed by Google' },
      { name: 'DeepInfra & Groq', role: 'LLM inference platforms' },
      { name: 'LangChain', role: 'Framework for building LLM applications' },
    ],
  },
  {
    label: 'Backend & Data',
    desc: 'Data processing, storage and APIs',
    items: [
      { name: 'Neo4j', role: 'Graph database for knowledge storage' },
      { name: 'Flask', role: 'Python-based REST API framework' },
      { name: 'Azure Blob', role: 'Cloud document storage service' },
      { name: 'MongoDB', role: 'NoSQL document database' },
    ],
  },
  {
    label: 'Frontend & Infra',
    desc: 'UI technologies and deployment',
    items: [
      { name: 'React.js', role: 'Component-based frontend framework' },
      { name: 'Tailwind CSS', role: 'Utility-first CSS library' },
      { name: 'Docker', role: 'Containerisation and packaging' },
      { name: 'Render', role: 'Cloud deployment platform' },
    ],
  },
];

const Technologies = () => (
  <Section id="technologies" className="tech-section">
    <Container>

      {/* meta */}
      <motion.div className="tech-meta" {...fadeUp(0)}>
        <span className="tech-eyebrow">Technologies</span>
        <span className="tech-meta-num">07</span>
      </motion.div>

      {/* headline */}
      <motion.h2 className="tech-headline" {...fadeUp(0.05)}>
        Technology Stack
      </motion.h2>

      {/* 3 separate tables */}
      <div className="tech-grid">
        {categories.map((cat, ci) => (
          <motion.div key={ci} className="tech-table" {...fadeUp(0.1 + ci * 0.07)}>

            {/* table header */}
            <div className="tech-thead">
              <p className="tech-cat-label">{cat.label}</p>
              <p className="tech-cat-desc">{cat.desc}</p>
            </div>

            {/* rows */}
            {cat.items.map((item, ri) => (
              <div key={ri} className="tech-row">
                <span className="tech-row-num">{String(ri + 1).padStart(2, '0')}</span>
                <div>
                  <p className="tech-name">{item.name}</p>
                  <p className="tech-role">{item.role}</p>
                </div>
              </div>
            ))}

          </motion.div>
        ))}
      </div>

    </Container>

    <style>{`
      .tech-section {
        background: #fff;
        padding: 6rem 0 5rem;
        border-top: 1px solid var(--clr-border);
      }

      .tech-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
      }
      .tech-eyebrow {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--clr-muted);
      }
      .tech-meta-num {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        color: var(--clr-border);
        letter-spacing: 0.1em;
      }

      .tech-headline {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 600;
        line-height: 1.08;
        letter-spacing: -0.035em;
        color: var(--clr-heading);
        max-width: 500px;
        margin-bottom: 3rem;
      }

      /* 3-col grid of tables */
      .tech-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
      }
      @media (max-width: 820px) {
        .tech-grid { grid-template-columns: 1fr; gap: 1rem; }
      }

      /* individual table */
      .tech-table {
        border: 1px solid var(--clr-border);
        border-radius: 10px;
        overflow: hidden;
        background: #fff;
      }

      /* table header */
      .tech-thead {
        background: var(--clr-off-white);
        border-bottom: 1px solid var(--clr-border);
        padding: 1rem 1.25rem;
      }
      .tech-cat-label {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--clr-heading);
        margin-bottom: 0.15rem;
        letter-spacing: -0.01em;
      }
      .tech-cat-desc {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.72rem;
        color: var(--clr-muted);
        line-height: 1.4;
      }

      /* data row */
      .tech-row {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 0.9rem 1.25rem;
        border-top: 1px solid var(--clr-border);
        transition: background 0.15s;
      }
      .tech-row:hover { background: var(--clr-off-white); }

      .tech-row-num {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.68rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        color: var(--clr-border);
        padding-top: 0.2rem;
        flex-shrink: 0;
        min-width: 1.5rem;
      }

      .tech-name {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.88rem;
        font-weight: 600;
        color: var(--clr-heading);
        margin-bottom: 0.15rem;
        letter-spacing: -0.01em;
      }
      .tech-role {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        color: var(--clr-muted);
        line-height: 1.4;
      }
    `}</style>
  </Section>
);

export default Technologies;
