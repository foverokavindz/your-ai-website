import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Target,
  Lightbulb,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const ProjectScope = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scopeAreas = [
    {
      icon: Target,
      title: 'AI-Powered Personalization',
      description:
        'Intelligent system that adapts user interfaces based on behavior analysis and preferences extracted from historical documents',
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description:
        'Focus on enhancing user experience through adaptive and responsive interface elements for querying historical data',
    },
    {
      icon: Zap,
      title: 'Real-time Adaptation',
      description:
        'Dynamic interface modifications that evolve with user patterns and feedback within the document management portal',
    },
  ];

  const keyFeatures = [
    'Web-based document management portal',
    'LLMs integration for context-aware responses',
    'Structured knowledge base from historical document',
    'Domain-specific glossary for accurate terminology',
    'User-friendly interface ',
    'Systems future needs (Scalability and adaptability ',
  ];

  return (
    <Section id="project-scope" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
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
              <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" />
              Research Overview
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight px-4 sm:px-0">
                Project Scope
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Developing a Knowledge Graph-based 
                Retrieval Augmented Generation (RAG) system for  Information Extraction
              </p>
            </div>
          </div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="px-4 sm:px-0"
          >
            <Card className="p-6 sm:p-8 lg:p-12 bg-white border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Content */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                      Graph RAG System & Domain Specific Glossary
                    </h3>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                      Develop a{' '}
                      <span className="text-green-600 font-semibold">
                        Graph RAG system
                      </span>{' '}
                      integrated to improve organizations' ability to manage,
                      retrieve, and utilize{' '}
                      <span className="text-green-600 font-semibold">
                        historical documents
                      </span>{' '}
                      with the help of an externally managed{' '}
                      <span className="text-green-600 font-semibold">
                        domain-specific glossary
                      </span>{' '}
                      This system will aid decision-making by providing
                      accurate, contextually relevant information based on of
                      documented institutional actions, decisions, and
                      domain-specific knowledge.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                      Key Features:
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                      {keyFeatures.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: 0.4 + index * 0.1,
                            duration: 0.5,
                          }}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-slate-600">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="relative order-first lg:order-last">
                  <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 border border-green-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                          <Target className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                          Research Focus
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                        {[
                          'Artificial Intelligence',
                          'Knowledge Graph',
                          'Modern Web App',
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="bg-white rounded-lg p-2 sm:p-3 border border-green-100"
                          >
                            <div className="text-xs sm:text-sm font-medium text-green-700">
                              {item}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Scope Areas */}
          {/* <div className="space-y-6 sm:space-y-8 px-4 sm:px-0">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                Research Areas
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                Core focus areas that define our project boundaries
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {scopeAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-6 sm:p-8 bg-white border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 text-center h-full group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors text-sm sm:text-base">
                      {area.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {area.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div> */}

          {/* Bottom CTA */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10 space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Ready to explore our approach?
                </h3>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Discover how our{' '}
                  <span className="text-green-600 font-semibold">
                    research methodology
                  </span>{' '}
                  addresses the challenges of managing historical documents.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  View objectives
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Explore methodology
                </button>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </Container>
    </Section>
  );
};

export default ProjectScope;
