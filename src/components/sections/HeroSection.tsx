'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import SharebeezLogo from '../ui/SharebeezLogo';

const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('who-we-are');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-teal-300 to-purple-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full blur-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white rounded-full blur-xl"></div>
      </div>

      {/* Platform UI Mockups */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mobile App Mockup - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -15 }}
          animate={{ opacity: 0.9, x: 0, rotate: -12 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute top-28 left-4 lg:left-8"
        >
          <div className="w-64 h-96 bg-white rounded-3xl shadow-2xl border-8 border-gray-200 overflow-hidden">
            {/* Phone Status Bar */}
            <div className="bg-gray-900 h-8 flex items-center justify-center">
              <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
            </div>

            {/* App Header */}
            <div className="bg-gradient-mint-lavender p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  </div>
                  <span className="font-bold text-sm">My Hive</span>
                </div>
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="p-4 space-y-3">
              {/* Active Group Purchase */}
              <div className="bg-mint-50 rounded-xl p-3 border border-mint-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-mint-700">ACTIVE</span>
                  <span className="text-xs text-gray-500">2 days left</span>
                </div>
                <h4 className="font-bold text-sm text-gray-900 mb-1">Organic Rice Bulk Order</h4>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">12/15 people joined</span>
                  <span className="text-xs font-bold text-green-600">Save 35%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                  <div className="bg-mint-500 h-1.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>

              {/* Community Members */}
              <div className="space-y-2">
                <h5 className="text-xs font-semibold text-gray-700">RECENT ACTIVITY</h5>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-lavender-400 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">S</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-900">Sarah joined rice order</p>
                    <p className="text-xs text-gray-500">2 min ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-mint-400 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">M</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-900">Mike shared power drill</p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Desktop Dashboard Mockup - Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 8 }}
          animate={{ opacity: 0.8, x: 0, rotate: 5 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute top-32 right-4 lg:right-8 hidden lg:block"
        >
          <div className="w-80 h-64 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Browser Header */}
            <div className="bg-gray-100 h-8 flex items-center px-4 space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 bg-white rounded-md h-4 flex items-center px-2">
                <span className="text-xs text-gray-500">sharebeez.com/dashboard</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-sm text-gray-900">Community Dashboard</h3>
                <div className="w-6 h-6 bg-gradient-mint-lavender rounded-lg"></div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-mint-50 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-mint-600">$2,340</div>
                  <div className="text-xs text-gray-600">Saved</div>
                </div>
                <div className="bg-lavender-50 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-lavender-600">24</div>
                  <div className="text-xs text-gray-600">Orders</div>
                </div>
                <div className="bg-green-50 rounded-lg p-2 text-center">
                  <div className="text-lg font-bold text-green-600">156</div>
                  <div className="text-xs text-gray-600">Members</div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-mint-400 rounded"></div>
                    <span className="text-xs font-medium">Bulk Groceries</span>
                  </div>
                  <span className="text-xs text-green-600 font-bold">-40%</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-lavender-400 rounded"></div>
                    <span className="text-xs font-medium">Tool Sharing</span>
                  </div>
                  <span className="text-xs text-blue-600 font-bold">Active</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Notification Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-16 right-8 lg:right-16 hidden md:block"
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 max-w-sm">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-mint-lavender rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">🎉</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">New savings unlocked!</p>
                <p className="text-gray-600 text-xs">Your community saved $1,200 this month</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hexagonal Pattern Elements */}
        <div className="absolute bottom-20 left-8 lg:left-16 opacity-5">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                className="w-8 h-8 bg-white transform rotate-45"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container-custom py-6" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4"
          >
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/20">
              <div className="h-12 aspect-square">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sharebeez bee logo">
                  {/* Enhanced Bee Body with Gradient */}
                  <defs>
                    <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1f2937" />
                      <stop offset="100%" stopColor="#374151" />
                    </linearGradient>
                    <linearGradient id="stripeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                    <linearGradient id="wingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(94, 234, 212, 0.9)" />
                      <stop offset="100%" stopColor="rgba(94, 234, 212, 0.6)" />
                    </linearGradient>
                    <linearGradient id="wingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(216, 180, 254, 0.9)" />
                      <stop offset="100%" stopColor="rgba(216, 180, 254, 0.6)" />
                    </linearGradient>
                  </defs>

                  {/* Main bee body */}
                  <ellipse cx="50" cy="55" rx="18" ry="25" fill="url(#bodyGradient)" className="drop-shadow-sm"></ellipse>

                  {/* Bee stripes with gradient */}
                  <ellipse cx="50" cy="45" rx="16" ry="3" fill="url(#stripeGradient)"></ellipse>
                  <ellipse cx="50" cy="55" rx="16" ry="3" fill="url(#stripeGradient)"></ellipse>
                  <ellipse cx="50" cy="65" rx="16" ry="3" fill="url(#stripeGradient)"></ellipse>

                  {/* Wings with enhanced gradients */}
                  <ellipse cx="35" cy="40" rx="12" ry="18" fill="url(#wingGradient1)" className="animate-bounce-gentle" style={{transformOrigin: '35px 58px'}}></ellipse>
                  <ellipse cx="65" cy="40" rx="12" ry="18" fill="url(#wingGradient2)" className="animate-bounce-gentle" style={{transformOrigin: '65px 58px', animationDelay: '0.1s'}}></ellipse>

                  {/* Wing highlights */}
                  <ellipse cx="35" cy="35" rx="8" ry="12" fill="rgba(255, 255, 255, 0.3)"></ellipse>
                  <ellipse cx="65" cy="35" rx="8" ry="12" fill="rgba(255, 255, 255, 0.3)"></ellipse>

                  {/* Antennae */}
                  <circle cx="45" cy="25" r="2.5" fill="#1f2937"></circle>
                  <circle cx="55" cy="25" r="2.5" fill="#1f2937"></circle>
                  <line x1="45" y1="27" x2="47" y2="32" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round"></line>
                  <line x1="55" y1="27" x2="53" y2="32" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round"></line>

                  {/* Eyes with shine */}
                  <circle cx="45" cy="35" r="4" fill="white"></circle>
                  <circle cx="55" cy="35" r="4" fill="white"></circle>
                  <circle cx="45" cy="35" r="2" fill="#1f2937"></circle>
                  <circle cx="55" cy="35" r="2" fill="#1f2937"></circle>
                  <circle cx="46" cy="34" r="0.8" fill="white"></circle>
                  <circle cx="56" cy="34" r="0.8" fill="white"></circle>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1">
                  <span className="font-black text-white text-2xl tracking-tight">Share</span>
                  <span className="font-black text-yellow-300 text-2xl tracking-tight">beez</span>
                  <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                </div>
                <span className="text-xs text-white/80 font-medium leading-tight tracking-wide">
                  Buy Together. Save Together. Share Smarter.
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a
              href="#who-we-are"
              className="text-white hover:text-white/80 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2 py-1"
              aria-label="Learn about who we are"
            >
              Who We Are
            </a>
            <a
              href="#user-types"
              className="text-white hover:text-white/80 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2 py-1"
              aria-label="See who Sharebeez is for"
            >
              For You
            </a>
            <a
              href="#features"
              className="text-white hover:text-white/80 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2 py-1"
              aria-label="Explore our features"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-white hover:text-white/80 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2 py-1"
              aria-label="Learn how Sharebeez works"
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="text-white hover:text-white/80 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2 py-1"
              aria-label="View frequently asked questions"
            >
              FAQ
            </a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container-custom flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Buy Together.{' '}
              <span className="block">Save Together.</span>{' '}
              <span className="block">Share Smarter.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Empowering communities to lower costs by buying, selling, and sharing products and services — all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/waitlist">
              <button
                className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
                aria-label="Join the waitlist to be notified when we launch"
              >
                Join the Waitlist
              </button>
            </Link>
            <button
              className="bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-xl border-2 border-white/20 hover:bg-white/20 hover:shadow-xl transition-all duration-300 text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Learn how Sharebeez works"
            >
              Explore How It Works
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors group"
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
