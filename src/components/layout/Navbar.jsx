import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    {
      name: 'Research',
      href: '#objectives',
      dropdown: [
        { name: 'Objectives', href: '#objectives' },
        { name: 'Methodology', href: '#methodology' },
        { name: 'Technologies', href: '#technologies' },
      ],
    },
    { name: 'Milestones', href: '#milestones' },
    { name: 'Downloads', href: '#downloads' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Glassmorphism Island Navbar */}
      <motion.nav
        className={`fixed top-2 sm:top-4 left-2 right-2 sm:left-1/2 sm:right-auto sm:transform sm:-translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border border-slate-200/50 shadow-xl shadow-black/5'
            : 'bg-white/80 backdrop-blur-xl border border-white/30 shadow-lg shadow-black/10'
        } rounded-2xl px-3 sm:px-6 py-2 sm:py-3 max-w-full sm:max-w-none`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        {/* Additional background layer for better contrast */}
        <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm"></div>

        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="font-bold text-base sm:text-lg text-slate-900 transition-colors duration-300">
              Your AI
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2 ml-10">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a
                  href={item.href}
                  className="flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 text-slate-700 hover:text-green-600 hover:bg-green-50/70"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  )}
                </motion.a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === index && (
                    <motion.div
                      className="absolute top-full left-0 mt-3 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/50 py-2"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                      }}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <motion.a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-green-50/70 hover:text-green-600 transition-colors duration-200 mx-1 rounded-lg"
                          whileHover={{ x: 4 }}
                        >
                          {dropdownItem.name}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2 rounded-xl transition-colors duration-300 hover:bg-green-50/70 text-slate-700 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-20 sm:top-20 left-2 right-2 sm:left-4 sm:right-4 z-50 lg:hidden bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-2xl overflow-hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-1 sm:space-y-2">
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    <motion.a
                      href={item.href}
                      className="block px-3 sm:px-4 py-3 sm:py-3 text-base font-medium text-slate-700 hover:text-green-600 hover:bg-green-50/50 rounded-xl transition-colors duration-200 touch-manipulation min-h-[44px] flex items-center"
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.a>
                    {item.dropdown && (
                      <div className="ml-2 sm:ml-4 space-y-1 mt-1 sm:mt-2">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <motion.a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-3 sm:px-4 py-2 sm:py-2 text-sm text-slate-600 hover:text-green-600 hover:bg-green-50/30 rounded-lg transition-colors duration-200 touch-manipulation min-h-[40px] flex items-center"
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: index * 0.1 + dropdownIndex * 0.05 + 0.1,
                            }}
                            whileHover={{ x: 4 }}
                          >
                            {dropdownItem.name}
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
