import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  {
    label: 'Research', href: '#introduction',
    dropdown: [
      { label: 'Introduction', href: '#introduction' },
      { label: 'Research Problem', href: '#research-problem' },
      { label: 'Literature Survey', href: '#literature-survey' },
      { label: 'Objectives', href: '#objectives' },
      { label: 'Methodology', href: '#methodology' },
    ],
  },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Milestones', href: '#milestones' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Team', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* ── floating pill ── */}
      <motion.nav
        className={`gnav${scrolled ? ' gnav--scrolled' : ''}`}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* logo */}
        <a href="#home" className="gnav-logo">YourAI</a>

        {/* desktop links */}
        <ul className="gnav-links">
          {navItems.map((item, i) => (
            <li
              key={item.label}
              className="gnav-item"
              onMouseEnter={() => item.dropdown && setActiveDropdown(i)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href={item.href} className="gnav-link">
                {item.label}
                {item.dropdown && <ChevronDown size={12} strokeWidth={2.5} className="gnav-chevron" />}
              </a>

              {/* dropdown */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === i && (
                  <motion.ul
                    className="gnav-dropdown"
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                  >
                    {item.dropdown.map((d) => (
                      <li key={d.label}>
                        <a href={d.href} className="gnav-drop-link">{d.label}</a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* mobile burger */}
        <button className="gnav-burger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen
              ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={18} /></motion.span>
              : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={18} /></motion.span>
            }
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* ── mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="gnav-overlay"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="gnav-mobile"
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              {navItems.map((item, i) => (
                <React.Fragment key={item.label}>
                  <motion.a
                    href={item.href}
                    className="gnav-mob-link"
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    {item.label}
                  </motion.a>
                  {item.dropdown && item.dropdown.map((d, j) => (
                    <motion.a
                      key={d.label}
                      href={d.href}
                      className="gnav-mob-sub"
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 + j * 0.03 + 0.06 }}
                    >
                      {d.label}
                    </motion.a>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        /* ── pill ── */
        .gnav {
          position: fixed;
          top: 1.1rem;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 0;
          width: max-content;
          max-width: calc(100vw - 2rem);
          padding: 0.45rem 0.6rem 0.45rem 1.1rem;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.55);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          box-shadow:
            0 2px 16px rgba(0,0,0,0.06),
            inset 0 1px 0 rgba(255,255,255,0.7);
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .gnav--scrolled {
          background: rgba(255,255,255,0.82);
          border-color: rgba(0,0,0,0.1);
          box-shadow:
            0 4px 28px rgba(0,0,0,0.09),
            inset 0 1px 0 rgba(255,255,255,0.8);
        }

        /* logo */
        .gnav-logo {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #1A1A1A;
          text-decoration: none;
          padding-right: 1.1rem;
          margin-right: 0.5rem;
          border-right: 1px solid rgba(0,0,0,0.1);
          white-space: nowrap;
        }

        /* desktop link list */
        .gnav-links {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 0.05rem;
        }
        @media (max-width: 860px) { .gnav-links { display: none; } }

        .gnav-item { position: relative; }

        .gnav-link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.79rem;
          font-weight: 500;
          color: #444;
          text-decoration: none;
          padding: 0.38rem 0.75rem;
          border-radius: 999px;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
        }
        .gnav-link:hover {
          background: rgba(0,0,0,0.06);
          color: #111;
        }
        .gnav-chevron {
          opacity: 0.5;
          flex-shrink: 0;
        }

        /* dropdown */
        .gnav-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 50%;
          transform: translateX(-50%);
          min-width: 180px;
          list-style: none;
          margin: 0;
          padding: 0.4rem;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          box-shadow: 0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.9);
        }
        .gnav-drop-link {
          display: block;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          color: #333;
          text-decoration: none;
          padding: 0.5rem 0.85rem;
          border-radius: 8px;
          transition: background 0.13s, color 0.13s;
        }
        .gnav-drop-link:hover {
          background: rgba(0,0,0,0.05);
          color: #111;
        }

        /* burger */
        .gnav-burger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.1);
          background: rgba(0,0,0,0.04);
          color: #1A1A1A;
          cursor: pointer;
          margin-left: 0.6rem;
          transition: background 0.15s;
        }
        .gnav-burger:hover { background: rgba(0,0,0,0.09); }
        @media (max-width: 860px) { .gnav-burger { display: flex; } }

        /* ── mobile overlay ── */
        .gnav-overlay {
          position: fixed;
          inset: 0;
          z-index: 40;
          background: rgba(0,0,0,0.18);
          backdrop-filter: blur(3px);
          -webkit-backdrop-filter: blur(3px);
        }

        /* ── mobile menu ── */
        .gnav-mobile {
          position: fixed;
          top: 4.2rem;
          left: 1rem;
          right: 1rem;
          z-index: 50;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          box-shadow: 0 10px 48px rgba(0,0,0,0.13);
          padding: 0.6rem;
          display: flex;
          flex-direction: column;
          gap: 1px;
          max-height: calc(100dvh - 5.5rem);
          overflow-y: auto;
        }

        .gnav-mob-link {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #1A1A1A;
          text-decoration: none;
          padding: 0.7rem 1rem;
          border-radius: 11px;
          transition: background 0.13s;
        }
        .gnav-mob-link:hover { background: rgba(0,0,0,0.05); }

        .gnav-mob-sub {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.82rem;
          font-weight: 400;
          color: #666;
          text-decoration: none;
          padding: 0.5rem 1rem 0.5rem 1.75rem;
          border-radius: 9px;
          transition: background 0.13s;
        }
        .gnav-mob-sub:hover { background: rgba(0,0,0,0.04); color: #111; }
      `}</style>
    </>
  );
};

export default Navbar;
