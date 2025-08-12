import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Leaf, Award, Globe, BookOpen, Shield, Star, Target, Lightbulb } from 'lucide-react';

const CSR = () => {
  const initiatives = [
    {
      icon: Heart,
      title: 'GOOD HEALTH FOR ALL',
      description: 'Led cancer awareness campaigns in schools across Kolkata, Howrah, Hooghly, and North 24 Parganas, spreading knowledge and hope',
      image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Healthcare'
    },
    {
      icon: Shield,
      title: 'STATE-OF-THE-ART MEDICAL UNIT',
      description: 'Building a state-of-the-art medical unit in Baranagar, Kolkata, to bring healthcare closer to all',
      image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Infrastructure'
    },
    {
      icon: Users,
      title: 'EDUCATION FOR EVERY CHILD',
      description: 'Providing educational resources, scholarships, and learning materials to underprivileged children across West Bengal',
      image: 'https://images.pexels.com/photos/8613320/pexels-photo-8613320.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Education'
    },
    {
      icon: Leaf,
      title: 'ENVIRONMENTAL CONSERVATION',
      description: 'Implementing sustainable practices, tree plantation drives, and environmental awareness programs',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Environment'
    },
    {
      icon: Award,
      title: 'FARMER EMPOWERMENT',
      description: 'Direct support to farmers through training programs, modern farming techniques, and market access',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Agriculture'
    },
    {
      icon: Globe,
      title: 'COMMUNITY DEVELOPMENT',
      description: 'Supporting local communities through skill development, women empowerment, and rural development programs',
      image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Community'
    },
    {
      icon: BookOpen,
      title: 'DIGITAL LITERACY',
      description: 'Teaching computer skills and digital literacy to rural communities for better employment opportunities',
      image: 'https://images.pexels.com/photos/8613320/pexels-photo-8613320.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Technology'
    },
    {
      icon: Target,
      title: 'WOMEN EMPOWERMENT',
      description: 'Empowering women through skill training, entrepreneurship programs, and financial literacy',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Empowerment'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'People Reached', icon: Users },
    { number: '100+', label: 'Schools Supported', icon: BookOpen },
    { number: '25+', label: 'Villages Covered', icon: Globe },
    { number: '10,000+', label: 'Trees Planted', icon: Leaf }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          >
            <source src="/4ee8ae40-87af-4a2a-9a84-54eb782123ff.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            Corporate Social
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Responsibility
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto"
          >
            Making a positive impact in communities and environment through our comprehensive initiatives
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Our Impact
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-yellow-500 to-orange-500 py-16"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                <motion.div
                  className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Our CSR Initiatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to creating sustainable positive change in society through our comprehensive CSR programs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative">
                  <div className="h-48 w-full relative overflow-hidden">
                    <motion.img
                      className="h-full w-full object-cover"
                      src={initiative.image}
                      alt={initiative.title}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                      {initiative.category}
                    </div>
                  </div>
                  
                  <motion.div
                    className="absolute top-4 right-4 bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-xl shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <initiative.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-12 border border-yellow-200">
            <Lightbulb className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Join Us in Making a Difference
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Together, we can create a better future for our communities and environment. 
              Get involved in our CSR initiatives and be part of the positive change.
            </p>
            <motion.button
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CSR;