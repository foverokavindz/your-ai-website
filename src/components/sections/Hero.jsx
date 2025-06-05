import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const bgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

const Hero = () => {
  return (
    <Section
      id="home"
      background="dark"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: bgPattern }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <Badge
                variant="primary"
                icon={Sparkles}
                className="bg-blue-500/20 text-blue-300 border border-blue-500/30"
              >
                Medium Extension
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Enhance Your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Medium Reading
              </span>{' '}
              Experience
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-6 font-light"
            >
              AI-Powered Summarization & Personalization for Medium Articles
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl"
            >
              Transform how you read Medium articles with intelligent
              summarization, behavior-driven adaptation, and vision-aware
              accessibility features.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                href="#project-scope"
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl opacity-80"
              />
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-70"
              />
              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
                className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg opacity-90"
              />
              <motion.div
                animate={{ y: [0, 25, 0], rotate: [0, 10, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-pink-500 to-red-500 rounded-3xl opacity-60"
              />

              {/* Central Pulse Circle */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </div>
            <ArrowDown className="w-4 h-4 text-gray-400" />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;
