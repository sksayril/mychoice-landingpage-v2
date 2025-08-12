import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';


const Features = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const features = [
    {
      emoji: '🌿',
      title: 'Organic & Natural',
      description: 'Sourced from the finest organic ingredients with no harmful chemicals or additives.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdxxxsOXuhJRGKu7ftBcAun7Er-5EyfJA1g&s'
    },
    {
      emoji: '🏆',
      title: 'Premium Quality',
      description: 'Award-winning products that meet the highest industry standards and certifications.',
      image: 'https://static.vecteezy.com/system/resources/previews/027/158/675/non_2x/premium-quality-golden-design-badge-collection-vector.jpg'
    },
    {
      emoji: '🚛',
      title: 'Traditional Excellence',
      description: 'Time-honored methods and traditional processes ensure authentic taste and quality.',
      image: 'https://images.squarespace-cdn.com/content/63aa0a7988b0247733a4e325/16717410-e117-47ac-b0bf-ff2429b74ce4/TraditionalExcellenceLogo1.png?content-type=image%2Fpng'
    },
    {
      emoji: '🛡️',
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes guarantee product safety and purity.',
      image: 'https://as1.ftcdn.net/jpg/00/28/25/10/1000_F_28251020_yeQXkMX4698gypnWsAd1GgmlsWLhKfT9.jpg'
    }
  ];

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ rotate }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20"
      />
      <motion.div
        style={{ y }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full opacity-15"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-yellow-200 text-yellow-800 px-6 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Why Choose Us
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            Unmatched Quality & Service
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes MyChoice the preferred choice for premium oil products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                className="bg-yellow-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-yellow-200"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <div className="relative h-48 w-full md:w-48 overflow-hidden">
                      <motion.img
                        className="h-full w-full object-cover"
                        src={feature.image}
                        alt={feature.title}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
                        whileHover={{ opacity: 0.8 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                  <div className="p-8">
                    <motion.div
                      className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl inline-block mb-4"
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1 
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-2xl" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                        {feature.emoji}
                      </span>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-2xl font-bold mb-3 text-gray-800"
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature.title}
                    </motion.h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    <motion.button
                      className="inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Learn More 
                      <motion.span
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;