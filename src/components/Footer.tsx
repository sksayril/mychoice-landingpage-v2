import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import PartnerFormModal from './PartnerFormModal';

const Footer = () => {
  const [showPartnerForm, setShowPartnerForm] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const oils = [
    {
      id: 1,
      name: {
        english: 'Premium Sunflower Oil',
        bengali: 'প্রিমিয়াম সূর্যমুখী তেল'
      },
      category: {
        english: 'Cooking Oil',
        bengali: 'রান্নার তেল'
      },
      price: '₹299',
      originalPrice: '₹399',
      badge: 'bestSeller'
    },
    {
      id: 2,
      name: {
        english: 'Pure Rice Bran Oil',
        bengali: 'বিশুদ্ধ চালের তুষের তেল'
      },
      category: {
        english: 'Health Oil',
        bengali: 'স্বাস্থ্য তেল'
      },
      price: '₹189',
      originalPrice: '₹249',
      badge: 'popular'
    },
    {
      id: 3,
      name: {
        english: 'Kachhi ghani Mustard Oil',
        bengali: 'কাঁচি ঘানি সরিষার তেল'
      },
      category: {
        english: 'Kachhi ghani',
        bengali: 'কাঁচি ঘানি সরিষার তেল'
      },
      price: '₹159',
      originalPrice: '₹199',
      badge: 'traditional'
    },
    {
      id: 4,
      name: {
        english: 'Pure Soybean Oil',
        bengali: 'বিশুদ্ধ সয়াবিন তেল'
      },
      category: {
        english: 'Cooking Oil',
        bengali: 'রান্নার তেল'
      },
      price: '₹179',
      originalPrice: '₹229',
      badge: 'healthy'
    },
    {
      id: 5,
      name: {
        english: 'Palm Oil',
        bengali: 'পাম তেল'
      },
      category: {
        english: 'Cooking Oil',
        bengali: 'রান্নার তেল'
      },
      price: '₹299',
      originalPrice: '₹399',
      badge: 'popular'
    },
    {
      id: 6,
      name: {
        english: 'Pure Mustard Oil',
        bengali: 'বিশুদ্ধ সরিষার তেল'
      },
      category: {
        english: 'Traditional Oil',
        bengali: 'ঐতিহ্যগত তেল'
      },
      price: '₹289',
      originalPrice: '₹359',
      badge: 'traditional'
    }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: '#', 
      name: 'Facebook',
      bgGradient: 'from-blue-500 to-blue-600',
      hoverGradient: 'from-blue-600 to-blue-700',
      shadowColor: 'shadow-blue-500/50',
      iconColor: 'text-white'
    },
    { 
      icon: Twitter, 
      href: '#', 
      name: 'Twitter',
      bgGradient: 'from-sky-400 to-sky-500',
      hoverGradient: 'from-sky-500 to-sky-600',
      shadowColor: 'shadow-sky-500/50',
      iconColor: 'text-white'
    },
    { 
      icon: Instagram, 
      href: '#', 
      name: 'Instagram',
      bgGradient: 'from-pink-500 via-purple-500 to-orange-500',
      hoverGradient: 'from-pink-600 via-purple-600 to-orange-600',
      shadowColor: 'shadow-pink-500/50',
      iconColor: 'text-white'
    },
    { 
      icon: Linkedin, 
      href: '#', 
      name: 'LinkedIn',
      bgGradient: 'from-blue-600 to-blue-700',
      hoverGradient: 'from-blue-700 to-blue-800',
      shadowColor: 'shadow-blue-600/50',
      iconColor: 'text-white'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-yellow-800 via-yellow-900 to-yellow-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FCD34D 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #F59E0B 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <motion.img 
                src="/logo.png"
                alt="MyChoice Logo"
                className="h-14 w-24"
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Premium quality oils for over two decades. Trusted by thousands of families across India.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gradient-to-br ${social.bgGradient} rounded-lg flex items-center justify-center ${social.iconColor} shadow-lg ${social.shadowColor} hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    rotateY: 15,
                    boxShadow: `0 20px 40px ${social.shadowColor.replace('shadow-', '').replace('/50', '')}`
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-base font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 block"
                  >
                    <motion.span whileHover={{ x: 5 }}>
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-base font-semibold mb-4 text-yellow-400">Our Products</h4>
            <ul className="space-y-2">
              {oils.map((oil) => (
                <li key={oil.id}>
                  <motion.div 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 cursor-pointer block"
                    whileHover={{ x: 5 }}
                  >
                    <p className="font-semibold text-sm">{oil.name.english}</p>
                    <p className="text-xs text-gray-400">{oil.category.english}</p>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-base font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center space-x-3 text-gray-300"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4 text-yellow-500" />
                <span>+91 03368153286</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-gray-300"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4 text-yellow-500" />
                <span>info@mychoiceproduct.com</span>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-3 text-gray-300"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4 text-yellow-500 mt-1" />
                <div>
                  <p className="mb-3 font-semibold text-yellow-400">Head Office:</p>
                  <span>3rd Floor,Room no E , Gate no 3, 18, Rabindra Sarani<br />  Poddar Court Building, Kolkata - 700001</span>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-3 text-gray-300"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4 text-yellow-500 mt-1" />
                <div>
                  <p className="mb-3 font-semibold text-yellow-400">Register Office:</p>
                  <span>4, Netaji Subhash Road, 2nd Floor, Chartered Bank Building<br /> Kolkata - 700001, India</span>
                </div>
                
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Become a Distributor Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 mt-8 pt-6"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Want to Partner With Us?
            </h3>
            <p className="text-gray-300 mb-4 max-w-2xl mx-auto text-sm">
              Join our network of successful distributors and grow your business with MyChoice. 
              We offer competitive margins, marketing support, and exclusive territories.
            </p>
            <motion.button
              onClick={() => setShowPartnerForm(true)}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-base hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Become a Partner</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xl"
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

        {/* Credits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700 pt-8 pb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <p className="text-gray-400 text-sm mb-2">
                <span className="text-yellow-400 font-semibold">Developed by:</span>
              </p>
              <p className="text-gray-300 font-semibold text-sm hover:text-yellow-400 transition-colors cursor-pointer">
                CRIPCOCODE Artificial Intelligence Pvt Ltd
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-right"
            >
              <p className="text-gray-400 text-sm mb-2">
                <span className="text-yellow-400 font-semibold">Digital Marketing & Branding:</span>
              </p>
              <p className="text-gray-300 font-semibold text-sm hover:text-yellow-400 transition-colors cursor-pointer">
                Sky Star Solution
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 MyChoice. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#" 
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              Cookie Policy
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/10 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * 200 + window.innerHeight 
            }}
            animate={{
              y: -50,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
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
    </footer>
  );
};

export default Footer;