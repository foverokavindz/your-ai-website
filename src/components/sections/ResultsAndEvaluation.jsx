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

/* ── H1 data ── */
const h1Rows = [
    { metric: 'Context Recall', mean: '0.839', median: '1', min: '0', max: '1' },
    { metric: 'Answer Relevancy', mean: '0.767', median: '1', min: '0', max: '1' },
    { metric: 'Faithfulness', mean: '0.933', median: '1', min: '0.6', max: '1' },
];

const h1Findings = [
    {
        head: 'Retrieval',
        points: [
            'Mean Recall: The system retrieves 84% (0.84) of relevant knowledge graph triples.',
            'Consistent performance: The median recall is 1.000 — in at least half of cases, all relevant triples are retrieved.',
        ],
    },
    {
        head: 'Generation',
        points: [
            'Mean answer relevancy: 0.767 (over 76% relevant responses).',
            'Mean faithfulness: 0.933 — most answers are factually correct.',
        ],
    },
];

/* ── H2 data ── */
const h2Rows = [
    { label: 'Without Glossary', mean: '0.483', median: '0.5', min: '0', max: '1' },
    { label: 'With Glossary', mean: '0.717', median: '1', min: '0', max: '1' },
];

const h2Findings = [
    {
        head: 'Glossary Boosts Relevancy',
        points: [
            'Without glossary: mean answer relevancy 0.483.',
            'With glossary: mean answer relevancy = 0.717 (48% increase).',
        ],
    },
    {
        head: 'Improved Understanding',
        points: [
            'Median relevancy jumps to 1.0 with glossary — over half of glossary-based queries are fully relevant.',
        ],
    },
    {
        head: 'Fewer Fallback Responses',
        points: [
            'Glossary integration reduced "I don\'t understand" answers, improving contextual grounding.',
        ],
    },
];

/* ── mini bar chart (pure CSS) ── */
const BarChart = () => (
    <div className="re-chart">
        <div className="re-chart-y">
            {[0.8, 0.6, 0.4, 0.2, 0].map((v) => (
                <span key={v} className="re-y-label">{v.toFixed(1)}</span>
            ))}
        </div>
        <div className="re-chart-bars">
            {[
                { label: 'Without Glossary', value: 0.483, color: '#C8A96A' },
                { label: 'With Glossary', value: 0.717, color: '#1A1A1A' },
            ].map((b) => (
                <div key={b.label} className="re-bar-col">
                    <span className="re-bar-val">{b.value}</span>
                    <motion.div
                        className="re-bar"
                        style={{ background: b.color }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <span className="re-bar-label">{b.label}</span>
                </div>
            ))}
        </div>
    </div>
);

const MetricTable = ({ headers, rows }) => (
    <div className="re-table-wrap">
        <table className="re-table">
            <thead>
                <tr>
                    {headers.map((h) => <th key={h}>{h}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i}>
                        {Object.values(row).map((v, j) => <td key={j}>{v}</td>)}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const ResultsAndEvaluation = () => (
    <Section id="results" className="re-section">
        <Container>

            {/* meta */}
            <motion.div className="re-meta" {...fadeUp(0)}>
                <span className="re-eyebrow">Results &amp; Evaluation</span>
                <span className="re-meta-num">09</span>
            </motion.div>

            {/* headline */}
            <motion.h2 className="re-headline" {...fadeUp(0.05)}>
                System Evaluation
            </motion.h2>

            {/* intro */}
            <motion.div className="re-intro" {...fadeUp(0.1)}>
                <p className="re-intro-text">
                    To assess the effectiveness of the proposed system, we conducted a comprehensive
                    evaluation under two hypotheses:
                </p>
                <div className="re-hypotheses">
                    <span className="re-hyp"><strong>H1</strong> — Retrieval and Generation Evaluation</span>
                    <span className="re-hyp"><strong>H2</strong> — Glossary Integration Impact Evaluation</span>
                </div>
            </motion.div>

            {/* ── H1 ── */}
            <motion.div className="re-block" {...fadeUp(0.15)}>
                <div className="re-block-header">
                    <span className="re-block-tag">H1</span>
                    <p className="re-block-title">Retrieval and Generation Evaluation</p>
                </div>

                <div className="re-two-col">
                    <MetricTable
                        headers={['Metric', 'Mean', 'Median', 'Min', 'Max']}
                        rows={h1Rows}
                    />
                    <div className="re-findings">
                        {h1Findings.map((f, i) => (
                            <div key={i} className="re-finding">
                                <p className="re-finding-head">{f.head}</p>
                                <ul className="re-finding-list">
                                    {f.points.map((p, j) => (
                                        <li key={j} className="re-finding-item">
                                            <span className="re-bullet" />{p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* ── H2 ── */}
            <motion.div className="re-block" {...fadeUp(0.2)}>
                <div className="re-block-header">
                    <span className="re-block-tag">H2</span>
                    <p className="re-block-title">Glossary Integration Impact Evaluation</p>
                </div>

                <div className="re-two-col">
                    <div>
                        <MetricTable
                            headers={['Answer Relevancy', 'Mean', 'Median', 'Min', 'Max']}
                            rows={h2Rows}
                        />
                        <BarChart />
                    </div>
                    <div className="re-findings">
                        {h2Findings.map((f, i) => (
                            <div key={i} className="re-finding">
                                <p className="re-finding-head">{f.head}</p>
                                <ul className="re-finding-list">
                                    {f.points.map((p, j) => (
                                        <li key={j} className="re-finding-item">
                                            <span className="re-bullet" />{p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

        </Container>

        <style>{`
      .re-section {
        background: #fff;
        padding: 6rem 0 5rem;
        border-top: 1px solid var(--clr-border);
      }

      /* meta */
      .re-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
      }
      .re-eyebrow {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--clr-muted);
      }
      .re-meta-num {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        color: var(--clr-border);
        letter-spacing: 0.1em;
      }

      /* headline */
      .re-headline {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 600;
        line-height: 1.08;
        letter-spacing: -0.035em;
        color: var(--clr-heading);
        max-width: 500px;
        margin-bottom: 2rem;
      }

      /* intro */
      .re-intro { margin-bottom: 3rem; }
      .re-intro-text {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.95rem;
        line-height: 1.75;
        color: var(--clr-body);
        margin-bottom: 1rem;
      }
      .re-hypotheses {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }
      .re-hyp {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.88rem;
        color: var(--clr-body);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .re-hyp::before {
        content: '·';
        color: var(--clr-muted);
        font-size: 1.2rem;
        line-height: 1;
      }
      .re-hyp strong { color: var(--clr-heading); }

      /* hypothesis block */
      .re-block {
        border: 1px solid var(--clr-border);
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 2rem;
      }

      .re-block-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.9rem 1.5rem;
        background: var(--clr-off-white);
        border-bottom: 1px solid var(--clr-border);
      }
      .re-block-tag {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.68rem;
        font-weight: 800;
        letter-spacing: 0.08em;
        color: #fff;
        background: var(--clr-heading);
        border-radius: 5px;
        padding: 0.15rem 0.5rem;
      }
      .re-block-title {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--clr-heading);
        margin: 0;
      }

      /* two-col inside block */
      .re-two-col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0;
      }
      @media (max-width: 720px) {
        .re-two-col { grid-template-columns: 1fr; }
      }

      /* table */
      .re-table-wrap {
        border-right: 1px solid var(--clr-border);
        overflow-x: auto;
      }
      @media (max-width: 720px) {
        .re-table-wrap { border-right: none; border-bottom: 1px solid var(--clr-border); }
      }

      .re-table {
        width: 100%;
        border-collapse: collapse;
        font-family: 'Inter', system-ui, sans-serif;
      }
      .re-table th {
        font-size: 0.72rem;
        font-weight: 700;
        color: var(--clr-muted);
        text-align: left;
        padding: 0.65rem 1.25rem;
        border-bottom: 1px solid var(--clr-border);
        background: var(--clr-off-white);
        white-space: nowrap;
      }
      .re-table td {
        font-size: 0.85rem;
        color: var(--clr-heading);
        padding: 0.65rem 1.25rem;
        border-bottom: 1px solid var(--clr-border);
        font-weight: 500;
      }
      .re-table tr:last-child td { border-bottom: none; }
      .re-table td:first-child { color: var(--clr-body); font-weight: 600; }

      /* findings */
      .re-findings {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }
      .re-finding-head {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--clr-heading);
        margin-bottom: 0.5rem;
      }
      .re-finding-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
      }
      .re-finding-item {
        display: flex;
        align-items: flex-start;
        gap: 0.55rem;
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.82rem;
        line-height: 1.65;
        color: var(--clr-body);
      }
      .re-bullet {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--clr-heading);
        flex-shrink: 0;
        margin-top: 0.48rem;
      }

      /* ── bar chart ── */
      .re-chart {
        display: flex;
        gap: 0.5rem;
        padding: 1.25rem 1.25rem 0.75rem;
        height: 160px;
        border-top: 1px solid var(--clr-border);
      }
      .re-chart-y {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        padding-bottom: 1.5rem;
      }
      .re-y-label {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.65rem;
        color: var(--clr-muted);
      }
      .re-chart-bars {
        flex: 1;
        display: flex;
        align-items: flex-end;
        gap: 1.5rem;
        padding-bottom: 0;
      }
      .re-bar-col {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: flex-end;
        gap: 0.25rem;
      }
      .re-bar-val {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.7rem;
        font-weight: 700;
        color: var(--clr-heading);
      }
      .re-bar {
        width: 100%;
        transform-origin: bottom;
        border-radius: 4px 4px 0 0;
      }
      .re-bar-col:nth-child(1) .re-bar { height: 60%; }
      .re-bar-col:nth-child(2) .re-bar { height: 90%; }
      .re-bar-label {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.65rem;
        color: var(--clr-muted);
        text-align: center;
        line-height: 1.3;
        padding-top: 0.25rem;
        border-top: 1px solid var(--clr-border);
        width: 100%;
      }
    `}</style>
    </Section>
);

export default ResultsAndEvaluation;
