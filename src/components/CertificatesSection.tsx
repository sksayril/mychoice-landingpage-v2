import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const CertificatesSection = () => {
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      name: "FSSAI Certification",
      description: "Food Safety and Standards Authority of India certification ensuring food safety compliance",
      image: "https://media.lendingkart.com/wp-content/uploads/2019/09/fssai.jpg",
      features: ["Food Safety Compliant", "Government Approved", "Quality Assured", "Regular Audits"],
      validity: "Valid until 2025",
      badge: "Government Certified",
      emoji: "🛡️"
    },
    {
      id: 2,
      name: "Halal India Certification",
      description: "Halal certification ensuring products meet Islamic dietary requirements and standards",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwMFjNPO95j16_CBuvV_hvOWgAJzOjdNafQ&s",
      features: ["Halal Compliant", "Islamic Standards", "Religious Approval", "Global Recognition"],
      validity: "Valid until 2025",
      badge: "Halal Certified",
      emoji: "✅"
    },
    {
      id: 3,
      name: "ISO 22000 Certification",
      description: "International Organization for Standardization food safety management system certification",
      image: "https://5.imimg.com/data5/JK/BR/RG/SELLER-1781089/iso-22000-2018-certification-service-500x500.jpeg",
      features: ["International Standard", "Food Safety Management", "Global Recognition", "Quality Control"],
      validity: "Valid until 2025",
      badge: "ISO Certified",
      emoji: "🏆"
    }
    // {
    //   id: 4,
    //   name: "Organic Certification",
    //   description: "Certified organic products meeting strict organic farming and processing standards",
    //   image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500",
    //   features: ["100% Organic", "No Chemicals", "Natural Process", "Eco-Friendly"],
    //   validity: "Valid until 2025",
    //   badge: "Organic Certified",
    //   emoji: "⭐"
    // },
    // {
    //   id: 5,
    //   name: "GMP Certification",
    //   description: "Good Manufacturing Practice certification ensuring highest quality manufacturing standards",
    //   image: "https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=500",
    //   features: ["Good Manufacturing", "Quality Standards", "Process Control", "Safety Assured"],
    //   validity: "Valid until 2025",
    //   badge: "GMP Certified",
    //   emoji: "📄"
    // }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCertificateIndex((prev) => (prev + 1) % certificates.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [certificates.length]);

  const nextCertificate = () => {
    setCurrentCertificateIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertificateIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #10B981 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #F59E0B 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
            OUR CERTIFICATES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards of quality and safety through internationally recognized certifications
          </p>
        </motion.div>

        {/* Certificates Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Main Certificate Display */}
          <div className="relative h-96 md:h-[500px] mb-12">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: index === currentCertificateIndex ? 1 : 0,
                  scale: index === currentCertificateIndex ? 1 : 0.8
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-12">
                  {/* Certificate Image */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative">
                      {/* Certificate Container */}
                      <div className="w-80 h-80 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-yellow-400/20 rounded-full blur-3xl" />
                        <div className="w-full h-full bg-gradient-to-br from-green-100 to-yellow-100 rounded-2xl border-4 border-green-300/50 shadow-2xl overflow-hidden">
                          <img
                            src={certificate.image}
                            alt={certificate.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          
                          {/* Certificate Emoji Overlay */}
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                            <span className="text-2xl">{certificate.emoji}</span>
                          </div>
                        </div>
                        
                        {/* Badge */}
                        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          {certificate.badge}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Certificate Details */}
                  <div className="text-center lg:text-left max-w-md">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                      {certificate.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {certificate.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {certificate.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full mr-2" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* Validity */}
                    <div className="flex items-center justify-center lg:justify-start mb-6">
                      <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                        {certificate.validity}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-8 py-3 rounded-full font-bold hover:from-green-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto lg:mx-0"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xl">📄</span>
                      <span>View Certificate</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevCertificate}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextCertificate}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Certificate Thumbnails */}
          <div className="flex justify-center space-x-4">
            {certificates.map((certificate, index) => (
              <motion.button
                key={certificate.id}
                onClick={() => setCurrentCertificateIndex(index)}
                className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  index === currentCertificateIndex 
                    ? 'border-green-500 scale-110' 
                    : 'border-gray-300 hover:border-green-400'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={certificate.image}
                  alt={certificate.name}
                  className="w-full h-full object-cover"
                />
                {index === currentCertificateIndex && (
                  <motion.div
                    className="absolute inset-0 bg-green-500/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-100 to-yellow-100 rounded-3xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Trust in Our Quality Standards
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our commitment to quality is backed by internationally recognized certifications. 
              Every product meets the highest standards of safety and quality.
            </p>
            <motion.button
              className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold hover:from-green-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Certificates
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
