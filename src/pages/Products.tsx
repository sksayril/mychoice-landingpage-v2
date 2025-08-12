import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Award, Leaf, Zap, Star, Flame, Heart, Shield, Globe } from 'lucide-react';

const Products = () => {
  const [language, setLanguage] = useState<'english' | 'bengali'>('english');

  const translations = {
    english: {
      title: 'Our Premium Products',
      subtitle: 'Discover our authentic range of pure oils and aromatic masalas, crafted with traditional excellence',
      oilsTitle: 'Pure & Healthy Oils',
      oilsSubtitle: 'Premium quality oils for every cooking need - from traditional to modern cuisine',
      masalasTitle: 'Aromatic Masalas',
      masalasSubtitle: 'Authentic spice blends that bring the true taste of India to your kitchen',
      addToCart: 'Add to Cart',
      bestSeller: 'Best Seller',
      popular: 'Popular',
      traditional: 'Traditional',
      healthy: 'Healthy',
      premium: 'Premium',
      special: 'Special',
      veg: 'Veg',
      hot: 'Hot',
      new: 'New',
      organic: 'Organic',
      pure: 'Pure',
      authentic: 'Authentic',
      fresh: 'Fresh',
      natural: 'Natural',
      switchLanguage: 'বাংলায় দেখুন'
    },
    bengali: {
      title: 'আমাদের প্রিমিয়াম পণ্যসমূহ',
      subtitle: 'আমাদের ঐতিহ্যগত উৎকর্ষতার সাথে তৈরি বিশুদ্ধ তেল এবং সুগন্ধি মসলার সত্যিকারের পরিসর আবিষ্কার করুন',
      oilsTitle: 'বিশুদ্ধ ও স্বাস্থ্যকর তেল',
      oilsSubtitle: 'প্রতিটি রান্নার প্রয়োজনের জন্য প্রিমিয়াম মানের তেল - ঐতিহ্যগত থেকে আধুনিক রান্না',
      masalasTitle: 'সুগন্ধি মসলা',
      masalasSubtitle: 'সত্যিকারের ভারতীয় স্বাদ আপনার রান্নাঘরে আনার জন্য ঐতিহ্যগত মসলার মিশ্রণ',
      addToCart: 'কার্টে যোগ করুন',
      bestSeller: 'সেরা বিক্রয়',
      popular: 'জনপ্রিয়',
      traditional: 'ঐতিহ্যগত',
      healthy: 'স্বাস্থ্যকর',
      premium: 'প্রিমিয়াম',
      special: 'বিশেষ',
      veg: 'শাকাহারী',
      hot: 'মসলাদার',
      new: 'নতুন',
      organic: 'জৈব',
      pure: 'বিশুদ্ধ',
      authentic: 'প্রকৃত',
      fresh: 'তাজা',
      natural: 'প্রাকৃতিক',
      switchLanguage: 'View in English'
    }
  };

  const oils = [
    {
      id: 1,
      name: {
        english: 'Premium Sunflower Oil',
        bengali: 'প্রিমিয়াম সূর্যমুখী তেল'
      },
      category: {
        english: 'Cooking Oil',
        bengali: 'রান্নার তেল'
      },
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500',
      price: '₹299',
      originalPrice: '₹399',
      features: {
        english: ['100% Pure', 'Heart Healthy', 'High Smoke Point', 'Rich in Vitamin E'],
        bengali: ['১০০% বিশুদ্ধ', 'হৃদয়ের জন্য স্বাস্থ্যকর', 'উচ্চ ধোঁয়া বিন্দু', 'ভিটামিন ই সমৃদ্ধ']
      },
      icon: Droplets,
      badge: 'bestSeller',
      rating: 4.8,
      reviews: 1250
    },
    {
      id: 2,
      name: {
        english: 'Pure Rice Bran Oil',
        bengali: 'বিশুদ্ধ চালের তুষের তেল'
      },
      category: {
        english: 'Health Oil',
        bengali: 'স্বাস্থ্য তেল'
      },
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '₹189',
      originalPrice: '₹249',
      features: {
        english: ['Cholesterol Free', 'High Smoke Point', 'Rich in Oryzanol', 'Ideal for Frying'],
        bengali: ['কোলেস্টেরল মুক্ত', 'উচ্চ ধোঁয়া বিন্দু', 'অরিজানল সমৃদ্ধ', 'ভাজার জন্য আদর্শ']
      },
      icon: Heart,
      badge: 'popular',
      rating: 4.6,
      reviews: 890
    },
    {
      id: 3,
      name: {
        english: 'Traditional Mustard Oil',
        bengali: 'ঐতিহ্যগত সরিষার তেল'
      },
      category: {
        english: 'Traditional Oil',
        bengali: 'ঐতিহ্যগত তেল'
      },
      image: 'https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '₹159',
      originalPrice: '₹199',
      features: {
        english: ['Cold Pressed', 'Traditional Method', 'Rich Flavor', 'Natural Preservative'],
        bengali: ['ঠান্ডা চাপানো', 'ঐতিহ্যগত পদ্ধতি', 'সমৃদ্ধ স্বাদ', 'প্রাকৃতিক সংরক্ষক']
      },
      icon: Flame,
      badge: 'traditional',
      rating: 4.7,
      reviews: 1100
    },
    {
      id: 4,
      name: {
        english: 'Pure Soybean Oil',
        bengali: 'বিশুদ্ধ সয়াবিন তেল'
      },
      category: {
        english: 'Cooking Oil',
        bengali: 'রান্নার তেল'
      },
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '₹179',
      originalPrice: '₹229',
      features: {
        english: ['Omega-3 Rich', 'Light Flavor', 'Versatile', 'Heart Healthy'],
        bengali: ['ওমেগা-৩ সমৃদ্ধ', 'হালকা স্বাদ', 'বহুমুখী', 'হৃদয়ের জন্য স্বাস্থ্যকর']
      },
      icon: Shield,
      badge: 'healthy',
      rating: 4.5,
      reviews: 750
    },
    {
      id: 5,
      name: {
        english: 'Organic Coconut Oil',
        bengali: 'জৈব নারকেল তেল'
      },
      category: {
        english: 'Organic Oil',
        bengali: 'জৈব তেল'
      },
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500',
      price: '₹399',
      originalPrice: '₹499',
      features: {
        english: ['100% Organic', 'Cold Pressed', 'Rich in MCT', 'Natural Antibacterial'],
        bengali: ['১০০% জৈব', 'ঠান্ডা চাপানো', 'এমসিটি সমৃদ্ধ', 'প্রাকৃতিক অ্যান্টিব্যাকটেরিয়াল']
      },
      icon: Leaf,
      badge: 'organic',
      rating: 4.9,
      reviews: 980
    },
    {
      id: 6,
      name: {
        english: 'Pure Sesame Oil',
        bengali: 'বিশুদ্ধ তিলের তেল'
      },
      category: {
        english: 'Traditional Oil',
        bengali: 'ঐতিহ্যগত তেল'
      },
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '₹289',
      originalPrice: '₹359',
      features: {
        english: ['Traditional Bengali', 'Rich Nutty Flavor', 'High Smoke Point', 'Antioxidant Rich'],
        bengali: ['ঐতিহ্যগত বাংলা', 'সমৃদ্ধ বাদামি স্বাদ', 'উচ্চ ধোঁয়া বিন্দু', 'অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ']
      },
      icon: Award,
      badge: 'traditional',
      rating: 4.7,
      reviews: 650
    }
  ];

  const masalas = [
    {
      id: 7,
      name: {
        english: 'Garam Masala Premium',
        bengali: 'গরম মসলা প্রিমিয়াম'
      },
      category: {
        english: 'Spice Blend',
        bengali: 'মসলার মিশ্রণ'
      },
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500',
      price: '₹89',
      originalPrice: '₹119',
      features: {
        english: ['Authentic Blend', 'Aromatic', 'Fresh Ground', 'No Preservatives'],
        bengali: ['প্রকৃত মিশ্রণ', 'সুগন্ধি', 'তাজা পেষা', 'কোন সংরক্ষক নেই']
      },
      icon: Star,
      badge: 'premium',
      rating: 4.9,
      reviews: 650
    },
    {
      id: 8,
      name: {
        english: 'Chicken Masala Special',
        bengali: 'মুরগির মসলা বিশেষ'
      },
      category: {
        english: 'Meat Masala',
        bengali: 'মাংসের মসলা'
      },
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '₹79',
      originalPrice: '₹99',
      features: {
        english: ['Perfect for Chicken', 'Balanced Spices', 'No MSG', 'Natural Ingredients'],
        bengali: ['মুরগির জন্য নিখুঁত', 'সুষম মসলা', 'কোন এমএসজি নেই', 'প্রাকৃতিক উপাদান']
      },
      icon: Award,
      badge: 'special',
      rating: 4.7,
      reviews: 520
    },
    {
      id: 9,
      name: {
        english: 'Vegetable Masala Mix',
        bengali: 'সবজির মসলার মিশ্রণ'
      },
      category: {
        english: 'Veg Masala',
        bengali: 'শাকাহারী মসলা'
      },
      image: 'https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '₹69',
      originalPrice: '₹89',
      features: {
        english: ['Veg Friendly', 'Mild Spice', 'Versatile', 'Fresh Aroma'],
        bengali: ['শাকাহারী বান্ধব', 'মৃদু মসলা', 'বহুমুখী', 'তাজা সুগন্ধি']
      },
      icon: Leaf,
      badge: 'veg',
      rating: 4.6,
      reviews: 480
    },
    {
      id: 10,
      name: {
        english: 'Tandoori Masala Hot',
        bengali: 'তন্দুরি মসলা মসলাদার'
      },
      category: {
        english: 'BBQ Masala',
        bengali: 'বিবিকিউ মসলা'
      },
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '₹99',
      originalPrice: '₹129',
      features: {
        english: ['Perfect for BBQ', 'Spicy Blend', 'Authentic Taste', 'Smoky Flavor'],
        bengali: ['বিবিকিউর জন্য নিখুঁত', 'মসলাদার মিশ্রণ', 'প্রকৃত স্বাদ', 'ধোঁয়াটে স্বাদ']
      },
      icon: Zap,
      badge: 'hot',
      rating: 4.8,
      reviews: 720
    },
    {
      id: 11,
      name: {
        english: 'Chilli Powder Premium',
        bengali: 'লাল মরিচের গুঁড়ো প্রিমিয়াম'
      },
      category: {
        english: 'Basic Spice',
        bengali: 'মৌলিক মসলা'
      },
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500',
      price: '₹59',
      originalPrice: '₹79',
      features: {
        english: ['Pure Red Chilli', 'High Heat', 'Rich Color', 'No Additives'],
        bengali: ['বিশুদ্ধ লাল মরিচ', 'উচ্চ তাপ', 'সমৃদ্ধ রঙ', 'কোন সংযোজন নেই']
      },
      icon: Flame,
      badge: 'hot',
      rating: 4.8,
      reviews: 890
    },
    {
      id: 12,
      name: {
        english: 'Turmeric Powder Pure',
        bengali: 'হলুদের গুঁড়ো বিশুদ্ধ'
      },
      category: {
        english: 'Basic Spice',
        bengali: 'মৌলিক মসলা'
      },
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '₹49',
      originalPrice: '₹69',
      features: {
        english: ['Pure Turmeric', 'Anti-inflammatory', 'Natural Color', 'Medicinal Properties'],
        bengali: ['বিশুদ্ধ হলুদ', 'প্রদাহ বিরোধী', 'প্রাকৃতিক রঙ', 'ঔষধি গুণাবলী']
      },
      icon: Heart,
      badge: 'healthy',
      rating: 4.9,
      reviews: 1200
    },
    {
      id: 13,
      name: {
        english: 'Cumin Powder Premium',
        bengali: 'জিরার গুঁড়ো প্রিমিয়াম'
      },
      category: {
        english: 'Basic Spice',
        bengali: 'মৌলিক মসলা'
      },
      image: 'https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '₹89',
      originalPrice: '₹109',
      features: {
        english: ['Aromatic Cumin', 'Digestive Aid', 'Rich Flavor', 'Fresh Ground'],
        bengali: ['সুগন্ধি জিরা', 'হজমে সহায়ক', 'সমৃদ্ধ স্বাদ', 'তাজা পেষা']
      },
      icon: Star,
      badge: 'premium',
      rating: 4.7,
      reviews: 650
    },
    {
      id: 14,
      name: {
        english: 'Coriander Powder Fresh',
        bengali: 'ধনিয়ার গুঁড়ো তাজা'
      },
      category: {
        english: 'Basic Spice',
        bengali: 'মৌলিক মসলা'
      },
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '₹69',
      originalPrice: '₹89',
      features: {
        english: ['Fresh Coriander', 'Mild Flavor', 'Versatile Use', 'Natural Aroma'],
        bengali: ['তাজা ধনিয়া', 'মৃদু স্বাদ', 'বহুমুখী ব্যবহার', 'প্রাকৃতিক সুগন্ধি']
      },
      icon: Leaf,
      badge: 'fresh',
      rating: 4.6,
      reviews: 580
    },
    {
      id: 15,
      name: {
        english: 'Cardamom Powder Green',
        bengali: 'সবুজ এলাচের গুঁড়ো'
      },
      category: {
        english: 'Premium Spice',
        bengali: 'প্রিমিয়াম মসলা'
      },
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500',
      price: '₹199',
      originalPrice: '₹249',
      features: {
        english: ['Green Cardamom', 'Aromatic', 'Sweet Flavor', 'Premium Quality'],
        bengali: ['সবুজ এলাচ', 'সুগন্ধি', 'মিষ্টি স্বাদ', 'প্রিমিয়াম মান']
      },
      icon: Award,
      badge: 'premium',
      rating: 4.9,
      reviews: 420
    },
    {
      id: 16,
      name: {
        english: 'Cinnamon Powder Pure',
        bengali: 'দারুচিনির গুঁড়ো বিশুদ্ধ'
      },
      category: {
        english: 'Premium Spice',
        bengali: 'প্রিমিয়াম মসলা'
      },
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '₹159',
      originalPrice: '₹199',
      features: {
        english: ['Pure Cinnamon', 'Sweet Aroma', 'Antioxidant Rich', 'Blood Sugar Control'],
        bengali: ['বিশুদ্ধ দারুচিনি', 'মিষ্টি সুগন্ধি', 'অ্যান্টিঅক্সিডেন্ট সমৃদ্ধ', 'রক্তে শর্করা নিয়ন্ত্রণ']
      },
      icon: Heart,
      badge: 'healthy',
      rating: 4.8,
      reviews: 380
    },
    {
      id: 17,
      name: {
        english: 'Black Pepper Powder',
        bengali: 'কালো মরিচের গুঁড়ো'
      },
      category: {
        english: 'Basic Spice',
        bengali: 'মৌলিক মসলা'
      },
      image: 'https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '₹129',
      originalPrice: '₹159',
      features: {
        english: ['Pure Black Pepper', 'Sharp Flavor', 'Digestive Aid', 'Antibacterial'],
        bengali: ['বিশুদ্ধ কালো মরিচ', 'তীক্ষ্ণ স্বাদ', 'হজমে সহায়ক', 'অ্যান্টিব্যাকটেরিয়াল']
      },
      icon: Zap,
      badge: 'hot',
      rating: 4.7,
      reviews: 520
    },
    {
      id: 18,
      name: {
        english: 'Fenugreek Powder',
        bengali: 'মেথির গুঁড়ো'
      },
      category: {
        english: 'Health Spice',
        bengali: 'স্বাস্থ্য মসলা'
      },
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '₹79',
      originalPrice: '₹99',
      features: {
        english: ['Pure Fenugreek', 'Blood Sugar Control', 'Digestive Health', 'Traditional Use'],
        bengali: ['বিশুদ্ধ মেথি', 'রক্তে শর্করা নিয়ন্ত্রণ', 'হজম স্বাস্থ্য', 'ঐতিহ্যগত ব্যবহার']
      },
      icon: Heart,
      badge: 'healthy',
      rating: 4.6,
      reviews: 450
    },
    {
      id: 19,
      name: {
        english: 'Asafoetida Powder',
        bengali: 'হিংয়ের গুঁড়ো'
      },
      category: {
        english: 'Traditional Spice',
        bengali: 'ঐতিহ্যগত মসলা'
      },
      image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=500',
      price: '₹89',
      originalPrice: '₹119',
      features: {
        english: ['Pure Asafoetida', 'Digestive Aid', 'Traditional Bengali', 'Anti-flatulent'],
        bengali: ['বিশুদ্ধ হিং', 'হজমে সহায়ক', 'ঐতিহ্যগত বাংলা', 'গ্যাস বিরোধী']
      },
      icon: Shield,
      badge: 'traditional',
      rating: 4.5,
      reviews: 320
    },
    {
      id: 20,
      name: {
        english: 'Bay Leaves Premium',
        bengali: 'তেজপাতা প্রিমিয়াম'
      },
      category: {
        english: 'Aromatic Spice',
        bengali: 'সুগন্ধি মসলা'
      },
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '₹69',
      originalPrice: '₹89',
      features: {
        english: ['Premium Bay Leaves', 'Aromatic', 'Traditional Use', 'Rich Flavor'],
        bengali: ['প্রিমিয়াম তেজপাতা', 'সুগন্ধি', 'ঐতিহ্যগত ব্যবহার', 'সমৃদ্ধ স্বাদ']
      },
      icon: Leaf,
      badge: 'premium',
      rating: 4.7,
      reviews: 280
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const ProductCard = ({ product }: { product: any }) => (
    <motion.div
      key={product.id}
      variants={cardVariants}
      className="group"
    >
      <motion.div
        className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 border border-yellow-200/50 relative"
        whileHover={{ scale: 1.05, y: -15 }}
        style={{
          background: `linear-gradient(135deg, rgba(254, 252, 232, 0.9) 0%, rgba(254, 243, 199, 0.9) 100%)`,
          backdropFilter: 'blur(10px)'
        }}
      >
        {/* Glossy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl" />
        
        {/* Badge */}
        <motion.div
          className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg font-bengali"
          whileHover={{ scale: 1.1 }}
        >
          {translations[language][product.badge]}
        </motion.div>

        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name[language]}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          
          {/* Rating */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-gray-800">{product.rating}</span>
            <span className="text-xs text-gray-600">({product.reviews})</span>
          </div>

          <motion.div
            className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-xl shadow-lg"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <product.icon className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        <div className="p-6 relative z-10">
          <div className="text-sm text-yellow-600 font-semibold mb-2 font-bengali">
            {product.category[language]}
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800 font-bengali leading-relaxed">
            {product.name[language]}
          </h3>
          
          <div className="space-y-2 mb-6">
            {product.features[language].map((feature: string, index: number) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center text-sm text-gray-700 font-bengali"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-3" />
                {feature}
              </motion.div>
            ))}
          </div>

          <motion.button
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-xl font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden font-bengali"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">{translations[language].addToCart}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </div>

        {/* External Glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20 -z-10 blur-xl"
          initial={{ scale: 1, opacity: 0 }}
          whileHover={{ scale: 1.1, opacity: 0.3 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen"
    >
      <div className="container mx-auto px-6 py-12">
        {/* Language Toggle */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.button
            onClick={() => setLanguage(language === 'english' ? 'bengali' : 'english')}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto font-bengali"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe className="w-5 h-5" />
            <span>{translations[language].switchLanguage}</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent font-bengali">
            {translations[language].title}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium font-bengali">
            {translations[language].subtitle}
          </p>
        </motion.div>

        {/* Oils Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent font-bengali">
              {translations[language].oilsTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-bengali">
              {translations[language].oilsSubtitle}
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {oils.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </motion.div>

        {/* Masalas Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bengali">
              {translations[language].masalasTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-bengali">
              {translations[language].masalasSubtitle}
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {masalas.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Products;