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
    <Section
      id="literature-survey"
      className="py-16 sm:py-20 lg:py-24 bg-white"
    >
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Header Section */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
              Research Foundation
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight px-4 sm:px-0">
                Literature Survey
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Exploring the recent developments in Knowledge Graph-based
                Retrieval-Augmented Generation systems and their real-world
                applications.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {/* Content Section */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <Card className="p-6 sm:p-8 bg-white border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4 sm:space-y-6">
                  <div className="border-l-4 border-green-500 pl-4 sm:pl-6 bg-green-50 py-3 sm:py-4 rounded-r-lg">
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      <strong>
                        Knowledge Graph-based Retrieval-Augmented Generation
                        (RAG)
                      </strong>{' '}
                      has emerged as a cutting-edge solution for extracting
                      meaningful, context-rich information from large volumes of
                      unstructured legal, technical, and operational documents.
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
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

                  <div className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-3 sm:mb-4 text-center text-sm sm:text-base">
                      Intelligent Retrieval System Workflow
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                            <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                          </div>
                          <h5 className="font-medium text-slate-900 text-xs sm:text-sm">
                            {step.title}
                          </h5>
                          <p className="text-xs text-slate-500">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    These innovations not only accelerate information extraction
                    but dramatically improve interpretability and relevance
                    across heterogeneous document types.
                  </p>
                </div>
              </Card>
            </div>

            {/* Key Findings Sidebar */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="p-4 sm:p-6 bg-green-50 border border-green-200">
                <h3 className="font-bold text-slate-900 mb-4 sm:mb-6 text-base sm:text-lg">
                  Key Research Findings
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {keyFindings.map((finding, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-bold text-green-700 text-base sm:text-lg block">
                          {finding.percentage}
                        </span>
                        <span className="text-slate-600 text-xs sm:text-sm">
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
          <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                Key Research Areas
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                Focus areas advancing intelligent retrieval systems
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-4 sm:p-6 bg-white border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 text-center h-full group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-green-600 transition-colors text-sm sm:text-base">
                      {area.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
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
