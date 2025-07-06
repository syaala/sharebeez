'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Mail, User, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-mint-300 to-lavender-300 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">You're on the list! 🎉</h2>
          <p className="text-gray-600 mb-6">
            Thanks for joining the Sharebeez waitlist. We'll notify you as soon as we launch in your area.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-mint-600 hover:text-mint-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-300 to-lavender-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 25, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-lg"
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <Link 
                href="/"
                className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 mb-8 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-mint-500 to-lavender-500 bg-clip-text text-transparent">
                  The Future of
                </span>
                <span className="block text-gray-900">Community Commerce</span>
                <span className="block text-2xl lg:text-3xl text-gray-600 font-normal mt-2">is coming soon</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                Join the revolution where neighbors become partners in saving money, reducing waste, and building stronger communities. Be among the first to experience AI-powered group buying, resource sharing, and local commerce.
              </p>

              <div className="flex justify-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-mint-600">15,000+</div>
                    <div className="text-sm text-gray-600">Already on the waitlist</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Waitlist Form */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/30 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-2xl relative overflow-hidden"
            >
              {/* Organic background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-mint-200/30 to-lavender-200/30 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-lavender-200/30 to-mint-200/30 rounded-full blur-xl transform -translate-x-12 translate-y-12"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Join the Waitlist</h3>
                <p className="text-sm text-gray-600 mb-6">Get early access and exclusive updates</p>
              
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 focus:outline-none focus:ring-4 focus:ring-mint-300/50 focus:border-mint-500 text-gray-900 placeholder-gray-500 shadow-lg"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 focus:outline-none focus:ring-4 focus:ring-mint-300/50 focus:border-mint-500 text-gray-900 placeholder-gray-500 shadow-lg"
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your city (optional)"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 focus:outline-none focus:ring-4 focus:ring-mint-300/50 focus:border-mint-500 text-gray-900 placeholder-gray-500 shadow-lg"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-mint-500 to-lavender-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Joining...</span>
                      </div>
                    ) : (
                      'Join the Waitlist'
                    )}
                  </button>
                </form>

                <p className="text-sm text-gray-600 mt-4 text-center">
                  We'll never spam you. Unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Organic Platform Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px]"
          >
            {/* Main Platform Mockup - Tilted */}
            <motion.div
              initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
              animate={{ opacity: 1, rotate: -8, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute top-8 left-4 w-72 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-10"
            >
              {/* Browser Header */}
              <div className="bg-gray-100 h-6 flex items-center px-2 border-b border-gray-200">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded-sm h-3 flex items-center px-2 ml-2">
                  <span className="text-xs text-gray-600">sharebeez.com</span>
                </div>
              </div>

              {/* App Header */}
              <div className="bg-gradient-to-r from-mint-500 to-lavender-500 p-3 text-white">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-xs">🐝</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold">Sharebeez</div>
                    <div className="text-xs opacity-80">Community Platform</div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-3 bg-gray-50 h-full">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-white rounded-lg p-2 shadow-sm">
                    <div className="text-lg font-bold text-green-600">$2,847</div>
                    <div className="text-xs text-gray-600">Total Saved</div>
                  </div>
                  <div className="bg-white rounded-lg p-2 shadow-sm">
                    <div className="text-lg font-bold text-blue-600">28</div>
                    <div className="text-xs text-gray-600">Active Orders</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm mb-2">
                  <div className="text-xs font-semibold text-gray-900 mb-1">🔥 Hot Deal</div>
                  <div className="text-xs text-gray-600">Bulk organic rice - 40% off</div>
                  <div className="text-xs text-mint-600 font-medium">Ends in 2h 15m</div>
                </div>

                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-xs font-semibold text-gray-900 mb-1">🏡 Maple Street Hive</div>
                  <div className="text-xs text-gray-600">24 members active</div>
                  <div className="text-xs text-green-600 font-medium">$2,340 saved together</div>
                </div>
              </div>
            </motion.div>

            {/* Marketplace Card - Overlapping */}
            <motion.div
              initial={{ opacity: 0, rotate: 12, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 15, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-32 right-8 w-64 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-20"
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-6 h-6 bg-mint-100 rounded-lg flex items-center justify-center">
                  <span className="text-mint-600 text-xs">🛒</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">Smart Marketplace</span>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=48&h=48&fit=crop&crop=center"
                    alt="Honey"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium text-gray-900">Organic Raw Honey</div>
                  <div className="flex items-center space-x-1 mt-1">
                    <span className="text-sm font-bold text-green-600">$12.99</span>
                    <span className="text-xs text-gray-500 line-through">$18.99</span>
                  </div>
                  <div className="text-xs text-mint-600 bg-mint-100 px-2 py-0.5 rounded-full inline-block mt-1">
                    Group Buy: 8/10
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Chat Interface - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -10, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="absolute bottom-16 left-12 w-56 bg-white rounded-xl shadow-xl border border-gray-200 p-3 z-15"
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-5 h-5 bg-lavender-100 rounded-lg flex items-center justify-center">
                  <span className="text-lavender-600 text-xs">💬</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">Community Chat</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-mint-400 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">S</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-lg p-2">
                      <p className="text-xs text-gray-900">Rice order is ready! 🌾</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-2 justify-end">
                  <div className="flex-1 text-right">
                    <div className="bg-mint-500 text-white rounded-lg p-2 inline-block">
                      <p className="text-xs">Count me in! 🎉</p>
                    </div>
                  </div>
                  <div className="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">Y</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Delivery Tracking - Top Right */}
            <motion.div
              initial={{ opacity: 0, rotate: 8, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 6, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute top-4 right-16 w-48 bg-white rounded-xl shadow-xl border border-gray-200 p-3 z-25"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-5 h-5 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 text-xs">🚚</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">Delivery</span>
              </div>

              <div className="text-xs text-gray-600 mb-1">Order #1247</div>
              <div className="text-xs font-medium text-gray-900 mb-2">Driver: Mike Chen</div>

              <div className="bg-orange-50 rounded-lg p-2">
                <div className="text-xs text-orange-700 font-medium">ETA: 15 minutes</div>
                <div className="text-xs text-gray-600">3 stops remaining</div>
              </div>
            </motion.div>

            {/* Resource Sharing - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -12, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-8 right-4 w-52 bg-white rounded-xl shadow-xl border border-gray-200 p-3 z-30"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-5 h-5 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-xs">🔧</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">Tool Library</span>
              </div>

              <div className="text-xs font-medium text-gray-900 mb-1">Power Drill Available</div>
              <div className="text-xs text-gray-600 mb-2">0.8 miles away • Until Sunday</div>

              <button className="w-full bg-green-500 text-white text-xs py-1.5 rounded-lg">
                Borrow Now
              </button>
            </motion.div>

            {/* Floating Background Elements */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-20 right-2 w-16 h-16 bg-gradient-to-r from-mint-200 to-lavender-200 rounded-full opacity-30 blur-sm"
            />

            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 0.8, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-32 left-2 w-12 h-12 bg-gradient-to-r from-lavender-200 to-mint-200 rounded-full opacity-40 blur-sm"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
