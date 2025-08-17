import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const ProductsSection = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "RICE BRAN OIL",
      description: "Premium rice bran oil with Oryzanol 10000+ ppm, rich in vitamins A, D & E",
      image: "/rixebrandoilpacket.png",
      features: ["WITH VITAMINS A,D&E", "Oryzanol 10000+ ppm", "Physically Refined", "Heart Healthy"],
      rating: 4.9,
      reviews: 1250,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "MUSTARD OIL",
      description: "Traditional cold-pressed mustard oil for authentic Indian cooking",
      image: "/musterdoilpacket.png",
      features: ["Cold Pressed", "Traditional Method", "Rich Flavor", "Natural Preservative"],
      rating: 4.8,
      reviews: 980,
      badge: "Popular"
    },
    {
      id: 3,
      name: "KACCHI GHANI MUSTARD OIL",
      description: "Traditional cold-pressed mustard oil for authentic Indian cooking",
      image: "/kachhighanimusterdoilpakcet.jpg",
      features: ["Cold Pressed", "Traditional Method", "Rich Flavor", "Natural Preservative"],
      rating: 4.8,
      reviews: 980,
      badge: "Popular"
    },

    {
      id: 4,
      name: "SOYBEAN OIL",
      description: "Pure soybean oil for healthy cooking and frying applications",
      image: "/soyabeanoilpacket.png",
      features: ["100% Pure", "Heart Healthy", "High Smoke Point", "Rich in Omega-3"],
      rating: 4.7,
      reviews: 850,
      badge: "Healthy"
    },
    {
      id: 5,
      name: "SUNFLOWER OIL",
      description: "Pure sunflower oil for healthy cooking and frying",
      image: "/sunfloweroilpacket.png",
      features: ["100% Pure", "Heart Healthy", "High Smoke Point", "Rich in Vitamin E"],
      rating: 4.6,
      reviews: 720,
      badge: "Pure"
    },
    {
      id:6,
      name: "PLAM OIL",
      description: "Pure plam oil for healthy cooking and frying",
      image: "/plamoilpacket.png",
      features: ["100% Pure", "Heart Healthy", "High Smoke Point", "Rich in Vitamin E"],
      rating: 4.6,
      reviews: 820,
      badge: "Pure"
    },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length]);

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #F59E0B 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #F97316 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            OUR PRODUCTS
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover our premium range of oils, crafted with traditional excellence and modern quality standards
          </p>
        </motion.div>

        {/* Product Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Main Product Display */}
          <div className="relative mb-8 sm:mb-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className={`${index === currentProductIndex ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: index === currentProductIndex ? 1 : 0,
                  scale: index === currentProductIndex ? 1 : 0.8
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-12 px-4">
                   {/* Product Image Container */}
                   <motion.div
                     className="relative order-2 lg:order-1 w-full lg:w-auto"
                     whileHover={{ scale: 1.05 }}
                   >
                     <div className="relative flex justify-center">
                       {/* Image Container with Rounded Corners */}
                       <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 relative">
                         <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-3xl blur-3xl" />
                         <div 
                           className="w-full h-full bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl border-4 border-yellow-300/50 shadow-2xl overflow-hidden"
                         >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain p-4"
                            style={{
                              objectPosition: 'center',
                              maxWidth: '100%',
                              maxHeight: '100%'
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl" />
                        </div>
                        
                        {/* Badge */}
                        <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                          {product.badge}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Product Details */}
                  <div className="text-center lg:text-left max-w-md order-1 lg:order-2 w-full lg:w-auto">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-5 leading-tight">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 sm:mb-6">
                      {product.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start text-xs sm:text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-3 mt-1.5 flex-shrink-0" />
                          <span className="leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-center lg:justify-start mb-5 sm:mb-6">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`text-sm sm:text-lg ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                      <span className="ml-2 text-xs sm:text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* CTA Button */}
                    {/* <motion.button
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto lg:mx-0 text-sm sm:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-lg sm:text-xl">🛒</span>
                      <span>Add to Cart</span>
                    </motion.button> */}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevProduct}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-800 p-2 sm:p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg z-10"
            >
              <span className="text-lg sm:text-xl">◀️</span>
            </button>
            <button
              onClick={nextProduct}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-800 p-2 sm:p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg z-10"
            >
              <span className="text-lg sm:text-xl">▶️</span>
            </button>
          </div>

          {/* Product Thumbnails */}
          <div className="flex justify-center space-x-2 sm:space-x-4 overflow-x-auto pb-2 px-4">
            {products.map((product, index) => (
              <motion.button
                key={product.id}
                onClick={() => setCurrentProductIndex(index)}
                className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                  index === currentProductIndex 
                    ? 'border-yellow-500 scale-110' 
                    : 'border-gray-300 hover:border-yellow-400'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-1"
                />
                {index === currentProductIndex && (
                  <motion.div
                    className="absolute inset-0 bg-yellow-500/20"
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
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-6 sm:p-8 border border-yellow-200 mx-4">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
              Experience Premium Quality
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust MyChoice for their daily cooking needs. 
              Discover the difference that quality makes.
            </p>
            <motion.button
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Products
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
