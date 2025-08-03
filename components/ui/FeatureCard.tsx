'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      className="group relative p-8 rounded-2xl transition-all duration-300 cursor-pointer"
      style={{ 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5, 
        scale: 1.02,
        boxShadow: '0 8px 32px rgba(99, 102, 241, 0.2)'
      }}
    >
      {/* Icon */}
      <div 
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
        style={{ 
          background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
          boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
        }}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>

      {/* Hover effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.2)'
        }}
      />
    </motion.div>
  );
} 