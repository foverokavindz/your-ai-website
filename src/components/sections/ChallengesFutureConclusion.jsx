import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Container from '../ui/Container';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.06 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

/* ── data ── */
const challenges = [
  {
    title: 'Data Availability & Domain Constraints',
    points: [
      'Lack of publicly available industry-specific institutional datasets.',
      'Regulatory/organisational documents are often confidential.',
      'Used Public NIH Clinical Trial Protocol (clinicaltrial.gov) as a proxy dataset.',
    ],
  },
  {
    title: 'Complex Document Structures',
    points: [
      'Long, multi-section PDF documents.',
      'Scanned PDFs require OCR.',
      'Tables with multi-rows / merged cells.',
    ],
  },
  {
    title: 'Entity & Relationship Extraction Complexity',
    points: [
      'Time-consuming LLM-based triple extraction.',
    ],
  },
  {
    title: 'Scalability Considerations',
    points: [
      'Maintain glossary consistency across documents.',
      'Managing a growing knowledge graph.',
    ],
  },
];

const futureWorks = [
  'Extend evaluation to multiple domains and heterogeneous datasets.',
  'Improve triple extraction efficiency and reduce processing time.',
  'Explore fine-tuned / domain-specific LLMs.',
  'Investigate automated glossary enrichment.',
  'Validate long-term scalability in large institutional settings.',
];

const conclusions = [
  {
    head: 'Project Achievements',
    points: [
      'Successfully developed a Knowledge Graph-based RAG system for domain-specific information extraction from unstructured documents.',
      'Combined graph-based context retrieval, glossary-aided interpretation, and LLM-based response generation in a functional, web-based platform.',
    ],
  },
  {
    head: 'Key Evaluation Outcomes',
    points: [
      'Context Recall: 0.839 — High retrieval accuracy.',
      'Faithfulness: 0.933 — Responses grounded in facts.',
      'Answer Relevancy (with glossary): improved by 48%.',
      'Architecture proved scalable and deployment-ready.',
    ],
  },
];

const ChallengesFutureConclusion = () => (
  <Section id="challenges" className="cf-section">
    <Container>

      {/* ══════════ CHALLENGES ══════════ */}
      <motion.div className="cf-meta" {...fadeUp(0)}>
        <span className="cf-eyebrow">Challenges</span>
        <span className="cf-meta-num">10</span>
      </motion.div>
      <motion.h2 className="cf-headline" {...fadeUp(0.04)}>
        Limitations &amp; Challenges
      </motion.h2>

      <motion.div className="cf-card-grid" {...fadeUp(0.08)}>
        {challenges.map((c, i) => (
          <div key={i} className="cf-card">
            <p className="cf-card-title">{c.title}</p>
            <ul className="cf-list">
              {c.points.map((p, j) => (
                <li key={j} className="cf-list-item">
                  <span className="cf-bullet" />{p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      {/* ══════════ FUTURE WORKS ══════════ */}
      <div className="cf-divider" />

      <motion.div className="cf-meta" {...fadeUp(0)}>
        <span className="cf-eyebrow">Future Works</span>
        <span className="cf-meta-num">11</span>
      </motion.div>
      <motion.h2 className="cf-headline" {...fadeUp(0.04)}>
        Where We Go Next
      </motion.h2>

      <motion.div className="cf-future-wrap" {...fadeUp(0.08)}>
        {futureWorks.map((fw, i) => (
          <div key={i} className="cf-future-row">
            <span className="cf-fw-num">{String(i + 1).padStart(2, '0')}</span>
            <p className="cf-fw-text">{fw}</p>
          </div>
        ))}
      </motion.div>

      {/* ══════════ CONCLUSION ══════════ */}
      <div className="cf-divider" />

      <motion.div className="cf-meta" {...fadeUp(0)}>
        <span className="cf-eyebrow">Conclusion</span>
        <span className="cf-meta-num">12</span>
      </motion.div>
      <motion.h2 className="cf-headline" {...fadeUp(0.04)}>
        Summary &amp; Conclusion
      </motion.h2>

      <motion.div className="cf-conclusion-grid" {...fadeUp(0.08)}>
        {conclusions.map((c, i) => (
          <div key={i} className="cf-concl-block">
            <p className="cf-concl-head">{c.head}</p>
            <ul className="cf-list">
              {c.points.map((p, j) => (
                <li key={j} className="cf-list-item">
                  <span className="cf-bullet" />{p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

    </Container>

    <style>{`
      .cf-section {
        background: #F7F5F2;
        padding: 6rem 0 5rem;
        border-top: 1px solid var(--clr-border);
      }

      /* meta row */
      .cf-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
      }
      .cf-eyebrow {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--clr-muted);
      }
      .cf-meta-num {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        color: var(--clr-border);
        letter-spacing: 0.1em;
      }

      /* headline */
      .cf-headline {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: clamp(1.8rem, 4vw, 3rem);
        font-weight: 600;
        line-height: 1.08;
        letter-spacing: -0.03em;
        color: var(--clr-heading);
        max-width: 520px;
        margin-bottom: 2.5rem;
      }

      /* section divider */
      .cf-divider {
        height: 1px;
        background: var(--clr-border);
        margin: 4rem 0;
      }

      /* ── Challenges grid ── */
      .cf-card-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1px;
        background: var(--clr-border);
        border: 1px solid var(--clr-border);
        border-radius: 12px;
        overflow: hidden;
      }
      @media (max-width: 640px) {
        .cf-card-grid { grid-template-columns: 1fr; }
      }

      .cf-card {
        background: #fff;
        padding: 1.5rem 1.75rem;
      }
      .cf-card-title {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.88rem;
        font-weight: 700;
        color: var(--clr-heading);
        margin-bottom: 0.85rem;
        letter-spacing: -0.01em;
      }

      /* shared list */
      .cf-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .cf-list-item {
        display: flex;
        align-items: flex-start;
        gap: 0.55rem;
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.82rem;
        line-height: 1.65;
        color: var(--clr-body);
      }
      .cf-bullet {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--clr-heading);
        flex-shrink: 0;
        margin-top: 0.5rem;
      }

      /* ── Future Works ── */
      .cf-future-wrap {
        border: 1px solid var(--clr-border);
        border-radius: 12px;
        overflow: hidden;
        background: #fff;
      }
      .cf-future-row {
        display: flex;
        align-items: baseline;
        gap: 1.25rem;
        padding: 1rem 1.75rem;
        border-bottom: 1px solid var(--clr-border);
        transition: background 0.15s;
      }
      .cf-future-row:last-child { border-bottom: none; }
      .cf-future-row:hover { background: var(--clr-off-white); }

      .cf-fw-num {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.68rem;
        font-weight: 700;
        color: var(--clr-border);
        letter-spacing: 0.06em;
        flex-shrink: 0;
        width: 24px;
      }
      .cf-fw-text {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--clr-heading);
        line-height: 1.6;
        margin: 0;
      }

      /* ── Conclusion ── */
      .cf-conclusion-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1px;
        background: var(--clr-border);
        border: 1px solid var(--clr-border);
        border-radius: 12px;
        overflow: hidden;
      }
      @media (max-width: 640px) {
        .cf-conclusion-grid { grid-template-columns: 1fr; }
      }

      .cf-concl-block {
        background: var(--clr-heading);
        padding: 2rem 1.75rem;
      }
      .cf-concl-block:first-child { background: var(--clr-off-white); }
      .cf-concl-block:first-child .cf-concl-head { color: var(--clr-heading); }
      .cf-concl-block:first-child .cf-list-item  { color: var(--clr-body); }
      .cf-concl-block:first-child .cf-bullet      { background: var(--clr-heading); }

      .cf-concl-head {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.82rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        color: rgba(255,255,255,0.6);
        text-transform: uppercase;
        margin-bottom: 1rem;
      }
      .cf-concl-block:last-child .cf-list-item { color: rgba(255,255,255,0.85); }
      .cf-concl-block:last-child .cf-bullet     { background: rgba(255,255,255,0.6); }

      /* ── mobile responsive ── */
      @media (max-width: 640px) {
        .cf-section { padding: 3.5rem 0 3rem; }
        .cf-divider { margin: 2.5rem 0; }
        .cf-card { padding: 1.25rem 1.25rem; }
        .cf-concl-block { padding: 1.5rem 1.25rem; }
        .cf-future-row { padding: 0.85rem 1.25rem; }
      }
    `}</style>
  </Section>
);

export default ChallengesFutureConclusion;
