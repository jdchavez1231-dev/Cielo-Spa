import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Services', path: '/services' },
  { name: 'Specials', path: '/#promo' },
  { name: 'Reviews', path: '/#testimonials' },
  { name: 'Contact', path: '/book' },
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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-colors duration-300"
      style={{
        background: scrolled
          ? 'rgba(12,12,12,0.97)'
          : 'linear-gradient(to bottom, rgba(12,12,12,0.95), transparent)',
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        className="font-serif text-2xl font-light tracking-[0.18em] text-gold-light no-underline"
      >
        <em>Cielo</em> Spa
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`text-[0.75rem] tracking-[0.2em] uppercase no-underline transition-colors duration-300 ${
                location.pathname === link.path ? 'text-gold-light' : 'text-text-light hover:text-gold-light'
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <Link
        to="/book"
        className="hidden md:inline-block text-[0.7rem] tracking-[0.2em] uppercase text-dark bg-gold px-6 py-3 no-underline font-medium transition-all duration-300 hover:bg-gold-light hover:-translate-y-px"
      >
        Book Now
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-text-light hover:text-gold-light transition-colors"
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
            className="absolute top-full left-0 right-0 bg-[#0C0C0C] border-b border-gold/10 md:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-[0.75rem] tracking-[0.2em] uppercase text-text-light hover:text-gold-light transition-colors no-underline"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setMenuOpen(false)}
                className="mt-2 text-center text-[0.7rem] tracking-[0.2em] uppercase text-dark bg-gold px-6 py-3 no-underline font-medium"
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
