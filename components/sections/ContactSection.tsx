'use client';

import { motion } from 'framer-motion';
import ContactForm from '../ui/ContactForm';
import { Mail, Phone, MapPin, Clock, MessageSquare, Users } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@admybrand.com",
    description: "Get in touch with our team"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Speak with our experts"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "San Francisco, CA",
    description: "Schedule an in-person meeting"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Fri 9AM-6PM PST",
    description: "We&apos;re here to help"
  }
];

const features = [
  {
    icon: MessageSquare,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your needs"
  },
  {
    icon: Users,
    title: "Dedicated Success Manager",
    description: "Personal guidance to maximize your ROI"
  }
];

export default function ContactSection() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden" id="contact" style={{ backgroundColor: '#0F172A' }}>
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
            Get In
            <span 
              className="block text-transparent bg-clip-text"
              style={{ 
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team to discuss how ADmyBRAND AI Suite can revolutionize your agency&apos;s marketing operations and drive exceptional results for your clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div 
              className="rounded-2xl p-8"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              <p className="text-gray-300 mb-6">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl p-6"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ 
                      background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)'
                    }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                  <p className="text-gray-300 font-medium mb-1">{info.details}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Why choose ADmyBRAND?</h3>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ 
                      background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)'
                    }}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              className="rounded-xl p-6"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-3">Ready to get started?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Join thousands of agencies already using ADmyBRAND to scale their operations.
              </p>
              <motion.button
                onClick={scrollToPricing}
                className="text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                  boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 