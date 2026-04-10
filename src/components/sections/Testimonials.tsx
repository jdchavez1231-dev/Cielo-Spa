import { useEffect, useRef } from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Vanessa R.',
    location: 'Las Vegas',
    treatment: 'Hydrafacial',
    text: "My skin has never looked better. The hydrafacial left me glowing for weeks — I've been getting compliments nonstop!",
  },
  {
    id: 2,
    name: 'Diana M.',
    location: 'Henderson',
    treatment: 'Microneedling',
    text: "I was so nervous about microneedling but the esthetician made me feel completely at ease. The results are honestly life-changing.",
  },
  {
    id: 3,
    name: 'Kayla T.',
    location: 'North Las Vegas',
    treatment: 'Acne Clear Facial',
    text: "First-time client and I'll never go anywhere else. The acne facial cleared up months of stubborn breakouts in just one session.",
  },
  {
    id: 4,
    name: 'Priya K.',
    location: 'Las Vegas',
    treatment: 'Rose & Gold Glow',
    text: "The Rose & Gold Facial is absolute magic. My skin looked flawless before my wedding. Everyone kept asking what I did!",
  },
  {
    id: 5,
    name: 'Amanda L.',
    location: 'Henderson',
    treatment: 'Cavitation Deluxe',
    text: "I lost 2 inches off my waist in 4 sessions. The team is so professional and caring. Absolutely worth every penny.",
  },
  {
    id: 6,
    name: 'Maria G.',
    location: 'Las Vegas',
    treatment: 'Spring Renewal Facial',
    text: "Such a relaxing and professional experience every time. The Spring Renewal Facial left my skin so bright and fresh.",
  },
];

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

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6 md:px-16" style={{ background: '#F5E0DC' }}>
      <div ref={headerRef} className="reveal text-center mb-16">
        <p className="text-[0.62rem] tracking-[0.35em] uppercase mb-4" style={{ color: '#C9A84C' }}>
          Client Love
        </p>
        <div className="gold-divider"><span /><i /><span /></div>
        <h2 className="font-serif font-light tracking-[0.04em]" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#3D2020' }}>
          What Our Clients <em className="italic" style={{ color: '#C9A84C' }}>Say</em>
        </h2>
      </div>

      <div
        className="max-w-6xl mx-auto grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}
      >
        {TESTIMONIALS.map((review, idx) => (
          <RevealCard key={review.id} delay={idx * 80}>
            <div
              className="relative p-10"
              style={{ border: '1px solid rgba(200,132,124,0.2)', background: '#FDF4F2' }}
            >
              {/* Big quote mark */}
              <div
                className="absolute font-serif pointer-events-none select-none"
                style={{
                  fontSize: '6rem',
                  color: '#C8847C',
                  opacity: 0.15,
                  top: '-0.5rem',
                  left: '1.5rem',
                  lineHeight: 1,
                  fontFamily: 'Cormorant Garamond, serif',
                }}
              >
                "
              </div>

              {/* Stars */}
              <div className="mb-4" style={{ color: '#C9A84C', letterSpacing: '0.1em', fontSize: '0.75rem' }}>
                ★★★★★
              </div>

              <p
                className="font-serif italic leading-[1.8] mb-5"
                style={{ fontSize: '1.05rem', color: '#6B4444' }}
              >
                "{review.text}"
              </p>

              <div
                className="pt-4"
                style={{ borderTop: '1px solid rgba(200,132,124,0.15)' }}
              >
                <p className="text-[0.68rem] tracking-[0.2em] uppercase" style={{ color: '#C8847C' }}>
                  — {review.name}, {review.location}
                </p>
                <p className="text-[0.62rem] tracking-[0.15em] mt-1" style={{ color: '#9A7070' }}>
                  {review.treatment}
                </p>
              </div>
            </div>
          </RevealCard>
        ))}
      </div>

      {/* Summary stats */}
      <RevealCard delay={300}>
        <div className="mt-16 max-w-2xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '98%',  label: 'Would Return' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif font-light" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#C9A84C' }}>
                {stat.value}
              </p>
              <p className="text-[0.6rem] tracking-[0.25em] uppercase mt-1" style={{ color: '#9A7070' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </RevealCard>
    </section>
  );
}
