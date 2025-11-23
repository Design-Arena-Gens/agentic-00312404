import Image from 'next/image';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const services = [
  {
    title: 'Engineering Consultancy',
    description:
      'Multidisciplinary engineering studies, feasibility analyses, and expert guidance for complex infrastructure initiatives.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M8 38h32M12 34V18l12-8 12 8v16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 38v-8a4 4 0 0 1 8 0v8M24 26v-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Renewable Energy',
    description:
      'Design and implementation of sustainable energy systems including solar, wind, and smart-grid integrations.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M24 42c9.941 0 18-8.059 18-18S33.941 6 24 6 6 14.059 6 24s8.059 18 18 18Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 14v20M14 24h20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Project Management',
    description:
      'End-to-end project leadership, from concept through delivery, ensuring safety, efficiency, and budget alignment.',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M10 12h28v24H10z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M10 20h28M18 35V20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const stats = [
  { label: 'Successful Projects', value: '120+' },
  { label: 'Years of Expertise', value: '15' },
  { label: 'Client Satisfaction', value: '98%' },
];

const testimonies = [
  {
    quote:
      'Iceem.tn synchronized every discipline of our smart city expansion flawlessly. Their commitment to innovation was evident in each milestone.',
    author: 'Amine G.',
    role: 'Director of Urban Development',
    company: 'Ville Nouvelle Tunis',
  },
  {
    quote:
      'The team designed a tailored solar energy solution that significantly reduced our operational costs while exceeding regulatory expectations.',
    author: 'Sarra L.',
    role: 'Operations Manager',
    company: 'EcoManufacture',
  },
  {
    quote:
      'From the first feasibility studies to the final delivery, Iceem.tn provided responsive, insightful, and reliable engineering leadership.',
    author: 'Mahmoud B.',
    role: 'Infrastructure Lead',
    company: 'North Africa Logistics',
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="container">
          <div className="nav-brand">Iceem.tn</div>
          <nav>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact" className="nav-cta">
              Get a Quote
            </a>
          </nav>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy" data-animate="fade-up">
            <span className="eyebrow">Engineering | Energy | Management</span>
            <h1>Engineering tomorrow&apos;s resilient infrastructure today.</h1>
            <p>
              Iceem.tn partners with forward-focused organizations to deliver intelligent design, renewable energy, and
              integrated project delivery that accelerates sustainable growth.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#contact">
                Get a Quote
              </a>
              <a className="btn-secondary" href="#services">
                Explore Services
              </a>
            </div>
            <div className="stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-media" data-animate="fade-in">
            <div className="media-card">
              <Image
                src="https://images.unsplash.com/photo-1529429617124-aee0223d760e?auto=format&fit=crop&w=1100&q=80"
                alt="Engineers reviewing sustainable infrastructure plans"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 50vw"
                priority
              />
              <div className="media-overlay">
                <span>
                  Trusted partner for public & private sector leaders across Tunisia, Africa, and the Mediterranean.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">What we do</span>
            <h2>Comprehensive solutions for high-impact projects</h2>
            <p>
              From concept to commissioning, our engineers and project managers deliver end-to-end solutions that align
              technology, sustainability, and community value.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card" data-animate="fade-up">
                <div className="icon-circle" aria-hidden="true">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="container impact-grid">
          <div className="impact-media" data-animate="fade-in">
            <Image
              src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1100&q=80"
              alt="Modern infrastructure illuminated at dusk"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw, 40vw"
            />
          </div>
          <div className="impact-copy" data-animate="fade-up">
            <span className="eyebrow">Impact</span>
            <h2>Delivering measurable results with sustainable innovation</h2>
            <p>
              Our multidisciplinary teams integrate cutting-edge technology, energy efficiency, and resilient
              construction practices. Whether we are modernizing infrastructure or launching renewable energy programs,
              we prioritize outcomes that deliver lasting value for people and the planet.
            </p>
            <ul>
              <li>ISO-certified methodologies that meet international standards.</li>
              <li>Rigorous project governance ensuring transparent communication.</li>
              <li>Lifecycle performance monitoring and optimization.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Testimonials</span>
            <h2>Clients recognize our collaborative partnership</h2>
            <p>
              Hear how Iceem.tn supports organizations to meet ambitious sustainability goals while delivering projects
              on time and on budget.
            </p>
          </div>
          <TestimonialsCarousel testimonials={testimonies} />
        </div>
      </section>

      <section className="cta">
        <div className="container cta-card" data-animate="fade-up">
          <div>
            <h2>Ready to accelerate your next project?</h2>
            <p>
              Partner with Iceem.tn to unlock resilient solutions that power progress. Share the scope of your project
              and we&apos;ll prepare a tailored roadmap.
            </p>
          </div>
          <a className="btn-primary btn-large" href="mailto:contact@iceem.tn">
            Contact Us
          </a>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">Iceem.tn</div>
            <p>
              Innovative Construction & Energy Management. We design, build, and optimize sustainable infrastructure for
              the future.
            </p>
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>
              <a href="tel:+21671880595">+216 71 880 595</a>
              <br />
              <a href="mailto:contact@iceem.tn">contact@iceem.tn</a>
            </p>
            <p>12 Rue du Lac, Les Berges du Lac 1, Tunis, Tunisia</p>
          </div>
          <div className="footer-links">
            <h3>Follow</h3>
            <a href="https://www.facebook.com/ICEEM.TN" target="_blank" rel="noreferrer noopener">
              Facebook
            </a>
            <a href="https://www.linkedin.com/company/iceem" target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/iceem.tn" target="_blank" rel="noreferrer noopener">
              Instagram
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <span>Copyright {new Date().getFullYear()} Iceem.tn. All rights reserved.</span>
            <a href="#hero">Back to top</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
