'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import PricingCard from '../ui/PricingCard';

const pricingPlans = {
  monthly: [
    {
      title: "Basic",
      price: "$29",
      period: "/mo",
      description: "Perfect for small agencies getting started",
      features: [
        "3 AI Campaign Templates",
        "1 User Account",
        "Basic Analytics Dashboard",
        "Email Support",
        "5 Social Media Channels",
        "Limited AI Credits (100/month)"
      ],
      isPopular: false
    },
    {
      title: "Pro",
      price: "$99",
      period: "/mo",
      description: "Ideal for growing marketing agencies",
      features: [
        "Unlimited AI Campaign Templates",
        "3 User Accounts",
        "Advanced Analytics & Reporting",
        "Priority Email Support",
        "All Social Media Channels",
        "Unlimited AI Credits",
        "Client Collaboration Tools",
        "SEO Optimization Suite",
        "Multi-Channel Publishing",
        "Custom Branding"
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large agencies with custom needs",
      features: [
        "Unlimited Everything",
        "Unlimited User Accounts",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Custom Integrations",
        "White-label Solutions",
        "Advanced Security Features",
        "Custom AI Training",
        "API Access",
        "Onboarding & Training"
      ],
      isPopular: false,
      isEnterprise: true
    }
  ],
  yearly: [
    {
      title: "Basic",
      price: "$290",
      period: "/year",
      description: "Perfect for small agencies getting started",
      features: [
        "3 AI Campaign Templates",
        "1 User Account",
        "Basic Analytics Dashboard",
        "Email Support",
        "5 Social Media Channels",
        "Limited AI Credits (100/month)"
      ],
      isPopular: false
    },
    {
      title: "Pro",
      price: "$990",
      period: "/year",
      description: "Ideal for growing marketing agencies",
      features: [
        "Unlimited AI Campaign Templates",
        "3 User Accounts",
        "Advanced Analytics & Reporting",
        "Priority Email Support",
        "All Social Media Channels",
        "Unlimited AI Credits",
        "Client Collaboration Tools",
        "SEO Optimization Suite",
        "Multi-Channel Publishing",
        "Custom Branding"
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large agencies with custom needs",
      features: [
        "Unlimited Everything",
        "Unlimited User Accounts",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Custom Integrations",
        "White-label Solutions",
        "Advanced Security Features",
        "Custom AI Training",
        "API Access",
        "Onboarding & Training"
      ],
      isPopular: false,
      isEnterprise: true
    }
  ]
};

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const plans = isYearly ? pricingPlans.yearly : pricingPlans.monthly;

  return (
    <section className="relative py-20 px-6 overflow-hidden" id="pricing" style={{ backgroundColor: '#0F172A' }}>
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, #0F172A 0%, #1F2937 50%, #0F172A 100%)'
        }}
      />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/3 left-20 w-72 h-72 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(99, 102, 241, 0.2)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'rgba(236, 72, 153, 0.2)' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 9,
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
            Simple, Transparent
            <span 
              className="block text-transparent bg-clip-text"
              style={{ 
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your agency. All plans include our core AI features with no hidden fees.
          </p>

          {/* Pricing Toggle */}
          <motion.div
            className="inline-flex items-center rounded-full p-1"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isYearly
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              style={!isYearly ? {
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
              } : {}}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isYearly
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              style={isYearly ? {
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
              } : {}}
            >
              Yearly
              <span className="ml-1 text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#10B981', color: 'white' }}>
                Save 20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard
              key={`${isYearly ? 'yearly' : 'monthly'}-${index}`}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              isEnterprise={plan.isEnterprise}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div 
            className="rounded-2xl p-6"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
            }}
          >
            <p className="text-white mb-4 font-medium">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <p className="text-gray-300 text-sm">
              Need a custom plan? <span className="text-white hover:text-transparent hover:bg-clip-text transition-all duration-300 cursor-pointer font-medium"
                style={{
                  background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Contact our sales team</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 