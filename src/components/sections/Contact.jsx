import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  ArrowRight,
} from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'kavindamadhuranga74@gmail.com',
      description: 'Send us an email anytime',
      link: 'mailto:kavindamadhuranga74@gmail.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+94 77 52 58 11 3',
      description: 'Mon-Fri from 8am to 5pm',
      link: 'tel:+94775258113',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Faculty of Technology, University of Sri Jayewardenepura',
      description: 'Come say hello',
      link: '#',
    },
  ];

  return (
    <Section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Header Section */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full">
              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
              Get in Touch
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight px-4 sm:px-0">
                Contact Us
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Have questions about our research? We'd love to hear from you
                and discuss our findings.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Form - Takes 2/3 width */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 px-4 sm:px-0"
            >
              <Card className="p-6 sm:p-8 bg-white border border-slate-200 hover:border-green-200 transition-colors duration-300">
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Send us a Message
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600">
                      Fill out the form below and we'll get back to you as soon
                      as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 text-base touch-manipulation"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 text-base touch-manipulation"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 text-base touch-manipulation"
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-3 sm:px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-200 resize-none text-base touch-manipulation"
                        placeholder="Tell us more about your inquiry..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-300 w-full justify-center touch-manipulation min-h-[48px]"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </div>
              </Card>
            </motion.div>

            {/* Contact Information - Takes 1/3 width */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 sm:space-y-6 px-4 sm:px-0"
            >
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Let's Connect
                </h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Choose the best way to reach out to our research team.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <Card className="p-4 sm:p-6 bg-white border border-slate-200 hover:border-green-200 hover:shadow-md transition-all duration-300 group">
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <h4 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-green-600 transition-colors">
                              {info.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-500">
                              {info.description}
                            </p>
                          </div>
                        </div>
                        <a
                          href={info.link}
                          className="block text-sm sm:text-base text-slate-700 hover:text-green-600 transition-colors duration-200 font-medium touch-manipulation py-1 break-words"
                        >
                          {info.value}
                        </a>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Response Info */}
              <Card className="p-4 sm:p-6 bg-green-50 border border-green-200">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    <h4 className="text-sm sm:text-base font-semibold text-green-900">
                      Quick Response
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-green-700">
                    We typically respond to all inquiries within 24 hours during
                    business days.
                  </p>
                </div>
              </Card>
            </motion.div>
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
                  Ready to collaborate?
                </h3>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Join us in advancing{' '}
                  <span className="text-green-600 font-semibold">
                    AI-driven UI personalization
                  </span>{' '}
                  research and development.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Schedule a meeting
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-lg font-medium border border-slate-200 hover:bg-slate-50 transition-colors">
                  View research papers
                </button>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Contact;
