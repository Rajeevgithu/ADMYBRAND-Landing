'use client';

import { motion } from 'framer-motion';
import FeatureCard from '../ui/FeatureCard';
import {
  Brain,
  BarChart3,
  Users,
  Search,
  Share2,
  DollarSign,
  Zap,
  Target
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI Campaign Generation",
    description: "Create compelling marketing campaigns in seconds with our advanced AI that understands your brand voice and target audience."
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track performance metrics, engagement rates, and ROI in real-time with comprehensive dashboards and insights."
  },
  {
    icon: Users,
    title: "Client Collaboration Tools",
    description: "Streamline client communication with built-in approval workflows, feedback systems, and project management tools."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Automatically optimize your content for search engines with AI-powered keyword analysis and content suggestions."
  },
  {
    icon: Share2,
    title: "Multi-Channel Publishing",
    description: "Publish and schedule content across all major social media platforms from one unified dashboard."
  },
  {
    icon: DollarSign,
    title: "Smart Budget Suggestions",
    description: "Get intelligent recommendations for budget allocation based on historical performance and market trends."
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Set up automated marketing workflows that trigger based on user behavior and engagement patterns."
  },
  {
    icon: Target,
    title: "Advanced Targeting",
    description: "Reach your ideal audience with precision targeting using AI-driven demographic and behavioral analysis."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #1F2937 50%, #0F172A 100%)'
        }}
      />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(56, 189, 248, 0.2)' }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 8,
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
            Powerful Features for
            <span 
              className="block text-transparent bg-clip-text"
              style={{ 
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Modern Agencies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to streamline your marketing operations, boost productivity, and deliver exceptional results for your clients.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div 
            className="rounded-2xl p-8"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
            }}
          >
            <p className="text-white mb-6 text-lg font-medium">
              Ready to transform your agency&apos;s marketing capabilities?
            </p>
            <motion.button
              className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              style={{ 
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 8px 25px rgba(99, 102, 241, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Features
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 