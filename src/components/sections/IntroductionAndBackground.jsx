import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../ui/Section';
import Container from '../ui/Container';

/* ─────── data ─────── */
const challenges = [
  'Understand domain-specific terminology',
  'Provide context-aware answers',
  'Support natural language querying',
];

const keyFeatures = [
  'Web-based document management portal',
  'LLMs integration for context-aware responses',
  'Structured knowledge base from historical documents',
  'Domain-specific glossary for accurate terminology',
  'User-friendly interface',
  'Systems future needs (Scalability and adaptability)',
];

/* ─────── animation helpers ─────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

/* ─────── sub-components ─────── */
const Divider = () => (
  <div className="ib-divider" />
);

const Row = ({ label, sublabel, children, delay = 0 }) => (
  <motion.div className="ib-row" {...fadeUp(delay)}>
    <div className="ib-label-col">
      <p className="ib-label">{label}</p>
      {sublabel && <p className="ib-sublabel">{sublabel}</p>}
    </div>
    <div className="ib-content-col">{children}</div>
  </motion.div>
);

/* ─────── main component ─────── */
const IntroductionAndBackground = () => (
  <Section id="introduction" className="ib-section">
    <Container>
      {/* page eyebrow */}
      <motion.p className="ib-eyebrow" {...fadeUp(0)}>
        Introduction &amp; Background
      </motion.p>

      {/* hero headline */}
      <motion.h2 className="ib-headline" {...fadeUp(0.05)}>
        Graph RAG System &amp; Domain&#8209;Specific Glossary
      </motion.h2>

      <Divider />

      {/* row 1 – overview */}
      <Row
        label="Overview"
        sublabel="Institutional knowledge at scale"
        delay={0.1}
      >
        <p className="ib-body">
          Long-standing organisations such as regulatory agencies, healthcare
          institutions, and legal bodies rely on large collections of historical
          and operational documents. These documents encode institutional
          knowledge accumulated over years in the form of policies, protocols,
          and regulations.
        </p>
        <p className="ib-body" style={{ marginTop: '1rem' }}>
          Accessing critical information from these archives typically relies on
          manual search, keyword matching, or expert knowledge.
        </p>
      </Row>

      <Divider />

      {/* row 2 – challenges */}
      <Row
        label="Challenges"
        sublabel="Traditional retrieval limitations"
        delay={0.15}
      >
        <p className="ib-body ib-body--muted">
          Traditional document retrieval systems struggle to:
        </p>
        <ul className="ib-list">
          {challenges.map((c, i) => (
            <li key={i} className="ib-list-item">
              <span className="ib-bullet" />
              {c}
            </li>
          ))}
        </ul>
      </Row>

      <Divider />

      {/* row 3 – proposed framework */}
      <Row
        label="Proposed Framework"
        sublabel="Intelligent, reliable, explainable"
        delay={0.2}
      >
        <p className="ib-body">
          An intelligent, reliable, and explainable system that enables users to
          query structured, domain-specific documents using natural language
          while preserving institutional knowledge.
        </p>
        <p className="ib-body" style={{ marginTop: '1rem' }}>
          To support accurate, context-aware question answering, semantic
          interpretation of domain terminology must be integrated into retrieval
          and generation workflows.
        </p>
      </Row>

      <Divider />

      {/* row 4 – key features */}
      <Row
        label="Key Features"
        sublabel="Core system capabilities"
        delay={0.25}
      >
        <ul className="ib-feature-grid">
          {keyFeatures.map((f, i) => (
            <motion.li
              key={i}
              className="ib-feature-item"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.07 }}
            >
              <span className="ib-feature-dot" />
              {f}
            </motion.li>
          ))}
        </ul>
      </Row>

      <Divider />
    </Container>

    {/* scoped styles */}
    <style>{`
      /* ── layout ── */
      .ib-section {
        background: #F7F5F2;   /* warm paper tone — not pure white */
        padding: 6rem 0 5rem;
      }

      .ib-eyebrow {
        font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--clr-muted);
        margin-bottom: 1.5rem;
      }

      .ib-headline {
        font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 600;
        line-height: 1.1;
        letter-spacing: -0.03em;
        color: var(--clr-heading);
        max-width: 680px;
        margin-bottom: 3rem;
      }

      /* ── divider ── */
      .ib-divider {
        height: 1px;
        background: var(--clr-border);
        margin: 0 0 2.5rem;
      }

      /* ── two-column row ── */
      .ib-row {
        display: grid;
        grid-template-columns: 220px 1fr;
        gap: 2rem 4rem;
        margin-bottom: 2.5rem;
      }

      @media (max-width: 700px) {
        .ib-row { grid-template-columns: 1fr; gap: 0.75rem; }
      }

      /* ── label column ── */
      .ib-label-col {
        padding-top: 0.15rem;
      }

      .ib-label {
        font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: -0.01em;
        color: var(--clr-heading);
        margin-bottom: 0.3rem;
      }

      .ib-sublabel {
        font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
        font-size: 0.78rem;
        font-weight: 400;
        color: var(--clr-muted);
        line-height: 1.4;
      }

      /* ── content column ── */
      .ib-body {
        font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
        font-size: 0.98rem;
        line-height: 1.75;
        color: var(--clr-body);
        margin: 0;
      }

      .ib-body--muted { color: var(--clr-muted); }

      /* ── bullet list ── */
      .ib-list {
        list-style: none;
        margin: 0.75rem 0 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
      }

      .ib-list-item {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
        font-size: 0.95rem;
        color: var(--clr-body);
        line-height: 1.5;
      }

      .ib-bullet {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--clr-heading);
        flex-shrink: 0;
      }

      /* ── feature grid ── */
      .ib-feature-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.65rem 2rem;
      }

      @media (max-width: 520px) {
        .ib-feature-grid { grid-template-columns: 1fr; }
      }

      .ib-feature-item {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        font-family: 'Inter', 'DM Sans', system-ui, sans-serif;
        font-size: 0.9rem;
        color: var(--clr-body);
        line-height: 1.5;
        background: var(--clr-white);
        border: 1px solid var(--clr-border);
        border-radius: 8px;
        padding: 0.55rem 0.85rem;
        transition: border-color 0.2s, box-shadow 0.2s;
      }

      .ib-feature-item:hover {
        border-color: var(--clr-heading);
        box-shadow: 0 2px 8px var(--clr-accent-glow);
      }

      .ib-feature-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--clr-heading);
        flex-shrink: 0;
      }

      /* ── mobile responsive ── */
      @media (max-width: 640px) {
        .ib-section { padding: 3.5rem 0 3rem; }
        .ib-headline { margin-bottom: 2rem; }
        .ib-divider { margin: 0 0 1.5rem; }
        .ib-row { margin-bottom: 1.5rem; }
      }
    `}</style>
  </Section>
);

export default IntroductionAndBackground;
