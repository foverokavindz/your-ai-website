import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  FileText,
  Brain,
  MessageCircle,
  Network,
  Zap,
  ArrowRight,
  Sparkles,
  Database,
  Cpu,
} from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';

const Hero = () => {
  return (
    <Section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/50"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Circuit Board Background Pattern */}
        <div className="absolute inset-0 opacity-8">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            {/* Circuit lines with green theme */}
            <path
              d="M100 100 L300 100 L300 300 L500 300"
              stroke="#10b981"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M500 300 L700 300 L700 500 L900 500"
              stroke="#059669"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <path
              d="M200 200 L400 200 L400 400 L600 400"
              stroke="#22c55e"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '2s' }}
            />

            {/* Circuit nodes with enhanced glow */}
            <circle
              cx="300"
              cy="100"
              r="6"
              fill="#10b981"
              className="animate-ping"
            />
            <circle
              cx="500"
              cy="300"
              r="6"
              fill="#059669"
              className="animate-ping"
              style={{ animationDelay: '0.5s' }}
            />
            <circle
              cx="700"
              cy="500"
              r="6"
              fill="#22c55e"
              className="animate-ping"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>

        {/* Enhanced Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 via-emerald-50/60 to-slate-50/70"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-green-100/40 via-transparent to-emerald-100/30"></div>

        {/* Larger Animated Knowledge Flow Orbs */}
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-green-200/20 to-emerald-300/15 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-emerald-200/18 to-green-200/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>

        {/* Enhanced Data Flow Lines */}
        <div className="absolute inset-0 opacity-15">
          <motion.div
            className="absolute top-1/5 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent"
            animate={{ x: [-200, 200] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute top-2/5 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
            animate={{ x: [200, -200] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-3/5 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"
            animate={{ x: [-200, 200] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-4/5 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
            animate={{ x: [200, -200] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'linear',
              delay: 0.5,
            }}
          />
        </div>

        {/* Floating Geometric Knowledge Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + i * 6}%`,
              background: ['#10b981', '#059669', '#22c55e', '#16a34a'][i % 4],
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-24 items-center py-16">
          {/* Left Content with Enhanced Spacing */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-3 bg-green-100/80 backdrop-blur-sm text-green-700 text-sm font-semibold px-6 py-3 rounded-full border border-green-200/60 shadow-lg">
                <Network className="w-5 h-5" />
                RAG + Knowledge Graphs
                <Sparkles className="w-5 h-5" />
              </div>
            </motion.div>

            {/* Enhanced Main Heading with More Space */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[0.9] tracking-tight">
                Intelligent{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-600">
                  Knowledge
                </span>{' '}
                Assistant
              </h1>

              <h2 className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
                Domain-specific chatbot powered by RAG systems, LLMs, and
                knowledge graphs for intelligent document analysis
              </h2>
            </motion.div>

            {/* Enhanced Description with More Space */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base text-slate-600 leading-relaxed max-w-2xl"
            >
              We extract knowledge from documents, identify relationships, and
              create intelligent responses using the power of Large Language
              Models combined with structured knowledge graphs.
            </motion.p>

            {/* Enhanced Feature Pills with Better Spacing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: FileText, text: 'Document Analysis', color: 'green' },
                { icon: Network, text: 'Knowledge Graphs', color: 'emerald' },
                { icon: Brain, text: 'LLM Integration', color: 'green' },
                {
                  icon: MessageCircle,
                  text: 'Smart Responses',
                  color: 'emerald',
                },
                { icon: Database, text: 'RAG Architecture', color: 'green' },
                { icon: Cpu, text: 'AI Processing', color: 'emerald' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`inline-flex items-center gap-3 bg-${feature.color}-50/80 backdrop-blur-sm text-${feature.color}-700 text-sm font-medium px-5 py-3 rounded-full border border-${feature.color}-200/60 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  <feature.icon className="w-4 h-4" />
                  {feature.text}
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons with More Space */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <button className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group">
                Explore System
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-slate-700 px-6 py-3 rounded-xl font-medium border border-slate-200 hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                View Demo
              </button>
            </motion.div>

            {/* Enhanced Stats with Better Spacing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200"
            >
              {[
                {
                  number: 'RAG',
                  label: 'Architecture',
                  desc: 'Retrieval Augmented',
                },
                { number: 'LLM', label: 'Powered', desc: 'Language Models' },
                { number: 'KG', label: 'Enhanced', desc: 'Knowledge Graphs' },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-1">
                  <div className="text-xl md:text-2xl font-bold text-green-600">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-700 font-semibold">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500">{stat.desc}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content - Document Processing Workflow */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Document Input Area */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-8 left-8 w-24 h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 shadow-lg flex flex-col items-center justify-center overflow-hidden"
              >
                <FileText className="w-8 h-8 text-blue-600 mb-2" />
                <div className="text-xs text-blue-600 font-medium">
                  Document
                </div>

                {/* Animated text lines */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-0.5 bg-blue-300 rounded"
                    style={{ top: 60 + i * 6 }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scaleX: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </motion.div>

              {/* Processing Pipeline */}
              <motion.div
                className="absolute top-16 left-40 w-32 h-6 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full overflow-hidden"
                animate={{
                  boxShadow: [
                    '0 0 10px rgba(34, 197, 94, 0.3)',
                    '0 0 20px rgba(34, 197, 94, 0.6)',
                    '0 0 10px rgba(34, 197, 94, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Data flow animation */}
                <motion.div
                  className="w-6 h-6 bg-green-400 rounded-full"
                  animate={{
                    x: [-24, 128],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                {/* Pipeline segments */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1 w-4 h-4 bg-emerald-300 rounded-full"
                    style={{ left: 8 + i * 24 }}
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </motion.div>

              {/* Knowledge Graph Visualization */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute right-8 top-20 w-28 h-28"
              >
                {/* Central node */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-lg flex items-center justify-center"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Network className="w-4 h-4 text-white" />
                </motion.div>

                {/* Orbiting nodes */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-green-300 rounded-full shadow-md"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                      transform: `translate(-50%, -50%) rotate(${
                        i * 60
                      }deg) translateX(40px)`,
                    }}
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      rotate: [-360],
                    }}
                    transition={{
                      scale: {
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: 'easeInOut',
                      },
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                      },
                    }}
                  />
                ))}

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {[...Array(6)].map((_, i) => (
                    <motion.line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={50 + 30 * Math.cos((i * Math.PI) / 3)}
                      y2={50 + 30 * Math.sin((i * Math.PI) / 3)}
                      stroke="#10b981"
                      strokeWidth="1"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </svg>
              </motion.div>

              {/* AI Brain Processing Center */}
              <motion.div
                className="absolute center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-2xl flex items-center justify-center"
                style={{ top: '45%', left: '45%' }}
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 20px rgba(34, 197, 94, 0.3)',
                    '0 0 40px rgba(34, 197, 94, 0.7)',
                    '0 0 20px rgba(34, 197, 94, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Brain className="w-10 h-10 text-white" />

                {/* Thinking waves */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute border-2 border-green-300/40 rounded-full"
                    animate={{
                      scale: [1, 2.5, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.7,
                      ease: 'easeOut',
                    }}
                    style={{
                      width: 20,
                      height: 20,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                ))}
              </motion.div>

              {/* Chatbot Interface */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute bottom-16 left-12 w-24 h-20 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl border-2 border-cyan-200 shadow-lg flex flex-col items-center justify-center"
              >
                <MessageCircle className="w-6 h-6 text-cyan-600 mb-1" />
                <div className="text-xs text-cyan-600 font-medium">Chatbot</div>

                {/* Typing indicator */}
                <div className="flex gap-1 mt-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 bg-cyan-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Response Output */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
                className="absolute bottom-16 right-12 w-28 h-20 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-200 shadow-lg flex flex-col items-center justify-center overflow-hidden"
              >
                <Zap className="w-6 h-6 text-green-600 mb-1" />
                <div className="text-xs text-green-600 font-medium">
                  Response
                </div>

                {/* Response lines */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-20 h-0.5 bg-green-300 rounded"
                    style={{ bottom: 20 + i * 4 }}
                    animate={{
                      scaleX: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 2 + i * 0.3,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </motion.div>

              {/* Data Flow Connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Document to AI */}
                <motion.path
                  d="M120 80 Q200 60 220 200"
                  stroke="#10b981"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  animate={{
                    strokeDashoffset: [0, -20],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* AI to Knowledge Graph */}
                <motion.path
                  d="M280 200 Q350 150 380 140"
                  stroke="#059669"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8,4"
                  animate={{
                    strokeDashoffset: [0, -24],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 0.5,
                  }}
                />

                {/* AI to Chatbot */}
                <motion.path
                  d="M220 240 Q150 300 100 400"
                  stroke="#22c55e"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6,6"
                  animate={{
                    strokeDashoffset: [0, -24],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 1,
                  }}
                />

                {/* Chatbot to Response */}
                <motion.path
                  d="M150 420 Q250 400 320 420"
                  stroke="#16a34a"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4,8"
                  animate={{
                    strokeDashoffset: [0, -24],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 1.5,
                  }}
                />
              </svg>

              {/* Floating Knowledge Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400"
                  animate={{
                    x: [
                      Math.random() * 400,
                      Math.random() * 400,
                      Math.random() * 400,
                    ],
                    y: [
                      Math.random() * 500,
                      Math.random() * 500,
                      Math.random() * 500,
                    ],
                    opacity: [0, 1, 0.5, 1, 0],
                    scale: [0.5, 1.5, 1, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: 'easeInOut',
                  }}
                />
              ))}

              {/* Background Data Matrix */}
              <motion.div
                className="absolute inset-0 opacity-3"
                animate={{
                  backgroundPosition: ['0px 0px', '40px 40px'],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(34, 197, 94, 0.1) 10px,
                      rgba(34, 197, 94, 0.1) 11px
                    )
                  `,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-3"
          >
            <div className="w-8 h-12 border-2 border-slate-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-4 bg-green-500 rounded-full mt-2"
              />
            </div>
            <ArrowDown className="w-5 h-5 text-slate-400" />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;
