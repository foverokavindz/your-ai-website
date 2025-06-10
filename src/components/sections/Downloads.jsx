import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Download,
  FileText,
  Presentation,
  ArrowRight,
  Calendar,
  User,
} from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { li } from 'framer-motion/client';

const Downloads = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const downloadCategories = [
    {
      title: 'Project Proposals',
      icon: FileText,
      description: 'Research proposals from team members',
      items: [
        {
          name: 'Research Proposal Document',
          description:
            'Detailed project proposal outlining research objectives, methodology, and expected outcomes',
          filename: 'Research_Proposal.pdf',
          size: '1 MB',
          date: 'Sept 2024',
          author: 'Team',
          link: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/Grp_15_Research_Proposal_ITC4166%20(1).pdf',
        },
        {
          name: 'Research Proposal Presentation',
          description:
            'Presentation summarizing the research proposal and key objectives',

          filename: 'Research_Proposal_Presentation.pptx',
          size: '3.3 MB',
          date: 'Sept 2024',
          author: 'Team',
          link: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/Tea%20Board%20Research%20Proposal%20Presentation.pdf',
        },
      ],
    },
    {
      title: 'Research Evaluation',
      icon: FileText,
      description: 'Research proposals from team members',
      items: [
        {
          name: 'Evaluation 01 - Report',
          description:
            'Evaluation report for the first research proposal, including feedback and suggestions',
          filename: 'Evaluation_01_Report.pdf',
          size: '1.2 MB',
          date: 'Dec 2024',
          author: 'Team',
          link: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/Grp_15_Progress_Report_1_ITC4166.pdf',
        },
        {
          name: 'Evaluation 01 - Presentation',
          description:
            'Presentation summarizing the evaluation findings and recommendations',
          filename: 'Evaluation_01_Presentation.pptx',
          size: '22 MB',
          date: 'Dec 2024',
          author: 'Team',
          link: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/Research%20first%20evaluation.pdf',
        },
        {
          name: 'Evaluation 02 - Presentation',
          description:
            'Presentation summarizing the evaluation findings and recommendations',
          filename: 'Evaluation_02_Presentation.pptx',
          size: '4 MB',
          date: 'April 2025',
          author: 'Team',
          link: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/Grp_15_Second_Progress_Evaluation.pdf',
        },
      ],
    },
    {
      title: 'Final Documentation',
      icon: FileText,
      description: 'Complete project documentation and research findings',
      items: [
        {
          name: 'Thesis Document',
          description:
            'Comprehensive documentation of research findings, methodology, and conclusions',
          filename: 'Thesis.pdf',
          size: 'TBD',
          date: 'June 2025',
          disabled: true,
          link: '/downloads/Evaluation_01_Report.pdf',
        },
        {
          name: 'Research Paper',
          description:
            'Published research paper with peer-reviewed findings and contributions',
          filename: 'Research_Paper.pdf',
          size: 'TBD',
          date: 'July 2025',
          disabled: true,
          link: '/downloads/Evaluation_01_Report.pdf',
        },
      ],
    },
  ];

  return (
    <Section id="downloads" className="py-24 bg-white">
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
              <Download className="w-4 h-4" />
              Project Resources
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Downloads
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Access project documentation, research papers, and presentation
                materials
              </p>
            </div>
          </div>

          {/* Download Categories */}
          <div className="space-y-12">
            {downloadCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
                  <div className="w-12 h-12 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {category.title}
                    </h3>
                    <p className="text-slate-600 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Category Items */}
                <div className="grid gap-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + itemIndex * 0.05,
                      }}
                    >
                      <Card
                        className={`p-6 ${
                          item.disabled
                            ? 'bg-slate-50 border-slate-200'
                            : 'bg-white border-slate-200 hover:border-green-200 hover:shadow-md'
                        } transition-all duration-300 group`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 space-y-3">
                            {/* Title and Status */}
                            <div className="flex items-start gap-3">
                              <h4
                                className={`text-lg font-semibold ${
                                  item.disabled
                                    ? 'text-slate-500'
                                    : 'text-slate-900 group-hover:text-green-600'
                                } transition-colors`}
                              >
                                {item.name}
                              </h4>
                              {item.disabled && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                                  Coming Soon
                                </span>
                              )}
                            </div>

                            {/* Description */}
                            <p
                              className={`${
                                item.disabled
                                  ? 'text-slate-500'
                                  : 'text-slate-600'
                              } leading-relaxed`}
                            >
                              {item.description}
                            </p>

                            {/* File Info */}
                            <div className="flex items-center gap-4 text-sm">
                              {item.size && (
                                <div className="flex items-center gap-1">
                                  <FileText className="w-4 h-4 text-slate-400" />
                                  <span className="text-slate-500">
                                    {item.size}
                                  </span>
                                </div>
                              )}
                              {item.date && (
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4 text-slate-400" />
                                  <span className="text-slate-500">
                                    {item.date}
                                  </span>
                                </div>
                              )}
                              {item.author && (
                                <div className="flex items-center gap-1">
                                  <User className="w-4 h-4 text-slate-400" />
                                  <span className="text-slate-500">
                                    {item.author}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Download Button */}
                          <div className="ml-6 flex-shrink-0">
                            {item.disabled ? (
                              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-500 text-sm font-medium">
                                <Download className="w-4 h-4" />
                                Coming Soon
                              </div>
                            ) : (
                              <a
                                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors group-hover:scale-105 duration-300"
                                href={item.link}
                                download={item.filename}
                                target="_blank"
                              >
                                <Download className="w-4 h-4" />
                                Download
                              </a>
                            )}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-12 text-center relative overflow-hidden"
          >

            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10 space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Need additional resources?
                </h3>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Contact us for{' '}
                  <span className="text-green-600 font-semibold">
                    supplementary materials
                  </span>{' '}
                  or custom documentation requests.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Contact team
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-lg font-medium border border-slate-200 hover:bg-slate-50 transition-colors">
                  Request materials
                </button>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Downloads;
