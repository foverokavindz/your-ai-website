import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Database,
  Code,
  ArrowRight,
  CheckCircle,
  Play,
} from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const Methodology = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const keyFeatures = [
    'Knowledge Graph Integration',
    'Glossary-Aided Responses',
    'Semantic Context Retrieval',
    'Large Language Models',
    'Automated Processing',
    'Domain-Specific Accuracy',
  ];

  const steps = [
    {
      icon: Database,
      title: 'Data Collection and Preprocessing',
      description:
        'This step involves gathering and preparing historical documents through a document management portal, using PyMuPDF to extract clean text from PDFs and chunking for efficient processing.',
      highlights: ['Document upload', 'Text extraction', 'Preprocessing'],
    },
    {
      icon: Database,
      title: 'Knowledge Graph Creation',
      description:
        'A pipeline constructs a semantically rich knowledge graph using LangChain’s LLMGraphTransformer to extract entities and relationships, stored in a Neo4j graph database with automated techniques.',
      highlights: [
        'Automated extraction',
        'Entity-relationship mapping',
        'Neo4j storage',
      ],
    },
    {
      icon: Brain,
      title: 'Graph-based Context Retrieval',
      description:
        'User queries are processed to extract key entities, with a Graph Retriever using graph traversal to retrieve related nodes and relationships, combined with glossary definitions for context.',
      highlights: ['Semantic search', 'Graph traversal', 'Context integration'],
    },
    {
      icon: Code,
      title: 'Integration with LLM and Glossary',
      description:
        'Integrates LLMs (Llama 3.1, Gemma 3) for triple extraction and response generation, enhanced by a user-managed glossary with fuzzy matching to improve domain-specific interpretive accuracy.',
      highlights: ['LLM processing', 'Glossary enhancement', 'Fuzzy matching'],
    },
    {
      icon: Code,
      title: 'Answer Generation and Delivery',
      description:
        'Generates context-aware responses via prompt engineering with LLMs, delivering them through a React.js-based frontend interface for a user-friendly experience.',
      highlights: [
        'Prompt engineering',
        'Context-aware responses',
        'Frontend delivery',
      ],
    },
  ];

  return (
    <Section id="methodology" className="py-24 bg-slate-50">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-20"
        >
          {/* Header Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-3 py-1.5 rounded-full">
              <Brain className="w-4 h-4" />
              Research Approach
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Our Methodology
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                A comprehensive approach combining knowledge graphs, large
                language models, and glossary integration for domain-specific
                information retrieval
              </p>
            </div>

            {/* Key Features Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {keyFeatures.map((feature, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="inline-flex items-center px-4 py-2 bg-white text-slate-700 text-sm font-medium rounded-full border border-slate-200 hover:border-green-200 hover:bg-green-50 transition-all duration-200"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {feature}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Visual/Image Side */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Card className="p-8 bg-white border border-slate-200 shadow-lg">
                    <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                          {[...Array(48)].map((_, i) => (
                            <div
                              key={i}
                              className="border border-green-300"
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Central Icon */}
                      <div className="relative z-10 w-24 h-24 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <step.icon className="w-12 h-12 text-white" />
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                        <Play className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="absolute bottom-4 left-4 px-3 py-1 bg-white rounded-full text-xs font-medium text-slate-600 shadow-md">
                        Step {index + 1}
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Content Side */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        Phase {index + 1}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="text-lg text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Highlights Pills */}
                  <div className="flex flex-wrap gap-2">
                    {step.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full border border-green-200"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors">
                    Learn more about this phase
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10 space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Ready to explore our methodology?
                </h3>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Discover how our systematic approach creates{' '}
                  <span className="text-green-600 font-semibold">
                    breakthrough innovations
                  </span>{' '}
                  in domain-specific information retrieval.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  View detailed methodology
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Research papers
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Methodology;
