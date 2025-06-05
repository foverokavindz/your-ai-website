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
        { name: 'Objectives', href: '#objectives' },
        { name: 'Methodology', href: '#methodology' },
        { name: 'Technologies', href: '#technologies' },
        { name: 'Milestones', href: '#milestones' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Downloads', href: '#downloads' },
        { name: 'Documentation', href: '#' },
        { name: 'Research Papers', href: '#' },
        { name: 'Presentations', href: '#' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { name: 'About Team', href: '#about' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Collaborate', href: '#contact' },
        { name: 'Updates', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:research@university.edu', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <Container>
        <div className="pt-16 pb-8">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    UI Personalization
                  </h3>
                  <p className="text-sm text-slate-400">Research Project</p>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed max-w-md">
                Advancing the future of user interfaces through AI-driven
                personalization and adaptive design systems.
              </p>

              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-slate-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold text-white">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-green-400 transition-colors duration-200 flex items-center gap-1 group"
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
          <div className="border-t border-slate-800 pt-8">
            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-400">
                <p>
                  &copy; 2024 UI Personalization Research. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <span className="text-slate-600">•</span>
                  <a
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Terms of Use
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>Built with</span>
                <span className="text-green-400">♥</span>
                <span>for research excellence</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
