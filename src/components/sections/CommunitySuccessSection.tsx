'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Users, MapPin } from 'lucide-react';

const CommunitySuccessSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const successStories = [
    {
      id: 1,
      icon: "🏘️",
      title: "Sunset Gardens Hive",
      savings: "$12,450",
      members: 47,
      quote: "Our neighborhood went from strangers to a thriving community. We've saved thousands while building lasting friendships.",
      author: "Sarah Johnson",
      location: "Chicago, IL",
      impact: "Reduced individual grocery costs by 35%",
      gradient: "from-green-400 to-green-600"
    },
    {
      id: 2,
      icon: "🔧",
      title: "Tool Share Network",
      savings: "$8,200",
      members: 23,
      quote: "Why buy when you can share? Our tool library means everyone has access to professional equipment without the cost.",
      author: "Michael Chen",
      location: "Portland, OR",
      impact: "Prevented 156 duplicate tool purchases",
      gradient: "from-mint-400 to-mint-600"
    },
    {
      id: 3,
      icon: "🌱",
      title: "Farm Fresh Co-op",
      savings: "$15,600",
      members: 62,
      quote: "Direct from farm to table at wholesale prices. Fresh, local, and sustainable - exactly what our community needed.",
      author: "Elena Rodriguez",
      location: "Austin, TX",
      impact: "Supporting 8 local farms weekly",
      gradient: "from-lavender-400 to-lavender-600"
    }
  ];

  const stats = [
    { label: "Communities Served", value: "2,400+", icon: "🏡" },
    { label: "Total Savings", value: "$1.2M", icon: "💰" },
    { label: "Active Members", value: "18,500+", icon: "👥" },
    { label: "CO₂ Reduced", value: "45 tons", icon: "🌍" }
  ];

  return (
    <section className="min-h-screen py-8 lg:py-16 bg-gradient-to-br from-white via-mint-50 to-lavender-50 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-32 h-32 bg-mint-300 rounded-full blur-2xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -25, 0],
            y: [0, 30, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-20 left-10 w-40 h-40 bg-lavender-300 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
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
              Community Success
              <span className="block bg-gradient-to-r from-mint-500 to-lavender-500 bg-clip-text text-transparent">
                Stories
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Real people are already saving money and building stronger communities with Sharebeez
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {successStories.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Background Card */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  {/* Decorative Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${testimonial.gradient} rounded-full transform translate-x-8 -translate-y-8`}></div>
                  </div>

                  {/* Header with Community Info */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-20 h-20 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {testimonial.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-green-600">{testimonial.savings}</div>
                        <div className="text-xs text-gray-500 font-medium">total saved</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {testimonial.title}
                    </h3>

                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{testimonial.members}</span>
                        <span className="ml-1">members</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote Section */}
                  <div className="relative mb-6">
                    <Quote className="w-10 h-10 text-gray-200 absolute -top-3 -left-1" />
                    <blockquote className="text-gray-700 leading-relaxed pl-8 mb-4 italic text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>

                  {/* Impact Metrics */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 mb-6">
                    <div className="text-sm font-bold text-gray-800 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Community Impact
                    </div>
                    <div className="text-sm text-gray-700">{testimonial.impact}</div>
                  </div>

                  {/* Author Attribution */}
                  <div className="flex items-center">
                    <div className={`w-14 h-14 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md`}>
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">Community Leader</p>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <div className="text-center mb-16">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-4xl lg:text-5xl font-black text-gray-900 mb-6"
              >
                Platform <span className="bg-gradient-to-r from-mint-500 to-lavender-500 bg-clip-text text-transparent">Impact</span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto"
              >
                Real numbers from real communities making a difference
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden group-hover:scale-105">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Icon with animated background */}
                    <div className="relative z-10 mb-6">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-mint-100 to-lavender-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-4xl">{stat.icon}</span>
                      </div>
                    </div>

                    {/* Value with counter animation effect */}
                    <div className="relative z-10">
                      <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-mint-500 group-hover:to-lavender-500 group-hover:bg-clip-text transition-all duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-mint-200 to-lavender-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-lavender-200 to-mint-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Impact Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 bg-gradient-to-r from-mint-50 via-white to-lavender-50 rounded-3xl p-8 lg:p-12"
            >
              <div className="text-center">
                <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Growing Every Day
                </h4>
                <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                  Join thousands of community members who are already transforming their neighborhoods through collaboration and shared resources.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Live communities active right now</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span className="font-medium">New members joining daily</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-12"
          >
            <button className="bg-gradient-to-r from-mint-500 to-lavender-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Join a Community Near You
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySuccessSection;
