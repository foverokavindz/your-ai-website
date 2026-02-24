import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Container from '../ui/Container';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const objectives = [
  {
    topic: 'Design a Knowledge Graph-Based RAG System',
    subtitle: 'Core architecture',
    description:
      'Develop an intelligent system using LLMs, knowledge graphs, and domain glossaries to manage and retrieve information from historical documents and support informed decision-making.',
  },
  {
    topic: 'Build Web-Based Document Portal',
    subtitle: 'Document management',
    description:
      'Create a secure platform for uploading, viewing, validating, and deleting historical records by authorized users — with centralised repository, versioning, and user permissions.',
  },
  {
    topic: 'Integrate Domain-Specific Glossary',
    subtitle: 'Terminology awareness',
    description:
      'Embed a user-maintained glossary with fuzzy semantic alignment into the KG-RAG pipeline to resolve ambiguous terminology, abbreviations, and evolving definitions in institutional documents.',
  },
  {
    topic: 'Enable Natural Language Interaction',
    subtitle: 'User experience',
    description:
      'Provide a user-friendly interface that allows users to ask questions naturally and receive accurate, domain-aware, contextually relevant responses based on institutional knowledge.',
  },
];

const outcomes = [
  'Knowledge Graph-based RAG for context retrieval',
  'LLMs integration for context-aware responses',
  'Domain-specific glossary for accurate terminology',
  'Web-based document management portal',
];

const Objectives = () => (
  <Section id="objectives" className="obj-section">
    <Container>

      {/* ── meta row ── */}
      <motion.div className="obj-meta" {...fadeUp(0)}>
        <span className="obj-eyebrow">Objectives &amp; Outcomes</span>
        <span className="obj-meta-num">05</span>
      </motion.div>

      {/* ── headline ── */}
      <motion.h2 className="obj-headline" {...fadeUp(0.05)}>
        Research Objectives &amp; Expected Outcomes
      </motion.h2>

      {/* ── main two-column layout ── */}
      <div className="obj-layout">

        {/* Left: sticky label column */}
        <motion.div className="obj-left" {...fadeUp(0.05)}>
          <p className="obj-left-title">Main Objective</p>
          <p className="obj-left-sub">

            What our research aims to achieve
          </p>
        </motion.div>

        {/* Right: rows — each with topic + description */}


        <motion.div className="obj-row-description " {...fadeUp(0.08)}>

          <p className="obj-desc">Build a knowledge Graph-based Retrieval-Augmented Generation (RAG) system with an externally managed domain-specific glossary to enhance organisations’ ability to manage, retrieve and utilise historical documents.
          </p>

          <p className="obj-desc">Support effective decision-making by delivering accurate and contextually relevant information based on institutional records and domain knowledge

          </p>
        </motion.div>


      </div>

      {/* ── main two-column layout ── */}
      <div className="obj-layout">

        {/* Left: sticky label column */}
        <motion.div className="obj-left" {...fadeUp(0.05)}>
          <p className="obj-left-title">Main Outcomes</p>
          <p className="obj-left-sub">
            Core goals and technical milestones
          </p>
        </motion.div>

        {/* Right: rows — each with topic + description */}
        <div className="obj-rows">
          {objectives.map((item, i) => (
            <motion.div key={i} className="obj-row" {...fadeUp(0.08 + i * 0.06)}>
              <div className="obj-row-left">
                <p className="obj-topic">{item.topic}</p>
                <p className="obj-subtitle">{item.subtitle}</p>
              </div>
              <p className="obj-desc">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>



    </Container>

    <style>{`
      .obj-section {
        background: #fff;
        padding: 6rem 0 5rem;
        border-top: 1px solid var(--clr-border);
      }

      /* meta row */
      .obj-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3.5rem;
      }
      .obj-eyebrow {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--clr-muted);
      }
      .obj-meta-num {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        color: var(--clr-border);
        letter-spacing: 0.1em;
      }

      /* headline */
      .obj-headline {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 600;
        line-height: 1.08;
        letter-spacing: -0.035em;
        color: var(--clr-heading);
        max-width: 700px;
        margin-bottom: 3.5rem;
      }

      /* ── two-col layout ── */
      .obj-layout {
        display: grid;
        grid-template-columns: 240px 1fr;
        gap: 0 5rem;
        margin-bottom: 3.5rem;
      }
      @media (max-width: 760px) {
        .obj-layout { grid-template-columns: 1fr; gap: 2rem; }
      }

      /* left sticky column */
      .obj-left {
        padding-top: 1.5rem;
      }
      .obj-left-title {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--clr-heading);
        margin-bottom: 0.5rem;
      }
      .obj-left-sub {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.82rem;
        line-height: 1.6;
        color: var(--clr-muted);
      }

      .obj-row-description {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem 3rem;
        border-top: 1px solid var(--clr-border);
        padding: 1.75rem 0;
        align-items: start;
      }

      /* rows on the right */
      .obj-rows {
        display: flex;
        flex-direction: column;
      }

      .obj-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem 3rem;
        border-top: 1px solid var(--clr-border);
        padding: 1.75rem 0;
        align-items: start;
      }
      .obj-row:last-child {
        border-bottom: 1px solid var(--clr-border);
      }
      @media (max-width: 600px) {
        .obj-row { grid-template-columns: 1fr; }
      }

      .obj-row-left { padding-top: 0.1rem; }

      .obj-topic {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 1.25rem;
        font-weight: 600;
        letter-spacing: -0.02em;
        color: var(--clr-heading);
        line-height: 1.3;
        margin-bottom: 0.3rem;
      }
      .obj-subtitle {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.78rem;
        font-weight: 400;
        color: var(--clr-muted);
        line-height: 1.4;
      }

      .obj-desc {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.88rem;
        line-height: 1.75;
        color: var(--clr-body);
        margin: 0;
      }

      /* ── outcomes strip ── */
      .obj-outcomes {
        border-top: 1px solid var(--clr-border);
        padding-top: 2.25rem;
      }
      .obj-outcomes-label {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--clr-muted);
        margin-bottom: 1.25rem;
      }
      .obj-outcomes-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.75rem 2rem;
      }
      @media (max-width: 760px) {
        .obj-outcomes-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 480px) {
        .obj-outcomes-grid { grid-template-columns: 1fr; }
      }
      .obj-outcome-item {
        display: flex;
        align-items: flex-start;
        gap: 0.6rem;
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.85rem;
        color: var(--clr-body);
        line-height: 1.55;
      }
      .obj-outcome-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--clr-heading);
        flex-shrink: 0;
        margin-top: 0.45rem;
      }
    `}</style>
  </Section>
);

export default Objectives;
