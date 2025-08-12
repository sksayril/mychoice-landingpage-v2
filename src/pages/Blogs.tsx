import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, Tag, Search, Filter } from 'lucide-react';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  fullContent?: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [showFullArticle, setShowFullArticle] = useState(false);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'mustard-oil', name: 'Mustard Oil' },
    { id: 'rice-bran', name: 'Rice Bran Oil' },
    { id: 'soybean', name: 'Soybean Oil' },
    { id: 'health', name: 'Health & Wellness' },
    { id: 'cooking', name: 'Cooking Tips' }
  ];

  const blogs = [
    {
      id: 1,
      title: 'The Complete Guide to Premium Mustard Oil: Benefits and Uses',
      excerpt: 'Discover the incredible health benefits and traditional uses of premium mustard oil. From its anti-inflammatory properties to its role in authentic Indian cooking, learn why this golden oil has been cherished for centuries.',
      fullContent: `
        <h2>Introduction</h2>
        <p>Premium mustard oil has been a cornerstone of Indian cuisine and traditional medicine for centuries. This golden-hued oil, extracted from mustard seeds through cold-pressing methods, offers a unique combination of flavor, nutrition, and health benefits that make it a valuable addition to any kitchen.</p>
        
        <h2>What Makes Premium Mustard Oil Special?</h2>
        <p>Premium mustard oil is distinguished by its extraction process and quality standards. Unlike regular mustard oil, premium varieties are:</p>
        <ul>
          <li><strong>Cold-pressed:</strong> Extracted without heat to preserve nutrients</li>
          <li><strong>Unrefined:</strong> Maintains natural compounds and flavor</li>
          <li><strong>Pure:</strong> Free from additives and preservatives</li>
          <li><strong>Authentic:</strong> Sourced from high-quality mustard seeds</li>
        </ul>
        
        <h2>Health Benefits</h2>
        <h3>1. Anti-Inflammatory Properties</h3>
        <p>Mustard oil contains compounds like allyl isothiocyanate that have powerful anti-inflammatory effects. These compounds help reduce inflammation in the body, making it beneficial for conditions like arthritis and muscle pain.</p>
        
        <h3>2. Cardiovascular Health</h3>
        <p>Rich in monounsaturated and polyunsaturated fats, mustard oil helps maintain healthy cholesterol levels. It contains omega-3 and omega-6 fatty acids that support heart health.</p>
        
        <h3>3. Antimicrobial Properties</h3>
        <p>The natural antimicrobial properties of mustard oil make it effective against various bacteria and fungi. This makes it useful for both culinary and topical applications.</p>
        
        <h3>4. Skin and Hair Benefits</h3>
        <p>When applied topically, mustard oil can improve skin texture, promote hair growth, and provide relief from various skin conditions.</p>
        
        <h2>Culinary Uses</h2>
        <h3>Traditional Indian Cooking</h3>
        <p>Mustard oil is essential in many regional Indian cuisines, particularly in Bengal, Bihar, and parts of North India. It's used for:</p>
        <ul>
          <li>Tempering (tadka) for dals and vegetables</li>
          <li>Marinating fish and meat</li>
          <li>Pickling and preserving</li>
          <li>Deep frying and sautéing</li>
        </ul>
        
        <h3>Cooking Tips</h3>
        <p>To get the best results when cooking with mustard oil:</p>
        <ul>
          <li>Heat the oil until it starts smoking slightly to reduce pungency</li>
          <li>Use it for high-temperature cooking due to its high smoke point</li>
          <li>Combine with other oils for balanced flavor</li>
          <li>Store in a cool, dark place to maintain freshness</li>
        </ul>
        
        <h2>How to Choose Premium Mustard Oil</h2>
        <p>When selecting premium mustard oil, look for:</p>
        <ul>
          <li><strong>Cold-pressed label:</strong> Ensures nutrient preservation</li>
          <li><strong>Dark glass bottles:</strong> Protects from light damage</li>
          <li><strong>Clear, golden color:</strong> Indicates quality</li>
          <li><strong>Strong, authentic aroma:</strong> Sign of pure extraction</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Premium mustard oil is more than just a cooking ingredient—it's a traditional remedy and culinary treasure. Its unique combination of health benefits, distinctive flavor, and versatility makes it an essential addition to any health-conscious kitchen. Whether you're exploring traditional Indian cuisine or seeking natural health solutions, premium mustard oil offers both taste and wellness benefits that have stood the test of time.</p>
      `,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      author: 'Dr. Priya Sharma',
      date: 'March 20, 2024',
      readTime: '8 min read',
      category: 'mustard-oil',
      tags: ['Mustard Oil', 'Health Benefits', 'Traditional Cooking'],
      featured: true
    },
    {
      id: 2,
      title: 'Rice Bran Oil: The Heart-Healthy Cooking Oil You Need to Know',
      excerpt: 'Explore the science behind rice bran oil\'s heart-healthy properties. Rich in oryzanol and vitamin E, this versatile oil is perfect for high-temperature cooking and maintaining cardiovascular health.',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=500',
      author: 'Nutritionist Rajesh Kumar',
      date: 'March 18, 2024',
      readTime: '6 min read',
      category: 'rice-bran',
      tags: ['Rice Bran Oil', 'Heart Health', 'Cooking Oil']
    },
    {
      id: 3,
      title: 'Soybean Oil: Versatile and Nutritious for Modern Cooking',
      excerpt: 'Learn about soybean oil\'s balanced fatty acid profile and its role in modern cuisine. From deep frying to salad dressings, discover why this oil is a kitchen essential.',
      image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=500',
      author: 'Chef Arjun Patel',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'soybean',
      tags: ['Soybean Oil', 'Cooking', 'Nutrition']
    },
    {
      id: 4,
      title: 'Traditional Mustard Oil vs Premium Mustard Oil: What\'s the Difference?',
      excerpt: 'Understand the key differences between traditional and premium mustard oil. From extraction methods to nutritional content, learn which one suits your cooking and health needs best.',
      image: 'https://images.pexels.com/photos/4110404/pexels-photo-4110404.jpeg?auto=compress&cs=tinysrgb&w=500',
      author: 'Dr. Meera Singh',
      date: 'March 12, 2024',
      readTime: '7 min read',
      category: 'mustard-oil',
      tags: ['Mustard Oil', 'Premium Quality', 'Comparison']
    },
    {
      id: 5,
      title: 'Cooking with Rice Bran Oil: Tips and Techniques for Perfect Results',
      excerpt: 'Master the art of cooking with rice bran oil. From its high smoke point to its neutral flavor, learn professional techniques for achieving restaurant-quality results at home.',
      image: 'https://images.pexels.com/photos/8613320/pexels-photo-8613320.jpeg?auto=compress&cs=tinysrgb&w=500',
      author: 'Chef Priya Desai',
      date: 'March 10, 2024',
      readTime: '9 min read',
      category: 'cooking',
      tags: ['Rice Bran Oil', 'Cooking Tips', 'Techniques']
    },
    {
      id: 6,
      title: 'The Health Benefits of Cold-Pressed Oils: Why Quality Matters',
      excerpt: 'Discover why cold-pressed oils are superior for your health. Learn about the extraction process, nutritional benefits, and how to identify truly cold-pressed oils in the market.',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=500',
      author: 'Dr. Amit Patel',
      date: 'March 8, 2024',
      readTime: '6 min read',
      category: 'health',
      tags: ['Cold-Pressed', 'Health Benefits', 'Quality']
    },
    {
      id: 7,
      title: 'Soybean Oil in Indian Cuisine: Traditional and Modern Applications',
      excerpt: 'Explore how soybean oil has become an integral part of Indian cooking. From traditional recipes to modern fusion dishes, discover its versatility and health benefits.',
      image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=500',
      author: 'Food Historian Dr. Kavita Rao',
      date: 'March 5, 2024',
      readTime: '7 min read',
      category: 'soybean',
      tags: ['Soybean Oil', 'Indian Cuisine', 'Traditional Cooking']
    },
    {
      id: 8,
      title: 'Mustard Oil for Skin and Hair: Ancient Beauty Secrets Revealed',
      excerpt: 'Unlock the beauty benefits of mustard oil that have been passed down through generations. From hair growth to skin care, learn how to incorporate this natural wonder into your beauty routine.',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=500',
      author: 'Beauty Expert Neha Sharma',
      date: 'March 3, 2024',
      readTime: '5 min read',
      category: 'health',
      tags: ['Mustard Oil', 'Beauty', 'Natural Care']
    },
    {
      id: 9,
      title: 'Sustainable Oil Production: How We Protect the Environment',
      excerpt: 'Learn about our commitment to sustainable oil production practices. From responsible sourcing to eco-friendly packaging, discover how we minimize our environmental impact.',
      image: 'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=500',
      author: 'Environmental Officer Rahul Verma',
      date: 'March 1, 2024',
      readTime: '8 min read',
      category: 'health',
      tags: ['Sustainability', 'Environment', 'Production']
    }
  ];

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogs.find(blog => blog.featured);

  const handleReadMore = (blog: Blog) => {
    setSelectedBlog(blog);
    setShowFullArticle(true);
  };

  const closeArticle = () => {
    setShowFullArticle(false);
    setSelectedBlog(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 min-h-screen"
    >
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and news from the world of oils and healthy cooking
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Blog */}
        {featuredBlog && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200">
              <div className="text-center mb-6">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Featured Article
                </span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <img
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{featuredBlog.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{featuredBlog.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{featuredBlog.readTime}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    {featuredBlog.title}
                  </h2>
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredBlog.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredBlog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => handleReadMore(featuredBlog)}
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.filter(blog => !blog.featured).map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <motion.article
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  
                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {blog.readTime}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {categories.find(cat => cat.id === blog.category)?.name}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{blog.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{blog.date}</span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {blog.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => handleReadMore(blog)}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-500 text-lg">
              No articles found matching your search criteria.
            </div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Full Article Modal */}
        {showFullArticle && selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeArticle}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={selectedBlog.image}
                      alt={selectedBlog.title}
                      className="w-16 h-16 object-cover rounded-xl"
                    />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{selectedBlog.title}</h2>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-4">{selectedBlog.author}</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">{selectedBlog.date}</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{selectedBlog.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeArticle}
                    className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedBlog.fullContent || selectedBlog.excerpt }}
                />
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-3xl">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {selectedBlog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={closeArticle}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Blogs;