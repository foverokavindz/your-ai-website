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
    'Manual document retrieval systems are time-consuming and inefficient.',
    'Valuable institutional knowledge is lost when experienced personnel leave.',
    'Traditional storage lacks semantic search and intelligent access.',
    'Information fragmentation leads to poor decision-making.',
  ];

  const solutions = [
    'AI-powered knowledge retrieval using Knowledge Graphs + LLMs.',
    'Automated contextualization of historical records.',
    'Glossary-aided disambiguation of domain-specific terminology.',
    'Preserving institutional memory for strategic decision-making.',
  ];

  return (
    <Section id="research-problem" className="py-16 sm:py-20 lg:py-24 bg-white">
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
              Problem & Solution
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight px-4 sm:px-0">
                Research Problem
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Identifying challenges in managing historical data and proposing
                intelligent retrieval solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 px-4 sm:px-0">
            {/* Problems Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-50 border border-red-200 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Current Problems
                </h3>
              </div>

              <Card className="p-4 sm:p-6 lg:p-8 bg-red-50/50 border border-red-200 hover:border-red-300 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4 sm:space-y-6">
                  {problems.map((problem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-2 sm:gap-3 group"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-100 border border-red-200 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <X className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-600" />
                      </div>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
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
              className="space-y-4 sm:space-y-6"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Our Solutions
                </h3>
              </div>

              <Card className="p-4 sm:p-6 lg:p-8 bg-green-50/50 border border-green-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <div className="space-y-4 sm:space-y-6">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-2 sm:gap-3 group"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 border border-green-200 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-600" />
                      </div>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {solution}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ResearchProblem;
