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
      color: 'blue',
    },
    {
      icon: MessageSquare,
      title: 'Chatbot Support',
      description: 'Natural language document queries',
      color: 'green',
    },
    {
      icon: Network,
      title: 'Mind Maps',
      description: 'Visual content comprehension',
      color: 'purple',
    },
    {
      icon: Eye,
      title: 'Accessibility',
      description: 'Dynamic theme adaptation',
      color: 'emerald',
    },
  ];

  return (
    <Section
      id="literature-survey"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Enhanced background with multiple gradients and mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/20 to-transparent"></div>

      {/* Animated mesh background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-200/40 to-green-200/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '5s' }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '7s', animationDelay: '1s' }}
        ></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-32 left-16 w-3 h-3 bg-emerald-300/40 rotate-45 animate-bounce"
          style={{ animationDelay: '0.5s', animationDuration: '4s' }}
        ></div>
        <div
          className="absolute top-20 right-32 w-5 h-5 bg-green-200/40 rounded-full animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Ultra-modern header */}
          <div className="text-center mb-16 relative">
            {/* Advanced particle system */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-96 h-48">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full animate-ping"
                  style={{
                    left: `${20 + ((i * 5) % 60)}%`,
                    top: `${10 + ((i * 7) % 80)}%`,
                    backgroundColor: [
                      '#10b981',
                      '#059669',
                      '#3b82f6',
                      '#06b6d4',
                    ][i % 4],
                    animationDelay: `${(i * 0.2) % 3}s`,
                    animationDuration: `${2 + (i % 3)}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* Glassmorphism icon container */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{
                delay: 0.2,
                duration: 0.6,
                type: 'spring',
                stiffness: 150,
              }}
              className="relative inline-flex items-center justify-center w-24 h-24 mb-8 group cursor-pointer"
            >
              {/* Multiple layered backgrounds for depth */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-[2rem] border border-emerald-200/40 shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-white/40 to-white/10 rounded-[1.75rem] opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-green-400/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              {/* Animated rings */}
              <div className="absolute -inset-4 bg-emerald-200/30 rounded-[3rem] animate-pulse"></div>

              <BookOpen className="w-12 h-12 text-emerald-600 relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </motion.div>

            {/* Enhanced typography section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Floating badge */}
              <div className="relative inline-block">
                <span className="inline-flex items-center px-6 py-2 bg-white/60 backdrop-blur-xl text-emerald-700 text-sm font-semibold rounded-full border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
                  Research Foundation
                  <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </span>
              </div>

              {/* Main title with advanced effects */}
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-4 tracking-tight leading-none">
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  Literature
                </span>{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 bg-size-200 animate-gradient-x hover:scale-105 transition-transform duration-300">
                    Survey
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/20 to-green-600/20 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </span>
              </h2>

              {/* Enhanced subtitle */}
              <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                Examining the{' '}
                <span className="font-semibold text-emerald-700">
                  current landscape
                </span>{' '}
                of{' '}
                <span className="font-semibold text-green-700">
                  UI personalization research
                </span>
              </p>
            </motion.div>

            {/* Advanced decorative element */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 1.2, ease: 'easeInOut' }}
              className="flex items-center justify-center space-x-3 mt-8"
            >
              <div className="flex items-center space-x-1">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-400 to-emerald-500"></div>
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-emerald-500/50 animate-pulse"></div>
              </div>
              <div className="w-20 h-px bg-gradient-to-r from-emerald-500 via-green-500 to-blue-500 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 animate-pulse blur-sm"></div>
              </div>
              <div className="flex items-center space-x-1">
                <div
                  className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                ></div>
                <div className="w-12 h-px bg-gradient-to-r from-green-500 via-blue-400 to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Ultra-modern main content card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-6xl mx-auto mb-12 relative"
          >
            {/* Background glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 hover:opacity-100 transition-all duration-700"></div>

            <Card className="relative bg-white/40 backdrop-blur-2xl border border-green-100/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden rounded-3xl">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute inset-[1px] bg-white/90 backdrop-blur-xl rounded-3xl border border-green-50/50"></div>

              {/* Floating elements inside card */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-emerald-100/30 to-green-100/30 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-blue-100/20 to-emerald-100/20 rounded-full blur-lg animate-pulse"
                style={{ animationDelay: '1s' }}
              ></div>

              <div className="relative p-10 md:p-16">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left Column - Main Text */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Enhanced quote decoration */}
                    <div className="absolute top-6 left-6 text-8xl text-emerald-100/60 font-serif leading-none select-none transform hover:scale-110 transition-transform duration-300">
                      "
                    </div>

                    <div className="bg-emerald-50/60 backdrop-blur-sm border-l-4 border-emerald-400 p-6 rounded-r-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-transparent"></div>
                      <p className="text-gray-700 leading-relaxed text-lg relative z-10">
                        <strong>User Interface (UI) personalization</strong> has
                        emerged as a vital research area within Human Computer
                        Interaction (HCI), especially as the volume of digital
                        content and diversity of user needs continue to grow.
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg">
                      Traditional static UI designs are no longer sufficient to
                      address cognitive, behavioral, and accessibility demands.
                      Research has demonstrated that{' '}
                      <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 font-semibold">
                          adaptive interfaces
                        </span>
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-600 to-green-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                      </span>
                      , particularly those enhanced through Artificial
                      Intelligence (AI), lead to significant improvements in
                      usability, task efficiency, and user engagement [1].
                    </p>

                    {/* Enhanced Process Diagram */}
                    <div className="bg-gradient-to-br from-gray-50/80 to-emerald-50/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-green-400/5 to-blue-400/5"></div>
                      <h4 className="font-bold text-gray-800 mb-6 text-center text-xl relative z-10">
                        Figure 1: AI-Powered UI Personalization
                      </h4>
                      <div className="flex justify-center items-center space-x-6 overflow-x-auto relative z-10">
                        <div className="flex-shrink-0 bg-white/80 backdrop-blur-sm border-2 border-blue-300/60 rounded-2xl p-6 text-center min-w-[140px] shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <BookOpen className="w-10 h-10 mx-auto mb-3 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                          <div className="text-sm font-semibold text-gray-800">
                            Data Input
                          </div>
                          <div className="text-xs text-gray-600">
                            User behavior
                          </div>
                        </div>
                        <div className="text-emerald-400 text-2xl">→</div>
                        <div className="flex-shrink-0 bg-yellow-50/80 backdrop-blur-sm border-2 border-yellow-300/60 rounded-2xl p-6 text-center min-w-[140px] shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <Brain className="w-10 h-10 mx-auto mb-3 text-yellow-600 group-hover:scale-110 transition-transform duration-300" />
                          <div className="text-sm font-semibold text-gray-800">
                            AI Processing
                          </div>
                          <div className="text-xs text-gray-600">
                            Pattern analysis
                          </div>
                        </div>
                        <div className="text-emerald-400 text-2xl">→</div>
                        <div className="flex-shrink-0 bg-emerald-50/80 backdrop-blur-sm border-2 border-emerald-300/60 rounded-2xl p-6 text-center min-w-[140px] shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <Network className="w-10 h-10 mx-auto mb-3 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                          <div className="text-sm font-semibold text-gray-800">
                            Personalization
                          </div>
                          <div className="text-xs text-gray-600">
                            UI adaptation
                          </div>
                        </div>
                        <div className="text-emerald-400 text-2xl">→</div>
                        <div className="flex-shrink-0 bg-green-50/80 backdrop-blur-sm border-2 border-green-300/60 rounded-2xl p-6 text-center min-w-[140px] shadow-lg hover:shadow-xl transition-all duration-300 group">
                          <TrendingUp className="w-10 h-10 mx-auto mb-3 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                          <div className="text-sm font-semibold text-gray-800">
                            Output Feedback
                          </div>
                          <div className="text-xs text-gray-600">
                            User metrics
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg">
                      Recent advances in abstractive summarization using{' '}
                      <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 font-semibold">
                          Large Language Models (LLMs)
                        </span>
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-blue-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                      </span>
                      , such as OpenAI's GPT-3.5, have enabled high-context,
                      human-like summary generation, suitable for real-time
                      personalized experiences in browser extensions like
                      ReactiveWeb [3].
                    </p>
                  </div>

                  {/* Right Column - Key Findings */}
                  <div className="lg:col-span-1">
                    <div className="bg-blue-50/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/60 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-emerald-400/5"></div>
                      <h3 className="font-bold text-gray-800 mb-8 text-xl relative z-10">
                        Key Findings
                      </h3>
                      <div className="space-y-6 relative z-10">
                        {keyFindings.map((finding, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              delay: 0.8 + index * 0.1,
                              duration: 0.5,
                            }}
                            className="flex items-start space-x-4 group"
                          >
                            <div className="w-4 h-4 bg-blue-500 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300"></div>
                            <div>
                              <span className="font-bold text-blue-700 text-xl block">
                                {finding.percentage}
                              </span>
                              <span className="text-gray-600 text-sm leading-relaxed">
                                {finding.text}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Enhanced Research Areas Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-12"
          >
            <div className="grid md:grid-cols-4 gap-6">
              {researchAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Background glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 via-green-400/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  <Card className="text-center p-8 h-full hover:shadow-2xl transition-all duration-500 bg-white/60 backdrop-blur-xl border border-green-100/60 relative overflow-hidden rounded-2xl group cursor-pointer">
                    {/* Floating decorative elements */}
                    <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-emerald-100/30 to-green-100/30 rounded-full blur-md animate-pulse"></div>

                    <div className="relative">
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-${area.color}-100/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                      >
                        <area.icon
                          className={`w-10 h-10 text-${area.color}-600 group-hover:scale-110 transition-transform duration-300`}
                        />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-3 text-lg group-hover:text-emerald-700 transition-colors duration-300">
                        {area.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced References Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="bg-white/60 backdrop-blur-2xl border border-green-100/60 shadow-2xl rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-10">
                {/* Enhanced section header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="relative w-12 h-12">
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-xl shadow-lg border border-green-100/60"></div>
                    <div className="relative flex items-center justify-center w-full h-full">
                      <FileText className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 text-2xl">
                    References
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-gray-600">
                  {[
                    'Liu, J., et al. (2024). Adaptive User Interfaces. ACM Transactions.',
                    'SummarizerBot. (2023). AI-Powered Summary Tool.',
                    'Brown, T. et al. (2020). Language Models are Few-Shot Learners.',
                    'Ghodzhathiran, A. & Zabeeallathshah, M. (2023). SumiRoom.',
                    'Richardson, E., et al. (2023). Automatic Mind Map Generation.',
                  ].map((ref, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.6 + index * 0.1, duration: 0.4 }}
                      className="flex items-start space-x-3 hover:bg-emerald-50/50 p-3 rounded-lg transition-colors duration-300 group/ref"
                    >
                      <span className="font-semibold text-emerald-600 mt-0.5 group-hover/ref:scale-110 transition-transform duration-300">
                        {index + 1}.
                      </span>
                      <span className="leading-relaxed">{ref}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Enhanced bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex justify-center mt-16"
          >
            <div className="flex items-center space-x-4">
              {[
                { color: 'emerald', delay: '0s' },
                { color: 'green', delay: '0.3s' },
                { color: 'blue', delay: '0.6s' },
              ].map((dot, index) => (
                <div key={index} className="relative">
                  <div
                    className={`w-3 h-3 bg-${dot.color}-400 rounded-full animate-pulse shadow-lg shadow-${dot.color}-400/50`}
                    style={{ animationDelay: dot.delay }}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-${dot.color}-400 rounded-full animate-ping opacity-20`}
                    style={{
                      animationDelay: dot.delay,
                      animationDuration: '2s',
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Custom CSS for advanced animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </Section>
  );
};

export default LiteratureSurvey;
