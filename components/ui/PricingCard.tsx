'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isEnterprise?: boolean;
  delay?: number;
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  isEnterprise = false,
  delay = 0
}: PricingCardProps) {
  return (
    <motion.div
      className={`relative p-8 rounded-2xl transition-all duration-300 ${
        isPopular ? 'scale-105' : ''
      }`}
      style={{ 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        border: isPopular ? '2px solid rgba(99, 102, 241, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: isPopular ? '0 8px 32px rgba(99, 102, 241, 0.3)' : '0 4px 16px rgba(0, 0, 0, 0.1)'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5, 
        scale: 1.02,
        boxShadow: '0 12px 40px rgba(99, 102, 241, 0.2)'
      }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div 
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-semibold text-white"
          style={{ 
            background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)'
          }}
        >
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      {/* Enterprise Badge */}
      {isEnterprise && (
        <div 
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-semibold text-white"
          style={{ 
            background: 'linear-gradient(135deg, #38BDF8 0%, #6366F1 100%)',
            boxShadow: '0 4px 15px rgba(56, 189, 248, 0.4)'
          }}
        >
          Enterprise
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-400">{period}</span>
        </div>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div 
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ 
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)'
              }}
            >
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        onClick={() => {
          if (isEnterprise) {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          } else {
            // For non-enterprise plans, you could add a signup modal or redirect
            console.log(`Selected plan: ${title}`);
            // You can add actual signup functionality here
          }
        }}
        className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 ${
          isEnterprise ? 'opacity-90' : ''
        }`}
        style={isPopular ? {
          background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
          boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
        } : isEnterprise ? {
          background: 'linear-gradient(135deg, #38BDF8 0%, #6366F1 100%)',
          boxShadow: '0 4px 15px rgba(56, 189, 248, 0.3)'
        } : {
          background: 'linear-gradient(135deg, #EC4899 0%, #38BDF8 100%)',
          boxShadow: '0 4px 15px rgba(236, 72, 153, 0.3)'
        }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: isPopular ? '0 8px 25px rgba(99, 102, 241, 0.4)' :
                       isEnterprise ? '0 8px 25px rgba(56, 189, 248, 0.4)' :
                       '0 8px 25px rgba(236, 72, 153, 0.4)'
        }}
        whileTap={{ scale: 0.98 }}
      >
        {isEnterprise ? 'Contact Sales' : 'Get Started'}
      </motion.button>
    </motion.div>
  );
} 