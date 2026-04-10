import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 60% at 50% 40%, rgba(200,132,124,0.18) 0%, transparent 65%),
          radial-gradient(ellipse 40% 30% at 20% 80%, rgba(201,168,76,0.10) 0%, transparent 60%),
          radial-gradient(ellipse 30% 40% at 85% 20%, rgba(200,132,124,0.12) 0%, transparent 55%),
          linear-gradient(160deg, #F9E8E5 0%, #F0D4CF 40%, #F5E0DC 100%)
        `,
      }}
    >
      {/* Soft petal watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: 0.06 }}>
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '70vw', maxWidth: 640 }}>
          <path d="M100 10 C100 10 70 50 70 100 C70 130 85 145 100 150 C115 145 130 130 130 100 C130 50 100 10 100 10Z" fill="#C8847C"/>
          <path d="M100 30 C100 30 45 60 40 100 C37 122 55 138 75 142 C80 118 85 100 100 85 C115 100 120 118 125 142 C145 138 163 122 160 100 C155 60 100 30 100 30Z" fill="#C8847C"/>
          <path d="M100 50 C100 50 35 75 28 108 C24 128 42 142 62 144 C70 125 78 108 100 96 C122 108 130 125 138 144 C158 142 176 128 172 108 C165 75 100 50 100 50Z" fill="#C9A84C"/>
          <circle cx="100" cy="100" r="12" fill="#C9A84C"/>
        </svg>
      </div>

      {/* Decorative rose corners */}
      <div className="absolute top-0 left-0 w-48 h-48 pointer-events-none" style={{ opacity: 0.12 }}>
        <svg viewBox="0 0 120 120" fill="#C8847C">
          <circle cx="20" cy="20" r="18"/><circle cx="45" cy="12" r="12"/><circle cx="12" cy="45" r="12"/>
          <circle cx="60" cy="20" r="8"/><circle cx="20" cy="60" r="8"/>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none rotate-180" style={{ opacity: 0.12 }}>
        <svg viewBox="0 0 120 120" fill="#C8847C">
          <circle cx="20" cy="20" r="18"/><circle cx="45" cy="12" r="12"/><circle cx="12" cy="45" r="12"/>
          <circle cx="60" cy="20" r="8"/><circle cx="20" cy="60" r="8"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 animate-fade-up px-6">
        <p className="text-[0.65rem] tracking-[0.35em] uppercase mb-6" style={{ color: '#C9A84C' }}>
          Las Vegas · Facial &amp; Skin Care
        </p>

        <h1
          className="font-serif font-light leading-none tracking-[0.05em] mb-3"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', color: '#3D2020' }}
        >
          <em className="italic" style={{ color: '#C9A84C' }}>Cielo</em>
          <br />
          <span style={{ color: '#3D2020' }}>Spa</span>
        </h1>

        <p
          className="font-serif font-light italic tracking-[0.1em] mt-4 mb-3"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)', color: '#9A7070' }}
        >
          Beauty &amp; Skin Care
        </p>

        {/* Gold divider */}
        <div className="gold-divider mt-4 mb-8">
          <span /><i /><span />
        </div>

        <p className="text-[0.7rem] tracking-[0.25em] uppercase mb-10" style={{ color: '#9A7070' }}>
          Where radiant skin begins
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/book"
            className="inline-block text-[0.72rem] tracking-[0.22em] uppercase font-medium no-underline transition-all duration-300"
            style={{ background: '#C9A84C', color: '#FDF4F2', padding: '1rem 2.5rem' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#E2C97E'; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 8px 30px rgba(201,168,76,0.3)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#C9A84C'; el.style.transform = ''; el.style.boxShadow = ''; }}
          >
            Book an Appointment
          </Link>
          <Link
            to="/services"
            className="inline-block text-[0.72rem] tracking-[0.22em] uppercase no-underline transition-all duration-300"
            style={{ border: '1px solid rgba(200,132,124,0.5)', color: '#C8847C', padding: '1rem 2.5rem' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#C8847C'; el.style.background = 'rgba(200,132,124,0.08)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(200,132,124,0.5)'; el.style.background = ''; }}
          >
            Explore Services
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-14 flex gap-10 justify-center flex-wrap">
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '4.9★', label: 'Avg Rating' },
            { value: '98%', label: 'Return Rate' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-serif font-light text-2xl" style={{ color: '#C9A84C' }}>{stat.value}</p>
              <p className="text-[0.6rem] tracking-[0.25em] uppercase mt-1" style={{ color: '#9A7070' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-slow" style={{ color: '#9A7070' }}>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, #C9A84C, transparent)' }} />
        <span className="text-[0.6rem] tracking-[0.25em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
