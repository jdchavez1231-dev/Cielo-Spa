import { motion } from 'motion/react';
import { SPA_SERVICES } from '@/src/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, Check, Clock } from 'lucide-react';

export default function Services() {
  const categories = [
    { id: 'facial', name: 'Facial Treatments', description: 'Rejuvenate your face with our signature glow treatments.' },
    { id: 'advanced', name: 'Advanced & Acne', description: 'Targeted professional solutions for specific skin concerns.' },
    { id: 'body', name: 'Body Sculpting', description: 'Slim, sculpt, and define your silhouette non-invasively.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-spa-pink/30 text-spa-gold text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles size={14} />
              <span>Premium Treatments</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Signature Services</h2>
            <div className="w-24 h-1 bg-spa-gold mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our range of premium beauty and skin care treatments
              designed to provide visible results and ultimate relaxation.
            </p>
          </motion.div>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="mb-20 last:mb-0">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-spa-pink/30 rounded-full flex items-center justify-center text-spa-gold">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900">{category.name}</h3>
                <p className="text-gray-500">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SPA_SERVICES.filter(s => s.category === category.id).map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-spa-cream group flex flex-col">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-1">
                        <CardTitle className="text-xl font-serif group-hover:text-spa-gold transition-colors leading-snug">
                          {service.name}
                        </CardTitle>
                        <span className="text-xl font-bold text-spa-gold ml-3 whitespace-nowrap">${service.price}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-400 space-x-1 mt-1">
                        <Clock size={12} />
                        <span>{service.duration}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2 leading-relaxed">{service.description}</p>
                    </CardHeader>
                    <CardContent className="flex-grow pt-0">
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <Check size={14} className="text-spa-gold mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="pt-4">
                      <Button asChild variant="outline" className="w-full border-spa-gold text-spa-gold hover:bg-spa-gold hover:text-white rounded-full transition-all">
                        <Link to="/book">Book Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-3xl bg-spa-gold text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32 blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">First-Time Client Special</h3>
            <p className="text-xl mb-8 opacity-90">Get <span className="font-bold">10% OFF</span> any treatment + FREE Lip Scrub & Mask</p>
            <Button asChild size="lg" className="bg-white text-spa-gold hover:bg-white/90 rounded-full px-10 py-6 text-lg font-bold">
              <Link to="/book">Claim Your Offer</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
