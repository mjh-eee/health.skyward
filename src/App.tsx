import { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  HeartHandshake,
  Leaf,
  Menu,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/7108319/pexels-photo-7108319.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const careImage = 'https://images.pexels.com/photos/29372534/pexels-photo-29372534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

type Audience = 'members' | 'agencies' | 'organizations';

const audiences: Record<Audience, { label: string; eyebrow: string; title: string; description: string; cta: string; points: string[] }> = {
  members: {
    label: 'Members & caregivers',
    eyebrow: 'For you and your family',
    title: 'Care that sees the whole person.',
    description: 'Your health is more than an appointment. We connect you with the people, services, and support that help you live well at home and in your community.',
    cta: 'Find member support',
    points: ['A dedicated care team', 'Support navigating everyday needs', 'A plan built around your goals'],
  },
  agencies: {
    label: 'Care management agencies',
    eyebrow: 'For care partners',
    title: 'Make every connection count.',
    description: 'Give your team the support, coordination, and local insight to help members move forward with confidence.',
    cta: 'Partner with Skyward',
    points: ['Responsive operational support', 'Training and practical resources', 'A partner who understands your work'],
  },
  organizations: {
    label: 'Managed care organizations',
    eyebrow: 'For health plan leaders',
    title: 'A stronger model for better outcomes.',
    description: 'Extend your care model with a trusted partner focused on whole-person coordination, measurable value, and lasting relationships.',
    cta: 'Explore our capabilities',
    points: ['Whole-person care coordination', 'Clear communication and reporting', 'Flexible network partnerships'],
  },
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAudience, setActiveAudience] = useState<Audience>('members');
  const [contactOpen, setContactOpen] = useState(false);
  const audience = audiences[activeAudience];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement">
        <div className="container announcement-inner">
          <span className="announcement-dot" />
          <span>Helping New Yorkers live healthier, happier lives</span>
          <a href="#about">Why Skyward Health <ArrowRight size={14} /></a>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Skyward Health home" onClick={closeMenu}>
            <span className="brand-mark"><Leaf size={21} strokeWidth={2.5} /></span>
            <span>skyward<span>health</span></span>
          </a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>Why Skyward</a>
            <a href="#services" onClick={closeMenu}>Services <ChevronDown size={14} /></a>
            <a href="#audiences" onClick={closeMenu}>Who we serve</a>
            <a href="#insights" onClick={closeMenu}>Insights</a>
            <button className="nav-cta" onClick={() => { setContactOpen(true); closeMenu(); }}>Get in touch <ArrowRight size={16} /></button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="kicker"><span className="kicker-line" /> Whole-person care, made personal</div>
              <h1>Better health starts with <em>being seen.</em></h1>
              <p className="hero-lede">Skyward Health brings people, care teams, and communities together to make healthcare feel more human—and help every person move toward a healthier life.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#audiences">Find your path <ArrowRight size={18} /></a>
                <button className="text-button" onClick={() => setContactOpen(true)}>Talk with our team <ChevronRight size={17} /></button>
              </div>
              <div className="hero-note"><ShieldCheck size={17} /> Trusted support for members and care partners across New York.</div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <img src={heroImage} alt="Care team speaking with a patient in a bright clinic" />
                <div className="image-wash" />
              </div>
              <div className="hero-card hero-card-top"><span className="mini-icon mint"><HeartHandshake size={19} /></span><div><strong>Care, connected</strong><span>One team. More possibilities.</span></div></div>
              <div className="hero-card hero-card-bottom"><span className="stat-number">01</span><div><strong>Start where you are</strong><span>Support that follows your goals.</span></div></div>
              <div className="sun-shape" />
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span className="trust-label">A partner in whole-person health</span>
            <div className="trust-items"><span><Check size={15} /> Human-centered</span><span><Check size={15} /> Community-rooted</span><span><Check size={15} /> Outcomes-focused</span></div>
          </div>
        </section>

        <section className="intro section" id="about">
          <div className="container intro-grid">
            <div><div className="section-label">Why Skyward Health</div><h2>Health is personal.<br /><span>Care should be, too.</span></h2></div>
            <div className="intro-content"><p className="large-copy">We believe the best care happens when the whole picture is in view. That means looking beyond a diagnosis to understand the people, places, and possibilities that shape each life.</p><p>Skyward Health connects Medicaid members with coordinated support while helping care organizations deliver a more thoughtful, more effective experience.</p><a className="inline-link" href="#services">See how we help <ArrowRight size={17} /></a></div>
          </div>
        </section>

        <section className="pathways section" id="audiences">
          <div className="container">
            <div className="section-heading"><div><div className="section-label">The right next step</div><h2>Wherever you are,<br /><span>we’re here to help.</span></h2></div><p>Choose the path that best describes you. We’ll meet you there with clear information and practical support.</p></div>
            <div className="audience-tabs" role="tablist" aria-label="Audience pathways">
              {(Object.keys(audiences) as Audience[]).map((key) => <button key={key} className={activeAudience === key ? 'audience-tab active' : 'audience-tab'} onClick={() => setActiveAudience(key)} role="tab" aria-selected={activeAudience === key}>{audiences[key].label}<ArrowRight size={16} /></button>)}
            </div>
            <div className="pathway-panel">
              <div className="pathway-copy"><div className="pill">{audience.eyebrow}</div><h3>{audience.title}</h3><p>{audience.description}</p><a className="button button-dark" href="#contact">{audience.cta} <ArrowRight size={17} /></a></div>
              <div className="pathway-points">{audience.points.map((point) => <div className="point" key={point}><span><Check size={16} /></span><strong>{point}</strong></div>)}</div>
              <div className="pathway-orb" />
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container">
            <div className="section-heading services-heading"><div><div className="section-label">What we do</div><h2>Support that makes<br /><span>life move forward.</span></h2></div><p>From the first conversation to the next milestone, we make care easier to understand, navigate, and trust.</p></div>
            <div className="service-grid">
              <article className="service-card featured"><span className="service-icon"><HeartHandshake size={24} /></span><div><h3>Whole-person care coordination</h3><p>A dedicated team helps members connect the dots between health, home, and community.</p><a href="#audiences" className="card-link">Explore member care <ArrowRight size={16} /></a></div><span className="card-index">01</span></article>
              <article className="service-card"><span className="service-icon blue"><Network size={24} /></span><div><h3>Partner support</h3><p>Practical tools and responsive collaboration for the organizations doing the work.</p><a href="#audiences" className="card-link">For care partners <ArrowRight size={16} /></a></div><span className="card-index">02</span></article>
              <article className="service-card"><span className="service-icon coral"><Sparkles size={24} /></span><div><h3>Better care insights</h3><p>Clearer information helps teams see opportunities and create meaningful change.</p><a href="#contact" className="card-link">Start a conversation <ArrowRight size={16} /></a></div><span className="card-index">03</span></article>
            </div>
          </div>
        </section>

        <section className="story section" id="insights">
          <div className="container story-grid"><div className="story-image"><img src={careImage} alt="Caregiver and older woman sharing a warm moment at home" /><span className="story-caption"><span className="caption-dot" /> Care is a relationship</span></div><div className="story-copy"><div className="section-label">The Skyward difference</div><h2>Small moments can make a <span>big difference.</span></h2><p>When people feel heard, supported, and connected, healthier choices become possible. Our work is built around those everyday moments—the ones that create trust and help people feel more in control of their lives.</p><div className="quote"><MessageCircle size={23} /><p>“Skyward helps us make the system feel simpler and more human for the people we serve.”</p></div><a className="inline-link" href="#contact">Learn about our approach <ArrowRight size={17} /></a></div></div>
        </section>

        <section className="cta-section" id="contact"><div className="container cta-inner"><div><div className="section-label light">Let’s move forward</div><h2>Good care begins<br />with a conversation.</h2></div><button className="button button-light" onClick={() => setContactOpen(true)}>Get in touch <ArrowRight size={18} /></button></div></section>
      </main>

      <footer className="footer"><div className="container footer-main"><div className="footer-brand"><a className="brand light-brand" href="#top"><span className="brand-mark"><Leaf size={21} strokeWidth={2.5} /></span><span>skyward<span>health</span></span></a><p>Helping people live healthier,<br />happier lives.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#about">Why Skyward</a><a href="#services">Services</a><a href="#insights">Insights</a></div><div><strong>Connect</strong><a href="#audiences">Members & caregivers</a><a href="#audiences">Care partners</a><a href="#contact">Contact us</a></div></div></div><div className="container footer-bottom"><span>© 2026 Skyward Health</span><span>New York State Health Home</span><span>Privacy & accessibility</span></div></footer>

      {contactOpen && <div className="modal-backdrop" onClick={() => setContactOpen(false)}><div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setContactOpen(false)} aria-label="Close contact form"><X size={20} /></button><div className="section-label">Start a conversation</div><h2 id="contact-title">We’re here to help.</h2><p>Tell us a little about yourself and our team will connect you with the right person.</p><form onSubmit={(event) => { event.preventDefault(); setContactOpen(false); }}><label>Name<input required type="text" placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>How can we help?<select defaultValue=""><option value="" disabled>Select one</option><option>I’m a member or caregiver</option><option>I represent a care agency</option><option>I represent a health organization</option></select></label><button className="button button-primary" type="submit">Send request <ArrowRight size={17} /></button></form></div></div>}
    </div>
  );
}

export default App;
