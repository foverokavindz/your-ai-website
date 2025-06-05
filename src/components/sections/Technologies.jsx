import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  Database,
  Brain,
  Globe,
  Cpu,
  Layers,
  BarChart3,
  Cloud,
  Container as ContainerIcon,
  MessageSquare,
  Zap,
  Server,
} from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';

const Technologies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    { icon: Code, name: 'Python', color: 'from-blue-500 to-blue-600' },
    { icon: Globe, name: 'React', color: 'from-cyan-500 to-cyan-600' },
    { icon: Brain, name: 'TensorFlow', color: 'from-orange-500 to-orange-600' },
    {
      icon: MessageSquare,
      name: 'spaCy',
      color: 'from-green-500 to-green-600',
    },
    { icon: Zap, name: 'OpenAI', color: 'from-purple-500 to-purple-600' },
    { icon: Layers, name: 'Keras', color: 'from-red-500 to-red-600' },
    { icon: BarChart3, name: 'NumPy', color: 'from-indigo-500 to-indigo-600' },
    { icon: Database, name: 'FAISS-CPU', color: 'from-pink-500 to-pink-600' },
    { icon: Database, name: 'SQLite', color: 'from-gray-500 to-gray-600' },
    { icon: MessageSquare, name: 'NLTK', color: 'from-teal-500 to-teal-600' },
    { icon: ContainerIcon, name: 'Docker', color: 'from-blue-600 to-blue-700' },
    { icon: Cloud, name: 'Render', color: 'from-violet-500 to-violet-600' },
  ];

  return (
    <Section id="technologies">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Technologies Used
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Technologies;
