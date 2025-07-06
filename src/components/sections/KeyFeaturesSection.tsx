'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, ShoppingBag, Share2, Calendar, Truck, Plus, Heart, MessageCircle, Star, MapPin, Clock, DollarSign, TrendingUp, Leaf, Search, Filter, Check } from 'lucide-react';
import Link from 'next/link';

const KeyFeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [notifications, setNotifications] = useState(3);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showFeaturePanel, setShowFeaturePanel] = useState(false);
  const [platformPosition, setPlatformPosition] = useState({ x: 0, y: 0, rotation: 0 });
  const [panelPosition, setPanelPosition] = useState({ side: 'right', x: 0, y: 0 });

  const features = [
    {
      id: 'dashboard',
      icon: <Users className="w-5 h-5" />,
      title: "AI Analytics Dashboard",
      description: "Intelligent community insights",
      fullDescription: "Get AI-powered insights into your community impact, savings, and activities. Smart analytics track your contributions and provide personalized recommendations for maximizing your community benefits.",
      benefits: ["AI-powered insights", "Predictive analytics", "Personalized recommendations", "Smart performance tracking", "Community growth metrics"]
    },
    {
      id: 'hives',
      icon: <Heart className="w-5 h-5" />,
      title: "My Hives",
      description: "Community group management",
      fullDescription: "Manage your community groups with intelligent organization tools. AI helps optimize group dynamics, suggests new members, and facilitates smooth coordination for all your shared activities.",
      benefits: ["Smart group matching", "Automated coordination", "Member recommendations", "Activity optimization", "Conflict resolution"]
    },
    {
      id: 'marketplace',
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Smart Marketplace",
      description: "AI-optimized buying & selling",
      fullDescription: "Experience intelligent commerce with AI-powered deal optimization, smart pricing suggestions, and personalized recommendations that help you save more and sell better.",
      benefits: ["Dynamic pricing", "Smart recommendations", "Deal optimization", "Fraud detection", "Market insights"]
    },
    {
      id: 'sharing',
      icon: <Share2 className="w-5 h-5" />,
      title: "Resource Sharing",
      description: "Community asset optimization",
      fullDescription: "Maximize community resources with AI-driven sharing recommendations. Smart algorithms match available resources with community needs, reducing waste and increasing accessibility.",
      benefits: ["Resource matching", "Usage optimization", "Availability tracking", "Smart scheduling", "Impact measurement"]
    },
    {
      id: 'events',
      icon: <Calendar className="w-5 h-5" />,
      title: "Event Coordination",
      description: "Smart community planning",
      fullDescription: "Plan and coordinate community events with AI assistance. Get intelligent suggestions for timing, venues, and activities based on community preferences and availability patterns.",
      benefits: ["Smart scheduling", "Venue optimization", "Attendance prediction", "Activity suggestions", "Resource planning"]
    },
    {
      id: 'delivery',
      icon: <Truck className="w-5 h-5" />,
      title: "Delivery Network",
      description: "Optimized logistics system",
      fullDescription: "Efficient delivery coordination with AI-powered route optimization and smart matching between drivers and delivery needs. Reduce costs and environmental impact through intelligent logistics.",
      benefits: ["Route optimization", "Driver matching", "Cost reduction", "Environmental impact", "Real-time tracking"]
    },
    {
      id: 'chat',
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Community Chat",
      description: "Enhanced communication hub",
      fullDescription: "Stay connected with your community through AI-enhanced messaging. Smart moderation, translation services, and intelligent notifications keep conversations productive and inclusive.",
      benefits: ["Smart moderation", "Real-time translation", "Intelligent notifications", "Conversation insights", "Safety monitoring"]
    }
  ];

  const marketplaceItems = [
    {
      id: 1,
      name: "Organic Raw Honey - Local Harvest",
      price: "$12.99",
      originalPrice: "$18.99",
      savings: "32% off",
      seller: "Sarah's Apiary",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=100&h=100&fit=crop&crop=center",
      category: "Food & Beverages",
      location: "2.3 miles away",
      inStock: 15,
      groupBuy: true,
      minOrder: 5,
      currentOrders: 8,
      verified: true,
      organic: true
    },
    {
      id: 2,
      name: "DeWalt 20V MAX Cordless Drill Kit",
      price: "$89.99",
      originalPrice: "$129.99",
      savings: "31% off",
      seller: "Mike's Tools",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=100&h=100&fit=crop&crop=center",
      category: "Tools & Hardware",
      location: "1.8 miles away",
      inStock: 3,
      groupBuy: false,
      verified: true,
      condition: "Like New"
    },
    {
      id: 3,
      name: "Organic Vegetable CSA Box",
      price: "$24.99",
      originalPrice: "$34.99",
      savings: "29% off",
      seller: "Green Valley Farm",
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=100&h=100&fit=crop&crop=center",
      category: "Food & Beverages",
      location: "3.1 miles away",
      inStock: 25,
      groupBuy: true,
      minOrder: 10,
      currentOrders: 12,
      verified: true,
      organic: true,
      nextDelivery: "This Friday"
    }
  ];

  const hiveData = [
    {
      id: 1,
      name: "🏡 Maple Street Neighbors",
      lastMessage: "New bulk order for organic rice - 40% savings!",
      lastSender: "Emma Wilson",
      timestamp: "5 min ago",
      unread: 2,
      members: 24,
      type: "neighborhood",
      pinned: true
    },
    {
      id: 2,
      name: "🌱 Eco Warriors",
      lastMessage: "Composting workshop this Saturday at 2 PM",
      lastSender: "David Chen",
      timestamp: "1 hour ago",
      unread: 0,
      members: 156,
      type: "interest",
      pinned: false
    },
    {
      id: 3,
      name: "👨‍👩‍👧‍👦 Parent Network",
      lastMessage: "Babysitting exchange schedule updated",
      lastSender: "Maria Rodriguez",
      timestamp: "2 hours ago",
      unread: 1,
      members: 89,
      type: "family",
      pinned: true
    },
    {
      id: 4,
      name: "🔧 Tool Library",
      lastMessage: "Lawn mower available for weekend borrowing",
      lastSender: "John Smith",
      timestamp: "4 hours ago",
      unread: 0,
      members: 67,
      type: "sharing",
      pinned: false
    },
    {
      id: 5,
      name: "🌱 Green Valley Co-op",
      lastMessage: "New member welcome! Please introduce yourself",
      lastSender: "Lisa Kumar",
      timestamp: "3 hours ago",
      unread: 0,
      members: 31,
      type: "community",
      pinned: false
    }
  ];

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setNotifications(notifications + 1);
  };

  const handleTabSwitch = (tabId) => {
    setActiveTab(tabId);
    setShowFeaturePanel(true);

    // Move platform to side and position feature panel alongside
    const configurations = {
      dashboard: {
        platform: { x: -200, y: 0, rotation: -2, scale: 0.85 },
        panel: { side: 'right', x: 50, y: 0 }
      },
      hives: {
        platform: { x: 200, y: -10, rotation: 2, scale: 0.85 },
        panel: { side: 'left', x: -50, y: 0 }
      },
      marketplace: {
        platform: { x: -200, y: 15, rotation: -2, scale: 0.85 },
        panel: { side: 'right', x: 50, y: 0 }
      },
      sharing: {
        platform: { x: 200, y: -20, rotation: 2, scale: 0.85 },
        panel: { side: 'left', x: -50, y: 0 }
      },
      events: {
        platform: { x: -200, y: 25, rotation: -2, scale: 0.85 },
        panel: { side: 'right', x: 50, y: 0 }
      },
      delivery: {
        platform: { x: 200, y: 10, rotation: 2, scale: 0.85 },
        panel: { side: 'left', x: -50, y: 0 }
      },
      chat: {
        platform: { x: -200, y: -15, rotation: -2, scale: 0.85 },
        panel: { side: 'right', x: 50, y: 0 }
      }
    };

    const config = configurations[tabId] || configurations.dashboard;
    setPlatformPosition(config.platform);
    setPanelPosition(config.panel);
  };

  return (
    <section id="features" className="min-h-screen py-8 lg:py-16 bg-gradient-to-br from-teal-300 to-purple-300 relative overflow-hidden" ref={ref}>
      {/* Enhanced Organic Background Elements */}
      <div className="absolute inset-0 opacity-15">
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
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 8, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-white rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 35, 0],
            rotate: [0, -6, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-white rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-mint-500 to-lavender-500 bg-clip-text text-transparent">
              See Sharebeez
            </span>
            <span className="block text-gray-900">In Action</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the future of community commerce. Click on any feature to see how our platform transforms the way neighbors connect, share, and save together.
          </p>
        </motion.div>

        {/* Feature Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {features.map((feature, index) => (
            <motion.button
              key={feature.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => handleTabSwitch(feature.id)}
              className={`group relative flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === feature.id
                  ? 'bg-white text-gray-900 shadow-lg ring-2 ring-mint-300'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/20'
              }`}
            >
              <span className={`transition-colors duration-300 ${
                activeTab === feature.id ? 'text-mint-600' : 'text-white'
              }`}>
                {feature.icon}
              </span>
              <span className="text-sm">{feature.title}</span>

              {/* Active indicator */}
              {activeTab === feature.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-xl shadow-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Platform Demo Area */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex justify-center items-center min-h-[700px] relative">

            {/* Interactive Platform Interface */}
            <motion.div
              animate={{
                x: platformPosition.x,
                y: platformPosition.y,
                rotate: platformPosition.rotation,
                scale: platformPosition.scale || 1
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative z-20"
            >
              <div className="w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-300 overflow-hidden backdrop-blur-sm">
                {/* Browser Header */}
                <div className="bg-gray-100 h-8 flex items-center px-3 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded-md h-5 flex items-center px-2 ml-4">
                      <span className="text-xs text-gray-600">sharebeez.com/dashboard</span>
                    </div>
                  </div>
                </div>

                {/* App Navigation Header */}
                <div className="bg-white border-b border-gray-200 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-mint-500 to-lavender-500 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-white">🐝</span>
                      </div>
                      <div>
                        <span className="font-bold text-lg text-gray-900">Sharebeez</span>
                        <div className="text-xs text-gray-500">Community Platform</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <MessageCircle className="w-4 h-4 text-gray-600" />
                        </div>
                        {notifications > 0 && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-bold">{notifications}</span>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="w-8 h-8 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-mint-300 transition-colors"
                      >
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="bg-white border-b border-gray-200 px-4">
                  <div className="flex space-x-6">
                    {features.slice(0, 4).map((feature) => (
                      <button
                        key={feature.id}
                        onClick={() => handleTabSwitch(feature.id)}
                        className={`py-3 text-sm font-medium border-b-2 transition-colors ${
                          activeTab === feature.id
                            ? 'border-mint-500 text-mint-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {feature.title.split(' ')[0]}
                      </button>
                    ))}
                    <div className="flex-1"></div>
                    <button className="py-3 text-sm text-gray-400">
                      <span className="text-xs">More</span>
                    </button>
                  </div>
                </div>

                {/* Dynamic Content Based on Active Tab */}
                <div className="p-4 h-[480px] bg-gray-50">
                  {activeTab === 'dashboard' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg text-gray-900">Dashboard</h3>
                        <div className="text-xs text-gray-500">Last updated: 2 min ago</div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <DollarSign className="w-4 h-4 text-green-600" />
                            </div>
                            <div>
                              <div className="text-xl font-bold text-green-600">$2,847</div>
                              <div className="text-xs text-gray-600">Total Saved</div>
                            </div>
                          </div>
                          <div className="text-xs text-green-600 font-medium">+$127 this week</div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                          <div className="flex items-center space-x-2 mb-1">
                            <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                              <ShoppingBag className="w-3 h-3 text-blue-600" />
                            </div>
                            <div>
                              <div className="text-lg font-bold text-blue-600">28</div>
                              <div className="text-xs text-gray-600">Active Orders</div>
                            </div>
                          </div>
                          <div className="text-xs text-blue-600 font-medium">3 arriving today</div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                          <div className="flex items-center space-x-2 mb-1">
                            <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                              <Users className="w-3 h-3 text-purple-600" />
                            </div>
                            <div>
                              <div className="text-lg font-bold text-purple-600">4</div>
                              <div className="text-xs text-gray-600">My Hives</div>
                            </div>
                          </div>
                          <div className="text-xs text-purple-600 font-medium">2 new invites</div>
                        </div>

                        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                          <div className="flex items-center space-x-2 mb-1">
                            <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center">
                              <Heart className="w-3 h-3 text-orange-600" />
                            </div>
                            <div>
                              <div className="text-lg font-bold text-orange-600">89%</div>
                              <div className="text-xs text-gray-600">Impact Score</div>
                            </div>
                          </div>
                          <div className="text-xs text-orange-600 font-medium">Top 10% locally</div>
                        </div>
                      </div>

                      {/* AI Insights */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 flex items-center space-x-2">
                          <div className="w-3 h-3 bg-gradient-to-r from-mint-500 to-lavender-500 rounded-full"></div>
                          <span>AI Insights</span>
                        </h4>

                        <div className="bg-white rounded-lg p-3 border border-blue-200 shadow-sm">
                          <div className="flex items-start space-x-2">
                            <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <TrendingUp className="w-3 h-3 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-medium text-gray-900 mb-1">Smart Opportunity</div>
                              <p className="text-xs text-gray-600 mb-2">Join the organic rice bulk order to save $18. Only 2 spots left!</p>
                              <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Join Now</button>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 border border-green-200 shadow-sm">
                          <div className="flex items-start space-x-2">
                            <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Leaf className="w-3 h-3 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-xs font-medium text-gray-900 mb-1">Environmental Impact</div>
                              <p className="text-xs text-gray-600 mb-1">Prevented 23kg CO₂ emissions this month!</p>
                              <div className="text-xs text-green-600 font-medium">+15% vs last month</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'hives' && (
                    <div className="space-y-3">
                      <h3 className="font-bold text-sm text-gray-900 mb-3">My Hives</h3>

                      {hiveData.slice(0, 4).map((hive) => (
                        <div key={hive.id} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium text-gray-900">{hive.name}</span>
                              {hive.pinned && <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>}
                            </div>
                            <div className="flex items-center space-x-1">
                              <span className="text-xs text-gray-500">{hive.members}</span>
                              <Users className="w-3 h-3 text-gray-400" />
                            </div>
                          </div>

                          <p className="text-xs text-gray-600 mb-1">{hive.lastMessage}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">{hive.lastSender}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-400">{hive.timestamp}</span>
                              {hive.unread > 0 && (
                                <div className="w-4 h-4 bg-mint-500 rounded-full flex items-center justify-center">
                                  <span className="text-xs text-white font-bold">{hive.unread}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'marketplace' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg text-gray-900">Marketplace</h3>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gray-200 rounded-lg flex items-center justify-center">
                            <Search className="w-3 h-3 text-gray-600" />
                          </div>
                          <div className="w-6 h-6 bg-gray-200 rounded-lg flex items-center justify-center">
                            <Filter className="w-3 h-3 text-gray-600" />
                          </div>
                        </div>
                      </div>

                      {/* Featured Deal Banner */}
                      <div className="bg-gradient-to-r from-mint-500 to-emerald-500 rounded-xl p-4 text-white mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-bold">🔥 Hot Deal</div>
                            <div className="text-xs opacity-90">Bulk organic rice - 40% off</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs opacity-90">Ends in</div>
                            <div className="text-sm font-bold">2h 15m</div>
                          </div>
                        </div>
                      </div>

                      {marketplaceItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                          <div className="flex items-start space-x-3">
                            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className="text-sm font-semibold text-gray-900 leading-tight">{item.name}</h4>
                                {item.verified && (
                                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 ml-2">
                                    <Check className="w-2 h-2 text-white" />
                                  </div>
                                )}
                              </div>

                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-lg font-bold text-green-600">{item.price}</span>
                                <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{item.savings}</span>
                              </div>

                              <div className="flex items-center space-x-3 mb-2">
                                <div className="flex items-center space-x-1">
                                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                  <span className="text-xs text-gray-600 font-medium">{item.rating}</span>
                                  <span className="text-xs text-gray-500">({item.reviews})</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MapPin className="w-3 h-3 text-gray-400" />
                                  <span className="text-xs text-gray-500">{item.location}</span>
                                </div>
                              </div>

                              <div className="flex items-center space-x-2 mb-3">
                                {item.groupBuy && (
                                  <span className="text-xs bg-mint-100 text-mint-700 px-2 py-1 rounded-lg font-medium">
                                    Group Buy: {item.currentOrders}/{item.minOrder}
                                  </span>
                                )}
                                {item.organic && (
                                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-lg font-medium">Organic</span>
                                )}
                                {item.condition && (
                                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-lg font-medium">{item.condition}</span>
                                )}
                              </div>

                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => addToCart(item)}
                                  className="flex-1 bg-mint-500 text-white text-sm py-2 px-3 rounded-lg hover:bg-mint-600 transition-colors font-medium"
                                >
                                  Add to Cart
                                </button>
                                <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                                  <Heart className="w-4 h-4 text-gray-600" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'sharing' && (
                    <div className="space-y-3">
                      <h3 className="font-bold text-sm text-gray-900 mb-3">Resource Sharing</h3>

                      <div className="bg-mint-50 rounded-lg p-3 border border-mint-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-mint-700">AVAILABLE NOW</span>
                          <span className="text-xs text-gray-500">0.8 miles</span>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900 mb-1">🔧 Power Drill Set</h4>
                        <p className="text-xs text-gray-600 mb-2">Professional grade, perfect for home projects</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">Available until Sunday</span>
                          <button className="text-xs bg-mint-500 text-white px-3 py-1 rounded-lg">Borrow</button>
                        </div>
                      </div>

                      <div className="bg-lavender-50 rounded-lg p-3 border border-lavender-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-lavender-700">REQUESTED</span>
                          <span className="text-xs text-gray-500">Community</span>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900 mb-1">🚗 Car Seat (Toddler)</h4>
                        <p className="text-xs text-gray-600 mb-2">Needed for weekend trip, 2-3 days</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">3 people can help</span>
                          <button className="text-xs bg-lavender-500 text-white px-3 py-1 rounded-lg">Offer</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'events' && (
                    <div className="space-y-3">
                      <h3 className="font-bold text-sm text-gray-900 mb-3">Community Events</h3>

                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-blue-700">THIS WEEKEND</span>
                          <span className="text-xs text-gray-500">Sat 2 PM</span>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900 mb-1">🌱 Community Garden Workshop</h4>
                        <p className="text-xs text-gray-600 mb-2">Learn composting and sustainable gardening</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">12 attending</span>
                          <button className="text-xs bg-blue-500 text-white px-3 py-1 rounded-lg">Join</button>
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-green-700">NEXT WEEK</span>
                          <span className="text-xs text-gray-500">Wed 7 PM</span>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900 mb-1">🍕 Neighborhood Potluck</h4>
                        <p className="text-xs text-gray-600 mb-2">Bring a dish, meet your neighbors!</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">8 attending</span>
                          <button className="text-xs bg-green-500 text-white px-3 py-1 rounded-lg">RSVP</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'delivery' && (
                    <div className="space-y-3">
                      <h3 className="font-bold text-sm text-gray-900 mb-3">Delivery Network</h3>

                      <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-orange-700">ACTIVE DELIVERY</span>
                          <span className="text-xs text-gray-500">ETA 15 min</span>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900 mb-1">📦 Grocery Order #1247</h4>
                        <p className="text-xs text-gray-600 mb-2">Driver: Mike Chen • Honda Civic</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">3 stops remaining</span>
                          <button className="text-xs bg-orange-500 text-white px-3 py-1 rounded-lg">Track</button>
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-purple-700">EARN OPPORTUNITY</span>
                          <span className="text-xs text-gray-500">$12-18</span>
                        </div>
                        <h4 className="font-bold text-sm text-gray-900 mb-1">🚗 Weekend Delivery Route</h4>
                        <p className="text-xs text-gray-600 mb-2">5 deliveries, 8 miles total, 2 hours</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">Perfect for your area</span>
                          <button className="text-xs bg-purple-500 text-white px-3 py-1 rounded-lg">Accept</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'chat' && (
                    <div className="space-y-3">
                      <h3 className="font-bold text-sm text-gray-900 mb-3">Community Chat</h3>

                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <div className="w-6 h-6 bg-mint-400 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-bold">S</span>
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-100 rounded-lg p-2">
                              <p className="text-xs text-gray-900">Hey everyone! The bulk rice order is almost ready. We need 3 more people to get the best price 🌾</p>
                            </div>
                            <span className="text-xs text-gray-500">Sarah • 2 min ago</span>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <div className="w-6 h-6 bg-lavender-400 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-bold">M</span>
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-100 rounded-lg p-2">
                              <p className="text-xs text-gray-900">Count me in! How much per bag?</p>
                            </div>
                            <span className="text-xs text-gray-500">Mike • 1 min ago</span>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2 justify-end">
                          <div className="flex-1 text-right">
                            <div className="bg-mint-500 text-white rounded-lg p-2 inline-block">
                              <p className="text-xs">$8 per 5kg bag, down from $12! 🎉</p>
                            </div>
                            <span className="text-xs text-gray-500 block">You • now</span>
                          </div>
                          <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-bold">Y</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-gray-200">
                        <input
                          type="text"
                          placeholder="Type a message..."
                          className="flex-1 text-xs bg-gray-100 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mint-300"
                        />
                        <button className="w-8 h-8 bg-mint-500 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs">→</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Feature Description Panel */}
            {showFeaturePanel && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: panelPosition.side === 'right' ? 50 : -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className={`absolute top-16 z-30 w-80 ${
                  panelPosition.side === 'right' ? 'left-[500px]' : 'right-[500px]'
                }`}
                style={{
                  transform: `translate(${panelPosition.x}px, ${panelPosition.y}px)`
                }}
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 backdrop-blur-sm">
                  {(() => {
                    const feature = features.find(f => f.id === activeTab);
                    return (
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-mint-500 to-lavender-500 rounded-xl flex items-center justify-center">
                            {feature?.icon}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{feature?.title}</h3>
                            <p className="text-sm text-gray-600">{feature?.description}</p>
                          </div>
                        </div>

                        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                          {feature?.fullDescription}
                        </p>

                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Key Benefits</h4>
                          {feature?.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-mint-500 to-lavender-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-600">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <Link href="/waitlist">
                          <button
                            onClick={() => setShowFeaturePanel(false)}
                            className="mt-4 w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
                          >
                            Join the Waitlist
                          </button>
                        </Link>
                      </div>
                    );
                  })()}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the Future of Community Commerce?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of communities already saving money, reducing waste, and building stronger connections through AI-powered collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/waitlist">
                <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Join the Waitlist
                </button>
              </Link>
              <button className="bg-white/10 backdrop-blur-sm text-gray-900 font-semibold py-3 px-8 rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300">
                Explore More Features
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
