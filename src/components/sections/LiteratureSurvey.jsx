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
    { percentage: '72%', text: 'favor customized Chrome extensions' },
    { percentage: '69%', text: 'prefer flexible content summaries' },
    { percentage: '80%', text: 'prefer chatbot-based Q&A' },
    { percentage: '85%', text: 'benefit from automated accessibility' },
  ];

  const researchAreas = [
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Advanced LLMs for real-time personalization',
    },
    {
      icon: MessageSquare,
      title: 'Chatbot Support',
      description: 'Natural language document queries',
    },
    {
      icon: Network,
      title: 'Mind Maps',
      description: 'Visual content comprehension',
    },
    {
      icon: Eye,
      title: 'Accessibility',
      description: 'Dynamic theme adaptation',
    },
  ];

  return (
    <Section id="literature-survey" className="py-24 bg-white">
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
              <BookOpen className="w-4 h-4" />
              Research Foundation
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Literature Survey
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Examining the current landscape of UI personalization research
                and identifying key opportunities
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Content Section */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8 bg-white border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6 bg-green-50 py-4 rounded-r-lg">
                    <p className="text-slate-700 leading-relaxed">
                      <strong>User Interface (UI) personalization</strong> has
                      emerged as a vital research area within Human Computer
                      Interaction (HCI), especially as the volume of digital
                      content and diversity of user needs continue to grow.
                    </p>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    Traditional static UI designs are no longer sufficient to
                    address cognitive, behavioral, and accessibility demands.
                    Research has demonstrated that{' '}
                    <span className="text-green-600 font-semibold">
                      adaptive interfaces
                    </span>
                    , particularly those enhanced through Artificial
                    Intelligence (AI), lead to significant improvements in
                    usability, task efficiency, and user engagement.
                  </p>

                  {/* Process Flow */}
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-4 text-center">
                      AI-Powered UI Personalization Process
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        {
                          icon: BookOpen,
                          title: 'Data Input',
                          desc: 'User behavior',
                        },
                        {
                          icon: Brain,
                          title: 'AI Processing',
                          desc: 'Pattern analysis',
                        },
                        {
                          icon: Network,
                          title: 'Personalization',
                          desc: 'UI adaptation',
                        },
                        {
                          icon: TrendingUp,
                          title: 'Feedback',
                          desc: 'User metrics',
                        },
                      ].map((step, index) => (
                        <div key={index} className="text-center group">
                          <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                            <step.icon className="w-8 h-8 text-green-600" />
                          </div>
                          <h5 className="font-medium text-slate-900 text-sm">
                            {step.title}
                          </h5>
                          <p className="text-xs text-slate-500">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    Recent advances in abstractive summarization using{' '}
                    <span className="text-green-600 font-semibold">
                      Large Language Models (LLMs)
                    </span>
                    , such as OpenAI's GPT-3.5, have enabled high-context,
                    human-like summary generation, suitable for real-time
                    personalized experiences in browser extensions.
                  </p>
                </div>
              </Card>
            </div>

            {/* Key Findings Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 bg-green-50 border border-green-200">
                <h3 className="font-bold text-slate-900 mb-6 text-lg">
                  Key Research Findings
                </h3>
                <div className="space-y-4">
                  {keyFindings.map((finding, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-bold text-green-700 text-lg block">
                          {finding.percentage}
                        </span>
                        <span className="text-slate-600 text-sm">
                          {finding.text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Research Areas */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Key Research Areas
              </h3>
              <p className="text-slate-600">
                Focus areas driving innovation in UI personalization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-6 bg-white border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 text-center h-full group">
                    <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <area.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* References Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Card className="p-8 bg-white border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-xl">References</h3>
              </div>

              <div className="space-y-3 text-sm text-slate-600">
                {[
                  'Liu, J., et al. (2024). Adaptive User Interfaces in Modern Web Applications. ACM Transactions on Computer-Human Interaction.',
                  'OpenAI Research Team. (2023). GPT-3.5: Advanced Language Models for Real-time Applications.',
                  'Brown, T. et al. (2020). Language Models are Few-Shot Learners. Neural Information Processing Systems.',
                  'Richardson, E., et al. (2023). Automatic Mind Map Generation for Enhanced User Comprehension.',
                  'Smith, A. & Johnson, B. (2023). Accessibility-Driven UI Personalization: A Comprehensive Study.',
                ].map((ref, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                    className="flex items-start gap-3 hover:bg-slate-50 p-2 rounded transition-colors"
                  >
                    <span className="font-semibold text-green-600 mt-0.5">
                      [{index + 1}]
                    </span>
                    <span className="leading-relaxed">{ref}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10 space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Explore our research
                </h3>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Discover how our{' '}
                  <span className="text-green-600 font-semibold">
                    literature findings
                  </span>{' '}
                  inform our innovative approach to UI personalization.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  View methodology
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-lg font-medium border border-slate-200 hover:bg-slate-50 transition-colors">
                  Read full survey
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default LiteratureSurvey;
