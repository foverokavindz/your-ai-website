import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Container from '../ui/Container';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

const quarters = [
  {
    quarter: 'Q3 2024',
    items: [
      { month: 'Jul 2024', title: 'Topic Selection', desc: 'Initial literature review and topic finalization' },
      { month: 'Aug 2024', title: 'Domain Analysis', desc: 'Comprehensive domain analysis and requirements gathering' },
      { month: 'Aug 2024', title: 'Learn AI & LLMs', desc: 'Foundational knowledge acquisition in AI and large language models' },
      { month: 'Sep 2024', title: 'Requirements & Literature Review', desc: 'Detailed requirements gathering and in-depth literature review' },
    ],
  },
  {
    quarter: 'Q4 2024',
    items: [
      { month: 'Oct 2024', title: 'System Design', desc: 'System architecture design and technology stack selection' },
      { month: 'Nov 2024', title: 'Data Collection', desc: 'Data collection and preprocessing for model training' },
      { month: 'Dec 2024', title: 'Literature Review', desc: 'Comprehensive analysis and synthesis of existing solutions' },
    ],
  },
  {
    quarter: 'Q1 2025',
    items: [
      { month: 'Jan 2025', title: 'Frontend Development', desc: 'Initial frontend development and UI/UX design implementation' },
      { month: 'Feb 2025', title: 'Backend Development', desc: 'Backend architecture setup and REST API development' },
      { month: 'Mar 2025', title: 'AI Integration', desc: 'Full integration of AI models with frontend and backend services' },
    ],
  },
  {
    quarter: 'Q2 2025',
    items: [
      { month: 'Apr 2025', title: 'Second Progress Review', desc: 'Mid-project review and scope adjustments based on feedback' },
      { month: 'May 2025', title: 'Final Testing', desc: 'Comprehensive testing and bug fixing before deployment' },
      { month: 'Jun 2025', title: 'Performance Optimization', desc: 'Optimisation of system performance and user experience' },
    ],
  },
];

const Milestones = () => (
  <Section id="milestones" className="ms-section">
    <Container>

      {/* meta */}
      <motion.div className="ms-meta" {...fadeUp(0)}>
        <span className="ms-eyebrow">Milestones</span>
        <span className="ms-meta-num">08</span>
      </motion.div>

      {/* headline */}
      <motion.h2 className="ms-headline" {...fadeUp(0.05)}>
        Research Timeline
      </motion.h2>

      {/* progress indicator */}
      <motion.div className="ms-progress-wrap" {...fadeUp(0.1)}>
        <div className="ms-progress-bar">
          <div className="ms-progress-fill" />
        </div>
        <p className="ms-progress-label">13 milestones completed &mdash; on track</p>
      </motion.div>

      {/* quarter blocks */}
      <div className="ms-quarters">
        {quarters.map((q, qi) => (
          <motion.div key={qi} className="ms-quarter" {...fadeUp(0.12 + qi * 0.05)}>

            {/* quarter label */}
            <div className="ms-quarter-label">
              <span className="ms-q-tag">{q.quarter}</span>
            </div>

            {/* milestone rows */}
            <div className="ms-rows">
              {q.items.map((item, ri) => (
                <div key={ri} className="ms-row">
                  <span className="ms-month">{item.month}</span>
                  <p className="ms-title">{item.title}</p>
                  <p className="ms-desc">{item.desc}</p>
                  {/* <span className="ms-done">✓</span> */}
                </div>
              ))}
            </div>

          </motion.div>
        ))}
      </div>

    </Container>

    <style>{`
      .ms-section {
        background: #F7F5F2;
        padding: 6rem 0 5rem;
        border-top: 1px solid var(--clr-border);
      }

      /* meta */
      .ms-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
      }
      .ms-eyebrow {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--clr-muted);
      }
      .ms-meta-num {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        color: var(--clr-border);
        letter-spacing: 0.1em;
      }

      /* headline */
      .ms-headline {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 600;
        line-height: 1.08;
        letter-spacing: -0.035em;
        color: var(--clr-heading);
        max-width: 500px;
        margin-bottom: 2.5rem;
      }

      /* progress bar */
      .ms-progress-wrap {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 3rem;
      }
      .ms-progress-bar {
        flex: 1;
        height: 3px;
        background: var(--clr-border);
        border-radius: 2px;
        overflow: hidden;
        max-width: 320px;
      }
      .ms-progress-fill {
        height: 100%;
        width: 100%;
        background: var(--clr-heading);
        border-radius: 2px;
      }
      .ms-progress-label {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.78rem;
        color: var(--clr-muted);
        white-space: nowrap;
      }

      /* ── quarter sections ── */
      .ms-quarters {
        display: flex;
        flex-direction: column;
        gap: 0;
      }

      .ms-quarter {
        display: grid;
        grid-template-columns: 100px 1fr;
        gap: 0;
        border-top: 1px solid var(--clr-border);
      }
      .ms-quarter:last-child { border-bottom: 1px solid var(--clr-border); }

      @media (max-width: 600px) {
        .ms-quarter { grid-template-columns: 1fr; }
      }

      /* quarter label column */
      .ms-quarter-label {
        padding: 1.5rem 1rem 1.5rem 0;
        display: flex;
        align-items: flex-start;
        border-right: 1px solid var(--clr-border);
      }
      @media (max-width: 600px) {
        .ms-quarter-label { border-right: none; border-bottom: 1px solid var(--clr-border); padding: 1rem 0 0.75rem; }
      }

      .ms-q-tag {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--clr-muted);
      }

      /* milestone rows on the right */
      .ms-rows {
        display: flex;
        flex-direction: column;
      }

      .ms-row {
        display: grid;
        grid-template-columns: 90px 1fr 1fr auto;
        gap: 0 1.5rem;
        align-items: center;
        padding: 1rem 0 1rem 1.5rem;
        border-bottom: 1px solid var(--clr-border);
        transition: background 0.15s;
      }
      .ms-row:last-child { border-bottom: none; }
      .ms-row:hover { background: rgba(0,0,0,0.02); }

      @media (max-width: 820px) {
        .ms-row {
          grid-template-columns: 80px 1fr auto;
          grid-template-rows: auto auto;
        }
        .ms-desc { grid-column: 2; grid-row: 2; }
      }
      @media (max-width: 500px) {
        .ms-row { grid-template-columns: 1fr auto; padding-left: 0; }
        .ms-month { grid-column: 1; font-size: 0.68rem; }
        .ms-title { grid-column: 1; grid-row: 2; }
        .ms-desc  { grid-column: 1; grid-row: 3; }
        .ms-done  { grid-column: 2; grid-row: 1; }
      }

      .ms-month {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.73rem;
        font-weight: 500;
        color: var(--clr-muted);
        letter-spacing: 0.02em;
      }
      .ms-title {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.92rem;
        font-weight: 600;
        color: var(--clr-heading);
        letter-spacing: -0.01em;
        margin: 0;
      }
      .ms-desc {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.8rem;
        color: var(--clr-muted);
        line-height: 1.5;
        margin: 0;
      }
      .ms-done {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--clr-heading);
        background: var(--clr-off-white);
        border: 1px solid var(--clr-border);
        border-radius: 4px;
        padding: 0.15rem 0.45rem;
        white-space: nowrap;
      }

      /* ── mobile responsive ── */
      @media (max-width: 640px) {
        .ms-section { padding: 3.5rem 0 3rem; }
        .ms-headline { margin-bottom: 2rem; }
        .ms-progress-wrap { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
        .ms-progress-bar { max-width: 100%; width: 100%; }
      }
    `}</style>
  </Section>
);

export default Milestones;
