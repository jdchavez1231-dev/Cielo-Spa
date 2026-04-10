import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Booking from './components/sections/Booking';
import AdminDashboard from './components/sections/AdminDashboard';
import Testimonials from './components/sections/Testimonials';
import { Sparkles, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-spa-gold rounded-full flex items-center justify-center text-white">
                <Sparkles size={16} />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight text-spa-gold">Cielo Spa</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Providing premium beauty and skin care treatments to help you reveal your natural glow.
              Elegance, luxury, and visible results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-spa-pink/20 flex items-center justify-center text-spa-gold hover:bg-spa-gold hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-spa-pink/20 flex items-center justify-center text-spa-gold hover:bg-spa-gold hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-gray-900 mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="/" className="hover:text-spa-gold transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-spa-gold transition-colors">Services</a></li>
              <li><a href="/book" className="hover:text-spa-gold transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-gray-900 mb-6 uppercase tracking-widest text-sm">Treatments</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>Facial Treatments</li>
              <li>Advanced Skin Care</li>
              <li>Body Sculpting</li>
              <li>Acne Solutions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-gray-900 mb-6 uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-spa-gold" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-spa-gold" />
                <span>hello@cielospa.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-spa-gold" />
                <span>123 Beauty Lane, Glow City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest">
          <p>© 2026 Cielo Spa. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-spa-gold">Privacy Policy</a>
            <a href="#" className="hover:text-spa-gold">Terms of Service</a>
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
            <Route path="/" element={<><Hero /><Services /><Testimonials /></>} />
            <Route path="/services" element={<><Services /><Testimonials /></>} />
            <Route path="/book" element={<Booking />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
