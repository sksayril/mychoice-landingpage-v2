import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const contactInfo = [
    {
      emoji: '📞',
      title: 'Phone',
      details: '03345013784',
      subtitle: 'Mon-Fri 9AM-6PM'
    },
    {
      emoji: '📧',
      title: 'Email',
      details: 'info@my-choice.co.in',
      subtitle: 'We reply within 24hrs'
    },
    
    {
      emoji: '📍',
      title: 'Address',
      details: '4, Netaji Subhash Road,2nd Floor, Charterd bank building, Kolkata- 700001',
      subtitle: 'Kolkata, India'
    },
    {
      emoji: '🕒',
      title: 'Business Hours',
      details: '9:00 AM - 6:00 PM',
      subtitle: 'Monday to Friday'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Get In Touch
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to experience premium quality oils? Get in touch with us for any queries, orders, or feedback. 
            We're here to help you make the right choice.
          </p>
        </motion.div>

        {/* Contact Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              className="group relative"
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)"
                }}
              >
                {/* Hover Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="bg-gradient-to-br from-emerald-500 to-teal-500 p-4 rounded-2xl inline-block mb-6 shadow-lg"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -10, 10, 0],
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-3xl text-white" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                      {info.emoji}
                    </span>
                  </motion.div>
                  
                  <h3 className="font-bold text-gray-800 text-lg mb-3">{info.title}</h3>
                  <p className="text-gray-700 font-semibold text-base mb-2">{info.details}</p>
                  <p className="text-gray-500 text-sm">{info.subtitle}</p>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-60"
                      initial={{ 
                        x: Math.random() * 100 + '%', 
                        y: Math.random() * 100 + '%' 
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 0.6, 0]
                      }}
                      transition={{
                        duration: 2 + Math.random(),
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 relative overflow-hidden">
              {/* Form Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-400 rounded-full blur-2xl" />
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
                >
                  Send us a Message
                </motion.div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Let's Start a Conversation</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                      whileFocus={{ scale: 1.02 }}
                      className="group"
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:border-emerald-300"
                      />
                    </motion.div>
                    <motion.div 
                      whileFocus={{ scale: 1.02 }}
                      className="group"
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:border-emerald-300"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    whileFocus={{ scale: 1.02 }}
                    className="group"
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:border-emerald-300"
                    />
                  </motion.div>

                  <motion.div 
                    whileFocus={{ scale: 1.02 }}
                    className="group"
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="What's this about?"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 bg-white/50 backdrop-blur-sm group-hover:border-emerald-300"
                    />
                  </motion.div>

                  <motion.div 
                    whileFocus={{ scale: 1.02 }}
                    className="group"
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 resize-none bg-white/50 backdrop-blur-sm group-hover:border-emerald-300"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Send Message</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-xl"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50 h-full">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
              >
                📍 Our Location
              </motion.div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Us Here</h2>
              <p className="text-gray-600 mb-8">
                Visit our facility to see our production process and quality standards in action.
              </p>
              
              {/* Google Maps Embed */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1113475507486!2d88.34661301143262!3d22.574938432797875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02779cd1d27e63%3A0x4b7a26d5b3c2fcc1!2sChartered%20building!5e0!3m2!1sen!2sin!4v1755449054596!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
                
                {/* Map Overlay Info */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/50">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold text-gray-800">MyChoice Oil</p>
                      <p className="text-sm text-gray-600">4, Netaji Subhash Road,2nd Floor, Charterd bank building, Kolkata- 700001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-3xl p-8 border border-emerald-200"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose MyChoice?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience the difference that quality makes. Our dedicated team is here to provide you with 
              the best service and premium quality oil products.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { emoji: '🌟', title: 'Premium Quality', desc: 'Highest standards in every product' },
                { emoji: '🚚', title: 'Fast Delivery', desc: 'Quick and reliable shipping' },
                { emoji: '💬', title: '24/7 Support', desc: 'Always here to help you' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">{feature.emoji}</div>
                  <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;