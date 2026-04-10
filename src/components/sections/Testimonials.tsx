import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah M.',
    treatment: 'Rose & Gold Glow Facial',
    rating: 5,
    text: "I've been to many spas but Cielo is on another level. My skin literally glowed for two weeks after the Rose & Gold Facial. The atmosphere is so calming — I'll be back every month!",
    avatar: 'https://picsum.photos/seed/review-sarah/100/100',
  },
  {
    id: 2,
    name: 'Jessica R.',
    treatment: 'Microneedling Facial',
    rating: 5,
    text: "After just 3 microneedling sessions, my acne scars are barely visible. The esthetician was incredibly knowledgeable and made me feel completely at ease. Life-changing results!",
    avatar: 'https://picsum.photos/seed/review-jessica/100/100',
  },
  {
    id: 3,
    name: 'Amanda L.',
    treatment: 'Cavitation Deluxe Sculpt',
    rating: 5,
    text: "I was skeptical about body sculpting but the results speak for themselves. I lost 2 inches off my waist in 4 sessions. The team is so professional and caring.",
    avatar: 'https://picsum.photos/seed/review-amanda/100/100',
  },
  {
    id: 4,
    name: 'Priya K.',
    treatment: 'Deluxe Hydrofacial',
    rating: 5,
    text: "The Deluxe Hydrofacial is absolute magic. My skin looked flawless before my wedding day. Everyone kept asking what I did. Worth every penny — book it now!",
    avatar: 'https://picsum.photos/seed/review-priya/100/100',
  },
  {
    id: 5,
    name: 'Nicole T.',
    treatment: 'Acne Clear Facial',
    rating: 5,
    text: "Struggled with breakouts for years. After the Acne Clear Facial my skin calmed down so much. The blue light therapy was a game changer. Highly recommend Cielo Spa!",
    avatar: 'https://picsum.photos/seed/review-nicole/100/100',
  },
  {
    id: 6,
    name: 'Maria G.',
    treatment: 'Spring Renewal Facial',
    rating: 5,
    text: "Such a relaxing and professional experience every single time. The Spring Renewal Facial left my skin so bright and fresh. The booking process is super easy too!",
    avatar: 'https://picsum.photos/seed/review-maria/100/100',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-spa-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-spa-pink/30 text-spa-gold text-xs font-bold uppercase tracking-widest mb-4">
              <Star size={14} fill="currentColor" />
              <span>Client Love</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-spa-gold mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results, real people. Join hundreds of clients who have transformed their skin at Cielo Spa.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-spa-gold">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <Quote size={20} className="text-spa-gold/30" />
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">"{review.text}"</p>

              <div className="flex items-center space-x-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-xs text-spa-gold">{review.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-3 gap-8 text-center"
        >
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '98%', label: 'Would Return' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-serif font-bold text-spa-gold">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
