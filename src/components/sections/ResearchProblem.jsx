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

const ResearchProblem = () => (
  <Section id="research-problem" className="rp-section">
    <Container>

      {/* ── Top meta row ── */}
      <motion.div className="rp-meta" {...fadeUp(0)}>
        <span className="rp-eyebrow">Research Problem</span>
        <span className="rp-meta-num">02</span>
      </motion.div>

      {/* ── Large headline ── */}
      <motion.h2 className="rp-headline" {...fadeUp(0.05)}>
        Practical Challenges in<br />Institutional Knowledge Retrieval
      </motion.h2>

      {/* ── Two challenge panels side by side ── */}
      <div className="rp-panels">
        <motion.div className="rp-panel" {...fadeUp(0.1)}>
          <p className="rp-panel-title">The Challenge</p>
          <p className="rp-panel-sub">Embedded domain knowledge</p>
          <ul className="rp-list">
            {[
              'Critical organisational knowledge is embedded in long, domain-specific documents (e.g., regulations, clinical protocols, legal records).',
              'Documents contain ambiguous terminology, abbreviations, and evolving definitions.',
            ].map((item, i) => (
              <li key={i} className="rp-list-item"><span className="rp-bullet" />{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="rp-panel" {...fadeUp(0.15)}>
          <p className="rp-panel-title">Limitations</p>
          <p className="rp-panel-sub">Traditional search &amp; standard RAG</p>
          <ul className="rp-list">
            {[
              'Retrieve large but semantically misaligned contexts.',
              'Fail to disambiguate specialised terms.',
              'Produce irrelevant or unfaithful answers, or avoid answering altogether.',
            ].map((item, i) => (
              <li key={i} className="rp-list-item"><span className="rp-bullet" />{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ── Core research question — full-width typographic statement ── */}
      <motion.div className="rp-question-wrap" {...fadeUp(0.2)}>
        <span className="rp-question-label">Core Research Problem</span>
        <p className="rp-question">
          "How can a Knowledge Graph-based Retrieval Augmented Generation
          (KG&#8209;RAG) system accurately interpret domain&#8209;specific
          terminology and deliver reliable, context&#8209;aware answers from
          institutional documents?"
        </p>
      </motion.div>

    </Container>

    <style>{`
      .rp-section {
        background: #fff;
        padding: 6rem 0 5rem;
        border-top: 1px solid var(--clr-border);
      }

      /* ── meta row ── */
      .rp-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
      }

      .rp-eyebrow {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--clr-muted);
      }

      .rp-meta-num {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 500;
        color: var(--clr-border);
        letter-spacing: 0.1em;
      }

      /* ── headline ── */
      .rp-headline {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: clamp(2.2rem, 5.5vw, 4rem);
        font-weight: 600;
        line-height: 1.08;
        letter-spacing: -0.035em;
        color: var(--clr-heading);
        margin-bottom: 3.5rem;
        max-width: 760px;
      }

      /* ── two panels ── */
      .rp-panels {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0;
        border: 1px solid var(--clr-border);
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 2.5rem;
      }

      @media (max-width: 680px) {
        .rp-panels { grid-template-columns: 1fr; }
      }

      .rp-panel {
        padding: 2rem 2.25rem;
        background: var(--clr-off-white);
      }

      .rp-panel:first-child {
        border-right: 1px solid var(--clr-border);
      }

      @media (max-width: 680px) {
        .rp-panel:first-child { border-right: none; border-bottom: 1px solid var(--clr-border); }
      }

      .rp-panel-title {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--clr-heading);
        margin-bottom: 0.2rem;
      }

      .rp-panel-sub {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        color: var(--clr-muted);
        margin-bottom: 1.25rem;
      }

      /* ── bullet list ── */
      .rp-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
      }

      .rp-list-item {
        display: flex;
        align-items: flex-start;
        gap: 0.6rem;
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.88rem;
        color: var(--clr-body);
        line-height: 1.65;
      }

      .rp-bullet {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--clr-heading);
        flex-shrink: 0;
        margin-top: 0.52rem;
      }

      /* ── full-width question statement ── */
      .rp-question-wrap {
        border-top: 1px solid var(--clr-border);
        padding-top: 2.5rem;
      }

      .rp-question-label {
        display: block;
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--clr-muted);
        margin-bottom: 1.25rem;
      }

      .rp-question {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: clamp(1.15rem, 2.5vw, 1.6rem);
        font-weight: 500;
        font-style: italic;
        line-height: 1.6;
        letter-spacing: -0.02em;
        color: var(--clr-heading);
        max-width: 860px;
        margin: 0;
      }
    `}</style>
  </Section>
);

export default ResearchProblem;
