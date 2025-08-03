'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { cn } from '../../lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
  rating: number;
  delay?: number;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  rating,
  delay = 0,
  className
}: TestimonialCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl backdrop-blur-sm p-6 relative",
        className
      )}
      style={{ 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Quote Icon */}
      <div 
        className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center"
        style={{ 
          background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
          boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
        }}
      >
        <Quote className="w-4 h-4 text-white" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating 
                ? "text-yellow-400 fill-current" 
                : "text-gray-600"
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ 
              background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)'
            }}
          >
            <span className="text-white font-semibold text-lg">
              {author.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="text-white font-semibold">{author.name}</p>
          <p className="text-gray-400 text-sm">{author.title}</p>
          <p className="text-sm" style={{ color: '#6366F1' }}>{author.company}</p>
        </div>
      </div>
    </motion.div>
  );
} 