import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import Container from '../ui/Container';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.08 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const SystemArchitecture = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Section id="system-architecture" className="arch-section">
            <Container>

                {/* ── meta row ── */}
                <motion.div className="arch-meta" {...fadeUp(0)}>
                    <span className="arch-eyebrow">Architecture</span>
                    <span className="arch-meta-num">06·A</span>
                </motion.div>

                {/* ── headline ── */}
                <motion.h2 className="arch-headline" {...fadeUp(0.05)}>
                    System Architecture Overview
                </motion.h2>

                {/* ── subtitle ── */}
                <motion.p className="arch-subtitle" {...fadeUp(0.1)}>
                    An end-to-end pipeline — from board document ingestion and knowledge graph
                    construction through graph-based retrieval to LLM-powered answer generation.
                </motion.p>

                {/* ── diagram container ── */}
                <motion.div className="arch-diagram-wrap" {...fadeUp(0.15)}>
                    <div className="arch-diagram-inner">
                        <img
                            src="/system-architecture.png"
                            alt="System Architecture Diagram showing the full pipeline: Board Documents → Entity Extraction → Knowledge Graph → Graph Database → Context Retrieval → LLM → Answer Generation via Web Application"
                            className="arch-diagram-img"
                            onClick={() => setIsExpanded(true)}
                        />
                        <div className="arch-diagram-hint">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="15 3 21 3 21 9" />
                                <polyline points="9 21 3 21 3 15" />
                                <line x1="21" y1="3" x2="14" y2="10" />
                                <line x1="3" y1="21" x2="10" y2="14" />
                            </svg>
                            <span>Click to expand</span>
                        </div>
                    </div>
                </motion.div>

                {/* ── flow labels ── */}
                <motion.div className="arch-flow" {...fadeUp(0.2)}>
                    {[
                        { step: '01', label: 'Ingest', desc: 'Board documents are uploaded and text is extracted' },
                        { step: '02', label: 'Extract', desc: 'Entities and relationships are identified from content' },
                        { step: '03', label: 'Graph', desc: 'A knowledge graph is created and stored in Neo4j' },
                        { step: '04', label: 'Retrieve', desc: 'User queries trigger graph traversal for context' },
                        { step: '05', label: 'Generate', desc: 'LLM produces answers enriched with glossary definitions' },
                    ].map((item, i) => (
                        <motion.div key={i} className="arch-flow-item" {...fadeUp(0.22 + i * 0.04)}>
                            <span className="arch-flow-num">{item.step}</span>
                            <div>
                                <p className="arch-flow-label">{item.label}</p>
                                <p className="arch-flow-desc">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </Container>

            {/* ── lightbox overlay ── */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="arch-lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setIsExpanded(false)}
                    >
                        <motion.img
                            src="/system-architecture.png"
                            alt="System Architecture Diagram (expanded)"
                            className="arch-lightbox-img"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <button className="arch-lightbox-close" onClick={() => setIsExpanded(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .arch-section {
          background: #fff;
          padding: 6rem 0 5rem;
          border-top: 1px solid var(--clr-border);
        }

        /* ── meta ── */
        .arch-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .arch-eyebrow {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--clr-muted);
        }
        .arch-meta-num {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.75rem;
          color: var(--clr-border);
          letter-spacing: 0.1em;
        }

        /* ── headline ── */
        .arch-headline {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: var(--clr-heading);
          max-width: 650px;
          margin-bottom: 1rem;
        }

        /* ── subtitle ── */
        .arch-subtitle {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--clr-body);
          max-width: 620px;
          margin-bottom: 3rem;
        }

        /* ── diagram container ── */
        .arch-diagram-wrap {
          margin-bottom: 3rem;
        }
        .arch-diagram-inner {
          position: relative;
          border: 1px solid var(--clr-border);
          border-radius: 12px;
          overflow: hidden;
          background: #FAFAFA;
          cursor: pointer;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .arch-diagram-inner:hover {
          border-color: #ccc;
          box-shadow: 0 8px 32px rgba(0,0,0,0.06);
        }
        .arch-diagram-img {
          display: block;
          width: 100%;
          height: auto;
          padding: 2rem;
          transition: transform 0.4s ease;
        }
        .arch-diagram-inner:hover .arch-diagram-img {
          transform: scale(1.01);
        }

        /* expand hint */
        .arch-diagram-hint {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--clr-muted);
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(6px);
          padding: 0.35rem 0.7rem;
          border-radius: 6px;
          border: 1px solid var(--clr-border);
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none;
        }
        .arch-diagram-inner:hover .arch-diagram-hint {
          opacity: 1;
        }

        /* ── flow items ── */
        .arch-flow {
          display: flex;
          flex-direction: column;
        }
        .arch-flow-item {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          border-top: 1px solid var(--clr-border);
          padding: 1.25rem 0;
        }
        .arch-flow-item:last-child {
          border-bottom: 1px solid var(--clr-border);
        }
        .arch-flow-num {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--clr-border);
          padding-top: 0.1rem;
          flex-shrink: 0;
          min-width: 1.8rem;
        }
        .arch-flow-label {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--clr-heading);
          letter-spacing: -0.02em;
          margin-bottom: 0.2rem;
        }
        .arch-flow-desc {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.82rem;
          line-height: 1.55;
          color: var(--clr-muted);
        }

        /* ── lightbox ── */
        .arch-lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(8px);
          cursor: zoom-out;
          padding: 2rem;
        }
        .arch-lightbox-img {
          max-width: 92vw;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
          background: #fff;
          padding: 1.5rem;
        }
        .arch-lightbox-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .arch-lightbox-close:hover {
          background: rgba(255,255,255,0.2);
        }

        /* ── responsive ── */
        @media (max-width: 600px) {
          .arch-diagram-img { padding: 1rem; }
          .arch-lightbox { padding: 1rem; }
          .arch-lightbox-img { padding: 0.75rem; }
        }
      `}</style>
        </Section>
    );
};

export default SystemArchitecture;
