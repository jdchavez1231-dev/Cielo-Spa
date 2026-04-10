import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SPA_SERVICES } from '@/src/types';

const SERVICE_ICONS: Record<string, JSX.Element> = {
  'bunny-glow': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      <path d="M12 8v4l3 3"/>
    </svg>
  ),
  'spring-renewal': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  'rose-gold': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    </svg>
  ),
  'deluxe-hydro': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3z"/>
      <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"/>
    </svg>
  ),
  'hydro-glow': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  'microneedling': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  ),
  'acne-clear': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M9 12h6M12 9v6"/>
      <circle cx="12" cy="12" r="9"/>
    </svg>
  ),
  'cavitation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <ellipse cx="12" cy="12" rx="10" ry="6"/>
      <ellipse cx="12" cy="12" rx="6" ry="3"/>
    </svg>
  ),
  'cavitation-rf': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  ),
  'cavitation-deluxe': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function RevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function Services() {
  const headerRef = useReveal();

  const categories = [
    { id: 'facial' as const,   label: 'Facial Treatments' },
    { id: 'advanced' as const, label: 'Advanced & Acne' },
    { id: 'body' as const,     label: 'Body Sculpting' },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-16 bg-dark2">
      <div ref={headerRef} className="reveal text-center mb-16">
        <p className="text-[0.62rem] tracking-[0.35em] uppercase text-gold mb-4">Our Treatments</p>
        <div className="gold-divider"><span /><i /><span /></div>
        <h2 className="font-serif font-light tracking-[0.04em] text-cream" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
          Crafted for Your <em className="italic text-gold-light">Glow</em>
        </h2>
      </div>

      {categories.map((cat) => {
        const services = SPA_SERVICES.filter(s => s.category === cat.id);
        return (
          <div key={cat.id} className="max-w-6xl mx-auto mb-16 last:mb-0">
            <RevealCard>
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold-dim mb-6">{cat.label}</p>
            </RevealCard>
            <div
              className="grid"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2px' }}
            >
              {services.map((service, idx) => (
                <RevealCard key={service.id} delay={idx * 80}>
                  <div
                    className="group bg-dark3 p-10 border-t border-gold/15 relative overflow-hidden cursor-default transition-all duration-300 hover:bg-[#1f1e18] hover:border-gold/40"
                    style={{ '--tw-shadow': 'none' } as React.CSSProperties}
                  >
                    {/* Bottom gold sweep on hover */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                      style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
                    />

                    <div className="w-10 h-10 mb-5 text-gold opacity-80">
                      {SERVICE_ICONS[service.id] ?? SERVICE_ICONS['rose-gold']}
                    </div>

                    <h3 className="font-serif text-[1.35rem] font-normal text-cream mb-2 tracking-[0.04em]">
                      {service.name}
                    </h3>
                    <p className="text-[0.8rem] leading-[1.7] text-text-muted mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-end justify-between">
                      <span className="font-serif text-[1.1rem] text-gold-light tracking-[0.08em]">
                        From ${service.price}
                      </span>
                      <span className="text-[0.6rem] tracking-[0.2em] uppercase text-gold-dim">{service.duration}</span>
                    </div>
                  </div>
                </RevealCard>
              ))}
            </div>
          </div>
        );
      })}

      {/* Promo banner */}
      <section
        id="promo"
        className="mt-20 -mx-6 md:-mx-16 py-16 px-6 text-center border-t border-b border-gold/20"
        style={{ background: 'linear-gradient(135deg, #1A1508 0%, #0C0A04 50%, #1A1508 100%)' }}
      >
        <RevealCard>
          <div className="inline-block border border-gold text-gold-light text-[0.65rem] tracking-[0.3em] uppercase px-6 py-2 mb-6">
            Limited Time · New Clients Only
          </div>
          <p className="font-serif font-light text-cream mb-1" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}>
            First-Time Clients Receive
          </p>
          <p className="font-serif italic text-gold-light leading-none mb-4" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            10% Off
          </p>
          <p className="text-[0.78rem] tracking-[0.12em] text-text-muted mb-8">
            Any treatment + FREE Lip Scrub Add-On &nbsp;·&nbsp; Limited Appointments
          </p>
          <Link
            to="/book"
            className="inline-block px-10 py-4 bg-gold text-dark text-[0.72rem] tracking-[0.22em] uppercase font-medium no-underline transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(201,168,76,0.25)]"
          >
            Claim This Offer
          </Link>
        </RevealCard>
      </section>
    </section>
  );
}
