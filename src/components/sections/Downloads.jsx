import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Presentation } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Downloads = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const downloadCategories = [
    {
      title: 'Topic Assessment',
      icon: FileText,
      items: [
        {
          name: 'Topic Assessment Document',
          description: 'Initial project assessment and evaluation',
          filename: 'Topic_Assessment.pdf',
        },
      ],
    },
    {
      title: 'Project Proposal',
      icon: FileText,
      items: [
        {
          name: 'Proposal Report - IT21324406',
          description: 'Individual project proposal document',
          filename: 'Proposal_Report_IT21324406.pdf',
        },
        {
          name: 'Proposal Report - IT21215360',
          description: 'Individual project proposal document',
          filename: 'Proposal_Report_IT21215360.pdf',
        },
        {
          name: 'Proposal Report - IT17117210',
          description: 'Individual project proposal document',
          filename: 'Proposal_Report_IT17117210.pdf',
        },
      ],
    },
    {
      title: 'Final Report',
      icon: FileText,
      items: [
        {
          name: 'Final Report - Coming Soon',
          description: 'Complete project documentation and findings',
          filename: 'Final_Report.pdf',
          disabled: true,
        },
      ],
    },
    {
      title: 'Research Paper',
      icon: FileText,
      items: [
        {
          name: 'Research Paper - Coming Soon',
          description: 'Published research findings and methodology',
          filename: 'Research_Paper.pdf',
          disabled: true,
        },
      ],
    },
    {
      title: 'Presentations',
      icon: Presentation,
      items: [
        {
          name: 'Progress Presentation',
          description: 'Mid-project progress and updates',
          filename: 'Progress_Presentation.pptx',
          disabled: true,
        },
        {
          name: 'Final Presentation',
          description: 'Final project presentation slides',
          filename: 'Final_Presentation.pptx',
          disabled: true,
        },
      ],
    },
  ];

  return (
    <Section id="downloads">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Downloads
          </h2>

          <div className="space-y-8">
            {downloadCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="grid gap-4">
                  {category.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-gray-900 mb-1">
                          {item.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                      <div className="ml-6">
                        <Button
                          variant={item.disabled ? 'ghost' : 'primary'}
                          size="sm"
                          className={
                            item.disabled ? 'cursor-not-allowed opacity-50' : ''
                          }
                          disabled={item.disabled}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {item.disabled ? 'Coming Soon' : 'Download'}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Downloads;
