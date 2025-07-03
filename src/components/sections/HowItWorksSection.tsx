'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plus, Users, Truck, Heart, ArrowRight } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      id: 1,
      icon: <Plus className="w-8 h-8" />,
      title: "Join Your Local Hive",
      description: "Find or create a community group in your neighborhood",
      details: "Sign up and discover existing hives near you, or start your own community group. Connect with neighbors who share your values of collaboration and sustainability.",
      gradient: "from-mint-400 to-mint-600"
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8" />,
      title: "Participate & Share",
      description: "Join group purchases, share tools, and organize events",
      details: "Browse available group orders, lend or borrow items from neighbors, and participate in community events. Every interaction strengthens your local network.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      icon: <Truck className="w-8 h-8" />,
      title: "Coordinate & Deliver",
      description: "Organize logistics and support your community",
      details: "Help coordinate deliveries, organize pickup points, and support fellow community members. Build trust and reliability within your hive.",
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 4,
      icon: <Heart className="w-8 h-8" />,
      title: "Save Together, Waste Less",
      description: "Reduce costs and environmental impact by sharing resources",
      details: "Enjoy your savings while knowing you've reduced packaging waste and strengthened community bonds. Share your success with others!",
      gradient: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-mint-lavender-soft" ref={ref}>
      <div className="container-custom">
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
            How Sharebeez
            <span className="block bg-gradient-to-r from-mint-500 to-lavender-500 bg-clip-text text-transparent">
              Works
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Join your community in four simple steps to start saving and sharing
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="card text-center h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-mint-500 to-lavender-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.id}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>

                <div className="text-sm text-gray-500 leading-relaxed">
                  {step.details}
                </div>

                <div className="mt-6">
                  <button className="btn-secondary text-sm">
                    Learn More
                  </button>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button className="btn-primary">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
