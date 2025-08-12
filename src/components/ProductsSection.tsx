import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const ProductsSection = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "RICE BRAN OIL",
      description: "Premium rice bran oil with Oryzanol 10000+ ppm, rich in vitamins A, D & E",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500",
      features: ["WITH VITAMINS A,D&E", "Oryzanol 10000+ ppm", "Physically Refined", "Heart Healthy"],
      rating: 4.9,
      reviews: 1250,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "MUSTARD OIL",
      description: "Traditional cold-pressed mustard oil for authentic Indian cooking",
      image: "https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=500",
      features: ["Cold Pressed", "Traditional Method", "Rich Flavor", "Natural Preservative"],
      rating: 4.8,
      reviews: 980,
      badge: "Popular"
    },
    {
      id: 3,
      name: "PREMIUM MUSTARD OIL",
      description: "Premium grade mustard oil with enhanced flavor and purity",
      image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500",
      features: ["Premium Grade", "Enhanced Flavor", "High Purity", "Traditional Process"],
      rating: 4.9,
      reviews: 1100,
      badge: "Premium"
    },
    {
      id: 4,
      name: "SOYBEAN OIL",
      description: "Pure soybean oil for healthy cooking and frying applications",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500",
      features: ["100% Pure", "Heart Healthy", "High Smoke Point", "Rich in Omega-3"],
      rating: 4.7,
      reviews: 850,
      badge: "Healthy"
    },
    {
      id: 5,
      name: "SUNFLOWER OIL",
      description: "Pure sunflower oil for healthy cooking and frying",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500",
      features: ["100% Pure", "Heart Healthy", "High Smoke Point", "Rich in Vitamin E"],
      rating: 4.6,
      reviews: 720,
      badge: "Pure"
    }
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
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #F59E0B 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #F97316 0%, transparent 50%)`
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            OUR PRODUCTS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
          <div className="relative h-96 md:h-[500px] mb-12">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: index === currentProductIndex ? 1 : 0,
                  scale: index === currentProductIndex ? 1 : 0.8
                }}
                transition={{ duration: 0.6 }}
                              >
                <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-12">
                   {/* Product Image in Drop Shape */}
                   <motion.div
                     className="relative"
                     whileHover={{ scale: 1.05 }}
                   >
                     <div className="relative">
                       {/* Drop Shape Container */}
                       <div className="w-80 h-80 relative">
                         <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl" />
                         <div 
                           className="w-full h-full bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full border-4 border-yellow-300/50 shadow-2xl overflow-hidden"
                           style={{
                             clipPath: "polygon(50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%, 0% 20%)"
                           }}
                         >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                        
                        {/* Badge */}
                        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          {product.badge}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Product Details */}
                  <div className="text-center lg:text-left max-w-md">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-2" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`text-lg ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    

                    {/* CTA Button */}
                    <motion.button
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto lg:mx-0"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xl">🛒</span>
                      <span>Add to Cart</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevProduct}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
            >
              <span className="text-xl">◀️</span>
            </button>
            <button
              onClick={nextProduct}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
            >
              <span className="text-xl">▶️</span>
            </button>
          </div>

          {/* Product Thumbnails */}
          <div className="flex justify-center space-x-4">
            {products.map((product, index) => (
              <motion.button
                key={product.id}
                onClick={() => setCurrentProductIndex(index)}
                className={`relative w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  index === currentProductIndex 
                    ? 'border-yellow-500 scale-110' 
                    : 'border-gray-300 hover:border-yellow-400'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-8 border border-yellow-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Experience Premium Quality
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust MyChoice for their daily cooking needs. 
              Discover the difference that quality makes.
            </p>
            <motion.button
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
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
