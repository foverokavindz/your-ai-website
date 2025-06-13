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
  ArrowRight,
  Star,
  CloudIcon,
  Boxes,
  Blocks,
  Atom,
  ChartSpline,
  AirVentIcon,
} from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const Technologies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const techCategories = [
    {
      title: 'AI and LLMs',
      description: 'Artificial Intelligence and Large Language Models',
      technologies: [
        {
          icon: Brain,
          name: 'llama 3.1',
          description: 'Open-source LLM by Meta',
        },
        {
          icon: Zap,
          name: 'Gemma 3',
          description: ' LLM developed by Google ',
        },
        {
          icon: Layers,
          name: 'DeepInfra & Groq',
          description: 'LLM inference platform',
        },
        {
          icon: AirVentIcon,
          name: 'LangChain',
          description: ' Framework for building LLM applications',
        },
      ],
    },
    {
      title: 'Backend & Data Processing',
      description: 'Text analysis and natural language understanding',
      technologies: [
        { icon: MessageSquare, name: 'Neo4j', description: 'Graph database' },
        {
          icon: Boxes,
          name: 'Flask ',
          description: ' Developed API with python ',
        },
        {
          icon: CloudIcon,
          name: 'Azure services',
          description: 'Azure blob storage',
        },
        {
          icon: Database,
          name: 'MongoDB',
          description: 'Lightweight database',
        },
      ],
    },
    {
      title: 'Frontend Development',
      description: 'Modern web technologies and cloud infrastructure',
      technologies: [
        {
          icon: Blocks,
          name: 'Tailwind Css',
          description: 'Populer CSS library',
        },
        { icon: Atom, name: 'React', description: 'Frontend framework' },
        {
          icon: ContainerIcon,
          name: 'Docker',
          description: 'Containerization',
        },
        { icon: Cloud, name: 'Render', description: 'Cloud deployment' },
      ],
    },
  ];

  return (
    <Section id="technologies" className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12 sm:space-y-16 lg:space-y-20"
        >
          {/* Header Section */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full">
              <Code className="w-3 h-3 sm:w-4 sm:h-4" />
              Technology Stack
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight px-4 sm:px-0">
                Technologies Used
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Cutting-edge tools and frameworks powering our AI-driven
                personalization research
              </p>
            </div>
          </div>

          {/* Technology Categories */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20 px-4 sm:px-0">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="space-y-6 sm:space-y-8 lg:space-y-10"
              >
                {/* Category Header */}
                <div className="text-center space-y-2 sm:space-y-3">
                  <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-xs font-medium px-2 sm:px-3 py-1 rounded-full uppercase tracking-wider">
                    Category {categoryIndex + 1}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Technology Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mx-auto">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + techIndex * 0.1,
                        ease: 'easeOut',
                      }}
                      className="group"
                    >
                      <Card className="p-6 sm:p-8 bg-white border border-slate-200 hover:border-green-200 hover:shadow-xl transition-all duration-300 text-center h-full relative overflow-hidden">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative z-10 space-y-4 sm:space-y-6">
                          {/* Icon */}
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg transition-all duration-300">
                            <tech.icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                          </div>

                          {/* Content */}
                          <div className="space-y-2 sm:space-y-3">
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                              {tech.name}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {tech.description}
                            </p>
                          </div>

                          {/* Hover Effect Indicator */}
                          <div className="w-6 sm:w-8 h-0.5 bg-green-300 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Divider - Only show between categories, not after the last one */}
                {categoryIndex < techCategories.length - 1 && (
                  <div className="flex items-center justify-center pt-6 sm:pt-8">
                    <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0"
          >
            {[
              {
                number: '10+',
                label: 'Technologies',
                icon: Code,
              },
              {
                number: '3',
                label: 'Core Categories',
                icon: Layers,
              },
              {
                number: '100%',
                label: 'Open Source',
                icon: Star,
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 bg-slate-50 border border-slate-200 text-center group hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>

          {/* Bottom CTA Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-br from-slate-50 to-green-50/30 rounded-3xl border border-slate-200 p-8 md:p-12 text-center relative overflow-hidden"
          >

            <div className="absolute top-0 right-0 w-40 h-40 bg-green-100/50 rounded-full -translate-y-20 translate-x-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-200/30 rounded-full translate-y-16 -translate-x-16 blur-2xl"></div>

            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Interested in our tech stack?
                </h3>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Learn more about how we leverage{' '}
                  <span className="text-green-600 font-semibold">
                    modern technologies
                  </span>{' '}
                  to create intelligent user experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View technical details
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-slate-900 px-8 py-4 rounded-xl font-medium border border-slate-200 hover:bg-white hover:scale-105 transition-all duration-300">
                  Documentation
                </button>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Technologies;
