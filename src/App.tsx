import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Booking from './components/sections/Booking';
import AdminDashboard from './components/sections/AdminDashboard';
import Testimonials from './components/sections/Testimonials';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer style={{ background: '#F0CAC4', borderTop: '1px solid rgba(200,132,124,0.25)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-serif font-light text-[1.8rem] tracking-[0.18em] mb-1" style={{ color: '#C9A84C' }}>
              <em>Cielo</em> Spa
            </p>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase mb-5" style={{ color: '#9A7070' }}>
              Beauty &amp; Skin Care
            </p>
            <p className="text-[0.82rem] leading-[1.8] mb-6" style={{ color: '#6B4444' }}>
              Premium facial and skin care treatments in Las Vegas. Elegance, luxury, and visible results.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={16} />, href: 'https://www.instagram.com/cielospaa' },
                { icon: <Facebook size={16} />, href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  className="w-9 h-9 flex items-center justify-center transition-all duration-300"
                  style={{ border: '1px solid rgba(200,132,124,0.4)', color: '#C8847C' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#C9A84C'; el.style.color = '#FDF4F2'; el.style.borderColor = '#C9A84C'; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = ''; el.style.color = '#C8847C'; el.style.borderColor = 'rgba(200,132,124,0.4)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.28em] uppercase font-normal mb-6" style={{ color: '#3D2020' }}>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[['Home', '/'], ['Services', '/services'], ['Book Appointment', '/book']].map(([name, path]) => (
                <li key={name}>
                  <a
                    href={path}
                    className="text-[0.8rem] no-underline transition-colors"
                    style={{ color: '#9A7070' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#9A7070')}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.28em] uppercase font-normal mb-6" style={{ color: '#3D2020' }}>
              Treatments
            </h4>
            <ul className="space-y-4">
              {['Facial Treatments', 'Advanced Skin Care', 'Body Sculpting', 'Acne Solutions'].map(t => (
                <li key={t} className="text-[0.8rem]" style={{ color: '#9A7070' }}>{t}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.65rem] tracking-[0.28em] uppercase font-normal mb-6" style={{ color: '#3D2020' }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              {[
                { icon: <Phone size={14} />, text: '323-677-8772' },
                { icon: <Mail size={14} />, text: 'hello@cielospaa.com' },
                { icon: <MapPin size={14} />, text: 'Las Vegas, NV' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[0.8rem]" style={{ color: '#9A7070' }}>
                  <span style={{ color: '#C9A84C' }}>{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ borderTop: '1px solid rgba(200,132,124,0.2)' }}
        >
          <p className="text-[0.62rem] tracking-[0.2em] uppercase" style={{ color: '#9A7070', opacity: 0.7 }}>
            © 2026 Cielo Spa. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service'].map(link => (
              <a
                key={link}
                href="#"
                className="text-[0.62rem] tracking-[0.18em] uppercase no-underline transition-colors"
                style={{ color: '#9A7070', opacity: 0.7 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9A7070')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/"        element={<><Hero /><Services /><Testimonials /></>} />
            <Route path="/services" element={<><Services /><Testimonials /></>} />
            <Route path="/book"    element={<Booking />} />
            <Route path="/admin"   element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
