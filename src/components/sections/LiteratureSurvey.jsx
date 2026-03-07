import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Container from '../ui/Container';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const existingRags = [
  { tag: 'RAG models', text: 'Reduces hallucinations through retrieval grounding.' },
  { tag: 'KG-RAG systems', text: 'GraphRAG, AutoRAG, AutoKG — enhances structured reasoning and graph-based retrieval.' },
  { tag: 'Hybrid vector-graph', text: 'Improves recall and multi-hop reasoning.' },
];

const keyFindings = [
  { stat: '12%', label: 'improvement in context relevance', note: 'Hybrid RAG' },
  { stat: '30%', label: 'boost in diagnostic retrievals', note: 'Healthcare RAG' },
  { stat: '60%', label: 'reduction in manual graph annotation', note: 'AutoKG' },
  { stat: '40%', label: 'faster deployment', note: 'AutoRAG' },
];

const LiteratureSurvey = () => (
  <Section id="literature-survey" className="ls-section">
    <Container>

      {/* ── meta row ── */}
      <motion.div className="ls-meta" {...fadeUp(0)}>
        <span className="ls-eyebrow">Literature Survey</span>
        <span className="ls-meta-num">03</span>
      </motion.div>

      {/* ── headline ── */}
      <motion.h2 className="ls-headline" {...fadeUp(0.05)}>
        Knowledge Graph&#8209;based RAG for<br />Domain&#8209;Specific Information Extraction
      </motion.h2>

      {/* ── intro paragraphs ── */}
      <motion.div className="ls-intro" {...fadeUp(0.1)}>
        <p className="ls-body">
          Knowledge Graph-based Retrieval-Augmented Generation (RAG) has emerged as a
          cutting-edge solution for extracting meaningful, context-rich information from
          large volumes of unstructured legal, technical, and operational documents.
        </p>
        <p className="ls-body">
          Traditional keyword-based retrieval systems often fail with domain-specific terms
          or complex sentence structures. Recent advancements — including hybrid RAG models
          like <strong>VectorRAG</strong> and <strong>GraphRAG</strong>, along with
          automation tools like <strong>AutoRAG</strong> and <strong>AutoKG</strong> —
          significantly boost precision, adaptability, and ease of deployment.
        </p>
      </motion.div>

      {/* ── three-column grid ── */}
      <div className="ls-grid">

        {/* col 1 – existing RAGs */}
        <motion.div className="ls-card" {...fadeUp(0.12)}>
          <p className="ls-card-title">Literature Studies — Existing RAGs</p>
          <ul className="ls-tag-list">
            {existingRags.map((item, i) => (
              <li key={i} className="ls-tag-item">
                <span className="ls-tag">{item.tag}</span>
                <span className="ls-tag-text">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* col 2 – identified gap */}
        <motion.div className="ls-card ls-card--gap" {...fadeUp(0.17)}>
          <p className="ls-card-title">Identified Gap</p>
          <p className="ls-gap-text">
            Existing approaches assume general-purpose terminology and lack a dynamic
            mechanism to resolve domain-specific vocabulary ambiguity in institutional
            documents.
          </p>
        </motion.div>

        {/* col 3 – our contribution */}
        <motion.div className="ls-card" {...fadeUp(0.22)}>
          <p className="ls-card-title">Our Contribution</p>
          <p className="ls-body ls-body--sm">
            Introduces a user-maintained glossary with fuzzy semantic alignment integrated
            into the KG-RAG pipeline to enable terminology-aware retrieval and generation.
          </p>
        </motion.div>
      </div>

      {/* ── stats strip ── */}
      <motion.div className="ls-stats" {...fadeUp(0.25)}>
        {keyFindings.map((f, i) => (
          <div key={i} className="ls-stat-item">
            <span className="ls-stat-num">{f.stat}</span>
            <span className="ls-stat-label">{f.label}</span>
            <span className="ls-stat-note">{f.note}</span>
          </div>
        ))}
      </motion.div>

    </Container>

    <style>{`
      .ls-section {
        background: #F7F5F2;
        padding: 6rem 0 5rem;
        border-top: 1px solid var(--clr-border);
      }

      /* meta row */
      .ls-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
      }
      .ls-eyebrow {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--clr-muted);
      }
      .ls-meta-num {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--clr-border);
        letter-spacing: 0.1em;
      }

      /* headline */
      .ls-headline {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: clamp(2rem, 5vw, 3.75rem);
        font-weight: 600;
        line-height: 1.08;
        letter-spacing: -0.035em;
        color: var(--clr-heading);
        margin-bottom: 2.5rem;
        max-width: 780px;
      }

      /* intro text */
      .ls-intro {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem 4rem;
        margin-bottom: 3rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid var(--clr-border);
      }
      @media (max-width: 680px) {
        .ls-intro { grid-template-columns: 1fr; }
      }
      .ls-body {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.97rem;
        line-height: 1.8;
        color: var(--clr-body);
        margin: 0;
      }
      .ls-body--sm { font-size: 0.9rem; line-height: 1.75; }

      /* ── three-col grid ── */
      .ls-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1px;
        background: var(--clr-border);
        border: 1px solid var(--clr-border);
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 1px;
      }
      @media (max-width: 780px) {
        .ls-grid { grid-template-columns: 1fr; }
      }

      .ls-card {
        background: #fff;
        padding: 2.25rem 2.5rem;
      }
      .ls-card--gap {
        background: var(--clr-off-white);
        border-left: 3px solid var(--clr-heading);
      }

      .ls-card-title {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.7rem;
        font-weight: 700;
        color: var(--clr-muted);
        margin-bottom: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 0.12em;
      }

      /* tag list */
      .ls-tag-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
      }
      .ls-tag-item {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }
      .ls-tag {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.7rem;
        font-weight: 700;
        color: var(--clr-white);
        background: var(--clr-heading);
        border-radius: 4px;
        padding: 0.15rem 0.5rem;
        display: inline-block;
        letter-spacing: 0.02em;
      }
      .ls-tag-text {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.875rem;
        color: var(--clr-body);
        line-height: 1.6;
      }

      /* gap text */
      .ls-gap-text {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.92rem;
        line-height: 1.7;
        color: var(--clr-body);
        margin: 0;
      }

      /* ── stats strip ── */
      .ls-stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        border: 1px solid var(--clr-border);
        border-top: none;
        border-radius: 0 0 12px 12px;
        overflow: hidden;
        background: var(--clr-border);
        gap: 1px;
        margin-top: 1px;
      }
      @media (max-width: 640px) {
        .ls-stats { grid-template-columns: repeat(2, 1fr); }
      }

      .ls-stat-item {
        background: var(--clr-heading);
        padding: 1.75rem 2.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }
      .ls-stat-num {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 2.25rem;
        font-weight: 700;
        letter-spacing: -0.05em;
        color: #fff;
        line-height: 1;
        margin-bottom: 0.35rem;
      }
      .ls-stat-label {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.8rem;
        color: rgba(255,255,255,0.65);
        line-height: 1.4;
      }
      .ls-stat-note {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.35);
        margin-top: 0.35rem;
      }

      /* ── mobile responsive ── */
      @media (max-width: 640px) {
        .ls-section { padding: 3.5rem 0 3rem; }
        .ls-card { padding: 1.5rem 1.25rem; }
        .ls-stat-num { font-size: 1.75rem; }
        .ls-stat-item { padding: 1.25rem 1.5rem; }
        .ls-headline { margin-bottom: 2rem; }
      }
    `}</style>
  </Section>
);

export default LiteratureSurvey;
