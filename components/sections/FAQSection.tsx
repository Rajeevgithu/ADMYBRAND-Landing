'use client';

import { motion } from 'framer-motion';
import FAQItem from '../ui/FAQItem';

const faqs = [
  {
    question: "How does ADmyBRAND AI Suite work?",
    answer: "ADmyBRAND AI Suite analyzes your brand identity, target audience, and market data using advanced machine learning. Our AI then generates personalized marketing campaigns, social media content, and SEO-optimized strategies. Simply connect your social accounts, input your brand guidelines, and watch our AI create engaging content that converts."
  },
  {
    question: "What makes ADmyBRAND different from other AI tools?",
    answer: "Unlike generic AI tools, ADmyBRAND is specifically designed for marketing agencies. We understand agency workflows, client management, and the need for scalable content creation. Our AI learns your brand voice, maintains consistency across campaigns, and provides agency-specific analytics and reporting features."
  },
  {
    question: "Can I manage multiple client accounts?",
    answer: "Yes! ADmyBRAND is built for agencies managing multiple clients. Each client gets their own workspace with separate brand guidelines, content calendars, and analytics. You can easily switch between clients and maintain complete separation of data and campaigns."
  },
  {
    question: "What social media platforms are supported?",
    answer: "We support Facebook, Instagram, Twitter/X, LinkedIn, TikTok, YouTube, Pinterest, and Threads. Our AI creates platform-specific content optimized for each channel's algorithm and audience behavior. You can schedule posts, track performance, and manage all platforms from one dashboard."
  },
  {
    question: "How does the AI content generation work?",
    answer: "Our AI analyzes your brand guidelines, target audience demographics, trending topics, and historical performance data. It then generates content that matches your brand voice, includes relevant hashtags, and follows platform-specific best practices. You can review, edit, and approve content before publishing."
  },
  {
    question: "What analytics and reporting features do you offer?",
    answer: "We provide comprehensive analytics including engagement rates, reach, impressions, click-through rates, and ROI tracking. Our AI generates insights on content performance, audience behavior, and optimization recommendations. You can create custom reports for clients and export data for presentations."
  },
  {
    question: "Do you offer white-label solutions for agencies?",
    answer: "Yes! Our Enterprise plan includes white-label options where you can rebrand ADmyBRAND as your own tool. This includes custom branding, domain, and client-facing dashboards. Perfect for agencies looking to offer AI-powered marketing as part of their service portfolio."
  },
  {
    question: "What's included in the free trial?",
    answer: "Our 14-day free trial includes full access to all features: AI content generation, multi-platform scheduling, analytics dashboard, client management, and team collaboration tools. No credit card required, and you can upgrade to any paid plan during or after the trial period."
  }
];

export default function FAQSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden" id="faq" style={{ backgroundColor: '#0F172A' }}>
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

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <span 
              className="block text-transparent bg-clip-text"
              style={{ 
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite. Can&apos;t find the answer you&apos;re looking for? 
            <span className="cursor-pointer transition-colors" style={{ color: '#6366F1' }}> Contact our support team</span>.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6 text-lg">
            Still have questions? We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={scrollToPricing}
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
              Start Free Trial
            </motion.button>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 text-white border px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
              whileHover={{ 
                scale: 1.05,
                background: 'rgba(255, 255, 255, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 