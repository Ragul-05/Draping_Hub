import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Menu, X, ArrowUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll-to-top visibility
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  // Close mobile menu when window is resized to desktop size
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  };

  // Add event listeners for scroll and resize
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check on mount
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants for links
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.1,
      transition: { type: 'spring', stiffness: 300 },
    },
    tap: { scale: 0.95 },
  };

  // Container for staggering desktop navbar links
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  // Container for staggering mobile menu links
  const mobileMenuContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for the overlay
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.7 },
    exit: { opacity: 0 },
  };

  // Footer section animation
  const footerSectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Social icon animation
  const socialIconVariants = {
    hover: {
      scale: 1.3,
      rotate: 360,
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  // Scroll-to-top button animation
  const scrollTopVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      {/* Navigation */}
      <nav
        className="fixed w-full z-50 shadow-md"
        style={{
          background: 'linear-gradient(45deg, #d97706, #f59e0b, #fbbf24, #f59e0b, #d97706)',
          backgroundSize: '300% 300%',
          animation: 'gradientShift 15s ease infinite',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <motion.img
                  src="https://res.cloudinary.com/dxu9qrwzm/image/upload/v1742800273/bj0uiqmvnktgg5jwkvdp.png"
                  alt="Draping Hub Logo"
                  className="h-10 w-10 rounded-full object-cover"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  whileHover={{ rotate: 360 }}
                />
                <motion.span
                  className="text-2xl font-serif font-bold text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Draping Hub
                </motion.span>
              </Link>
            </div>

            {/* Desktop Navbar Links */}
            <motion.div
              className="hidden md:flex items-center space-x-8"
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                <Link to="/" className="text-white hover:text-amber-200 transition-colors relative">
                  Home
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-200"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                <Link
                  to="/services/saree-pre-plating"
                  className="text-white hover:text-amber-200 transition-colors relative"
                >
                  Saree Pre-plating
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-200"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                <Link
                  to="/services/mehandi"
                  className="text-white hover:text-amber-200 transition-colors relative"
                >
                  Mehandi
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-200"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                <Link
                  to="/services/aari"
                  className="text-white hover:text-amber-200 transition-colors relative"
                >
                  Aari
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-200"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                <Link
                  to="/login"
                  className="text-white hover:text-amber-200 transition-colors relative"
                >
                  Login
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-200"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(251, 191, 36, 0.7)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/book"
                  className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors shadow-md relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-amber-400 opacity-0"
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Book Now
                </Link>
              </motion.div>
            </motion.div>

            {/* Toggle Button for Mobile */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={toggleMenu}
                className="text-white focus:outline-none pulse"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Overlay with backdrop blur */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden fixed inset-0 bg-black backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />

            {/* Mobile Menu Links */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden fixed top-0 right-0 h-full w-64 bg-amber-50 shadow-md z-50"
            >
              {/* Close Button at the Top */}
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={toggleMenu}
                  className="text-amber-800 focus:outline-none"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <motion.div
                variants={mobileMenuContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center space-y-4 py-8"
              >
                <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                  <Link
                    to="/"
                    className="text-amber-800 hover:text-amber-600 transition-colors text-lg"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                  <Link
                    to="/services/saree-pre-plating"
                    className="text-amber-800 hover:text-amber-600 transition-colors text-lg"
                    onClick={toggleMenu}
                  >
                    Saree Pre-plating
                  </Link>
                </motion.div>
                <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                  <Link
                    to="/services/mehandi"
                    className="text-amber-800 hover:text-amber-600 transition-colors text-lg"
                    onClick={toggleMenu}
                  >
                    Mehandi
                  </Link>
                </motion.div>
                <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                  <Link
                    to="/services/aari"
                    className="text-amber-800 hover:text-amber-600 transition-colors text-lg"
                    onClick={toggleMenu}
                  >
                    Aari
                  </Link>
                </motion.div>
                <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
                  <Link
                    to="/login"
                    className="text-amber-800 hover:text-amber-600 transition-colors text-lg"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(251, 191, 36, 0.7)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/book"
                    className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors shadow-md text-lg relative overflow-hidden"
                    onClick={toggleMenu}
                  >
                    <motion.div
                      className="absolute inset-0 bg-amber-400 opacity-0"
                      animate={{ opacity: [0, 0.3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Book Now
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={footerSectionVariants} initial="hidden" whileInView="visible">
              <h3 className="text-xl font-serif font-semibold mb-4 text-amber-200">Draping Hub</h3>
              <p className="text-amber-200">
                Elevating your style with expert saree draping, mehandi, and aari designs.
              </p>
            </motion.div>
            <motion.div variants={footerSectionVariants} initial="hidden" whileInView="visible">
              <h3 className="text-xl font-serif font-semibold mb-4 text-amber-200">Quick Links</h3>
              <ul className="space-y-2 text-amber-200">
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link
                    to="/services/saree-pre-plating"
                    className="hover:text-white transition-colors"
                  >
                    Saree Pre-plating
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/services/mehandi" className="hover:text-white transition-colors">
                    Mehandi
                  </Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/services/aari" className="hover:text-white transition-colors">
                    Aari
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
            <motion.div variants={footerSectionVariants} initial="hidden" whileInView="visible">
              <h3 className="text-xl font-serif font-semibold mb-4 text-amber-200">Follow Us</h3>
              <div className="flex space-x-4">
                <motion.a href="#" variants={socialIconVariants} whileHover="hover">
                  <Instagram className="w-6 h-6 text-amber-200 hover:text-white transition-colors" />
                </motion.a>
                <motion.a href="#" variants={socialIconVariants} whileHover="hover">
                  <Facebook className="w-6 h-6 text-amber-200 hover:text-white transition-colors" />
                </motion.a>
                <motion.a href="#" variants={socialIconVariants} whileHover="hover">
                  <Twitter className="w-6 h-6 text-amber-200 hover:text-white transition-colors" />
                </motion.a>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>© 2024 Draping Hub. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        variants={scrollTopVariants}
        initial="hidden"
        animate={showScrollTop ? 'visible' : 'hidden'}
        className="fixed bottom-20 right-5 bg-amber-600 text-white p-3 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}

export default Layout;