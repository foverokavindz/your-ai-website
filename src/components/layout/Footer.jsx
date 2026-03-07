import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import Container from '../ui/Container';

const navLinks = [
  {
    title: 'Research',
    links: [
      { name: 'Introduction', href: '#introduction' },
      { name: 'Research Problem', href: '#research-problem' },
      { name: 'Literature Survey', href: '#literature-survey' },
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
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'Team', href: '#about' },
      { name: 'Contact', href: '#contact' },
      { name: 'Faculty of Technology', href: 'https://tech.sjp.ac.lk/', ext: true },
    ],
  },
];

const socials = [
  { icon: Github, href: 'https://github.com/foverokavindz/your-ai-website', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/school/university-of-sri-jayewardenepura/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ict20956@fot.sjp.ac.lk', label: 'Email' },
];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="ft-footer">
      <Container>

        {/* ── top strip: brand + nav ── */}
        <div className="ft-top">

          {/* brand */}
          <div className="ft-brand">
            <p className="ft-brand-name">YourAI</p>
            <p className="ft-brand-sub">
              Knowledge Graph-Based RAG System for domain-specific
              institutional document retrieval.
            </p>
            <div className="ft-socials">
              {socials.map((s, i) => (
                <a key={i} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer" className="ft-social-btn">
                  <s.icon size={14} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* nav columns */}
          <div className="ft-nav">
            {navLinks.map((col, ci) => (
              <div key={ci} className="ft-nav-col">
                <p className="ft-nav-title">{col.title}</p>
                <ul className="ft-nav-list">
                  {col.links.map((l, li) => (
                    <li key={li}>
                      <a
                        href={l.href}
                        className="ft-nav-link"
                        target={l.ext ? '_blank' : undefined}
                        rel={l.ext ? 'noreferrer' : undefined}
                      >
                        {l.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* ── bottom bar ── */}
        <div className="ft-bottom">
          <p className="ft-copy">
            &copy; {new Date().getFullYear()} University of Sri Jayewardenepura &mdash; Final Year Research Project, Faculty of Technology
          </p>
          <button onClick={scrollTop} className="ft-top-btn" aria-label="Scroll to top">
            <ArrowUp size={14} strokeWidth={2.5} />
          </button>
        </div>

      </Container>

      <style>{`
        .ft-footer {
          background: var(--clr-heading);
          color: rgba(255,255,255,0.55);
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        /* top strip */
        .ft-top {
          display: grid;
          grid-template-columns: 1fr 1.8fr;
          gap: 4rem;
          padding: 4rem 0 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        @media (max-width: 760px) {
          .ft-top { grid-template-columns: 1fr; gap: 2.5rem; }
        }

        /* brand */
        .ft-brand-name {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 0.75rem;
        }
        .ft-brand-sub {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.82rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.45);
          max-width: 280px;
          margin-bottom: 1.5rem;
        }

        .ft-socials {
          display: flex;
          gap: 0.45rem;
        }
        .ft-social-btn {
          width: 32px;
          height: 32px;
          border-radius: 7px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.55);
          transition: background 0.15s, color 0.15s, border-color 0.15s;
          text-decoration: none;
        }
        .ft-social-btn:hover {
          background: rgba(255,255,255,0.15);
          color: #fff;
          border-color: rgba(255,255,255,0.25);
        }

        /* nav columns */
        .ft-nav {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 500px) {
          .ft-nav { grid-template-columns: repeat(2, 1fr); }
        }

        .ft-nav-title {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 1rem;
        }

        .ft-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .ft-nav-link {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.15s;
        }
        .ft-nav-link:hover { color: #fff; }

        /* bottom bar */
        .ft-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 0;
          gap: 1rem;
        }
        .ft-copy {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.73rem;
          color: rgba(255,255,255,0.3);
          line-height: 1.5;
        }

        /* scroll-to-top */
        .ft-top-btn {
          width: 32px;
          height: 32px;
          border-radius: 7px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.15s, color 0.15s;
        }
        .ft-top-btn:hover {
          background: rgba(255,255,255,0.15);
          color: #fff;
        }

        /* ── mobile responsive ── */
        @media (max-width: 640px) {
          .ft-top { padding: 2.5rem 0 2rem; }
          .ft-bottom { flex-direction: column; align-items: flex-start; gap: 0.75rem; padding: 1rem 0; }
          .ft-copy { font-size: 0.68rem; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
