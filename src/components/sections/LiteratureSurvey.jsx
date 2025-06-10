import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BookOpen,
  Users,
  TrendingUp,
  Brain,
  MessageSquare,
  Network,
  Eye,
  FileText,
  ArrowRight,
} from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const LiteratureSurvey = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const keyFindings = [
    {
      percentage: '12%',
      text: 'improvement in context relevance (Hybrid RAG)',
    },
    {
      percentage: '30%',
      text: 'boost in diagnostic retrievals (Healthcare RAG)',
    },
    {
      percentage: '60%',
      text: 'reduction in manual graph annotation (AutoKG)',
    },
    { percentage: '40%', text: 'faster deployment with AutoRAG' },
  ];

  const researchAreas = [
    {
      icon: Brain,
      title: 'LLM Integration',
      description: 'Entity and relation extraction from free text',
    },
    {
      icon: Network,
      title: 'Hybrid RAG Models',
      description: 'Combining graph + vector retrieval mechanisms',
    },
    {
      icon: Users,
      title: 'AutoRAG & AutoKG',
      description: 'Automation of model selection and KG creation',
    },
    {
      icon: FileText,
      title: 'Domain Glossary Support',
      description: 'Disambiguation via context-aware definitions',
    },
  ];

  return (
    <Section id="literature-survey" className="py-24 bg-white">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          {/* Header Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-3 py-1.5 rounded-full">
              <BookOpen className="w-4 h-4" />
              Research Foundation
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Literature Survey
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Exploring the recent developments in Knowledge Graph-based
                Retrieval-Augmented Generation systems and their real-world
                applications.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Content Section */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8 bg-white border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6 bg-green-50 py-4 rounded-r-lg">
                    <p className="text-slate-700 leading-relaxed">
                      <strong>
                        Knowledge Graph-based Retrieval-Augmented Generation
                        (RAG)
                      </strong>{' '}
                      has emerged as a cutting-edge solution for extracting
                      meaningful, context-rich information from large volumes of
                      unstructured legal, technical, and operational documents.
                    </p>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    Traditional keyword-based retrieval systems often fail with
                    domain-specific terms or complex sentence structures. Recent
                    advancements, including hybrid RAG models like{' '}
                    <span className="font-semibold text-green-600">
                      VectorRAG
                    </span>{' '}
                    and{' '}
                    <span className="font-semibold text-green-600">
                      GraphRAG
                    </span>
                    , along with automation tools like{' '}
                    <span className="font-semibold text-green-600">
                      AutoRAG
                    </span>{' '}
                    and{' '}
                    <span className="font-semibold text-green-600">AutoKG</span>
                    , significantly boost precision, adaptability, and ease of
                    deployment.
                  </p>

                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-4 text-center">
                      Intelligent Retrieval System Workflow
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        {
                          icon: BookOpen,
                          title: 'Document Input',
                          desc: 'Scanned PDFs, logs, metadata',
                        },
                        {
                          icon: Brain,
                          title: 'Knowledge Extraction',
                          desc: 'LLMs + AutoKG pipelines',
                        },
                        {
                          icon: Network,
                          title: 'Graph Construction',
                          desc: 'Entities + Relations (Neo4j)',
                        },
                        {
                          icon: TrendingUp,
                          title: 'Query Response',
                          desc: 'Hybrid RAG + Dictionary aid',
                        },
                      ].map((step, index) => (
                        <div key={index} className="text-center group">
                          <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <step.icon className="w-8 h-8 text-green-600" />
                          </div>
                          <h5 className="font-medium text-slate-900 text-sm">
                            {step.title}
                          </h5>
                          <p className="text-xs text-slate-500">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    These innovations not only accelerate information extraction
                    but dramatically improve interpretability and relevance
                    across heterogeneous document types.
                  </p>
                </div>
              </Card>
            </div>

            {/* Key Findings Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 bg-green-50 border border-green-200">
                <h3 className="font-bold text-slate-900 mb-6 text-lg">
                  Key Research Findings
                </h3>
                <div className="space-y-4">
                  {keyFindings.map((finding, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-bold text-green-700 text-lg block">
                          {finding.percentage}
                        </span>
                        <span className="text-slate-600 text-sm">
                          {finding.text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Key Research Areas */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Key Research Areas
              </h3>
              <p className="text-slate-600">
                Focus areas advancing intelligent retrieval systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-6 bg-white border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 text-center h-full group">
                    <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default LiteratureSurvey;
