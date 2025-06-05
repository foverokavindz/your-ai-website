import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';

const Milestones = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    {
      date: 'July 2024',
      title: 'Project Initiation',
      description: 'Research planning and initial literature review completed',
    },
    {
      date: 'August 2024',
      title: 'System Design',
      description: 'Architecture design and technology stack selection',
    },
    {
      date: 'August 2024',
      title: 'Prototype Development',
      description: 'Initial prototype and proof of concept implementation',
    },
    {
      date: 'August 2024',
      title: 'Algorithm Implementation',
      description: 'Core machine learning algorithms development',
    },
    {
      date: 'August 2024',
      title: 'User Interface Design',
      description: 'Adaptive UI framework development',
    },
    {
      date: 'December 2024',
      title: 'Testing Phase',
      description: 'Comprehensive testing and validation of the system',
    },
    {
      date: 'February 2025',
      title: 'Performance Optimization',
      description: 'System optimization and performance improvements',
    },
    {
      date: 'March 2025',
      title: 'User Studies',
      description: 'Conducting user studies and feedback collection',
    },
    {
      date: 'March 2025',
      title: 'Documentation',
      description: 'Complete documentation and user guides',
    },
    {
      date: 'May 2025',
      title: 'Final Evaluation',
      description: 'Final system evaluation and performance assessment',
    },
    {
      date: 'May 2025',
      title: 'Project Completion',
      description: 'Project delivery and final presentation',
    },
  ];

  return (
    <Section id="milestones" background="gray">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Milestones
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start"
                >
                  {/* Timeline Node */}
                  <div className="hidden md:flex w-16 h-16 bg-white border-4 border-blue-500 rounded-full items-center justify-center mr-8 flex-shrink-0 relative z-10">
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div className="flex items-center mb-2 md:mb-0">
                        <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {milestone.date}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Milestones;
