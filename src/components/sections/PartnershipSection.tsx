'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PartnershipSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    {
      id: 1,
      name: "Amazon",
      description: "Bulk purchasing power for household essentials and everyday items.",
      logo: "AZ",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      id: 2,
      name: "Costco",
      description: "Wholesale pricing on groceries, electronics, and home goods.",
      logo: "CO",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      id: 3,
      name: "USPS",
      description: "Reliable shipping partner for verified national deliveries.",
      logo: "US",
      gradient: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
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
            Our
            <span className="block bg-gradient-to-r from-mint-500 to-lavender-500 bg-clip-text text-transparent">
              Partnerships
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We've partnered with trusted brands to bring you the best experience
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${partner.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {partner.logo}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {partner.name}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Interested in partnering with us?
          </p>
          <button className="btn-primary">
            Become a Partner
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipSection;
