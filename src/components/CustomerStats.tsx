import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';


const CustomerStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView && !startCount) {
      setStartCount(true);
    }
  }, [isInView, startCount]);

  const stats = [
    { 
      emoji: '👥', 
      number: 50000, 
      label: 'Happy Customers',
      suffix: '+',
      color: 'from-yellow-400 to-yellow-600',
      glowColor: 'from-yellow-300/20 to-yellow-500/20'
    },
    { 
      emoji: '🏆', 
      number: 25, 
      label: 'Years Experience',
      suffix: '+',
      color: 'from-orange-400 to-orange-600',
      glowColor: 'from-orange-300/20 to-orange-500/20'
    },
    { 
      emoji: '🌍', 
      number: 100, 
      label: 'Cities Covered',
      suffix: '+',
      color: 'from-amber-400 to-amber-600',
      glowColor: 'from-amber-300/20 to-amber-500/20'
    },
    { 
      emoji: '⚡', 
      number: 99, 
      label: 'Quality Assured',
      suffix: '%',
      color: 'from-yellow-500 to-yellow-700',
      glowColor: 'from-yellow-400/20 to-yellow-600/20'
    }
  ];

const containerVariants = {   
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
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
    <section className="py-12 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #F59E0B 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #F97316 0%, transparent 50%)`
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 via-transparent to-orange-100/30" />
      </div>

      {/* Floating Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-60"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight 
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
                      <motion.div
              className="inline-flex items-center space-x-2 mb-3"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <span className="text-xl">✨</span>
              <motion.h2 
                className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Trusted by Thousands
              </motion.h2>
              <span className="text-xl">✨</span>
            </motion.div>
          <motion.p 
            className="text-base text-gray-700 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Join our growing family of satisfied customers across the nation
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative group"
            >
              <motion.div
                className="relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 shadow-xl border border-yellow-200/50 hover:border-yellow-300 transition-all duration-500 overflow-hidden backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.08, 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: `linear-gradient(135deg, rgba(254, 252, 232, 0.9) 0%, rgba(254, 243, 199, 0.9) 100%)`,
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl" />
                
                {/* Enhanced Hover Background Pattern */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  initial={{ scale: 0, rotate: 0 }}
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  transition={{ duration: 1 }}
                />

                {/* Enhanced Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />

                <div className="relative z-10">
                  {/* Enhanced Icon with Better Hover */}
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-4 shadow-lg relative overflow-hidden`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.15,
                      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)"
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    <span className="text-2xl text-white relative z-10" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
                      {stat.emoji}
                    </span>
                    
                    {/* Enhanced Icon Glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl blur-lg opacity-50`}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.9, 0.5]
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Enhanced Number with Better Hover */}
                  <motion.div
                    className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent relative"
                    initial={{ scale: 0 }}
                    animate={startCount ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {startCount ? (
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        delay={index * 0.2}
                        suffix={stat.suffix}
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                    
                    {/* Enhanced Number Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 blur-sm"
                      animate={{ 
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Enhanced Label with Better Hover */}
                  <motion.p 
                    className="text-gray-700 font-semibold text-base relative"
                    whileHover={{ scale: 1.08 }}
                  >
                    {stat.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.p>

                  {/* Enhanced Floating Elements */}
                  <motion.div
                    className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-yellow-200/40 to-orange-200/40 rounded-full"
                    animate={{ 
                      scale: [1, 1.4, 1],
                      rotate: [0, 180, 360],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Enhanced Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-bl-full"
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* Enhanced External Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} -z-10 blur-xl`}
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{ scale: 1.3, opacity: 0.4 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom Section */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 px-6 py-3 rounded-full font-bold shadow-lg border border-yellow-200/50 relative overflow-hidden"
            whileHover={{ 
              scale: 1.08,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Enhanced Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="relative z-10"
            >
              <span className="text-xl">⚡</span>
            </motion.div>
            <span className="relative z-10 text-base">Growing every day with quality that speaks!</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerStats;