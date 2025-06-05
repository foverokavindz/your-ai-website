import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const ProjectScope = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section
      id="project-scope"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Enhanced background with multiple gradients and mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"></div>

      {/* Animated mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-r from-green-200/40 to-emerald-200/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-200/20 to-green-200/20 rounded-full blur-2xl animate-spin"
          style={{ animationDuration: '20s' }}
        ></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-4 h-4 border-2 border-green-300/50 rotate-45 animate-bounce"
          style={{ animationDelay: '0s', animationDuration: '3s' }}
        ></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-emerald-200/30 rounded-full animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-3 h-3 bg-blue-300/40 transform rotate-45 animate-pulse"
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
                  className={`absolute w-1 h-1 rounded-full animate-ping`}
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${10 + Math.random() * 80}%`,
                    backgroundColor: [
                      '#10b981',
                      '#059669',
                      '#3b82f6',
                      '#06b6d4',
                    ][Math.floor(Math.random() * 4)],
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                ></div>
              ))}
            </div>

            {/* Glassmorphism icon container */}
            <motion.div
              initial={{ scale: 0, rotate: -360, opacity: 0 }}
              animate={inView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
              transition={{
                delay: 0.2,
                duration: 0.8,
                type: 'spring',
                stiffness: 100,
              }}
              className="relative inline-flex items-center justify-center w-24 h-24 mb-8 group cursor-pointer"
            >
              {/* Multiple layered backgrounds for depth */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-[2rem] border border-green-200/40 shadow-2xl group-hover:shadow-3xl transition-all duration-500"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-white/40 to-white/10 rounded-[1.75rem] opacity-50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              {/* Animated rings */}
              <div
                className="absolute -inset-2 border-2 border-green-300/30 rounded-[2.5rem] animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ animationDuration: '8s' }}
              ></div>
              <div className="absolute -inset-4 border border-green-200/30 rounded-[3rem] animate-pulse"></div>

              <svg
                className="w-12 h-12 text-green-600 relative z-10 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
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
                <span className="inline-flex items-center px-6 py-2 bg-white/60 backdrop-blur-xl text-green-700 text-sm font-semibold rounded-full border border-green-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  Research Overview
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
                  Project
                </span>{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-size-200 animate-gradient-x hover:scale-105 transition-transform duration-300">
                    Scope
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-600/20 to-emerald-600/20 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </span>
              </h2>

              {/* Enhanced subtitle */}
              <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                Defining the{' '}
                <span className="font-semibold text-green-700">boundaries</span>{' '}
                and{' '}
                <span className="font-semibold text-emerald-700">
                  objectives
                </span>{' '}
                of our intelligent interface research
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
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-green-400 to-green-500"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse"></div>
              </div>
              <div className="w-20 h-px bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse blur-sm"></div>
              </div>
              <div className="flex items-center space-x-1">
                <div
                  className="w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50 animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                ></div>
                <div className="w-12 h-px bg-gradient-to-r from-emerald-500 via-blue-400 to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Ultra-modern card with advanced glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-5xl mx-auto relative"
          >
            {/* Background glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 hover:opacity-100 transition-all duration-700"></div>

            <Card className="relative bg-white/40 backdrop-blur-2xl border border-green-100/50 shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden rounded-3xl">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute inset-[1px] bg-white/90 backdrop-blur-xl rounded-3xl border border-green-50/50"></div>

              {/* Floating elements inside card */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-green-100/30 to-emerald-100/30 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-blue-100/20 to-green-100/20 rounded-full blur-lg animate-pulse"
                style={{ animationDelay: '1s' }}
              ></div>

              <div className="relative p-10 md:p-16">
                {/* Enhanced quote decoration */}
                <div className="absolute top-6 left-6 text-8xl text-green-100/60 font-serif leading-none select-none transform hover:scale-110 transition-transform duration-300">
                  "
                </div>

                <div className="flex items-start space-x-6">
                  {/* Advanced content icon */}
                  <div className="flex-shrink-0 mt-2">
                    <div className="relative w-16 h-16 group cursor-pointer">
                      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-green-100/60 group-hover:shadow-2xl transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 to-emerald-50/60 rounded-2xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center w-full h-full">
                        <svg
                          className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced text content */}
                  <div className="flex-1 space-y-8">
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                      This research project focuses on developing an{' '}
                      <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-bold">
                          intelligent system
                        </span>
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                      </span>{' '}
                      for personalizing software user interfaces based on user
                      feedback and behavior analysis. The goal is to enhance
                      user experience by creating{' '}
                      <span className="relative inline-block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 font-bold">
                          adaptive interfaces
                        </span>
                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-600 to-blue-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-300"></div>
                      </span>{' '}
                      that evolve with user preferences and usage patterns.
                    </p>

                    {/* Modern feature tags */}
                    <div className="flex flex-wrap gap-4">
                      {[
                        { color: 'green', text: 'AI-Powered', icon: '🤖' },
                        { color: 'emerald', text: 'User-Centric', icon: '👥' },
                        { color: 'blue', text: 'Adaptive', icon: '⚡' },
                      ].map((tag, index) => (
                        <motion.div
                          key={tag.text}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                          className={`flex items-center space-x-3 px-6 py-3 bg-white/70 backdrop-blur-xl rounded-2xl border border-green-100/60 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer hover:border-${tag.color}-200/80`}
                        >
                          <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                            {tag.icon}
                          </span>
                          <div
                            className={`w-3 h-3 bg-${tag.color}-500 rounded-full shadow-lg shadow-${tag.color}-500/50`}
                          ></div>
                          <span
                            className={`text-${tag.color}-700 font-semibold`}
                          >
                            {tag.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Enhanced bottom decorative element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center mt-16"
          >
            <div className="flex items-center space-x-4">
              {[
                { color: 'green', delay: '0s' },
                { color: 'emerald', delay: '0.3s' },
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
            transform: translateY(-20px);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </Section>
  );
};

export default ProjectScope;
