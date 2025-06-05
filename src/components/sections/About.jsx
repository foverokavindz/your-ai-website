import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Mail,
  Linkedin,
  Github,
  Users,
  GraduationCap,
  ArrowRight,
  Star,
} from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const supervisors = [
    {
      name: 'Dr. John Smith',
      role: 'Project Supervisor',
      department: 'Computer Science Department',
      specialization: 'AI & Machine Learning',
      email: 'john.smith@university.edu',
      linkedin: '#',
      bio: 'Leading expert in artificial intelligence with 15+ years of research experience in adaptive systems.',
    },
    {
      name: 'Dr. Sarah Johnson',
      role: 'Co-Supervisor',
      department: 'HCI Research Lab',
      specialization: 'Human-Computer Interaction',
      email: 'sarah.johnson@university.edu',
      linkedin: '#',
      bio: 'Specializes in user experience research and interface design for intelligent systems.',
    },
    {
      name: 'Dr. Michael Brown',
      role: 'External Supervisor',
      department: 'Tech Innovation Corp',
      specialization: 'UI/UX Technologies',
      email: 'michael.brown@company.com',
      linkedin: '#',
      bio: 'Industry expert with extensive experience in developing commercial UI adaptation solutions.',
    },
  ];

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Lead Developer & Researcher',
      studentId: 'IT21324406',
      specialization: 'Full-Stack Development',
      email: 'alex.chen@student.edu',
      linkedin: '#',
      github: '#',
      contributions: [
        'System Architecture',
        'Backend Development',
        'API Integration',
      ],
    },
    {
      name: 'Maria Garcia',
      role: 'UI/UX Researcher',
      studentId: 'IT21215360',
      specialization: 'User Experience Design',
      email: 'maria.garcia@student.edu',
      linkedin: '#',
      github: '#',
      contributions: ['User Research', 'Interface Design', 'Usability Testing'],
    },
    {
      name: 'David Wilson',
      role: 'ML Engineer',
      studentId: 'IT17117210',
      specialization: 'Machine Learning',
      email: 'david.wilson@student.edu',
      linkedin: '#',
      github: '#',
      contributions: [
        'Algorithm Development',
        'Data Analysis',
        'Model Training',
      ],
    },
  ];

  return (
    <Section id="about" className="py-24 bg-slate-50">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-20"
        >
          {/* Header Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-3 py-1.5 rounded-full">
              <Users className="w-4 h-4" />
              Meet the Team
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Our Team
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                A collaborative effort between experienced supervisors and
                dedicated student researchers
              </p>
            </div>
          </div>

          {/* Supervisors Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 justify-center">
              <GraduationCap className="w-6 h-6 text-green-600" />
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                Academic Supervisors
              </h3>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {supervisors.map((supervisor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="p-8 bg-white border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 group h-full">
                    <div className="space-y-6">
                      {/* Avatar and Header */}
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl font-bold text-white">
                            {supervisor.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                            {supervisor.name}
                          </h4>
                          <p className="text-green-600 font-medium">
                            {supervisor.role}
                          </p>
                          <p className="text-sm text-slate-500">
                            {supervisor.department}
                          </p>
                        </div>
                      </div>

                      {/* Specialization */}
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-200">
                          <Star className="w-3 h-3 mr-1" />
                          {supervisor.specialization}
                        </span>
                      </div>

                      {/* Bio */}
                      <p className="text-slate-600 text-sm leading-relaxed text-center">
                        {supervisor.bio}
                      </p>

                      {/* Contact */}
                      <div className="flex justify-center space-x-3 pt-4 border-t border-slate-100">
                        <a
                          href={`mailto:${supervisor.email}`}
                          className="w-10 h-10 bg-slate-100 hover:bg-green-100 hover:text-green-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <a
                          href={supervisor.linkedin}
                          className="w-10 h-10 bg-slate-100 hover:bg-blue-100 hover:text-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Members Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 justify-center">
              <Users className="w-6 h-6 text-green-600" />
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                Research Team
              </h3>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="p-8 bg-white border border-slate-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 group h-full">
                    <div className="space-y-6">
                      {/* Avatar and Header */}
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-2xl font-bold text-white">
                            {member.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                            {member.name}
                          </h4>
                          <p className="text-slate-600 font-medium">
                            {member.role}
                          </p>
                          <p className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full inline-block mt-1">
                            {member.studentId}
                          </p>
                        </div>
                      </div>

                      {/* Specialization */}
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                          {member.specialization}
                        </span>
                      </div>

                      {/* Contributions */}
                      <div className="space-y-2">
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider text-center">
                          Key Contributions
                        </p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {member.contributions.map((contribution, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded border border-green-200"
                            >
                              {contribution}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="flex justify-center space-x-3 pt-4 border-t border-slate-100">
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 bg-slate-100 hover:bg-green-100 hover:text-green-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <a
                          href={member.linkedin}
                          className="w-10 h-10 bg-slate-100 hover:bg-blue-100 hover:text-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href={member.github}
                          className="w-10 h-10 bg-slate-100 hover:bg-gray-100 hover:text-gray-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-2xl border border-slate-200 p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10 space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Want to collaborate?
                </h3>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  We're always open to{' '}
                  <span className="text-green-600 font-semibold">
                    collaboration opportunities
                  </span>{' '}
                  and research partnerships.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Get in touch
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors">
                  View profiles
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default About;
