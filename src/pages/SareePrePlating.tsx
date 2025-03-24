import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Star } from 'lucide-react';



import { ReactNode } from 'react';

const FadeInSection = ({ children }: { children: ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

const styles = [
  {
    name: 'Traditional Pleating',
    description: 'Classic pleating style perfect for formal occasions',
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742807346/xs1o6libsc5vkwfpfutg.jpg',
    price: '₹600',
  },
  {
    name: 'Modern Fusion',
    description: 'Contemporary pleating with a modern twist',
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742800296/cak2edunaan6t9luevsq.jpg',
    price: '₹800',
  },
  {
    name: 'Bridal Special',
    description: 'Elaborate pleating designed for wedding ceremonies',
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742803199/d4cfpj8cl1bzadcglg7k.jpg',
    price: '₹1000',
  }
];

const testimonials = [
  {
    name: 'Priya Shah',
    event: 'Wedding',
    content: 'The pre-pleated saree made my wedding day so much easier. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Meera Patel',
    event: 'Reception',
    content: 'Perfect pleating that stayed in place throughout the event. Amazing service!',
    rating: 5,
  },
];

export function SareePrePlating() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src= 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742807806/gp7sf1wc6wtjtdt9tnjg.jpg'
            alt="Saree Pre-plating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6">
                Saree Pre-plating <span className="text-amber-400">Services</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 mb-8 font-light">
                Professional saree pre-pleating for all occasions
              </p>
              <Link
                to="/book"
                className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors shadow-md"
              >
                Book Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Styles Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-amber-900">
              Our Pleating <span className="text-amber-600">Styles</span>
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {styles.map((style, index) => (
              <FadeInSection key={index}>
                <motion.div
                  whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img src={style.image} alt={style.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-amber-900">{style.name}</h3>
                    <p className="text-amber-800 mb-4">{style.description}</p>
                    <p className="text-amber-600 font-semibold text-lg mb-4">{style.price}</p>
                    <Link
                      to="/book"
                      className="inline-block bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors shadow-md"
                    >
                      Book This Style
                    </Link>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-amber-900">
              Our <span className="text-amber-600">Process</span>
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <FadeInSection>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-md">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2 text-amber-900">Consultation</h3>
                <p className="text-amber-800">Discuss your style preferences and occasion details</p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-md">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2 text-amber-900">Measurement</h3>
                <p className="text-amber-800">Take precise measurements for perfect pleating</p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-md">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2 text-amber-900">Pre-plating</h3>
                <p className="text-amber-800">Expert pleating according to chosen style</p>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-md">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2 text-amber-900">Final Touch</h3>
                <p className="text-amber-800">Quality check and final adjustments</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-amber-900">
              Client <span className="text-amber-600">Testimonials</span>
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeInSection key={index}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white p-8 rounded-xl shadow-md transition-all duration-300"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-amber-800 mb-4">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold text-amber-900">{testimonial.name}</p>
                    <p className="text-amber-800 text-sm">{testimonial.event}</p>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-4xl font-serif font-bold mb-6 text-amber-900">
              Ready to Book Your <span className="text-amber-600">Session?</span>
            </h2>
            <p className="text-xl text-amber-800 mb-8">
              Experience the perfect saree draping for your special occasion
            </p>
            <Link
              to="/book"
              className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors shadow-md"
            >
              Book Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

export default SareePrePlating;