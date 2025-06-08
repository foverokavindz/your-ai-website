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
          {/* Left Content - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
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

            {/* Main Heading */}
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
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              Domain-specific chatbot powered by RAG systems, LLMs, and
              knowledge graphs for intelligent document analysis. We extract
              knowledge from documents, identify relationships, and create
              intelligent responses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group">
                Explore System
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-xl font-medium border border-slate-200 hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                View Demo
              </button>
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
              {/* Simple Workflow Cards */}
              <div className="grid grid-cols-2 gap-8 w-full max-w-md">
                {/* Document Upload */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/60 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                  >
                    <FileText className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-2">
                    Document Input
                  </h3>
                  <p className="text-xs text-slate-600">
                    Upload & analyze documents
                  </p>
                </motion.div>

                {/* Knowledge Graph */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/60 text-center"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                  >
                    <Network className="w-6 h-6 text-emerald-600" />
                  </motion.div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-2">
                    Knowledge Graph
                  </h3>
                  <p className="text-xs text-slate-600">
                    Extract relationships
                  </p>
                </motion.div>

                {/* AI Processing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/60 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                  >
                    <Brain className="w-6 h-6 text-green-600" />
                  </motion.div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-2">
                    AI Processing
                  </h3>
                  <p className="text-xs text-slate-600">LLM analysis & RAG</p>
                </motion.div>

                {/* Smart Response */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-200/60 text-center"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(34, 197, 94, 0.4)',
                        '0 0 0 10px rgba(34, 197, 94, 0)',
                        '0 0 0 0 rgba(34, 197, 94, 0)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4"
                  >
                    <MessageCircle className="w-6 h-6 text-cyan-600" />
                  </motion.div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-2">
                    Smart Response
                  </h3>
                  <p className="text-xs text-slate-600">Intelligent answers</p>
                </motion.div>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                {/* Horizontal line */}
                <motion.line
                  x1="30%"
                  y1="35%"
                  x2="70%"
                  y2="35%"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                {/* Vertical line */}
                <motion.line
                  x1="50%"
                  y1="25%"
                  x2="50%"
                  y2="75%"
                  stroke="#059669"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 1,
                  }}
                />
                {/* Horizontal line bottom */}
                <motion.line
                  x1="30%"
                  y1="65%"
                  x2="70%"
                  y2="65%"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: 0.5,
                  }}
                />
              </svg>

              {/* Floating Data Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-green-400/60"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: 'easeInOut',
                  }}
                />
              ))}
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
