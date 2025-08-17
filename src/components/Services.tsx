import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      emoji: '💧',
      title: 'Premium Oil Products',
      description: 'High-quality cooking oils, industrial lubricants, and specialty oils crafted with precision.',
      features: ['Pure & Natural', '100% Quality Assured', 'Multiple Variants'],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      emoji: '🏃',
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery services to get your products to you when you need them.',
      features: ['Same Day Delivery', 'Nationwide Coverage', 'Real-time Tracking'],
      color: 'from-orange-400 to-orange-600'
    },
    {
      emoji: '🛡️',
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes to maintain the highest standards.',
      features: ['Lab Tested', 'ISO Certified', 'Purity Guaranteed'],
      color: 'from-amber-400 to-amber-600'
    },
    {
      emoji: '🏆',
      title: 'Industry Recognition',
      description: 'Award-winning products recognized by industry experts and customer satisfaction.',
      features: ['Multiple Awards', 'Expert Approved', 'Customer Choice'],
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      emoji: '👥',
      title: 'Customer Support',
      description: '24/7 dedicated customer service team ready to assist with all your queries.',
      features: ['24/7 Support', 'Expert Guidance', 'Quick Resolution'],
      color: 'from-orange-500 to-orange-700'
    },
    {
      emoji: '⚡',
      title: 'Innovation',
      description: 'Continuous research and development to bring you the latest in oil technology.',
      features: ['R&D Focus', 'Latest Technology', 'Sustainable Process'],
      color: 'from-amber-500 to-amber-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-yellow-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-conic from-yellow-400 via-orange-400 to-yellow-400"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-yellow-100 text-yellow-800 px-6 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Our Services
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Excellence in Every Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From premium oil products to exceptional customer service, we provide excellence at every touchpoint
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className="bg-yellow-50 rounded-3xl p-8 shadow-lg border border-yellow-200 hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full"
                whileHover={{ 
                  scale: 1.03, 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-40"
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

                <div className="relative z-10">
                  {/* Emoji Icon */}
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0],
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-3xl" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                      {service.emoji}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + idx * 0.1 + 0.5 }}
                        className="flex items-center space-x-3 text-gray-700"
                      >
                        <motion.div
                          className="w-2 h-2 bg-yellow-500 rounded-full"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Effect Button */}
                  <motion.div
                    className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <motion.button
                      className={`bg-gradient-to-r ${service.color} text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More →
                    </motion.button>
                  </motion.div>
                </div>

                {/* Border Animation */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent"
                  whileHover={{
                    borderImage: "linear-gradient(45deg, #F59E0B, #F97316, #F59E0B) 1"
                  }}
                />
              </motion.div>

              {/* External Shadow */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} -z-10 blur-xl`}
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.1, opacity: 0.1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;