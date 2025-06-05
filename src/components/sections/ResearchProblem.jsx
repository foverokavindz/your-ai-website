import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, CheckCircle, Target } from 'lucide-react';
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
    <Section id="research-problem" background="gray">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Research Problem & Solution
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problems */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card>
                {' '}
                <h3 className="text-2xl font-semibold mb-6 text-red-600 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Problems Identified
                </h3>
                <ul className="space-y-4">
                  {problems.map((problem, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start text-gray-700"
                    >
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {problem}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <h3 className="text-2xl font-semibold mb-6 text-green-600 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Proposed Solutions
                </h3>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      {solution}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ResearchProblem;
