import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
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
    label: 'Project Proposals',
    items: [
      {
        name: 'Research Proposal Document',
        meta: 'Sept 2024 · 1 MB · PDF',
        desc: 'Detailed project proposal outlining research objectives, methodology, and expected outcomes.',
        link: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/Grp_15_Research_Proposal_ITC4166%20(1).pdf',
        filename: 'Research_Proposal.pdf',
      },
      {
        name: 'Research Proposal Presentation',
        meta: 'Sept 2024 · 3.3 MB · PDF',
        desc: 'Presentation summarizing the research proposal and key objectives.',
        link: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/Tea%20Board%20Research%20Proposal%20Presentation.pdf',
        filename: 'Research_Proposal_Presentation.pdf',
      },
    ],
  },
  {
    label: 'Research Evaluation',
    items: [
      {
        name: 'Evaluation 01 — Report',
        meta: 'Dec 2024 · 1.2 MB · PDF',
        desc: 'Evaluation report for the first research proposal, including feedback and suggestions.',
        link: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/Grp_15_Progress_Report_1_ITC4166.pdf',
        filename: 'Evaluation_01_Report.pdf',
      },
      {
        name: 'Evaluation 01 — Presentation',
        meta: 'Dec 2024 · 22 MB · PDF',
        desc: 'Presentation summarizing the evaluation findings and recommendations.',
        link: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/Research%20first%20evaluation.pdf',
        filename: 'Evaluation_01_Presentation.pdf',
      },
      {
        name: 'Evaluation 02 — Presentation',
        meta: 'April 2025 · 4 MB · PDF',
        desc: 'Presentation for the second progress evaluation with updated findings.',
        link: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/Grp_15_Second_Progress_Evaluation.pdf',
        filename: 'Evaluation_02_Presentation.pdf',
      },
    ],
  },
  {
    label: 'Final Documentation',
    items: [
      {
        name: 'Thesis Document',
        meta: 'June 2025 · TBD',
        desc: 'Comprehensive documentation of research findings, methodology, and conclusions.',
        link: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/Grp_15_Thesis.pdf',
        filename: 'Thesis_Document.pdf',
      },
      {
        name: 'Conference Oral Presentation',
        meta: 'February 2026',
        desc: 'Presentation of the research findings at a conference.',
        link: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/OralPresentation.pptx',
        filename: 'Conference_Oral_Presentation.pdf',
      },
      {
        name: 'Research Paper',
        meta: 'February 2026 · TBD',
        desc: 'Published research paper with peer-reviewed findings and contributions.',
        disabled: true,
      },
    ],
  },
];

const Downloads = () => (
  <Section id="downloads" className="dl-section">
    <Container>

      {/* meta */}
      <motion.div className="dl-meta" {...fadeUp(0)}>
        <span className="dl-eyebrow">Downloads</span>
        <span className="dl-meta-num">09</span>
      </motion.div>

      {/* headline */}
      <motion.h2 className="dl-headline" {...fadeUp(0.05)}>
        Project Resources
      </motion.h2>

      {/* category blocks */}
      <div className="dl-categories">
        {categories.map((cat, ci) => (
          <motion.div key={ci} className="dl-cat" {...fadeUp(0.1 + ci * 0.06)}>

            {/* category label row */}
            <div className="dl-cat-header">
              <span className="dl-cat-label">{cat.label}</span>
              <span className="dl-cat-count">{cat.items.length} file{cat.items.length !== 1 ? 's' : ''}</span>
            </div>

            {/* file rows */}
            {cat.items.map((item, ii) => (
              <div key={ii} className={`dl-row${item.disabled ? ' dl-row--disabled' : ''}`}>
                <div className="dl-row-info">
                  <p className="dl-name">{item.name}</p>
                  <p className="dl-desc">{item.desc}</p>
                  <p className="dl-filemeta">{item.meta}</p>
                </div>
                <div className="dl-row-action">
                  {item.disabled ? (
                    <span className="dl-soon">Coming Soon</span>
                  ) : (
                    <a
                      className="dl-btn"
                      href={item.link}
                      download={item.filename}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Download size={13} strokeWidth={2.5} />
                      Download
                    </a>
                  )}
                </div>
              </div>
            ))}

          </motion.div>
        ))}
      </div>

    </Container>

    <style>{`
      .dl-section {
        background: #fff;
        padding: 6rem 0 5rem;
        border-top: 1px solid var(--clr-border);
      }

      /* meta */
      .dl-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
      }
      .dl-eyebrow {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--clr-muted);
      }
      .dl-meta-num {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        color: var(--clr-border);
        letter-spacing: 0.1em;
      }

      /* headline */
      .dl-headline {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 600;
        line-height: 1.08;
        letter-spacing: -0.035em;
        color: var(--clr-heading);
        max-width: 480px;
        margin-bottom: 3rem;
      }

      /* category blocks */
      .dl-categories {
        display: flex;
        flex-direction: column;
      }

      .dl-cat {
        border-top: 1px solid var(--clr-border);
      }
      .dl-cat:last-child > .dl-row:last-child {
        border-bottom: 1px solid var(--clr-border);
      }

      /* category header */
      .dl-cat-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0 0.9rem;
      }
      .dl-cat-label {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--clr-muted);
      }
      .dl-cat-count {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.7rem;
        color: var(--clr-border);
        letter-spacing: 0.05em;
      }

      /* file row */
      .dl-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        padding: 1.1rem 0;
        border-top: 1px solid var(--clr-border);
        transition: background 0.15s;
      }
      .dl-row:hover:not(.dl-row--disabled) {
        background: var(--clr-off-white);
        margin: 0 -1.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      .dl-row--disabled { opacity: 0.5; }

      .dl-row-info { flex: 1; min-width: 0; }

      .dl-name {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.92rem;
        font-weight: 600;
        color: var(--clr-heading);
        margin-bottom: 0.2rem;
        letter-spacing: -0.01em;
      }
      .dl-desc {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.78rem;
        color: var(--clr-muted);
        line-height: 1.5;
        margin-bottom: 0.25rem;
      }
      .dl-filemeta {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.7rem;
        color: var(--clr-border);
        letter-spacing: 0.03em;
      }

      /* action */
      .dl-row-action { flex-shrink: 0; }

      .dl-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.78rem;
        font-weight: 600;
        color: var(--clr-white);
        background: var(--clr-heading);
        border: none;
        border-radius: 6px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        text-decoration: none;
        letter-spacing: 0.01em;
        transition: opacity 0.15s;
        white-space: nowrap;
      }
      .dl-btn:hover { opacity: 0.8; }

      .dl-soon {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.72rem;
        font-weight: 600;
        color: var(--clr-muted);
        background: var(--clr-off-white);
        border: 1px solid var(--clr-border);
        border-radius: 6px;
        padding: 0.45rem 0.85rem;
        white-space: nowrap;
      }

      @media (max-width: 540px) {
        .dl-row { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
      }

      /* ── mobile responsive ── */
      @media (max-width: 640px) {
        .dl-section { padding: 3.5rem 0 3rem; }
        .dl-row:hover:not(.dl-row--disabled) { margin: 0; padding-left: 0; padding-right: 0; }
      }
    `}</style>
  </Section>
);

export default Downloads;
