import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const videoRef = useRef(null);

  const recipes = [
    {
      id: 1,
      title: 'মাছ ভাজা',
      englishTitle: 'Fish Fry',
      image: 'https://www.foodandwine.com/thmb/Su6wO_dB2SLqL8QSFZea0JIQD3E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-extra-crispy-fried-fish-XL-RECIPE0721-5-2e11ada71b1c45f49576414b81627f06.jpg',
      time: '৩০ মিনিট',
      serves: '৪ জন',
      difficulty: 'সহজ',
      oil: 'সরিষার তেল',
      ingredients: [
        'মাছের টুকরো - ৫০০ গ্রাম',
        'সরিষার তেল - ৪ টেবিল চামচ',
        'হলুদ গুঁড়ো - ১ চা চামচ',
        'লবণ - স্বাদ অনুযায়ী',
        'মরিচ গুঁড়ো - ১ চা চামচ',
        'পেঁয়াজ কুচি - ১টি',
        'রসুন কুচি - ৪-৫ কোয়া'
      ],
      steps: [
        'মাছের টুকরোগুলো ভালোভাবে ধুয়ে নিন',
        'হলুদ, লবণ, মরিচ গুঁড়ো দিয়ে মাছ মাখুন',
        'পেঁয়াজ ও রসুন কুচি যোগ করুন',
        '৩০ মিনিট মেরিনেট করুন',
        'সরিষার তেলে গরম করে মাছ ভাজুন',
        'সোনালি রঙ হওয়া পর্যন্ত ভাজুন',
        'গরম গরম পরিবেশন করুন'
      ]
    },
    {
      id: 2,
      title: 'রুই পোস্ত',
      englishTitle: 'Rui Fish with Poppy Seeds',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnB41mEVSdwfMV-d_PTxqP9uCnLPj7n8vNyDyxjAyqc_lblbZ23jy_3kwt2V0jqojYdNc9BJOK-4f7S5qiQWhvo88VGeY-kKuB105evLZ-IyaXqfFRdQJPneCAJWguKzvjGSmBF1GdZfY/s1600/rui.posto.recipe.jpg',
      time: '৪৫ মিনিট',
      serves: '৬ জন',
      difficulty: 'মাঝারি',
      oil: 'সরিষার তেল',
      ingredients: [
        'রুই মাছ - ১ কেজি',
        'পোস্ত বাটা - ১/২ কাপ',
        'সরিষার তেল - ৩ টেবিল চামচ',
        'পেঁয়াজ বাটা - ১/২ কাপ',
        'রসুন বাটা - ২ টেবিল চামচ',
        'হলুদ গুঁড়ো - ১ চা চামচ',
        'লবণ - স্বাদ অনুযায়ী',
        'মরিচ গুঁড়ো - ১ চা চামচ'
      ],
      steps: [
        'মাছের টুকরোগুলো ধুয়ে নিন',
        'পোস্ত বাটা প্রস্তুত করুন',
        'পেঁয়াজ ও রসুন বাটা করুন',
        'সরিষার তেলে পেঁয়াজ ভাজুন',
        'রসুন ও মশলা যোগ করুন',
        'মাছের টুকরো যোগ করুন',
        'পোস্ত বাটা দিয়ে ঢেকে দিন',
        'ধীরে ধীরে রান্না করুন',
        'তেল উঠে এলে নামিয়ে নিন'
      ]
    },
    {
      id: 3,
      title: 'আলু ভাজা',
      englishTitle: 'Potato Fry',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlLmB2ykHoaaI2Hp8sKI0ui7rH4M3CRjajbw&s',
      time: '২০ মিনিট',
      serves: '৪ জন',
      difficulty: 'সহজ',
      oil: 'সরিষার তেল',
      ingredients: [
        'আলু - ৬টি',
        'সরিষার তেল - ৩ টেবিল চামচ',
        'হলুদ গুঁড়ো - ১/২ চা চামচ',
        'লবণ - স্বাদ অনুযায়ী',
        'মরিচ গুঁড়ো - ১ চা চামচ',
        'জিরা গুঁড়ো - ১/২ চা চামচ'
      ],
      steps: [
        'আলুগুলো ভালোভাবে ধুয়ে নিন',
        'আলুগুলো পাতলা করে কাটুন',
        'হলুদ, লবণ, মরিচ গুঁড়ো মাখুন',
        'সরিষার তেলে গরম করুন',
        'আলুগুলো ভাজুন',
        'সোনালি রঙ হওয়া পর্যন্ত ভাজুন',
        'জিরা গুঁড়ো ছিটিয়ে দিন',
        'গরম গরম পরিবেশন করুন'
      ]
    },
    {
      id: 4,
      title: 'সরষে ইলিশ',
      englishTitle: 'Hilsa Fish with Mustard',
      image: 'https://i.ytimg.com/vi/Eaiqu8C8PP8/maxresdefault.jpg',
      time: '৪০ মিনিট',
      serves: '৪ জন',
      difficulty: 'মাঝারি',
      oil: 'সরিষার তেল',
      ingredients: [
        'ইলিশ মাছ - ৮০০ গ্রাম',
        'সরষে বাটা - ১/২ কাপ',
        'সরিষার তেল - ৪ টেবিল চামচ',
        'পেঁয়াজ বাটা - ১/২ কাপ',
        'রসুন বাটা - ২ টেবিল চামচ',
        'হলুদ গুঁড়ো - ১ চা চামচ',
        'লবণ - স্বাদ অনুযায়ী',
        'মরিচ গুঁড়ো - ১ চা চামচ'
      ],
      steps: [
        'ইলিশ মাছ ধুয়ে নিন',
        'সরষে বাটা প্রস্তুত করুন',
        'পেঁয়াজ ও রসুন বাটা করুন',
        'সরিষার তেলে পেঁয়াজ ভাজুন',
        'রসুন ও মশলা যোগ করুন',
        'ইলিশ মাছ যোগ করুন',
        'সরষে বাটা দিয়ে ঢেকে দিন',
        'ধীরে ধীরে রান্না করুন',
        'তেল উঠে এলে নামিয়ে নিন',
        'গরম গরম ভাতের সাথে পরিবেশন করুন'
      ]
    },
    {
      id: 5,
      title: 'বেগুন ভাজা',
      englishTitle: 'Brinjal Fry',
      image: 'https://images.tv9bangla.com/wp-content/uploads/2023/04/Brinjal.jpg',
      time: '২৫ মিনিট',
      serves: '৪ জন',
      difficulty: 'সহজ',
      oil: 'সরিষার তেল',
      ingredients: [
        'বেগুন - ৪টি',
        'সরিষার তেল - ৩ টেবিল চামচ',
        'হলুদ গুঁড়ো - ১/২ চা চামচ',
        'লবণ - স্বাদ অনুযায়ী',
        'মরিচ গুঁড়ো - ১ চা চামচ',
        'পেঁয়াজ কুচি - ১টি'
      ],
      steps: [
        'বেগুনগুলো ধুয়ে নিন',
        'বেগুনগুলো পাতলা করে কাটুন',
        'হলুদ, লবণ, মরিচ গুঁড়ো মাখুন',
        'সরিষার তেলে গরম করুন',
        'বেগুনগুলো ভাজুন',
        'পেঁয়াজ কুচি যোগ করুন',
        'সোনালি রঙ হওয়া পর্যন্ত ভাজুন',
        'গরম গরম পরিবেশন করুন'
      ]
    },
    {
      id: 6,
      title: 'চিংড়ি মালাইকারি',
      englishTitle: 'Prawn Malai Curry',
      image: 'https://images.squarespace-cdn.com/content/v1/5ea5f3913b0ccf06d0ec2563/1618046090475-PB3D5ZRMC9TVUUMJIG9L/Chingri+Malai+Curry+%2834%29_Original.jpeg?format=2500w',
      time: '৩৫ মিনিট',
      serves: '৪ জন',
      difficulty: 'মাঝারি',
      oil: 'সরিষার তেল',
      ingredients: [
        'চিংড়ি - ৫০০ গ্রাম',
        'নারকেল দুধ - ১ কাপ',
        'সরিষার তেল - ২ টেবিল চামচ',
        'পেঁয়াজ বাটা - ১/২ কাপ',
        'রসুন বাটা - ১ টেবিল চামচ',
        'হলুদ গুঁড়ো - ১ চা চামচ',
        'লবণ - স্বাদ অনুযায়ী',
        'মরিচ গুঁড়ো - ১ চা চামচ'
      ],
      steps: [
        'চিংড়িগুলো ধুয়ে নিন',
        'পেঁয়াজ ও রসুন বাটা করুন',
        'সরিষার তেলে পেঁয়াজ ভাজুন',
        'রসুন ও মশলা যোগ করুন',
        'চিংড়ি যোগ করুন',
        'নারকেল দুধ যোগ করুন',
        'ধীরে ধীরে রান্না করুন',
        'তেল উঠে এলে নামিয়ে নিন',
        'গরম গরম ভাতের সাথে পরিবেশন করুন'
      ]
    }
  ];

  const handleViewRecipe = (recipe: any) => {
    setSelectedRecipe(recipe);
    setCurrentStep(0);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setCurrentStep(0);
  };

  const nextStep = () => {
    if (selectedRecipe && currentStep < (selectedRecipe as any).steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section with Background Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/4252299-uhd_2160_4096_25fps.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-bengali"
          >
            বাঙালি রান্না
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-bengali"
          >
            আমাদের প্রিমিয়াম তেল দিয়ে তৈরি সুস্বাদু রেসিপি
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.button
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('recipes-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              রেসিপি দেখুন
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Recipes Section */}
      <section id="recipes-section" className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bengali">
              সুস্বাদু রেসিপি
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bengali">
              আমাদের প্রিমিয়াম তেল দিয়ে তৈরি ঐতিহ্যবাহী বাঙালি রান্না
            </p>
          </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <motion.div
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold font-bengali">
                      {recipe.oil}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 font-bengali">
                      {recipe.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 font-bengali">
                      {recipe.englishTitle}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="font-bengali">{recipe.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="font-bengali">{recipe.serves}</span>
                      </div>
                      <div className="flex items-center">
                        <ChefHat className="w-4 h-4 mr-1" />
                        <span className="font-bengali">{recipe.difficulty}</span>
                      </div>
                    </div>

                    <motion.button
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-bengali"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleViewRecipe(recipe)}
                    >
                      রেসিপি দেখুন
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-4 text-white">
                <h2 className="text-3xl font-bold font-bengali">{selectedRecipe.title}</h2>
                <p className="text-lg opacity-90 font-bengali">{selectedRecipe.englishTitle}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Recipe Info */}
              <div className="flex items-center justify-between mb-8 p-4 bg-yellow-50 rounded-2xl">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-yellow-600" />
                  <span className="font-bengali">{selectedRecipe.time}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-yellow-600" />
                  <span className="font-bengali">{selectedRecipe.serves}</span>
                </div>
                <div className="flex items-center">
                  <ChefHat className="w-5 h-5 mr-2 text-yellow-600" />
                  <span className="font-bengali">{selectedRecipe.difficulty}</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold font-bengali">
                    {selectedRecipe.oil}
                  </span>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 font-bengali">উপকরণসমূহ</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedRecipe.ingredients.map((ingredient: string, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center p-3 bg-gray-50 rounded-xl"
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                      <span className="font-bengali">{ingredient}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Cooking Steps */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 font-bengali">রান্নার ধাপসমূহ</h3>
                
                {/* Step Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    <span className="font-bengali">পূর্ববর্তী</span>
                  </button>
                  
                  <div className="text-center">
                    <span className="text-lg font-bold text-gray-800 font-bengali">
                      ধাপ {currentStep + 1} / {selectedRecipe.steps.length}
                    </span>
                  </div>
                  
                  <button
                    onClick={nextStep}
                    disabled={currentStep === selectedRecipe.steps.length - 1}
                    className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="font-bengali">পরবর্তী</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>

                {/* Current Step */}
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border-l-4 border-yellow-500"
                >
                  <div className="flex items-start">
                    <div className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {currentStep + 1}
                    </div>
                    <p className="text-lg text-gray-800 font-bengali leading-relaxed">
                      {selectedRecipe.steps[currentStep]}
                    </p>
                  </div>
                </motion.div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / selectedRecipe.steps.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Recipes;