import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/drapinghublogo.png';
import {
  Heart,
  Scissors,
  BedDouble as Needle,
  Star,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Instagram,
} from 'lucide-react';
import HeroSectionImage from '../assets/images/herosection1.jpg';


const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

const services = [
  {
    title: 'Saree Pre-plating',
    icon: <Scissors className="w-8 h-8 text-amber-500" />,
    description:
      'Professional saree pre-pleating service for hassle-free draping. Perfect for brides and special occasions.',
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742800412/zrb5yischqscqjznasfs.jpg', // Updated to use the imported image
    link: '/services/saree-pre-plating',
  },
  {
    title: 'Mehandi Designs',
    icon: <Heart className="w-8 h-8 text-amber-500" />,
    description: 'Intricate and beautiful mehendi designs for weddings and festive celebrations.',
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742804864/uwe82n298r4vihshdzan.jpg',
    link: '/services/mehandi',
  },
  {
    title: 'Aari Designing',
    icon: <Needle className="w-8 h-8 text-amber-500" />,
    description: 'Exquisite embroidery work specializing in bridal wear and custom outfits.',
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742804863/y0hxdtzasrgy6j0qfg7x.jpg',
    link: '/services/aari',
  },
];

const testimonials = [
  {
    name: 'Priya Shah',
    role: 'Bride',
    content:
      'The pre-pleated saree service made my wedding day so much easier. The team’s attention to detail is remarkable!',
    image: 'https://images.unsplash.com/photo-1557555187-23d685287bc3?w=400&h=400&fit=crop',
  },
  {
    name: 'Anjali Mehta',
    role: 'Client',
    content: 'Their mehandi designs are absolutely stunning. Everyone at my engagement ceremony was impressed!',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop',
  },
  {
    name: 'Meera Patel',
    role: 'Regular Customer',
    content: 'The Aari work they did on my lehenga was beyond beautiful. True artisans who understand their craft.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
  },
];

const gallery = [
  {
    title: 'Bridal Saree',
    category: 'Saree',
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742807880/sqya11giz4x5fdkxcyu2.jpg',
  },
  {
    title: 'Mehandi Art',
    category: 'Mehandi',
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742804863/f7ry9doin5afjgd4nx0c.jpg',
  },
  {
    title: 'Aari Work',
    category: 'Aari',
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742803225/qb4rghwhjlnayy1wqnvm.jpg',
  },
  {
    title: 'Traditional Saree',
    category: 'Saree',
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742803199/yrt5sjih5zpsoocdyrvd.jpg',
  },
  {
    title: 'Bridal Mehandi',
    category: 'Mehandi',
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742804864/uwe82n298r4vihshdzan.jpg',
  },
  {
    title: 'Designer Aari',
    category: 'Aari',
    image: "https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742806250/uskdxvy2ymkztvc4awsk.jpg",
  },
];

const instagramPosts = [
  {
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742807789/sb159dwyrsnrjrnaanjm.jpg',
    likes: 245,
  },
  {
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742803225/ptth5khszmhpcjbigfwj.jpg',
    likes: 189,
  },
  {
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742807201/eluh3dxmfgfnboe9vtzz.jpg',
    likes: 320,
  },
  {
    image: 'https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742803225/qb4rghwhjlnayy1wqnvm.jpg',
    likes: 156,
  },
];

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const filteredGallery =
    selectedCategory === 'All' ? gallery : gallery.filter((item) => item.category === selectedCategory);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        >
          <img src={HeroSectionImage} alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </motion.div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center w-full"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6"
            >
              Transform Your Look with <span className="text-amber-400">Draping Hub</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl sm:text-2xl text-gray-200 mb-8 font-light"
            >
              Saree Pre-plating, Mehandi, and Aari Designing Tailored for You
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4 justify-center flex-col sm:flex-row"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(251, 191, 36, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors flex items-center justify-center shadow-lg"
              >
                <Link to="/book" className="flex items-center">
                  Book Now <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-50/10 transition-colors"
              >
                <Link to="#services">Our Services</Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="space-y-6">
                <h2 className="text-4xl font-serif font-bold text-amber-900">
                  About <span className="text-amber-600">Draping Hub</span>
                </h2>
                <p className="text-lg text-amber-800">
                  At Draping Hub, we blend traditional craftsmanship with modern convenience. Our expert team specializes in creating memorable experiences through our premium saree pre-plating, intricate mehandi designs, and exquisite aari work.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(251, 191, 36, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-md"
                >
                  <Link to="/book">Book an Appointment</Link>
                </motion.button>
              </div>
            </FadeInSection>
            <FadeInSection>
              <motion.div
                className="relative overflow-hidden rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img src={Logo} alt="About Us" className="w-full h-[400px] object-cover" />
              </motion.div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-amber-900">
              Our <span className="text-amber-600">Services</span>
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index}>
                <motion.div
                  whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    <motion.div
                      className="absolute inset-0 bg-black/30 flex items-center justify-center"
                      whileHover={{ backgroundColor: 'rgba(251, 191, 36, 0.2)' }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-3 rounded-full"
                      >
                        {service.icon}
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-amber-900">{service.title}</h3>
                    <p className="text-amber-800 mb-4">{service.description}</p>
                    <Link
                      to={service.link}
                      className="text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-amber-900">
              Why <span className="text-amber-600">Choose Us</span>
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <FadeInSection>
              <motion.div
                whileHover={{ y: -10, backgroundColor: 'rgba(251, 191, 36, 0.1)' }}
                className="text-center p-6 rounded-xl transition-colors duration-300"
              >
                <motion.div
                  className="mb-4 flex justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <Award className="w-12 h-12 text-amber-500" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-amber-900">Expert Craftsmanship</h3>
                <p className="text-amber-800">Years of experience in delivering exceptional quality and artistry.</p>
              </motion.div>
            </FadeInSection>
            <FadeInSection>
              <motion.div
                whileHover={{ y: -10, backgroundColor: 'rgba(251, 191, 36, 0.1)' }}
                className="text-center p-6 rounded-xl transition-colors duration-300"
              >
                <motion.div
                  className="mb-4 flex justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <Clock className="w-12 h-12 text-amber-500" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-amber-900">Timely Service</h3>
                <p className="text-amber-800">
                  Punctual delivery without compromising on quality and attention to detail.
                </p>
              </motion.div>
            </FadeInSection>
            <FadeInSection>
              <motion.div
                whileHover={{ y: -10, backgroundColor: 'rgba(251, 191, 36, 0.1)' }}
                className="text-center p-6 rounded-xl transition-colors duration-300"
              >
                <motion.div
                  className="mb-4 flex justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <Heart className="w-12 h-12 text-amber-500" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-amber-900">Customer Satisfaction</h3>
                <p className="text-amber-800">
                  Dedicated to exceeding expectations and creating lasting relationships.
                </p>
              </motion.div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl font-serif font-bold text-center mb-8 text-amber-900">
              Our <span className="text-amber-600">Gallery</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['All', 'Saree', 'Mehandi', 'Aari'].map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(251, 191, 36, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full ${
                    selectedCategory === category
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-amber-900 hover:bg-amber-100'
                  } transition-colors`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredGallery.map((item, index) => (
              <FadeInSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
                  className="relative group overflow-hidden rounded-xl transition-all duration-300"
                >
                  <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ backgroundColor: 'rgba(251, 191, 36, 0.3)' }}
                  >
                    <div className="text-center">
                      <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                      <p className="text-amber-300">{item.category}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-amber-900">
              What Our <span className="text-amber-600">Clients Say</span>
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeInSection key={index}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white p-8 rounded-xl shadow-md transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold text-amber-900">{testimonial.name}</h4>
                      <p className="text-amber-800 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-amber-800">{testimonial.content}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-amber-900">
              Follow Us on <span className="text-amber-600">Instagram</span>
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {instagramPosts.map((post, index) => (
              <FadeInSection key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
                  className="relative group overflow-hidden rounded-xl transition-all duration-300"
                >
                  <img src={post.image} alt="Instagram Post" className="w-full aspect-square object-cover" />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ backgroundColor: 'rgba(251, 191, 36, 0.3)' }}
                  >
                    <div className="flex items-center text-white">
                      <Heart className="w-5 h-5 mr-2 fill-current" />
                      <span>{post.likes}</span>
                    </div>
                  </motion.div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
          <div className="text-center mt-8">
            <motion.a
              href="https://www.instagram.com/drapinghub/"
              whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(251, 191, 36, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors shadow-md"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow Us on Instagram
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-amber-900">
              <span className="text-amber-600">Contact</span> Us
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeInSection>
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-amber-900">Get in Touch</h3>
                <div className="space-y-4">
                  <motion.div whileHover={{ x: 5 }} className="flex items-center">
                    <Phone className="w-5 h-5 text-amber-500 mr-3" />
                    <span className="text-amber-800">+91 90800 75334</span>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex items-center">
                    <Mail className="w-5 h-5 text-amber-500 mr-3" />
                    <span className="text-amber-800">drapinghub@gmail.co</span>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex items-center">
                    <MapPin className="w-5 h-5 text-amber-500 mr-3" />
                    <span className="text-amber-800">32,Shanmuga Nagar ChinnaKanmai C.M.R.Road Madurai - 625009</span>
                  </motion.div>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: '#d97706' }}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: '#d97706' }}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: '#d97706' }}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <motion.select
                  whileFocus={{ scale: 1.02, borderColor: '#d97706' }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="saree">Saree Pre-plating</option>
                  <option value="mehandi">Mehandi Designs</option>
                  <option value="aari">Aari Designing</option>
                </motion.select>
                <motion.textarea
                  whileFocus={{ scale: 1.02, borderColor: '#d97706' }}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-amber-800"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(251, 191, 36, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors shadow-md"
                >
                  Send Message
                </motion.button>
              </form>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;