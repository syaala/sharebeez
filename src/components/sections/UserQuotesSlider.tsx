'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const UserQuotesSlider: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      id: 1,
      quote: "I never imagined saving this much by just pooling orders with people in my complex. Sharebeez is genius.",
      author: "Priya S.",
      location: "North Carolina",
      role: "Community Organizer",
      gradient: "from-mint-400 to-mint-600"
    },
    {
      id: 2,
      quote: "We sold out of our Diwali snacks in days thanks to preorders from a local Hive. This is the future of selling.",
      author: "Mitesh B.",
      location: "California",
      role: "Small Business Owner",
      gradient: "from-lavender-400 to-lavender-600"
    },
    {
      id: 3,
      quote: "My tools got used, neighbors were happy, and I even earned some credits. Sharebeez makes sharing easy.",
      author: "John K.",
      location: "Oregon",
      role: "Hive Organizer",
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 4,
      quote: "Our neighborhood saved over $3,000 last month on groceries alone. The bulk buying power is incredible!",
      author: "Maria L.",
      location: "Texas",
      role: "Parent & Organizer",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      id: 5,
      quote: "From sharing garden tools to group buying organic produce, Sharebeez has transformed our community.",
      author: "David W.",
      location: "Colorado",
      role: "Sustainability Advocate",
      gradient: "from-blue-400 to-blue-600"
    }
  ];

  // Auto-advance quotes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [quotes.length]);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const currentQuoteData = quotes[currentQuote];

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from people who are already saving and sharing with Sharebeez
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className={`bg-gradient-to-r ${currentQuoteData.gradient} rounded-3xl p-12 text-white relative`}>
                {/* Quote icon */}
                <Quote className="w-16 h-16 mx-auto mb-8 opacity-20" />
                
                {/* Quote text */}
                <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                  "{currentQuoteData.quote}"
                </blockquote>
                
                {/* Author info */}
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                    {currentQuoteData.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-semibold">{currentQuoteData.author}</p>
                    <p className="text-lg opacity-90">{currentQuoteData.role}</p>
                    <p className="text-base opacity-75">{currentQuoteData.location}</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 right-8 w-6 h-6 bg-white/10 rounded-full"></div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevQuote}
              className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentQuote
                      ? `bg-gradient-to-r ${currentQuoteData.gradient}`
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextQuote}
              className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">$2M+</div>
            <div className="text-gray-600">Community Savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">Active Hives</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UserQuotesSlider;
