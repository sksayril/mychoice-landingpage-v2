import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CustomerStats from '../components/CustomerStats';
import Services from '../components/Services';
import Features from '../components/Features';
import ProductsSection from '../components/ProductsSection';
import CertificatesSection from '../components/CertificatesSection';
import Testimonials from '../components/Testimonials';
import GrandOpeningCelebration from '../components/GrandOpeningCelebration';
import FloatingCelebrationButton from '../components/FloatingCelebrationButton';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GrandOpeningCelebration />
      <FloatingCelebrationButton />
      <Hero />
      <CustomerStats />
      <Services />
      <Features />
      <ProductsSection />
      <CertificatesSection />
      <Testimonials />
    </motion.div>
  );
};

export default Home;