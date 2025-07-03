'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DollarSign, Recycle, Users, MapPin } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      id: 1,
      icon: <DollarSign className="w-8 h-8" />,
      title: "Save Money",
      description: "Reduce costs through group purchasing power and resource sharing",
      details: "Access bulk pricing, split shipping costs, and share expensive tools and equipment with your neighbors.",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      iconColor: "text-green-600"
    },
    {
      id: 2,
      icon: <Recycle className="w-8 h-8" />,
      title: "Reduce Waste",
      description: "Minimize packaging waste and maximize resource utilization",
      details: "Fewer individual shipments, shared tools instead of duplicates, and coordinated bulk purchases reduce environmental impact.",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8" />,
      title: "Build Community",
      description: "Strengthen neighborhood connections and mutual support",
      details: "Meet your neighbors, build trust through shared experiences, and create a support network that lasts.",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      iconColor: "text-purple-600"
    },
    {
      id: 4,
      icon: <MapPin className="w-8 h-8" />,
      title: "Support Local",
      description: "Boost local businesses and strengthen your local economy",
      details: "Coordinate group purchases from local vendors, support neighborhood businesses, and keep money in your community.",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section className="section-padding bg-white" ref={ref}>
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
            Why Choose
            <span className="block bg-gradient-to-r from-mint-500 to-lavender-500 bg-clip-text text-transparent">
              Sharebeez?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Our platform offers unique benefits that help you save money, reduce waste, and build stronger communities
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className={`${benefit.bgColor} rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-105`}>
                <div className={`w-16 h-16 ${benefit.iconColor} bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 mb-4 text-center">
                  {benefit.description}
                </p>

                <p className="text-sm text-gray-500 text-center leading-relaxed">
                  {benefit.details}
                </p>
              </div>
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
            Join Your Community
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
