'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WhoWeAreSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="who-we-are" className="min-h-screen py-16 lg:py-24 bg-gradient-to-br from-purple-300 via-teal-200 to-teal-300 relative overflow-hidden" ref={ref}>
      {/* Enhanced Background Pattern with Smooth Transition */}
      <div className="absolute inset-0">
        {/* Organic flowing shapes */}
        <div className="absolute top-0 left-0 w-full h-24 lg:h-32 bg-gradient-to-b from-teal-300/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 bg-gradient-to-t from-white/20 to-transparent"></div>

        {/* Optimized floating blur elements */}
        <div className="absolute inset-0 opacity-15">
          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-8 lg:top-16 left-4 lg:left-8 w-24 lg:w-40 h-24 lg:h-40 bg-white rounded-full blur-2xl"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, -15, 0],
              y: [0, 10, 0],
              scale: [1, 0.95, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
            className="absolute top-16 lg:top-32 right-8 lg:right-16 w-20 lg:w-32 h-20 lg:h-32 bg-white rounded-full blur-xl"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, 15, 0],
              y: [0, -8, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10
            }}
            className="absolute bottom-16 lg:bottom-32 left-1/4 w-32 lg:w-48 h-32 lg:h-48 bg-white rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              x: [0, -10, 0],
              y: [0, 15, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 15
            }}
            className="absolute bottom-8 lg:bottom-16 right-1/4 w-24 lg:w-36 h-24 lg:h-36 bg-white rounded-full blur-2xl"
          ></motion.div>
        </div>

        {/* Subtle hexagonal pattern overlay */}
        <div className="absolute inset-0 opacity-5 hidden lg:block">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="hexPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <polygon points="10,2 18,7 18,13 10,18 2,13 2,7" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Optimized Header */}
          <div className="text-center mb-12 lg:mb-16 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Optimized floating bee elements - hidden on mobile */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -left-12 opacity-30 hidden lg:block"
              >
                <div className="w-6 h-6">
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="50" cy="55" rx="15" ry="20" fill="rgba(255,255,255,0.8)"></ellipse>
                    <ellipse cx="35" cy="45" rx="10" ry="15" fill="rgba(255,255,255,0.6)"></ellipse>
                    <ellipse cx="65" cy="45" rx="10" ry="15" fill="rgba(255,255,255,0.6)"></ellipse>
                  </svg>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
                className="absolute -top-3 -right-16 opacity-25 hidden lg:block"
              >
                <div className="w-5 h-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="50" cy="55" rx="15" ry="20" fill="rgba(255,255,255,0.8)"></ellipse>
                    <ellipse cx="35" cy="45" rx="10" ry="15" fill="rgba(255,255,255,0.6)"></ellipse>
                    <ellipse cx="65" cy="45" rx="10" ry="15" fill="rgba(255,255,255,0.6)"></ellipse>
                  </svg>
                </div>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 lg:mb-6 leading-tight drop-shadow-lg">
                Who We Are
              </h2>
              <div className="w-16 lg:w-24 h-0.5 lg:h-1 bg-white/40 mx-auto rounded-full"></div>
            </motion.div>
          </div>

          {/* Enhanced Main Content with Visual Storytelling */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-12 lg:mb-16">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative order-2 lg:order-1"
            >
              {/* Optimized background decorations */}
              <div className="absolute -top-4 lg:-top-8 -left-4 lg:-left-8 w-20 lg:w-32 h-20 lg:h-32 bg-white/15 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 lg:-bottom-8 -right-4 lg:-right-8 w-24 lg:w-40 h-24 lg:h-40 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative bg-white/15 backdrop-blur-md rounded-2xl lg:rounded-[2rem] p-6 sm:p-8 lg:p-12 border border-white/25 shadow-2xl">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                  Building the Future of
                  <span className="block text-yellow-200 drop-shadow-sm">Community Commerce</span>
                </h3>

                <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-6 lg:mb-8">
                  Sharebeez is a <span className="font-bold text-yellow-200">community-first platform</span> that helps people beat inflation by collaborating.
                </p>

                <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                  {[
                    { icon: "🛒", text: "Buy in bulk together" },
                    { icon: "🔧", text: "Share tools & equipment" },
                    { icon: "📦", text: "Split delivery costs" },
                    { icon: "♻️", text: "Sell excess items" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-3 lg:space-x-4 bg-white/10 rounded-xl lg:rounded-2xl p-3 lg:p-4 backdrop-blur-sm border border-white/20"
                    >
                      <div className="w-10 lg:w-12 h-10 lg:h-12 bg-white/20 rounded-full flex items-center justify-center text-lg lg:text-xl flex-shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-white font-medium text-sm lg:text-base">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-white/20 rounded-xl lg:rounded-2xl blur-sm"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-white/30">
                    <p className="text-base lg:text-lg font-bold text-yellow-200 drop-shadow-sm text-center">
                      A win-win for your wallet, community, and planet 🌍
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Interactive Community Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative bg-white/15 backdrop-blur-md rounded-2xl lg:rounded-[2rem] p-6 lg:p-8 border border-white/25 shadow-2xl">
                <h4 className="text-xl lg:text-2xl font-bold text-white text-center mb-6 lg:mb-8">Community Impact</h4>

                {/* Responsive Community Network */}
                <div className="relative w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 mx-auto">
                  {/* Central Community Hub */}
                  <motion.div
                    animate={{
                      scale: [1, 1.03, 1],
                      rotate: [0, 360]
                    }}
                    transition={{
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-br from-yellow-200 to-white rounded-full flex items-center justify-center shadow-2xl border-2 lg:border-4 border-white/40"
                  >
                    <span className="text-xl lg:text-2xl">🏠</span>
                  </motion.div>

                  {/* Community Members in Circle - Fixed Responsive */}
                  {[0, 1, 2, 3, 4, 5].map((index) => {
                    const angle = (index * 60) * (Math.PI / 180);
                    // Use fixed radius values for different breakpoints
                    const radiusSm = 100;
                    const radiusLg = 120;
                    const xSm = Math.cos(angle) * radiusSm;
                    const ySm = Math.sin(angle) * radiusSm;
                    const xLg = Math.cos(angle) * radiusLg;
                    const yLg = Math.sin(angle) * radiusLg;

                    return (
                      <motion.div
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? {
                          scale: 1,
                          opacity: 1,
                          y: [0, -6, 0]
                        } : { scale: 0, opacity: 0 }}
                        transition={{
                          scale: { duration: 0.4, delay: 0.7 + index * 0.1 },
                          opacity: { duration: 0.4, delay: 0.7 + index * 0.1 },
                          y: {
                            duration: 3 + index * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.4
                          }
                        }}
                        className="absolute w-10 lg:w-12 h-10 lg:h-12 bg-white/90 rounded-full border-2 lg:border-3 border-white flex items-center justify-center shadow-lg backdrop-blur-sm"
                        style={{
                          left: `calc(50% + ${xSm}px - 20px)`,
                          top: `calc(50% + ${ySm}px - 20px)`,
                        }}
                      >
                        <span className="text-xs lg:text-sm">
                          {['👩', '👨', '👵', '🧑', '👩‍💼', '👨‍💼'][index]}
                        </span>
                      </motion.div>
                    );
                  })}

                  {/* Fixed Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full hidden sm:block" style={{ zIndex: -1 }}>
                    {[0, 1, 2, 3, 4, 5].map((index) => {
                      const angle = (index * 60) * (Math.PI / 180);
                      // Use fixed values for responsive design
                      const radius = 100; // Base radius for all screen sizes
                      const centerX = 132; // Center for 264px container (w-64 sm:w-72 lg:w-80)
                      const centerY = 132;
                      const x = Math.cos(angle) * radius + centerX;
                      const y = Math.sin(angle) * radius + centerY;

                      return (
                        <motion.line
                          key={index}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={isInView ? {
                            pathLength: 1,
                            opacity: 0.4,
                          } : { pathLength: 0, opacity: 0 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.8 + index * 0.1
                          }}
                          x1={centerX}
                          y1={centerY}
                          x2={x}
                          y2={y}
                          stroke="url(#connectionGradient)"
                          strokeWidth="1.5"
                          strokeDasharray="3,3"
                        />
                      );
                    })}
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
                        <stop offset="100%" stopColor="rgba(254, 240, 138, 0.6)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Responsive Impact Stats */}
                <div className="grid grid-cols-3 gap-2 lg:gap-4 mt-6 lg:mt-8">
                  {[
                    { value: "$2.3K", label: "Avg Savings", color: "from-green-200 to-green-300" },
                    { value: "156", label: "Members", color: "from-blue-200 to-blue-300" },
                    { value: "89%", label: "Satisfaction", color: "from-purple-200 to-purple-300" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      className={`bg-gradient-to-br ${stat.color} rounded-xl lg:rounded-2xl p-3 lg:p-4 text-center shadow-lg`}
                    >
                      <div className="text-lg lg:text-2xl font-black text-gray-800">{stat.value}</div>
                      <div className="text-xs lg:text-sm font-semibold text-gray-700">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Production-Grade Value Proposition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Save Money Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/15 to-green-200/15 rounded-2xl lg:rounded-3xl blur-xl group-hover:from-yellow-200/25 group-hover:to-green-200/25 transition-all duration-300"></div>
              <div className="relative bg-white/20 backdrop-blur-md rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/30 hover:border-white/40 transition-all duration-300 hover:-translate-y-2 shadow-xl overflow-hidden">
                {/* Optimized background pattern - hidden on mobile */}
                <div className="absolute inset-0 opacity-10 hidden lg:block">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-2 w-12 h-12"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="currentColor">
                      <circle cx="50" cy="20" r="6" className="text-yellow-200"/>
                      <circle cx="80" cy="50" r="4" className="text-green-200"/>
                      <circle cx="50" cy="80" r="6" className="text-yellow-200"/>
                      <circle cx="20" cy="50" r="4" className="text-green-200"/>
                    </svg>
                  </motion.div>
                </div>

                <div className="relative text-center">
                  <div className="relative mb-4 lg:mb-6">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 to-green-200/20 rounded-full blur-lg"
                    ></motion.div>
                    <div className="relative w-20 lg:w-24 h-20 lg:h-24 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border-2 border-white/50 group-hover:scale-105 transition-transform duration-300 shadow-xl">
                      <span className="text-3xl lg:text-4xl drop-shadow-lg">💰</span>
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4 drop-shadow-sm">Save Money</h3>
                  <p className="text-white/90 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">Pool resources and get better prices through collective buying power</p>

                  {/* Mini visualization */}
                  <div className="flex justify-center space-x-1.5 lg:space-x-2 mb-3 lg:mb-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -6, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                        className="w-2.5 lg:w-3 h-6 lg:h-8 bg-gradient-to-t from-yellow-200 to-green-200 rounded-full"
                      ></motion.div>
                    ))}
                  </div>
                  <div className="text-xs lg:text-sm text-white/80 font-medium">Average 40% savings</div>
                </div>
              </div>
            </motion.div>

            {/* Reduce Waste Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/20 to-teal-200/20 rounded-3xl blur-xl group-hover:from-green-200/30 group-hover:to-teal-200/30 transition-all duration-500"></div>
              <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 hover:-translate-y-3 shadow-2xl overflow-hidden">
                {/* Animated leaves */}
                <div className="absolute inset-0 opacity-10">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -100],
                        x: [0, 20, -10, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 8 + i,
                        repeat: Infinity,
                        delay: i * 2
                      }}
                      className={`absolute w-4 h-4 text-green-200 ${i === 1 ? 'top-full left-1/4' : i === 2 ? 'top-full left-1/2' : 'top-full left-3/4'}`}
                    >
                      🍃
                    </motion.div>
                  ))}
                </div>

                <div className="relative text-center">
                  <div className="relative mb-6">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-teal-200/30 rounded-full blur-lg"
                    ></motion.div>
                    <div className="relative w-24 h-24 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border-2 border-white/50 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <span className="text-4xl drop-shadow-lg">🌱</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-sm">Reduce Waste</h3>
                  <p className="text-white/90 leading-relaxed mb-6">Share instead of buying new, creating a more sustainable future</p>

                  {/* Recycling visualization */}
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path d="M50,10 A40,40 0 0,1 90,50 A40,40 0 0,1 50,90 A40,40 0 0,1 10,50 A40,40 0 0,1 50,10"
                              fill="none" stroke="rgba(34, 197, 94, 0.8)" strokeWidth="4" strokeDasharray="8,4"/>
                        <circle cx="50" cy="10" r="4" fill="rgba(34, 197, 94, 0.8)"/>
                        <circle cx="90" cy="50" r="4" fill="rgba(34, 197, 94, 0.8)"/>
                        <circle cx="50" cy="90" r="4" fill="rgba(34, 197, 94, 0.8)"/>
                      </svg>
                    </motion.div>
                  </div>
                  <div className="text-sm text-white/80 font-medium">85% less waste</div>
                </div>
              </div>
            </motion.div>

            {/* Build Community Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 1.9 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-3xl blur-xl group-hover:from-purple-200/30 group-hover:to-pink-200/30 transition-all duration-500"></div>
              <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 hover:-translate-y-3 shadow-2xl overflow-hidden">
                {/* Floating hearts */}
                <div className="absolute inset-0 opacity-20">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -60, 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 1.5
                      }}
                      className={`absolute text-pink-200 ${i === 1 ? 'bottom-0 left-1/4' : i === 2 ? 'bottom-0 left-1/2' : i === 3 ? 'bottom-0 left-3/4' : 'bottom-0 left-1/6'}`}
                    >
                      ❤️
                    </motion.div>
                  ))}
                </div>

                <div className="relative text-center">
                  <div className="relative mb-6">
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-lg"
                    ></motion.div>
                    <div className="relative w-24 h-24 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border-2 border-white/50 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <span className="text-4xl drop-shadow-lg">🤝</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-sm">Build Community</h3>
                  <p className="text-white/90 leading-relaxed mb-6">Connect with neighbors and strengthen local relationships</p>

                  {/* Community connection visualization */}
                  <div className="flex justify-center items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                        className="w-6 h-6 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center text-xs"
                      >
                        👤
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-sm text-white/80 font-medium">500+ connections made</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
