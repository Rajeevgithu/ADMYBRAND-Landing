'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, FileText, Video, Download } from 'lucide-react';

const blogPosts = [
  {
    title: "10 AI Marketing Trends That Will Dominate 2025",
    excerpt: "Discover the latest AI marketing trends that are reshaping how agencies create, optimize, and deliver campaigns for their clients.",
    category: "Trends",
    readTime: "5 min read",
    date: "Dec 15, 2024",
    image: "📈",
    featured: true
  },
  {
    title: "How to Scale Your Agency with AI-Powered Automation",
    excerpt: "Learn practical strategies for implementing AI automation in your agency to handle more clients without sacrificing quality.",
    category: "Strategy",
    readTime: "8 min read",
    date: "Dec 12, 2024",
    image: "🚀"
  },
  {
    title: "The Complete Guide to AI Content Generation for Agencies",
    excerpt: "Master the art of AI content generation with our comprehensive guide covering best practices, tools, and optimization techniques.",
    category: "Guide",
    readTime: "12 min read",
    date: "Dec 10, 2024",
    image: "✍️"
  },
  {
    title: "Case Study: How Digital Growth Agency Increased ROI by 300%",
    excerpt: "Real results from a real agency using ADmyBRAND AI Suite to transform their client campaigns and boost performance.",
    category: "Case Study",
    readTime: "6 min read",
    date: "Dec 8, 2024",
    image: "📊"
  }
];

const resources = [
  {
    title: "AI Marketing Playbook",
    description: "Complete guide to implementing AI in your marketing strategy",
    type: "PDF Guide",
    icon: BookOpen,
    downloadCount: "2.5k"
  },
  {
    title: "Content Calendar Template",
    description: "Free template for planning and scheduling content",
    type: "Template",
    icon: FileText,
    downloadCount: "1.8k"
  },
  {
    title: "Agency Growth Webinar",
    description: "Recorded webinar on scaling agencies with AI",
    type: "Video",
    icon: Video,
    downloadCount: "3.2k"
  },
  {
    title: "ROI Calculator",
    description: "Calculate potential ROI from AI marketing tools",
    type: "Tool",
    icon: Download,
    downloadCount: "4.1k"
  }
];

export default function BlogSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden" id="blog" style={{ backgroundColor: '#0F172A' }}>
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #1F2937 50%, #0F172A 100%)'
        }}
      />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 right-20 w-64 h-64 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-20 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(236, 72, 153, 0.2)' }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest Insights &
            <span 
              className="block text-transparent bg-clip-text"
              style={{ 
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Resources
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our latest articles, case studies, and free resources designed to help agencies succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Blog Post */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div 
              className="rounded-2xl overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{blogPosts[0].image}</span>
                  <div>
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                      style={{ 
                        background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                        color: 'white'
                      }}
                    >
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blogPosts[0].date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <motion.button
                  className="inline-flex items-center gap-2 font-medium transition-colors duration-300"
                  style={{ color: '#6366F1' }}
                  whileHover={{ x: 5 }}
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Resources Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Free Resources</h3>
            
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                className="rounded-xl p-6 cursor-pointer transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ 
                      background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)'
                    }}
                  >
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">{resource.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{resource.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium" style={{ color: '#6366F1' }}>{resource.type}</span>
                      <span className="text-gray-500 text-sm">{resource.downloadCount} downloads</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Recent Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={index}
              className="rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{post.image}</span>
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                    style={{ 
                      background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                      color: 'white'
                    }}
                  >
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <motion.button
                    className="transition-colors duration-300"
                    style={{ color: '#6366F1' }}
                    whileHover={{ x: 3 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div 
            className="rounded-2xl p-8 max-w-2xl mx-auto"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest marketing insights, case studies, and AI trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              />
              <motion.button
                className="text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                  boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 