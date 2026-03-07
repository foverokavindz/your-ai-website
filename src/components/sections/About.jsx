import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const supervisors = [
  {
    name: 'Dr. Chamara Liyanage',
    role: 'Main Supervisor',
    dept: 'IT Department · Senior Lecturer',
    email: 'chamara@sjp.as.lk',
    linkedin: 'https://www.linkedin.com/in/chamara-liyanage-91222140/',
  },
  {
    name: 'Mr. Hiran Wijesinghe',
    role: 'External Supervisor',
    dept: 'Sri Lanka Tea Board · Assistance Director, IT',
    email: 'hiral@brd.ac.lk',
    linkedin: 'https://www.linkedin.com/in/hiranwijesinghe/',
  },
];

const team = [
  {
    name: 'Kavinda Weerasinghe',
    id: 'TE101487',
    role: 'Frontend Development',
    focus: 'Full-Stack Development & UI Design',
    contributions: ['Frontend Design & Development', 'Literature Review', 'API Integration'],
    email: 'ict20956@fot.sjp.ac.lk',
    linkedin: 'https://www.linkedin.com/in/kavinda-weerasinghe-1302a71b7',
    github: 'https://github.com/foverokavindz',
    image: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/kavinda.jpg',
  },
  {
    name: 'Nipuni Nishadini',
    id: 'TE101451',
    role: 'Backend Development',
    focus: 'Full-Stack Development & System Design',
    contributions: ['Endpoint Development', 'Backend Engineering', 'System Architecture'],
    email: 'ict20826@fot.sjp.ac.lk',
    linkedin: 'https://www.linkedin.com/in/nipuninishadini/',
    github: 'https://github.com/Nipuni-De-Silva',
    image: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/nipuni.jpg',
  },
  {
    name: 'Dulan Jayawickrama',
    id: 'TE101594',
    role: 'AI Development',
    focus: 'AI Development & Machine Learning',
    contributions: ['LLM Integration', 'Knowledge Graph Construction', 'Prompt Engineering'],
    email: 'ict20862@fot.sjp.ac.lk',
    linkedin: 'https://www.linkedin.com/in/dulan-jayawickrama/',
    github: 'https://github.com/realDulanJay',
    image: 'https://raw.githubusercontent.com/foverokavindz/your-ai-website/master/public/dulan.jpg',
  },
];

const IconLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer"
    className="ab-icon-link"
  >
    <Icon size={14} strokeWidth={2} />
  </a>
);

const About = () => (
  <Section id="about" className="ab-section">
    <Container>

      {/* meta */}
      <motion.div className="ab-meta" {...fadeUp(0)}>
        <span className="ab-eyebrow">About</span>
        <span className="ab-meta-num">10</span>
      </motion.div>

      {/* headline */}
      <motion.h2 className="ab-headline" {...fadeUp(0.05)}>
        Team &amp; Supervisors
      </motion.h2>

      {/* ── Supervisors ── */}
      <motion.div className="ab-group" {...fadeUp(0.1)}>
        <div className="ab-group-header">
          <span className="ab-group-label">Supervisors</span>
          <span className="ab-group-count">{supervisors.length}</span>
        </div>

        {supervisors.map((s, i) => (
          <motion.div key={i} className="ab-sup-row" {...fadeUp(0.13 + i * 0.05)}>
            {/* avatar */}
            <div className="ab-avatar">
              {s.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            {/* info */}
            <div className="ab-person-info">
              <p className="ab-person-name">{s.name}</p>
              <p className="ab-person-sub">{s.role} · {s.dept}</p>
            </div>
            {/* links */}
            <div className="ab-links">
              <IconLink href={`mailto:${s.email}`} icon={Mail} label="Email" />
              <IconLink href={s.linkedin} icon={Linkedin} label="LinkedIn" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Research Team ── */}
      <motion.div className="ab-group" {...fadeUp(0.2)}>
        <div className="ab-group-header">
          <span className="ab-group-label">Research Team</span>
          <span className="ab-group-count">{team.length}</span>
        </div>

        <div className="ab-team-grid">
          {team.map((m, i) => (
            <motion.div key={i} className="ab-card" {...fadeUp(0.23 + i * 0.06)}>
              {/* photo */}
              <div className="ab-photo-wrap">
                {m.image
                  ? <img src={m.image} alt={m.name} className="ab-photo" />
                  : <span className="ab-avatar ab-avatar--lg">{m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                }
              </div>

              {/* details */}
              <div className="ab-card-body">
                <div className="ab-card-top">
                  <div>
                    <p className="ab-person-name">{m.name}</p>
                    <p className="ab-person-sub">{m.role}</p>
                    <p className="ab-id">{m.id}</p>
                  </div>
                  <div className="ab-links">
                    <IconLink href={`mailto:${m.email}`} icon={Mail} label="Email" />
                    <IconLink href={m.linkedin} icon={Linkedin} label="LinkedIn" />
                    <IconLink href={m.github} icon={Github} label="GitHub" />
                  </div>
                </div>

                <div className="ab-divider" />

                <p className="ab-focus">{m.focus}</p>
                <div className="ab-tags">
                  {m.contributions.map((c, j) => (
                    <span key={j} className="ab-tag">{c}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </Container>

    <style>{`
      .ab-section {
        background: #F7F5F2;
        padding: 6rem 0 5rem;
        border-top: 1px solid var(--clr-border);
      }

      /* meta */
      .ab-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
      }
      .ab-eyebrow {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--clr-muted);
      }
      .ab-meta-num {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        color: var(--clr-border);
        letter-spacing: 0.1em;
      }

      /* headline */
      .ab-headline {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 600;
        line-height: 1.08;
        letter-spacing: -0.035em;
        color: var(--clr-heading);
        max-width: 480px;
        margin-bottom: 3rem;
      }

      /* group block */
      .ab-group { margin-bottom: 3rem; }

      .ab-group-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 0.85rem;
        border-bottom: 1px solid var(--clr-border);
        margin-bottom: 0;
      }
      .ab-group-label {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--clr-muted);
      }
      .ab-group-count {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.7rem;
        color: var(--clr-border);
      }

      /* ── supervisor rows ── */
      .ab-sup-row {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        padding: 1rem 0;
        border-bottom: 1px solid var(--clr-border);
      }
      .ab-sup-row:hover { background: rgba(0,0,0,0.015); margin: 0 -0.5rem; padding-left: 0.5rem; padding-right: 0.5rem; }

      /* ── avatar ── */
      .ab-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--clr-heading);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.02em;
        flex-shrink: 0;
      }
      .ab-avatar--lg { width: 100%; height: 100%; border-radius: 8px 8px 0 0; font-size: 1.5rem; }

      /* person info */
      .ab-person-info { flex: 1; min-width: 0; }
      .ab-person-name {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--clr-heading);
        margin-bottom: 0.1rem;
      }
      .ab-person-sub {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        color: var(--clr-muted);
        line-height: 1.4;
      }
      .ab-id {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.68rem;
        color: var(--clr-border);
        letter-spacing: 0.04em;
        margin-top: 0.15rem;
      }

      /* icon links */
      .ab-links {
        display: flex;
        gap: 0.4rem;
        flex-shrink: 0;
      }
      .ab-icon-link {
        width: 30px;
        height: 30px;
        border-radius: 6px;
        border: 1px solid var(--clr-border);
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--clr-muted);
        transition: background 0.15s, color 0.15s, border-color 0.15s;
      }
      .ab-icon-link:hover {
        background: var(--clr-heading);
        color: #fff;
        border-color: var(--clr-heading);
      }

      /* ── team card grid ── */
      .ab-team-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1px;
        background: var(--clr-border);
        border: 1px solid var(--clr-border);
        border-radius: 12px;
        overflow: hidden;
      }
      @media (max-width: 760px) {
        .ab-team-grid { grid-template-columns: 1fr; }
      }

      .ab-card {
        background: #fff;
        display: flex;
        flex-direction: column;
      }

      /* photo */
      .ab-photo-wrap {
        width: 100%;
        aspect-ratio: 4/3;
        overflow: hidden;
        background: var(--clr-off-white);
      }
      .ab-photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        filter: grayscale(20%);
        transition: filter 0.3s;
      }
      .ab-card:hover .ab-photo { filter: grayscale(0%); }

      /* card body */
      .ab-card-body { padding: 1.25rem 1.5rem 1.5rem; }

      .ab-card-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0.75rem;
        margin-bottom: 0.85rem;
      }

      .ab-divider {
        height: 1px;
        background: var(--clr-border);
        margin-bottom: 0.85rem;
      }

      .ab-focus {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.75rem;
        color: var(--clr-muted);
        margin-bottom: 0.65rem;
        line-height: 1.4;
      }

      .ab-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.35rem;
      }
      .ab-tag {
        font-family: 'Inter', system-ui, sans-serif;
        font-size: 0.68rem;
        font-weight: 600;
        color: var(--clr-heading);
        background: var(--clr-off-white);
        border: 1px solid var(--clr-border);
        border-radius: 4px;
        padding: 0.15rem 0.45rem;
        letter-spacing: 0.01em;
      }

      /* ── mobile responsive ── */
      @media (max-width: 640px) {
        .ab-section { padding: 3.5rem 0 3rem; }
        .ab-card-body { padding: 1rem 1rem 1.25rem; }
        .ab-sup-row:hover { margin: 0; padding-left: 0; padding-right: 0; }
        .ab-card-top { flex-direction: column; gap: 0.5rem; }
      }
    `}</style>
  </Section>
);

export default About;
