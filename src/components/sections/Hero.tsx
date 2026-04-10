import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-spa-pink/10 -skew-x-12 transform origin-top-right -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-spa-gold/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-spa-pink/30 text-spa-gold text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            <span>Beauty & Skin Care</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-900 leading-tight mb-6">
            Reveal Your <br />
            <span className="text-spa-gold italic">Natural Glow</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            Experience the ultimate in luxury skincare and body sculpting. 
            Our expert treatments are designed to rejuvenate your skin and 
            enhance your natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-spa-gold hover:bg-spa-gold/90 text-white rounded-full px-8 py-6 text-lg">
              <Link to="/book" className="flex items-center space-x-2">
                <span>Book Appointment</span>
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-spa-gold text-spa-gold hover:bg-spa-gold/10 rounded-full px-8 py-6 text-lg">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center space-x-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  <img 
                    src={`https://picsum.photos/seed/spa-user-${i}/100/100`} 
                    alt="User" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">500+ Happy Clients</p>
              <div className="flex text-spa-gold">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
            <img 
              src="https://picsum.photos/seed/spa-treatment/800/1000" 
              alt="Spa Treatment" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-sm font-medium uppercase tracking-widest mb-2">Featured Treatment</p>
              <h3 className="text-2xl font-serif font-bold">Rose & Gold Glow Facial</h3>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-spa-pink rounded-full -z-10 blur-2xl opacity-50" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 border-2 border-spa-gold/30 rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
