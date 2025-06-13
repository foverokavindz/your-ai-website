import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Brain,
  ExternalLink,
} from 'lucide-react';
import Container from '../ui/Container';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const footerSections = [
    {
      title: 'Research',
      links: [
        { name: 'Project Scope', href: '#project-scope' },
        { name: 'Literature Survey', href: '#literature-survey' },
        { name: 'Research Gap', href: '#research-gap' },
        { name: 'Research Problem', href: '#research-problem' },
        { name: 'Objectives', href: '#objectives' },
        { name: 'Methodology', href: '#methodology' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Technologies', href: '#technologies' },
        { name: 'Milestones', href: '#milestones' },
        { name: 'Downloads', href: '#downloads' },
        { name: 'Research Papers', href: '#downloads' },
        { name: 'Presentations', href: '#downloads' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'About Team', href: '#about' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Collaborate', href: '#contact' },
        { name: 'Faculty of Technology', href: 'https://tech.sjp.ac.lk/' },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/foverokavindz/your-ai-website',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/school/university-of-sri-jayewardenepura/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:ict20956@fot.sjp.ac.lk ',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 touch-manipulation min-h-[48px] min-w-[48px]"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <Container>
        <div className="pt-16 pb-6 sm:pb-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Your AI
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Research Project
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
                Developing a Knowledge Graph-Based RAG System with LLMs for
                domain-specific information retrieval and intelligent user
                interfaces.
              </p>

              <div className="flex items-center gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300 group touch-manipulation"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-3 sm:space-y-4">
                <h4 className="text-base sm:text-lg font-semibold text-white">
                  {section.title}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm sm:text-base text-slate-400 hover:text-green-400 transition-colors duration-200 flex items-center gap-1 group touch-manipulation py-1"
                      >
                        {link.name}
                        {link.href.startsWith('#') ? null : (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 pt-6 sm:pt-8">
            {/* Bottom Footer */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400 text-center sm:text-left">
                <p>
                  &copy; {new Date().getFullYear()} University of Sri
                  Jayewardenepura. All rights reserved.
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors touch-manipulation py-1"
                  >
                    Privacy Policy
                  </a>
                  <span className="text-slate-600 hidden sm:inline">•</span>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors touch-manipulation py-1"
                  >
                    Terms of Use
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 text-xs sm:text-sm text-slate-500 text-center">
                <span>Final Year Research Project</span>
                <span className="text-green-400 hidden sm:inline">•</span>
                <span>Faculty of Technology</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
