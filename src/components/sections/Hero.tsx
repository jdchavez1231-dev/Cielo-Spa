import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,168,76,0.12) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 80% 70%, rgba(201,168,76,0.06) 0%, transparent 60%),
            linear-gradient(180deg, #0C0C0C 0%, #141008 50%, #0C0C0C 100%)
          `,
        }}
      />

      {/* Lotus watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '60vw', maxWidth: 600 }}>
          <ellipse cx="100" cy="130" rx="70" ry="18" fill="#C9A84C" />
          <path d="M100 20 C100 20 80 60 80 100 C80 115 90 125 100 130 C110 125 120 115 120 100 C120 60 100 20 100 20Z" fill="#C9A84C" />
          <path d="M100 40 C100 40 60 65 55 100 C53 115 65 125 80 128 C85 110 88 95 100 80 C112 95 115 110 120 128 C135 125 147 115 145 100 C140 65 100 40 100 40Z" fill="#C9A84C" />
          <path d="M100 60 C100 60 45 75 38 105 C35 120 50 130 65 130 C75 118 82 105 100 95 C118 105 125 118 135 130 C150 130 165 120 162 105 C155 75 100 60 100 60Z" fill="#C9A84C" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 animate-fade-up px-4">
        <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-6">
          Las Vegas · Facial &amp; Skin Care
        </p>

        <h1
          className="font-serif font-light leading-none tracking-[0.05em] text-cream mb-3"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
        >
          <em className="italic text-gold-light">Cielo</em>
          <br />
          Spa
        </h1>

        <p
          className="font-serif font-light italic text-text-muted tracking-[0.1em] mt-4 mb-10"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
        >
          Where radiant skin begins
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/book"
            className="inline-block px-10 py-4 bg-gold text-dark text-[0.72rem] tracking-[0.22em] uppercase font-medium no-underline transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.3)]"
          >
            Book an Appointment
          </Link>
          <Link
            to="/services"
            className="inline-block px-10 py-4 border border-gold/40 text-gold-light text-[0.72rem] tracking-[0.22em] uppercase no-underline transition-all duration-300 hover:border-gold hover:bg-gold/5"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted animate-pulse-slow">
        <div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, #8A6A2A, transparent)' }}
        />
        <span className="text-[0.6rem] tracking-[0.25em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
