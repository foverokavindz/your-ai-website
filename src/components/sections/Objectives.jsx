import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Target,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  BookOpen,
} from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const Objectives = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const objectives = [
    {
      icon: Target,
      title: 'Design a Knowledge Graph-Based RAG System',
      description:
        'Develop an intelligent system using LLMs, knowledge graphs, and domain glossaries to manage and retrieve information from historical documents and support informed decision-making.',
      number: '01',
      features: [
        'Knowledge Graph + LLM Integration',
        'Context-aware Response Generation',
        'Historical Document Management',
      ],
    },
    {
      icon: Zap,
      title: 'Build Web-Based Document Portal',
      description:
        'Create a secure platform for uploading, viewing, validating, and deleting historical records by authorized users.',
      number: '02',
      features: [
        'Centralized repository',
        'Document versioning',
        'User permissions',
      ],
    },
    {
      icon: Users,
      title: 'Extract Structured Knowledge',
      description:
        'Transform unstructured documents into knowledge graph representations to enable semantic organization and search.',
      number: '03',
      features: [
        'Entity and relation extraction',
        'Knowledge graph modeling',
        'Semantic search support',
      ],
    },
    {
      icon: BookOpen, // or another suitable icon
      title: 'Enable Natural Language Interaction',
      description:
        'Provide a user-friendly interface that allows users to ask questions naturally and receive domain-aware responses.',
      number: '04',
      features: [
        'Natural language queries',
        'Glossary-assisted interpretation',
        'LLM-enhanced responses',
      ],
    },
  ];

  return (
    <Section id="objectives" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
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
              <Target className="w-3 h-3 sm:w-4 sm:h-4" />
              Strategic Goals
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight px-4 sm:px-0">
                Research Objectives
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Our step-by-step approach to revolutionizing UI personalization
                through intelligent systems
              </p>
            </div>
          </div>

          {/* Step-by-Step Timeline */}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-0">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              {/* Vertical Line - Left Side */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-green-300 to-green-400"></div>

              <div className="space-y-12 pl-32">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Circle Node - Positioned on the line */}
                    <div className="absolute -left-32 top-4.5">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        className="w-16 h-16 bg-white border-4 border-green-500 rounded-full flex items-center justify-center shadow-lg relative z-10"
                      >
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </motion.div>
                    </div>

                    {/* Connecting Line to Card */}
                    <div className="absolute -left-14 top-12 w-10 h-0.5 bg-green-300"></div>

                    {/* Card */}
                    <Card className="p-8 bg-white border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 group">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <objective.icon className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                            Step {objective.number}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                            {objective.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {objective.description}
                          </p>
                        </div>
                        <div className="space-y-2">
                          {objective.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-2 text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-slate-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <button className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm transition-colors group-hover:gap-3">
                          Learn more
                          <ArrowRight className="w-4 h-4 transition-all duration-300" />
                        </button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden">
              {/* Vertical Line */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-green-300 to-green-400"></div>

              <div className="space-y-6 sm:space-y-8">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative flex items-start gap-4 sm:gap-6"
                  >
                    {/* Timeline Node */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white border-4 border-green-500 rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 min-w-0">
                      <Card className="p-4 sm:p-6 bg-white border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 group">
                        <div className="space-y-4 sm:space-y-6">
                          {/* Header with Icon and Number */}
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <objective.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                            </div>
                            <div className="text-xs sm:text-sm font-bold text-green-600 bg-green-50 px-2 sm:px-3 py-1 rounded-full">
                              Step {objective.number}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="space-y-2 sm:space-y-3">
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                              {objective.title}
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                              {objective.description}
                            </p>
                          </div>

                          {/* Features List */}
                          <div className="space-y-1.5 sm:space-y-2">
                            {objective.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-2 text-xs sm:text-sm"
                              >
                                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                                <span className="text-slate-600">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Action Button */}
                          <button className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-xs sm:text-sm transition-colors group-hover:gap-3 touch-manipulation">
                            Learn more
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300" />
                          </button>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 relative"
          >

            <div className="absolute top-4 right-4 w-20 h-20 bg-green-50 rounded-full opacity-50"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-green-100 rounded-full opacity-30"></div>

            <div className="text-center space-y-6 relative z-10">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Ready to transform UI experiences
                </h3>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  These strategic objectives form a comprehensive roadmap to
                  create{' '}
                  <span className="text-green-600 font-semibold">
                    truly adaptive interfaces
                  </span>{' '}
                  that understand and evolve with users.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  View methodology
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Research timeline
                </button>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Objectives;
