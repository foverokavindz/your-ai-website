import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  AlertTriangle,
  Target,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const ResearchGap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const gaps = [
    {
      icon: AlertTriangle,
      title: 'Lack of Domain-Specific Dictionaries',
      description:
        'Existing systems like AutoKG do not integrate curated domain-specific dictionaries, limiting disambiguation of rare or specialized terms during graph construction and vector embedding.',
      number: '01',
    },
    {
      icon: Target,
      title: 'AutoRAG Vocabulary Limitations',
      description:
        "AutoRAG's greedy search optimizes for speed but may overlook low-frequency, high-importance vocabulary, particularly in corpora with specialized jargon.",
      number: '02',
    },
    {
      icon: Lightbulb,
      title: 'Scarce Heterogeneous Corpus Evaluations',
      description:
        'Comprehensive evaluations on heterogeneous corpora, combining scanned PDFs, structured metadata, embedded tables, and domain glossaries, remain scarce.',
      number: '03',
    },
  ];

  const features = [
    {
      icon: CheckCircle2,
      title: 'Dictionary-Enhanced Module',
      description:
        'Integrates a context-aware dictionary to label knowledge graph nodes with precise definitions, aiding retrieval and disambiguation.',
    },
    {
      icon: CheckCircle2,
      title: 'Automated RAG Optimization',
      description:
        'Combines AutoRAG and AutoKG methodologies for optimal RAG configuration and rapid knowledge graph construction with minimal oversight.',
    },
    {
      icon: CheckCircle2,
      title: 'Heterogeneous Corpus Evaluation',
      description:
        'Evaluates performance across retrieval precision, response coherence, and disambiguation accuracy on mixed-format datasets with glossary support.',
    },
  ];

  return (
    <Section id="research-gap" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12 sm:space-y-16 lg:space-y-20"
        >
          {/* Header Section */}
          <div className="text-left max-w-3xl px-4 sm:px-0">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full mb-4 sm:mb-6">
              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
              Research Challenges
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
              Identifying the{' '}
              <span className="text-green-600">research gaps</span>.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              Understanding current limitations to build better solutions for
              knowledge graph-based information retrieval.
            </p>
            <button className="inline-flex items-center gap-2 bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm sm:text-base touch-manipulation">
              Explore gaps
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start px-4 sm:px-0">
            {/* Left Side - Enhanced Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:sticky lg:top-8 order-2 lg:order-1"
            >
              <Card className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-500">
                      Analysis Dashboard
                    </span>
                  </div>

                  <div className="text-center py-6 sm:py-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                      Critical Limitations Found
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Current knowledge graph-based RAG systems show significant
                      gaps in domain-specific retrieval capabilities
                    </p>

                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-slate-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-slate-900">3</div>
                      <div className="text-xs sm:text-sm text-slate-600">
                        Major gaps identified
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Right Side - Gap Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            >
              {gaps.map((gap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="p-4 sm:p-6 bg-white border border-slate-200 hover:border-green-200 hover:shadow-md transition-all duration-200 group">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center font-medium text-xs sm:text-sm">
                        {gap.number}
                      </div>
                      <div className="flex-1 space-y-1.5 sm:space-y-2 min-w-0">
                        <div className="flex items-start gap-2">
                          <gap.icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <h3 className="text-sm sm:text-lg font-semibold text-slate-900 group-hover:text-green-600 transition-colors leading-tight">
                            {gap.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {gap.description}
                        </p>
                      </div>
                      <div className="text-slate-400 group-hover:text-slate-600 transition-colors flex-shrink-0">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Solution Preview Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center space-y-8 sm:space-y-12 px-4 sm:px-0"
          >
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                Our approach to bridge these gaps
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
                We're developing solutions to address each identified limitation
                with{' '}
                <span className="text-green-600 font-semibold">
                  innovative approaches
                </span>
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <Card className="p-4 sm:p-6 bg-white border border-slate-200 hover:border-green-200 hover:shadow-md transition-all duration-200 h-full">
                    <div className="text-center space-y-3 sm:space-y-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center mx-auto">
                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                          {feature.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button className="inline-flex items-center gap-2 bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm sm:text-base touch-manipulation w-full sm:w-auto justify-center">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium border border-slate-200 hover:bg-slate-50 transition-colors text-sm sm:text-base touch-manipulation w-full sm:w-auto justify-center">
                View methodology
              </button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ResearchGap;
