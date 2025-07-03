'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "Do I need to be in a group to buy something?",
      answer: "Not necessarily! While group buying offers the best savings, you can also browse individual listings from community members. However, joining or creating a group (Hive) unlocks bulk pricing and better deals."
    },
    {
      id: 2,
      question: "Is Sharebeez free to use?",
      answer: "Yes! Sharebeez is free to join and use. We only take a small transaction fee when you complete a purchase or sale through the platform, which helps us maintain and improve the service."
    },
    {
      id: 3,
      question: "How does Sharebeez ensure safety in transactions?",
      answer: "We use secure payment processing, verified user profiles, and community ratings. All transactions are protected, and we have a dispute resolution system. Plus, dealing with neighbors creates natural accountability."
    },
    {
      id: 4,
      question: "Can I sell or rent things as an individual?",
      answer: "Absolutely! You can list items for sale, rent, or sharing directly to your community. Whether it's excess produce from your garden, tools you rarely use, or services you offer, Sharebeez makes it easy to monetize your assets."
    },
    {
      id: 5,
      question: "Is there a web version?",
      answer: "Yes! While we started as a mobile app, we now offer a full web platform that works seamlessly across all devices. You can access all features through your browser or download our mobile app for on-the-go convenience."
    },
    {
      id: 6,
      question: "How do I start a Hive in my community?",
      answer: "Starting a Hive is easy! Simply create an account, set up your community group, and invite neighbors through the app. You can start with just a few people and grow from there. We provide tools to help you organize and manage your community."
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="min-h-screen py-8 lg:py-16 bg-gradient-to-br from-mint-50 via-white to-lavender-50 relative overflow-hidden" ref={ref}>
      {/* Organic Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            x: [0, 45, 0],
            y: [0, -25, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-16 right-16 w-32 h-32 bg-mint-300 rounded-full blur-2xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 0.85, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 9
          }}
          className="absolute bottom-16 left-16 w-40 h-40 bg-lavender-300 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 lg:mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 lg:mb-6 leading-tight"
            >
              Frequently Asked
              <span className="block bg-gradient-to-r from-mint-500 to-lavender-500 bg-clip-text text-transparent">
                Questions
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Find answers to common questions about Sharebeez
            </motion.p>
          </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <ChevronUp className="w-6 h-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-mint-lavender-soft rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of Sharebeez. Reach out anytime!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Support
              </button>
              <a 
                href="mailto:support@sharebeez.com"
                className="btn-secondary"
              >
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
