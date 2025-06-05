import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Dr. John Smith',
      role: 'Project Supervisor',
      email: 'john.smith@university.edu',
      linkedin: '#',
      type: 'supervisor',
    },
    {
      name: 'Dr. Sarah Johnson',
      role: 'Co-Supervisor',
      email: 'sarah.johnson@university.edu',
      linkedin: '#',
      type: 'supervisor',
    },
    {
      name: 'Dr. Michael Brown',
      role: 'External Supervisor',
      email: 'michael.brown@company.com',
      linkedin: '#',
      type: 'supervisor',
    },
    {
      name: 'Alex Chen',
      role: 'Lead Developer',
      email: 'alex.chen@student.edu',
      linkedin: '#',
      github: '#',
      type: 'member',
    },
    {
      name: 'Maria Garcia',
      role: 'UI/UX Researcher',
      email: 'maria.garcia@student.edu',
      linkedin: '#',
      github: '#',
      type: 'member',
    },
    {
      name: 'David Wilson',
      role: 'ML Engineer',
      email: 'david.wilson@student.edu',
      linkedin: '#',
      github: '#',
      type: 'member',
    },
  ];

  return (
    <Section id="about">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`text-center h-full ${
                    member.type === 'supervisor'
                      ? 'border-blue-200 bg-blue-50/30'
                      : ''
                  }`}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {member.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      member.type === 'supervisor'
                        ? 'text-blue-600 font-medium'
                        : 'text-gray-600'
                    }`}
                  >
                    {member.role}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4 text-gray-600" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4 text-blue-600" />
                    </a>
                    {member.github && (
                      <a
                        href={member.github}
                        className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                      >
                        <Github className="w-4 h-4 text-gray-600" />
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default About;
