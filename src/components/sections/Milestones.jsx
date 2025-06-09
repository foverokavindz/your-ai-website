import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const Milestones = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    {
      date: 'July 2024',
      title: 'Topic Selection',
      description: 'Initial literature review and topic finalization',
      status: 'completed',
      quarter: 'Q3 2024',
    },
    {
      date: 'August 2024',
      title: 'Doamin Analysis',
      description: 'Comprehensive domain analysis and requirements gathering',
      status: 'completed',
      quarter: 'Q3 2024',
    },
    {
      date: 'August 2024',
      title: 'Learn AI and LLMs',
      description:
        'Introduction to AI and LLMs, foundational knowledge acquisition',
      status: 'completed',
      quarter: 'Q3 2024',
    },
    {
      date: 'September 2024',
      title: 'Requirements Gathering & Literature Review',
      description: 'Detailed requirements gathering and literature review',
      status: 'completed',
      quarter: 'Q3 2024',
    },
    {
      date: 'October 2024',
      title: 'System Design',
      description: 'System architecture design and technology stack selection',
      status: 'completed',
      quarter: 'Q4 2024',
    },
    {
      date: 'November 2024',
      title: 'Data Collection',
      description: 'Data collection and preprocessing for model training',
      status: 'completed',
      quarter: 'Q4 2024',
    },
    {
      date: 'December 2024',
      title: 'Literature Review',
      description:
        'Comprehensive literature review and analysis of existing solutions',
      status: 'completed',
      quarter: 'Q4 2024',
    },
    {
      date: 'January 2025',
      title: 'Fronetend Development',
      description: 'Initial frontend development and UI design',
      status: 'completed',
      quarter: 'Q1 2025',
    },
    {
      date: 'February 2025',
      title: 'Backend Development',
      description: 'Backend architecture setup and API development',
      status: 'completed',
      quarter: 'Q1 2025',
    },
    {
      date: 'March 2025',
      title: 'Complete AI Integration',
      description: 'Integration of AI models with frontend and backend',
      status: 'completed',
      quarter: 'Q1 2025',
    },
    {
      date: 'April 2025',
      title: 'Second Progress Review',
      description: 'Mid-project review and adjustments based on feedback',
      status: 'completed',
      quarter: 'Q2 2025',
    },
    {
      date: 'May 2025',
      title: 'Final Testing',
      description: 'Comprehensive testing and bug fixing before deployment',
      status: 'completed',
      quarter: 'Q2 2025',
    },
    {
      date: 'June 2025',
      title: 'Performance Optimization',
      description: 'Optimization of system performance and user experience',
      status: 'completed',
      quarter: 'Q2 2025',
    },
  ];

  const getStatusColor = (status) => {
    return 'bg-green-100 text-green-700 border-green-200';
  };

  const getNodeColor = (status) => {
    return 'border-green-500 bg-green-500';
  };

  return (
    <Section id="milestones" className="py-24 bg-slate-50">
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
              <CheckCircle className="w-4 h-4" />
              Achievements
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Milestones Achieved
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Key accomplishments and deliverables completed throughout our
                research journey
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-200 via-green-300 to-green-400"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="relative grid grid-cols-12 items-center gap-8"
                >
                  {/* Left Content (for even indices) */}
                  <div
                    className={`col-span-5 ${
                      index % 2 === 0 ? 'order-1' : 'order-1 invisible'
                    }`}
                  >
                    {index % 2 === 0 && (
                      <Card className="p-6 bg-white border border-slate-200 hover:border-green-200 hover:shadow-md transition-all duration-300 group">
                        <div className="space-y-4">
                          {/* Date Badge */}
                          <div className="flex items-center justify-end">
                            <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium border bg-green-100 text-green-700 border-green-200">
                              {milestone.date}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors text-right">
                            {milestone.title}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 leading-relaxed text-right">
                            {milestone.description}
                          </p>

                          {/* Status Badge */}
                          <div className="flex justify-end">
                            <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                              ✓ Completed
                            </span>
                          </div>
                        </div>
                      </Card>
                    )}
                  </div>

                  {/* Center Timeline Node */}
                  <div className="col-span-2 order-2 flex justify-center">
                    <div className="w-16 h-16 border-green-500 bg-green-500 rounded-full flex items-center justify-center shadow-lg relative z-10 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Right Content (for odd indices) */}
                  <div
                    className={`col-span-5 ${
                      index % 2 === 1 ? 'order-3' : 'order-3 invisible'
                    }`}
                  >
                    {index % 2 === 1 && (
                      <Card className="p-6 bg-white border border-slate-200 hover:border-green-200 hover:shadow-md transition-all duration-300 group">
                        <div className="space-y-4">
                          {/* Date Badge */}
                          <div className="flex items-center justify-start">
                            <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium border bg-green-100 text-green-700 border-green-200">
                              {milestone.date}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors text-left">
                            {milestone.title}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-600 leading-relaxed text-left">
                            {milestone.description}
                          </p>

                          {/* Status Badge */}
                          <div className="flex justify-start">
                            <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                              ✓ Completed
                            </span>
                          </div>
                        </div>
                      </Card>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10 space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Research Progress Summary
                </h3>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  We've successfully completed{' '}
                  <span className="text-green-600 font-semibold">
                    {milestones.length} major milestones
                  </span>{' '}
                  in our AI-driven UI personalization research project.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  View detailed progress
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  Download report
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Milestones;
