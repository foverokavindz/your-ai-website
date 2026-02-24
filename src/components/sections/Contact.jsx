import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Section from '../ui/Section';
import Container from '../ui/Container';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'ict20956@fot.sjp.ac.lk', href: 'mailto:ict20956@fot.sjp.ac.lk' },
  { icon: Phone, label: 'Phone', value: '+94 77 525 8113', href: 'tel:+94775258113' },
  { icon: MapPin, label: 'Location', value: 'Faculty of Technology, University of Sri Jayewardenepura', href: '#' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <Section id="contact" className="ct-section">
      <Container>

        {/* meta */}
        <motion.div className="ct-meta" {...fadeUp(0)}>
          <span className="ct-eyebrow">Contact</span>
          <span className="ct-meta-num">11</span>
        </motion.div>

        {/* headline */}
        <motion.h2 className="ct-headline" {...fadeUp(0.05)}>
          Get in Touch
        </motion.h2>

        {/* two-col layout */}
        <div className="ct-layout">

          {/* LEFT — contact info */}
          <motion.div className="ct-left" {...fadeUp(0.1)}>
            <p className="ct-left-intro">
              Have questions about our research? We'd love to hear from you.
            </p>

            <div className="ct-details">
              {contactDetails.map((d, i) => (
                <a key={i} href={d.href} className="ct-detail-row">
                  <span className="ct-detail-icon"><d.icon size={14} strokeWidth={2} /></span>
                  <div>
                    <p className="ct-detail-label">{d.label}</p>
                    <p className="ct-detail-value">{d.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="ct-response-note">
              <p className="ct-response-head">Response time</p>
              <p className="ct-response-body">We typically respond within 24 hours on business days.</p>
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.form className="ct-form" onSubmit={handleSubmit} {...fadeUp(0.15)}>

            <div className="ct-field-row">
              <div className="ct-field">
                <label className="ct-label">Full Name</label>
                <input className="ct-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="ct-field">
                <label className="ct-label">Email Address</label>
                <input className="ct-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
              </div>
            </div>

            <div className="ct-field">
              <label className="ct-label">Subject</label>
              <input className="ct-input" type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required />
            </div>

            <div className="ct-field">
              <label className="ct-label">Message</label>
              <textarea className="ct-input ct-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell us more about your inquiry..." rows={5} required />
            </div>

            <button type="submit" className="ct-submit">
              <Send size={13} strokeWidth={2.5} />
              Send Message
            </button>

          </motion.form>

        </div>

      </Container>

      <style>{`
        .ct-section {
          background: #fff;
          padding: 6rem 0 5rem;
          border-top: 1px solid var(--clr-border);
        }

        /* meta */
        .ct-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .ct-eyebrow {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--clr-muted);
        }
        .ct-meta-num {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.75rem;
          color: var(--clr-border);
          letter-spacing: 0.1em;
        }

        /* headline */
        .ct-headline {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: var(--clr-heading);
          max-width: 400px;
          margin-bottom: 3rem;
        }

        /* two-col layout */
        .ct-layout {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 5rem;
          align-items: start;
        }
        @media (max-width: 760px) {
          .ct-layout { grid-template-columns: 1fr; gap: 3rem; }
        }

        /* ── LEFT ── */
        .ct-left-intro {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--clr-body);
          margin-bottom: 2rem;
        }

        .ct-details {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-top: 1px solid var(--clr-border);
          margin-bottom: 2rem;
        }

        .ct-detail-row {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 0.9rem 0;
          border-bottom: 1px solid var(--clr-border);
          text-decoration: none;
          transition: background 0.15s;
        }
        .ct-detail-row:hover {
          background: var(--clr-off-white);
          margin: 0 -0.5rem;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }

        .ct-detail-icon {
          width: 28px;
          height: 28px;
          border: 1px solid var(--clr-border);
          border-radius: 6px;
          background: var(--clr-off-white);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--clr-heading);
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .ct-detail-label {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--clr-muted);
          margin-bottom: 0.15rem;
        }
        .ct-detail-value {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.85rem;
          color: var(--clr-heading);
          line-height: 1.45;
          font-weight: 500;
        }

        /* response note */
        .ct-response-note {
          background: var(--clr-off-white);
          border: 1px solid var(--clr-border);
          border-radius: 8px;
          padding: 1rem 1.25rem;
        }
        .ct-response-head {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--clr-heading);
          margin-bottom: 0.25rem;
        }
        .ct-response-body {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.78rem;
          color: var(--clr-muted);
          line-height: 1.5;
        }

        /* ── FORM ── */
        .ct-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background: var(--clr-off-white);
          border: 1px solid var(--clr-border);
          border-radius: 12px;
          padding: 2rem 2.25rem;
        }

        .ct-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 500px) {
          .ct-field-row { grid-template-columns: 1fr; }
        }

        .ct-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .ct-label {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--clr-heading);
        }

        .ct-input {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.88rem;
          color: var(--clr-heading);
          background: #fff;
          border: 1px solid var(--clr-border);
          border-radius: 7px;
          padding: 0.65rem 0.9rem;
          outline: none;
          transition: border-color 0.2s;
          width: 100%;
        }
        .ct-input::placeholder { color: var(--clr-border); }
        .ct-input:focus { border-color: var(--clr-heading); }
        .ct-textarea { resize: none; }

        /* submit */
        .ct-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          color: #fff;
          background: var(--clr-heading);
          border: none;
          border-radius: 7px;
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: opacity 0.15s;
          align-self: flex-start;
        }
        .ct-submit:hover { opacity: 0.8; }
      `}</style>
    </Section>
  );
};

export default Contact;
