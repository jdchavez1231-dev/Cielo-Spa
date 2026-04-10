import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Services',  path: '/services' },
  { name: 'Specials',  path: '/#promo' },
  { name: 'Reviews',   path: '/#testimonials' },
  { name: 'Contact',   path: '/book' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(253,244,242,0.97)'
          : 'linear-gradient(to bottom, rgba(245,224,220,0.97), rgba(245,224,220,0.0))',
        borderBottom: scrolled ? '1px solid rgba(200,132,124,0.2)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        className="font-serif text-2xl font-light tracking-[0.18em] no-underline"
        style={{ color: '#C9A84C' }}
      >
        <em>Cielo</em> Spa
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="text-[0.75rem] tracking-[0.2em] uppercase no-underline transition-colors duration-300"
              style={{ color: location.pathname === link.path ? '#C8847C' : '#6B4444' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C8847C')}
              onMouseLeave={e => (e.currentTarget.style.color = location.pathname === link.path ? '#C8847C' : '#6B4444')}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <Link
        to="/book"
        className="hidden md:inline-block text-[0.7rem] tracking-[0.2em] uppercase no-underline font-medium transition-all duration-300"
        style={{ background: '#C9A84C', color: '#FDF4F2', padding: '0.7rem 1.6rem' }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#E2C97E'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#C9A84C'; (e.currentTarget as HTMLElement).style.transform = ''; }}
      >
        Book Now
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden transition-colors"
        style={{ color: '#6B4444' }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-full left-0 right-0 md:hidden"
            style={{ background: '#FDF4F2', borderBottom: '1px solid rgba(200,132,124,0.2)' }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-[0.75rem] tracking-[0.2em] uppercase no-underline transition-colors"
                  style={{ color: '#6B4444' }}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setMenuOpen(false)}
                className="mt-2 text-center text-[0.7rem] tracking-[0.2em] uppercase no-underline font-medium"
                style={{ background: '#C9A84C', color: '#FDF4F2', padding: '0.85rem 1.6rem' }}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
