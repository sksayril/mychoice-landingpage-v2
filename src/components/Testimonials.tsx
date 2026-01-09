import React from 'react';
import { motion } from 'framer-motion';


const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Restaurant Owner',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'MyChoice oils have transformed our kitchen operations. The quality is exceptional and our customers can taste the difference in every dish.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Home Chef',
      location: 'Delhi',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'I\'ve been using MyChoice products for years. The purity and freshness are unmatched. My family loves the natural taste.',
      rating: 5
    },
    {
      name: 'Arjun Patel',
      role: 'Food Distributor',
      location: 'Gujarat',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Reliable delivery, consistent quality, and excellent customer service. MyChoice has been our trusted partner for over a decade.',
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { 
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/30 to-orange-200/30" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-500/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block bg-yellow-500/20 text-yellow-700 px-6 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-yellow-300/30"
          >
            Customer Stories
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from thousands of satisfied customers who trust MyChoice for their oil needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="group"
            >
              <motion.div
                className="bg-white/80 backdrop-blur-md rounded-3xl p-5 border border-yellow-200/50 hover:bg-white/90 transition-all duration-500 relative overflow-hidden shadow-xl hover:shadow-2xl"
                whileHover={{ 
                  scale: 1.02, 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.3)"
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-4 right-4 text-yellow-500/60"
                  whileHover={{ rotate: 180, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl">💬</span>
                </motion.div>

                {/* Floating Background Element */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360] 
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Profile Section */}
                <div className="flex items-center mb-4">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-yellow-400/20"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity
                      }}
                    />
                  </motion.div>
                  <div className="ml-3">
                    <h4 className="text-gray-800 font-bold text-base">{testimonial.name}</h4>
                    <p className="text-yellow-600 text-xs font-semibold">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i + 0.5 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <span className="text-lg">⭐</span>
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <motion.p 
                  className="text-gray-700 leading-relaxed italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  "{testimonial.content}"
                </motion.p>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400/70 transition-all duration-300"
                  whileHover={{
                    background: "linear-gradient(45deg, transparent, rgba(245, 158, 11, 0.15), transparent)"
                  }}
                />

                {/* Sparkle Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ 
                        x: Math.random() * 100 + '%', 
                        y: Math.random() * 100 + '%' 
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '4.9/5', label: 'Average Rating' },
              { number: '50K+', label: 'Happy Customers' },
              { number: '99%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.8 }}
                className="text-center"
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;