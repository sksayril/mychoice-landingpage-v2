import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import PartnerFormModal from './PartnerFormModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    // { name: 'CSR', path: '/csr' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-green-50/95 backdrop-blur-md shadow-xl border-b border-green-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center">
              <motion.img 
                src="/logo.png"
                alt="MyChoice Logo"
                className={`h-20 w-30 sm:h-20 sm:w-auto max-w-[160px] sm:max-w-[200px] ${scrolled ? '' : 'drop-shadow-lg'}`}
                whileHover={{ scale: 1.1 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group"
              >
                <motion.span
                  className={`text-base lg:text-lg font-semibold transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-green-600'
                      : scrolled 
                        ? 'text-green-700 hover:text-green-600' 
                        : 'text-black hover:text-green-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-500 to-yellow-400"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: location.pathname === item.path ? '100%' : 0 
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-yellow-300"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: '100%', opacity: 0.6 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </Link>
            ))}
            
            {/* Become a Distributor Button */}
            <motion.button
              onClick={() => setShowPartnerForm(true)}
              className={`px-6 py-3 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 ${
                scrolled 
                  ? 'bg-gradient-to-r from-green-500 to-yellow-500 text-white hover:from-green-600 hover:to-yellow-600 shadow-lg hover:shadow-xl' 
                  : 'bg-gradient-to-r from-green-500 to-yellow-500 text-white hover:from-green-600 hover:to-yellow-600 shadow-lg hover:shadow-xl'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Partner
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-green-700 hover:bg-green-100' : 'text-black hover:bg-black/10'}`}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-green-50/95 backdrop-blur-md border-t border-green-200 shadow-lg"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="block py-3 px-4 text-green-700 hover:bg-green-100 hover:text-green-600 transition-colors relative group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10 font-medium">{item.name}</span>
                    <motion.div
                      className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-20 transition-opacity duration-200"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Become a Distributor Button */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="px-4 py-3"
              >
                <motion.button
                  onClick={() => {
                    setShowPartnerForm(true);
                    setIsOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-green-500 to-yellow-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-yellow-600 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Become a Partner
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Partner Form Modal */}
      <PartnerFormModal
        isOpen={showPartnerForm}
        onClose={() => setShowPartnerForm(false)}
        onSubmitSuccess={() => {
          setShowComingSoon(true);
          setTimeout(() => {
            setShowComingSoon(false);
          }, 3000);
        }}
      />

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-12 max-w-md w-full shadow-2xl text-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                🎉
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon!</h3>
              <p className="text-gray-600 text-lg mb-2">
                Thank you for your interest in partnering with MyChoice.
              </p>
              <p className="text-gray-600">
                We'll review your application and get back to you soon!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;