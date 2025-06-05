import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  AlertTriangle,
  CheckCircle,
  Target,
  ArrowRight,
  X,
} from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const ResearchProblem = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    "Static interfaces that don't adapt to user preferences",
    'Lack of intelligent behavior analysis',
    'Poor accessibility for users with different needs',
    'Generic user experiences across different contexts',
  ];

  const solutions = [
    'AI-powered dynamic interface adaptation',
    'Advanced user behavior pattern recognition',
    'Vision-aware accessibility features',
    'Context-sensitive personalization algorithms',
  ];

  return (
    <Section id="research-problem" className="py-24 bg-white">
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
              <Target className="w-4 h-4" />
              Problem & Solution
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Research Challenge
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Identifying key problems in current UI systems and proposing
                innovative solutions
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problems Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-50 border border-red-200 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Current Problems
                </h3>
              </div>

              <Card className="p-8 bg-red-50/50 border border-red-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  {problems.map((problem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-6 h-6 bg-red-100 border border-red-200 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <X className="w-3 h-3 text-red-600" />
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        {problem}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Solutions Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Our Solutions
                </h3>
              </div>

              <Card className="p-8 bg-green-50/50 border border-green-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-6 h-6 bg-green-100 border border-green-200 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        {solution}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Solution Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <Card className="p-8 md:p-12 bg-slate-50 border border-slate-200">
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Solution Implementation Flow
                </h4>
                <p className="text-slate-600">
                  How our research addresses the identified problems
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {[
                  {
                    title: 'Problem Analysis',
                    desc: 'Identify UI limitations',
                    color: 'red',
                  },
                  {
                    title: 'AI Integration',
                    desc: 'Apply machine learning',
                    color: 'blue',
                  },
                  {
                    title: 'Smart Adaptation',
                    desc: 'Dynamic personalization',
                    color: 'green',
                  },
                ].map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                          step.color === 'red'
                            ? 'bg-red-50 border border-red-200'
                            : step.color === 'blue'
                            ? 'bg-blue-50 border border-blue-200'
                            : 'bg-green-50 border border-green-200'
                        }`}
                      >
                        <span
                          className={`text-2xl font-bold ${
                            step.color === 'red'
                              ? 'text-red-600'
                              : step.color === 'blue'
                              ? 'text-blue-600'
                              : 'text-green-600'
                          }`}
                        >
                          {index + 1}
                        </span>
                      </div>
                      <h5 className="font-semibold text-slate-900 mb-1">
                        {step.title}
                      </h5>
                      <p className="text-sm text-slate-600">{step.desc}</p>
                    </div>
                    {index < 2 && (
                      <ArrowRight className="w-6 h-6 text-slate-400 hidden md:block" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10 space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Ready to see our approach?
                </h3>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Explore how our{' '}
                  <span className="text-green-600 font-semibold">
                    innovative solutions
                  </span>{' '}
                  tackle these challenges systematically.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  View objectives
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-lg font-medium border border-slate-200 hover:bg-slate-50 transition-colors">
                  Explore methodology
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ResearchProblem;
