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

const steps = [
  {
    num: '01',
    topic: 'Data Collection & Preprocessing',
    subtopic: 'Document ingestion pipeline',
    description:
      'Gathering and preparing historical documents through a document management portal. PyMuPDF extracts clean text from PDFs, followed by chunking strategies for efficient downstream processing.',
    tags: ['Document upload', 'Text extraction', 'Chunking'],
  },
  {
    num: '02',
    topic: 'Knowledge Graph Creation',
    subtopic: 'Automated entity–relation extraction',
    description:
      'A pipeline constructs a semantically rich knowledge graph using LangChain\'s LLMGraphTransformer.Entities and relationships are extracted automatically and stored in a Neo4j graph database.',
    tags: ['LLMGraphTransformer', 'Entity-relation mapping', 'Neo4j'],
  },
  {
    num: '03',
    topic: 'Graph-based Context Retrieval',
    subtopic: 'Semantic graph traversal',
    description:
      'User queries are parsed to identify key entities. A Graph Retriever performs traversal over the knowledge graph to fetch related nodes and relationships, enriched with glossary definitions for richer context.',
    tags: ['Graph traversal', 'Semantic search', 'Context enrichment'],
  },
  {
    num: '04',
    topic: 'LLM & Glossary Integration',
    subtopic: 'Domain-aware response generation',
    description:
      'Large language models (Llama 3.1, Gemma 3) handle triple extraction and answer generation. A user-maintained glossary with fuzzy matching enhances domain-specific interpretive accuracy throughout the pipeline.',
    tags: ['Llama 3.1 / Gemma 3', 'Glossary fuzzy match', 'Triple extraction'],
  },
  {
    num: '05',
    topic: 'Answer Generation & Delivery',
    subtopic: 'Frontend response interface',
    description:
      'Context-aware responses are generated via prompt engineering with LLMs and delivered through a React.js-based frontend — providing a smooth, user-friendly natural language interface over institutional documents.',
    tags: ['Prompt engineering', 'Context-aware answers', 'React.js frontend'],
  },
];

const Methodology = () => (
  <Section id="methodology" className="mth-section">
    <Container>

      {/* ── meta row ── */}
      <motion.div className="mth-meta" {...fadeUp(0)}>
        <span className="mth-eyebrow">Methodology</span>
        <span className="mth-meta-num">06</span>
      </motion.div>

      {/* ── headline ── */}
      <motion.h2 className="mth-headline" {...fadeUp(0.05)}>
        Step-by-step Research Approach
      </motion.h2>

      {/* ── step rows ── */}
      <div className="mth-steps">
        {steps.map((step, i) => (
          <motion.div key={i} className="mth-row" {...fadeUp(0.08 + i * 0.06)}>

            {/* number */}
            <span className="mth-num">{step.num}</span>

            {/* topic + subtopic */}
            <div className="mth-label-col">
              <p className="mth-topic">{step.topic}</p>
              <p className="mth-subtopic">{step.subtopic}</p>
            </div>

            {/* description + tags */}
            <div className="mth-desc-col">
              <p className="mth-desc">{step.description}</p>
              <div className="mth-tags">
                {step.tags.map((t, j) => (
                  <span key={j} className="mth-tag">{t}</span>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </Container>

    <style>{`
      .mth-section {
        background: #F7F5F2;
        padding: 6rem 0 5rem;
        border-top: 1px solid var(--clr-border);
      }

      /* meta */
      .mth-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
      }
      .mth-eyebrow {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--clr-muted);
      }
      .mth-meta-num {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        color: var(--clr-border);
        letter-spacing: 0.1em;
      }

      /* headline */
      .mth-headline {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 600;
        line-height: 1.08;
        letter-spacing: -0.035em;
        color: var(--clr-heading);
        max-width: 600px;
        margin-bottom: 3.5rem;
      }

      /* ── step list ── */
      .mth-steps {
        display: flex;
        flex-direction: column;
      }

      /* individual row */
      .mth-row {
        display: grid;
        grid-template-columns: 3rem 1fr 1.6fr;
        gap: 0 3rem;
        align-items: start;
        border-top: 1px solid var(--clr-border);
        padding: 2rem 0;
      }
      .mth-row:last-child {
        border-bottom: 1px solid var(--clr-border);
      }

      @media (max-width: 820px) {
        .mth-row {
          grid-template-columns: 2.5rem 1fr;
          grid-template-rows: auto auto;
          gap: 0.5rem 1.5rem;
        }
        .mth-desc-col {
          grid-column: 2 / -1;
          padding-top: 0.75rem;
        }
      }
      @media (max-width: 500px) {
        .mth-row { grid-template-columns: 1fr; gap: 0.5rem; }
        .mth-desc-col { grid-column: 1; }
      }

      /* step number */
      .mth-num {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.06em;
        color: var(--clr-muted);
        padding-top: 0.15rem;
      }

      /* topic + subtopic */
      .mth-label-col { padding-top: 0.05rem; }

      .mth-topic {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 1.35rem;
        font-weight: 600;
        letter-spacing: -0.025em;
        color: var(--clr-heading);
        line-height: 1.25;
        margin-bottom: 0.3rem;
      }
      .mth-subtopic {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.78rem;
        font-weight: 400;
        color: var(--clr-muted);
        line-height: 1.4;
      }

      /* description + tags */
      .mth-desc-col {}

      .mth-desc {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.9rem;
        line-height: 1.75;
        color: var(--clr-body);
        margin: 0 0 0.85rem;
      }

      .mth-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }
      .mth-tag {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.02em;
        color: var(--clr-heading);
        background: #fff;
        border: 1px solid var(--clr-border);
        border-radius: 4px;
        padding: 0.15rem 0.55rem;
      }
    `}</style>
  </Section>
);

export default Methodology;
