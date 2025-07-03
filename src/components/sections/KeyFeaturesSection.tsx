'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, ShoppingBag, Share2, Calendar, Truck, Plus, Heart, MessageCircle, Star, MapPin, Clock } from 'lucide-react';

const KeyFeaturesSection: React.FC = () => {
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
      description: "Community networks",
      fullDescription: "Discover and join local community hives based on your neighborhood, interests, or needs. Each hive is a micro-community focused on collaboration and mutual support.",
      benefits: ["Join multiple communities", "Location-based matching", "Interest-based groups", "Verified neighbor networks"]
    },
    {
      id: 'marketplace',
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "AI-Powered Marketplace",
      description: "Smart deals with AI optimization",
      fullDescription: "Experience intelligent deal suggestions, auto-generated descriptions, and dynamic pricing optimization. Our AI analyzes your preferences and behavior to suggest perfect deals while helping sellers optimize their listings.",
      benefits: ["AI deal recommendations", "Smart pricing optimization", "Auto-generated descriptions", "Trending deal alerts", "Boost suggestions"]
    },
    {
      id: 'sharing',
      icon: <Share2 className="w-5 h-5" />,
      title: "Share Hub",
      description: "Tools & equipment rental",
      fullDescription: "Borrow and lend tools, equipment, and household items within your community. Why buy when you can share? Reduce waste and save money.",
      benefits: ["Tool library access", "Peer-to-peer rentals", "Verified owner ratings", "Local pickup & delivery"]
    },
    {
      id: 'events',
      icon: <Calendar className="w-5 h-5" />,
      title: "Events",
      description: "Community gatherings",
      fullDescription: "Organize and participate in community events, workshops, and social gatherings. Build stronger connections while sharing costs and resources.",
      benefits: ["Event coordination tools", "RSVP management", "Cost sharing features", "Community building"]
    },
    {
      id: 'delivery',
      icon: <Truck className="w-5 h-5" />,
      title: "Smart Delivery Network",
      description: "AI-matched local logistics",
      fullDescription: "AI-powered driver matching creates an efficient neighbor-to-neighbor delivery network. Smart routing and automated matching optimize delivery times while maximizing earnings for drivers.",
      benefits: ["AI driver matching", "Smart route optimization", "Automated scheduling", "Dynamic pricing", "Predictive demand mapping"]
    },
    {
      id: 'chat',
      icon: <MessageCircle className="w-5 h-5" />,
      title: "BeeGuardian AI Chat",
      description: "Safe, smart communication",
      fullDescription: "Stay connected with AI-powered safety and guidance. BeeGuardian monitors conversations, provides helpful tips, and ensures a positive community experience while protecting against scams and abuse.",
      benefits: ["Real-time AI moderation", "Scam protection", "Personalized guidance", "Badge & karma system", "Community safety"]
    }
  ];

  // Dashboard Data
  const dashboardStats = {
    totalSavings: "$2,847",
    monthlyOrders: 12,
    itemsShared: 8,
    carbonSaved: "156 lbs CO₂"
  };

  const recentActivity = [
    { type: "order", text: "Joined bulk rice order", time: "2 hours ago", icon: "🌾" },
    { type: "share", text: "Borrowed ladder from Lisa", time: "1 day ago", icon: "🪜" },
    { type: "event", text: "RSVP'd to community BBQ", time: "2 days ago", icon: "🎉" },
    { type: "delivery", text: "Delivered groceries for Tom", time: "3 days ago", icon: "📦" }
  ];

  const activeHives = [
    { name: "Sunset Gardens", members: 47, savings: "$12,450", status: "Very Active", avatar: "🏡", color: "from-green-400 to-green-600" },
    { name: "Downtown Families", members: 23, savings: "$8,200", status: "Active", avatar: "👨‍👩‍👧‍👦", color: "from-blue-400 to-blue-600" },
    { name: "Green Valley Co-op", members: 31, savings: "$15,600", status: "Growing", avatar: "🌱", color: "from-mint-400 to-mint-600" }
  ];

  // Comprehensive Hives Data
  const allHives = [
    {
      id: 1,
      name: "Sunset Gardens",
      description: "Family-friendly neighborhood focused on sustainable living",
      members: 47,
      totalSavings: "$12,450",
      monthlyOrders: 23,
      status: "Very Active",
      avatar: "🏡",
      color: "from-green-400 to-green-600",
      location: "0.2 miles away",
      categories: ["Groceries", "Tools", "Events"],
      recentActivity: "Bulk rice order completed",
      joinedDate: "Member since Jan 2024",
      isJoined: true
    },
    {
      id: 2,
      name: "Downtown Families",
      description: "Urban families sharing resources and building community",
      members: 23,
      totalSavings: "$8,200",
      monthlyOrders: 15,
      status: "Active",
      avatar: "👨‍👩‍👧‍👦",
      color: "from-blue-400 to-blue-600",
      location: "0.8 miles away",
      categories: ["Childcare", "Groceries", "Events"],
      recentActivity: "Playground cleanup organized",
      joinedDate: "Member since Feb 2024",
      isJoined: true
    },
    {
      id: 3,
      name: "Green Valley Co-op",
      description: "Eco-conscious community promoting environmental sustainability",
      members: 31,
      totalSavings: "$15,600",
      monthlyOrders: 19,
      status: "Growing",
      avatar: "🌱",
      color: "from-mint-400 to-mint-600",
      location: "1.2 miles away",
      categories: ["Organic Foods", "Garden Tools", "Workshops"],
      recentActivity: "Composting workshop scheduled",
      joinedDate: "Member since Mar 2024",
      isJoined: true
    },
    {
      id: 4,
      name: "Tech Professionals Hub",
      description: "Working professionals sharing resources and networking",
      members: 18,
      totalSavings: "$5,400",
      monthlyOrders: 8,
      status: "New",
      avatar: "💻",
      color: "from-purple-400 to-purple-600",
      location: "0.5 miles away",
      categories: ["Office Supplies", "Electronics", "Networking"],
      recentActivity: "Coffee bulk order starting",
      joinedDate: "Available to join",
      isJoined: false
    },
    {
      id: 5,
      name: "Senior Community Circle",
      description: "Mature adults supporting each other with daily needs",
      members: 29,
      totalSavings: "$9,800",
      monthlyOrders: 12,
      status: "Established",
      avatar: "👴",
      color: "from-orange-400 to-orange-600",
      location: "0.7 miles away",
      categories: ["Healthcare", "Groceries", "Transportation"],
      recentActivity: "Medication delivery network active",
      joinedDate: "Available to join",
      isJoined: false
    },
    {
      id: 6,
      name: "Student Housing Collective",
      description: "College students and young professionals sharing resources",
      members: 34,
      totalSavings: "$7,200",
      monthlyOrders: 21,
      status: "Very Active",
      avatar: "🎓",
      color: "from-teal-400 to-teal-600",
      location: "1.5 miles away",
      categories: ["Textbooks", "Groceries", "Furniture"],
      recentActivity: "Textbook exchange event",
      joinedDate: "Available to join",
      isJoined: false
    }
  ];

  // Comprehensive Marketplace Data
  const marketplaceItems = [
    {
      id: 1,
      title: "Organic Bulk Rice - 25lb Bags",
      price: 45,
      originalPrice: 65,
      participants: 8,
      needed: 12,
      savings: 31,
      timeLeft: "2 days",
      organizer: "Sarah Martinez",
      organizerAvatar: "👩‍🌾",
      image: "🌾",
      category: "Groceries",
      description: "Premium organic jasmine rice, direct from farm",
      location: "Whole Foods Pickup",
      status: "active",
      aiFeatures: {
        trending: true,
        aiOptimized: true,
        smartSuggestion: "Perfect for your family size!",
        boostRecommended: false,
        priceOptimal: true
      }
    },
    {
      id: 2,
      title: "Premium Olive Oil - 6 Bottle Case",
      price: 89,
      originalPrice: 120,
      participants: 5,
      needed: 8,
      savings: 26,
      timeLeft: "5 days",
      organizer: "Mike Rodriguez",
      organizerAvatar: "👨‍🍳",
      image: "🫒",
      category: "Pantry",
      description: "Extra virgin olive oil from local producer",
      location: "Community Center",
      status: "active",
      aiFeatures: {
        trending: false,
        aiOptimized: true,
        smartSuggestion: "Great for cooking enthusiasts!",
        boostRecommended: true,
        priceOptimal: false
      }
    },
    {
      id: 3,
      title: "Local Raw Honey - 12 Jar Set",
      price: 72,
      originalPrice: 96,
      participants: 9,
      needed: 10,
      savings: 25,
      timeLeft: "1 day",
      organizer: "Emma Liu",
      organizerAvatar: "👩‍🔬",
      image: "🍯",
      category: "Local Goods",
      description: "Wildflower honey from neighborhood beekeeper",
      location: "Farmer's Market",
      status: "almost_full",
      aiFeatures: {
        trending: true,
        aiOptimized: true,
        smartSuggestion: "Almost full - join now!",
        boostRecommended: false,
        priceOptimal: true
      }
    },
    {
      id: 4,
      title: "Eco-Friendly Cleaning Bundle",
      price: 156,
      originalPrice: 200,
      participants: 15,
      needed: 20,
      savings: 22,
      timeLeft: "3 days",
      organizer: "David Kim",
      organizerAvatar: "👨‍💼",
      image: "🧽",
      category: "Household",
      description: "Complete eco-friendly cleaning products bundle",
      location: "Green Clean Co.",
      status: "active"
    }
  ];

  // Comprehensive Sharing Hub Data
  const sharingItems = [
    {
      id: 1,
      title: "Professional Power Drill Set",
      owner: "John Davis",
      ownerAvatar: "👨‍🔧",
      price: 5,
      rating: 4.9,
      reviews: 23,
      available: true,
      distance: 0.3,
      image: "🔧",
      category: "Tools",
      description: "Complete drill set with bits and case",
      nextAvailable: "Available now",
      features: ["Variable speed", "LED light", "Carrying case", "Multiple bits"]
    },
    {
      id: 2,
      title: "8ft Extension Ladder",
      owner: "Lisa Kumar",
      ownerAvatar: "👩‍🏭",
      price: 8,
      rating: 5.0,
      reviews: 15,
      available: true,
      distance: 0.5,
      image: "🪜",
      category: "Tools",
      description: "Lightweight aluminum ladder, perfect for home projects",
      nextAvailable: "Available now",
      features: ["Aluminum construction", "250lb capacity", "Non-slip feet", "Compact storage"]
    },
    {
      id: 3,
      title: "Electric Pressure Washer",
      owner: "Tom Brown",
      ownerAvatar: "👨‍🦳",
      price: 15,
      rating: 4.8,
      reviews: 31,
      available: false,
      distance: 0.7,
      image: "💨",
      category: "Tools",
      description: "High-pressure washer for driveways and decks",
      nextAvailable: "Available March 15",
      features: ["2000 PSI", "Multiple nozzles", "Soap dispenser", "25ft hose"]
    },
    {
      id: 4,
      title: "Stand Mixer - KitchenAid",
      owner: "Maria Santos",
      ownerAvatar: "👩‍🍳",
      price: 12,
      rating: 4.9,
      reviews: 18,
      available: true,
      distance: 0.4,
      image: "🥧",
      category: "Kitchen",
      description: "Professional stand mixer for baking projects",
      nextAvailable: "Available now",
      features: ["6-quart bowl", "10 speeds", "Multiple attachments", "Tilt-head design"]
    }
  ];

  // Comprehensive Events Data
  const upcomingEvents = [
    {
      id: 1,
      title: "Community Spring BBQ",
      date: "March 15, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Sunset Gardens Park",
      organizer: "Sarah Martinez",
      organizerAvatar: "👩‍🌾",
      attendees: 47,
      maxAttendees: 60,
      image: "🎉",
      category: "Social",
      description: "Annual spring celebration with potluck and games for the whole family",
      rsvpStatus: "going",
      cost: "Free",
      whatToBring: "Side dish or dessert to share"
    },
    {
      id: 2,
      title: "Tool Library Workshop",
      date: "March 18, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Community Center",
      organizer: "John Davis",
      organizerAvatar: "👨‍🔧",
      attendees: 12,
      maxAttendees: 15,
      image: "🔧",
      category: "Educational",
      description: "Learn proper tool usage, safety, and maintenance techniques",
      rsvpStatus: "interested",
      cost: "$5 materials fee",
      whatToBring: "Notebook and any tools you'd like help with"
    },
    {
      id: 3,
      title: "Neighborhood Cleanup Day",
      date: "March 22, 2024",
      time: "9:00 AM - 1:00 PM",
      location: "Various Locations",
      organizer: "Emma Liu",
      organizerAvatar: "👩‍🔬",
      attendees: 28,
      maxAttendees: 40,
      image: "🌱",
      category: "Community Service",
      description: "Monthly neighborhood beautification and environmental care",
      rsvpStatus: null,
      cost: "Free",
      whatToBring: "Work gloves and water bottle"
    },
    {
      id: 4,
      title: "Bulk Buying Coordination Meeting",
      date: "March 25, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "Virtual + Community Center",
      organizer: "Mike Rodriguez",
      organizerAvatar: "👨‍🍳",
      attendees: 19,
      maxAttendees: 25,
      image: "🛒",
      category: "Planning",
      description: "Plan next month's bulk purchases and coordinate delivery",
      rsvpStatus: "going",
      cost: "Free",
      whatToBring: "Shopping list ideas"
    }
  ];

  // Comprehensive Delivery Network Data
  const deliveryRequests = [
    {
      id: 1,
      type: "Grocery Pickup",
      from: "Whole Foods Market",
      to: "Sunset Gardens",
      reward: 8,
      distance: 0.5,
      timeWindow: "Today 4-6 PM",
      items: "3 bags groceries",
      weight: "Light",
      requester: "Maria Santos",
      requesterAvatar: "👩‍🍳",
      status: "available",
      urgency: "normal",
      notes: "Refrigerated items included"
    },
    {
      id: 2,
      type: "Package Delivery",
      from: "UPS Store",
      to: "Downtown Apartments",
      reward: 5,
      distance: 1.2,
      timeWindow: "Tomorrow 10-12 PM",
      items: "2 small packages",
      weight: "Light",
      requester: "David Kim",
      requesterAvatar: "👨‍💼",
      status: "available",
      urgency: "low",
      notes: "Signature required"
    },
    {
      id: 3,
      type: "Farmer's Market Run",
      from: "Saturday Market",
      to: "Green Valley",
      reward: 12,
      distance: 2.1,
      timeWindow: "Saturday 8-10 AM",
      items: "Fresh produce order",
      weight: "Medium",
      requester: "Lisa Kumar",
      requesterAvatar: "👩‍🏭",
      status: "claimed",
      urgency: "high",
      notes: "Early morning pickup preferred"
    },
    {
      id: 4,
      type: "Tool Return",
      from: "Green Valley",
      to: "Sunset Gardens",
      reward: 3,
      distance: 0.8,
      timeWindow: "This weekend",
      items: "Power drill set",
      weight: "Medium",
      requester: "Tom Brown",
      requesterAvatar: "👨‍🦳",
      status: "available",
      urgency: "low",
      notes: "Flexible timing"
    }
  ];

  // Comprehensive Chat Data
  const chatChannels = [
    {
      id: 1,
      name: "🏡 Sunset Gardens General",
      lastMessage: "Thanks for organizing the BBQ! Can't wait 🎉",
      lastSender: "Mike Rodriguez",
      timestamp: "2 min ago",
      unread: 3,
      members: 47,
      type: "community",
      pinned: true,
      aiFeatures: {
        moderated: true,
        sentiment: "positive",
        beeGuardianActive: true,
        safetyScore: 98
      }
    },
    {
      id: 2,
      name: "🛒 Bulk Buying Group",
      lastMessage: "Rice order is almost full! 2 spots left",
      lastSender: "Sarah Martinez",
      timestamp: "15 min ago",
      unread: 1,
      members: 23,
      type: "marketplace",
      pinned: false,
      aiFeatures: {
        moderated: true,
        sentiment: "neutral",
        beeGuardianActive: true,
        safetyScore: 95,
        aiSuggestion: "Consider boosting this deal!"
      }
    },
    {
      id: 3,
      name: "🔧 Tool Share Network",
      lastMessage: "Ladder available this weekend if anyone needs",
      lastSender: "John Davis",
      timestamp: "1 hour ago",
      unread: 0,
      members: 31,
      type: "sharing",
      pinned: false
    },
    {
      id: 4,
      name: "🚚 Local Delivery Coordination",
      lastMessage: "I can help with the Whole Foods run today",
      lastSender: "Emma Liu",
      timestamp: "2 hours ago",
      unread: 2,
      members: 18,
      type: "delivery",
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
        platform: { x: -120, y: 0, rotation: -1, scale: 0.9 },
        panel: { side: 'right', x: 0, y: 0 }
      },
      hives: {
        platform: { x: 120, y: -5, rotation: 1, scale: 0.9 },
        panel: { side: 'left', x: 0, y: 0 }
      },
      marketplace: {
        platform: { x: -120, y: 10, rotation: -1, scale: 0.9 },
        panel: { side: 'right', x: 0, y: 0 }
      },
      sharing: {
        platform: { x: 120, y: -15, rotation: 1, scale: 0.9 },
        panel: { side: 'left', x: 0, y: 0 }
      },
      events: {
        platform: { x: -120, y: 20, rotation: -1, scale: 0.9 },
        panel: { side: 'right', x: 0, y: 0 }
      },
      delivery: {
        platform: { x: 120, y: 8, rotation: 1, scale: 0.9 },
        panel: { side: 'left', x: 0, y: 0 }
      },
      chat: {
        platform: { x: -120, y: -10, rotation: -1, scale: 0.9 },
        panel: { side: 'right', x: 0, y: 0 }
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
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-2xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
            rotate: [0, -90, -180]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"
        ></motion.div>

        {/* Floating Feature Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            opacity: activeTab === 'marketplace' ? [0.3, 0.6, 0.3] : 0.2
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 text-4xl"
        >
          🛒
        </motion.div>
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 0],
            opacity: activeTab === 'sharing' ? [0.3, 0.6, 0.3] : 0.2
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/3 right-1/3 text-3xl"
        >
          🔧
        </motion.div>
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 5, 0],
            opacity: activeTab === 'events' ? [0.3, 0.6, 0.3] : 0.2
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-1/3 left-1/3 text-3xl"
        >
          🎉
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header with Who We Are Integration */}
          <div className="text-center mb-8 lg:mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 lg:mb-6 leading-tight drop-shadow-lg"
            >
              Meet Sharebeez
              <span className="block text-yellow-200 drop-shadow-lg">
                Your Community Platform
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              A community-first platform that helps people beat inflation by collaborating.
              Buy in bulk, share tools, organize events, and support local vendors — all while building stronger neighborhood connections.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30"
            >
              <span className="text-yellow-200 font-bold">✨ Click features to explore</span>
            </motion.div>
          </div>

          {/* Side Feature Panel */}
          {showFeaturePanel && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                x: panelPosition.side === 'left' ? -100 : 100,
                y: 20
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                x: panelPosition.side === 'left' ? -100 : 100,
                y: 20
              }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.1 }}
              className={`absolute z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-4 w-72 ${
                panelPosition.side === 'left' ? 'left-0' : 'right-0'
              }`}
              style={{
                top: '20px',
                height: '320px',
                maxHeight: '320px'
              }}
            >
              <motion.div
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative h-full flex flex-col"
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-mint-500 to-lavender-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                      {features.find(f => f.id === activeTab)?.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {features.find(f => f.id === activeTab)?.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {features.find(f => f.id === activeTab)?.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {features.find(f => f.id === activeTab)?.fullDescription}
                  </p>

                  {/* Benefits Section */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-br from-mint-500 to-lavender-500 rounded-full mr-2"></span>
                      Key Benefits
                    </h4>
                    <div className="space-y-2">
                      {features.find(f => f.id === activeTab)?.benefits.slice(0, 4).map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-start text-gray-700 text-xs"
                        >
                          ></div>
                          <span className="font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-4">
                  <button
                    onClick={() => setShowFeaturePanel(false)}
                    className="w-full bg-gradient-to-r from-mint-500 to-lavender-500 text-white px-4 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-sm"
                  >
                    ← Back to Platform
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Platform Container with Side Panel Layout */}
          <div className="relative max-w-6xl mx-auto overflow-visible" style={{ minHeight: '500px' }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 40,
                x: platformPosition.x,
                rotate: platformPosition.rotation,
                scale: platformPosition.scale || 1
              }}
              transition={{
                opacity: { duration: 1, delay: 0.6 },
                y: { duration: 1, delay: 0.6 },
                x: { duration: 1, type: "spring", bounce: 0.2 },
                rotate: { duration: 1, type: "spring", bounce: 0.2 },
                scale: { duration: 1, type: "spring", bounce: 0.2 }
              }}
              className="bg-white rounded-3xl shadow-2xl border border-white/20 overflow-hidden relative origin-center"
              style={{ height: '500px' }}
            >
            {/* Platform Header */}
            <div className="bg-gradient-to-r from-mint-500 to-lavender-500 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="50" cy="55" rx="18" ry="25" fill="white"></ellipse>
                      <ellipse cx="35" cy="40" rx="12" ry="18" fill="rgba(255,255,255,0.8)"></ellipse>
                      <ellipse cx="65" cy="40" rx="12" ry="18" fill="rgba(255,255,255,0.8)"></ellipse>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Sharebeez</h3>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="relative bg-white/20 rounded-lg p-2 hover:bg-white/30 transition-colors">
                    <span className="text-white text-lg">🔔</span>
                    {notifications > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {notifications}
                      </span>
                    )}
                  </button>
                  <div className="bg-white/20 rounded-lg px-3 py-2">
                    <span className="text-white text-sm font-medium">🏡 Sunset Gardens</span>
                  </div>
                  <button className="bg-white/20 rounded-lg p-2 hover:bg-white/30 transition-colors">
                    <span className="text-white text-lg">👤</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Platform Layout */}
            <div className="flex h-full">
              {/* Sidebar Navigation */}
              <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
                <nav className="space-y-2">
                  {features.map((feature) => (
                    <motion.button
                      key={feature.id}
                      onClick={() => handleTabSwitch(feature.id)}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeTab === feature.id
                          ? 'bg-gradient-to-r from-mint-500 to-lavender-500 text-white shadow-lg transform scale-105'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md'
                      }`}
                    >
                      <motion.div
                        animate={{
                          rotate: activeTab === feature.id ? [0, 10, -10, 0] : 0,
                          scale: activeTab === feature.id ? [1, 1.1, 1] : 1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <div className="text-left">
                        <div className="font-medium text-sm">{feature.title}</div>
                        <div className={`text-xs ${activeTab === feature.id ? 'text-white/80' : 'text-gray-500'}`}>
                          {feature.description}
                        </div>
                      </div>
                      {activeTab === feature.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-auto w-2 h-2 bg-yellow-300 rounded-full"
                        />
                      )}
                    </motion.button>
                  ))}
                </nav>
                
                {/* Quick Stats */}
                <div className="mt-8 p-4 bg-white rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">Your Impact</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Total Saved</span>
                      <span className="font-bold text-green-600">{dashboardStats.totalSavings}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">CO₂ Reduced</span>
                      <span className="font-bold text-green-600">{dashboardStats.carbonSaved}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-4 overflow-y-auto" style={{ height: '400px' }}>
                {/* Dashboard Tab */}
                {activeTab === 'dashboard' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900">Welcome back, Alex! 👋</h4>
                      <div className="text-xs text-gray-600">March 12, 2024</div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-2 border border-green-200">
                        <div className="text-lg font-black text-green-600">{dashboardStats.totalSavings}</div>
                        <div className="text-xs text-green-700 font-medium">Total Saved</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-2 border border-blue-200">
                        <div className="text-lg font-black text-blue-600">{dashboardStats.monthlyOrders}</div>
                        <div className="text-xs text-blue-700 font-medium">Orders This Month</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-2 border border-purple-200">
                        <div className="text-lg font-black text-purple-600">{dashboardStats.itemsShared}</div>
                        <div className="text-xs text-purple-700 font-medium">Items Shared</div>
                      </div>
                      <div className="bg-gradient-to-br from-mint-50 to-mint-100 rounded-lg p-2 border border-mint-200">
                        <div className="text-lg font-black text-mint-600">{dashboardStats.carbonSaved}</div>
                        <div className="text-xs text-mint-700 font-medium">Carbon Saved</div>
                      </div>
                    </div>

                    {/* Active Hives */}
                    <div className="bg-white rounded-lg border border-gray-200 p-3">
                      <h5 className="font-semibold text-gray-900 mb-2 text-sm">Your Active Hives</h5>
                      <div className="space-y-2">
                        {activeHives.slice(0, 2).map((hive, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <div className={`w-6 h-6 bg-gradient-to-br ${hive.color} rounded-full flex items-center justify-center text-xs`}>
                                {hive.avatar}
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 text-xs">{hive.name}</div>
                                <div className="text-xs text-gray-600">{hive.members} members</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-green-600 text-xs">{hive.savings}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-lg border border-gray-200 p-3">
                      <h5 className="font-semibold text-gray-900 mb-2 text-sm">Recent Activity</h5>
                      <div className="space-y-2">
                        {recentActivity.slice(0, 3).map((activity, index) => (
                          <div key={index} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                            <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-xs">
                              {activity.icon}
                            </div>
                            <div className="flex-1">
                              <div className="text-xs text-gray-900">{activity.text}</div>
                              <div className="text-xs text-gray-500">{activity.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Comprehensive My Hives Tab */}
                {activeTab === 'hives' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900">My Hives</h4>
                      <button className="bg-gradient-to-r from-mint-500 to-lavender-500 text-white px-3 py-1 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm">
                        + Discover
                      </button>
                    </div>

                    {/* Hive Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-gradient-to-br from-mint-50 to-mint-100 rounded-lg p-2 border border-mint-200">
                        <div className="text-lg font-black text-mint-600">3</div>
                        <div className="text-xs text-mint-700 font-medium">Active Hives</div>
                      </div>
                      <div className="bg-gradient-to-br from-lavender-50 to-lavender-100 rounded-lg p-2 border border-lavender-200">
                        <div className="text-lg font-black text-lavender-600">101</div>
                        <div className="text-xs text-lavender-700 font-medium">Total Neighbors</div>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-2 border border-yellow-200">
                        <div className="text-lg font-black text-yellow-600">$36K</div>
                        <div className="text-xs text-yellow-700 font-medium">Combined Savings</div>
                      </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex space-x-2 border-b border-gray-200">
                      {['My Hives', 'Nearby', 'Recommended', 'All'].map((filter) => (
                        <button
                          key={filter}
                          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                            filter === 'My Hives'
                              ? 'border-mint-500 text-mint-600'
                              : 'border-transparent text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>

                    <div className="grid gap-4">
                      {allHives.map((hive) => (
                        <motion.div
                          key={hive.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: hive.id * 0.1 }}
                          className={`bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden ${
                            hive.isJoined ? 'ring-2 ring-mint-200' : ''
                          }`}
                        >
                          <div className="p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex space-x-4">
                                <div className={`w-20 h-20 bg-gradient-to-br ${hive.color} rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg relative`}>
                                  {hive.avatar}
                                  {hive.isJoined && (
                                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                      ✓ Joined
                                    </div>
                                  )}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <h5 className="font-bold text-gray-900 text-lg">{hive.name}</h5>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                      hive.status === 'Very Active' ? 'bg-green-100 text-green-600' :
                                      hive.status === 'Active' ? 'bg-blue-100 text-blue-600' :
                                      hive.status === 'Growing' ? 'bg-yellow-100 text-yellow-600' :
                                      hive.status === 'Established' ? 'bg-purple-100 text-purple-600' :
                                      'bg-gray-100 text-gray-600'
                                    }`}>
                                      {hive.status}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-3">{hive.description}</p>
                                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                                    <div>
                                      <span className="font-medium">Members:</span> {hive.members}
                                    </div>
                                    <div>
                                      <span className="font-medium">Location:</span> {hive.location}
                                    </div>
                                    <div>
                                      <span className="font-medium">Total Savings:</span> {hive.totalSavings}
                                    </div>
                                    <div>
                                      <span className="font-medium">Monthly Orders:</span> {hive.monthlyOrders}
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    {hive.categories.map((category, index) => (
                                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                                        {category}
                                      </span>
                                    ))}
                                  </div>
                                  <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="text-sm font-medium text-gray-700 mb-1">Recent Activity:</div>
                                    <div className="text-sm text-gray-600">{hive.recentActivity}</div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-600 mb-4">{hive.joinedDate}</div>
                                <button
                                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    hive.isJoined
                                      ? 'bg-green-100 text-green-600 border border-green-200'
                                      : 'bg-gradient-to-r from-mint-500 to-lavender-500 text-white hover:shadow-lg'
                                  }`}
                                >
                                  {hive.isJoined ? '✓ Member' : 'Join Hive'}
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Enhanced Marketplace Tab */}
                {activeTab === 'marketplace' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-2xl font-bold text-gray-900">Community Marketplace</h4>
                      <div className="flex items-center space-x-3">
                        <div className="bg-mint-100 text-mint-600 px-3 py-1 rounded-full text-sm font-medium">
                          🛒 {cartItems.length} in cart
                        </div>
                        <button className="bg-gradient-to-r from-mint-500 to-lavender-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                          + Create Order
                        </button>
                      </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex space-x-2 border-b border-gray-200">
                      {['All', 'Groceries', 'Pantry', 'Local Goods', 'Household'].map((filter) => (
                        <button
                          key={filter}
                          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                            filter === 'All'
                              ? 'border-mint-500 text-mint-600'
                              : 'border-transparent text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>

                    <div className="grid gap-4">
                      {marketplaceItems.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: item.id * 0.1 }}
                          className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                          <div className="p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex space-x-4">
                                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-3xl relative">
                                  {item.image}
                                  {item.status === 'almost_full' && (
                                    <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                      Almost Full!
                                    </div>
                                  )}
                                  {item.aiFeatures?.trending && (
                                    <div className="absolute -top-2 -left-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                                      🔥 Trending
                                    </div>
                                  )}
                                  {item.aiFeatures?.aiOptimized && (
                                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                                      🤖 AI
                                    </div>
                                  )}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <h5 className="font-bold text-gray-900">{item.title}</h5>
                                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                                      {item.category}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                                  {item.aiFeatures?.smartSuggestion && (
                                    <div className="bg-gradient-to-r from-mint-50 to-lavender-50 border border-mint-200 rounded-lg p-2 mb-3">
                                      <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 bg-gradient-to-r from-mint-500 to-lavender-500 rounded-full flex items-center justify-center">
                                          <span className="text-white text-xs">✨</span>
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">AI Suggestion:</span>
                                        <span className="text-sm text-gray-600">{item.aiFeatures.smartSuggestion}</span>
                                      </div>
                                    </div>
                                  )}
                                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                                    <span className="flex items-center">
                                      {item.organizerAvatar} {item.organizer}
                                    </span>
                                    <span className="flex items-center">
                                      <MapPin className="w-4 h-4 mr-1" />
                                      {item.location}
                                    </span>
                                    <span className="flex items-center">
                                      <Clock className="w-4 h-4 mr-1" />
                                      {item.timeLeft}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-3 flex-wrap">
                                    <span className="text-2xl font-bold text-green-600">${item.price}</span>
                                    <span className="text-gray-400 line-through">${item.originalPrice}</span>
                                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                                      {item.savings}% off
                                    </span>
                                    {item.aiFeatures?.priceOptimal && (
                                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                                        💡 Best Price
                                      </span>
                                    )}
                                    {item.aiFeatures?.boostRecommended && (
                                      <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs font-medium">
                                        🚀 Boost for $0.99
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <button
                                onClick={() => addToCart(item)}
                                className="bg-gradient-to-r from-mint-500 to-lavender-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                              >
                                <ShoppingBag className="w-4 h-4" />
                                <span>Join Order</span>
                              </button>
                            </div>
                          </div>

                          <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-gray-600">
                                {item.participants}/{item.needed} participants needed
                              </span>
                              <span className="font-medium text-gray-900">
                                {Math.round((item.participants/item.needed)*100)}% complete
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className="bg-gradient-to-r from-mint-500 to-lavender-500 h-3 rounded-full transition-all duration-500 relative overflow-hidden"
                                style={{ width: `${(item.participants/item.needed)*100}%` }}
                              >
                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                              <span>{item.needed - item.participants} spots left</span>
                              <span>Closes in {item.timeLeft}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Comprehensive Sharing Hub Tab */}
                {activeTab === 'sharing' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-2xl font-bold text-gray-900">Share Hub</h4>
                      <button className="bg-gradient-to-r from-mint-500 to-lavender-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                        + List Item
                      </button>
                    </div>

                    {/* Category Filter */}
                    <div className="flex space-x-2 border-b border-gray-200">
                      {['All', 'Tools', 'Kitchen', 'Garden', 'Electronics'].map((category) => (
                        <button
                          key={category}
                          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                            category === 'All'
                              ? 'border-mint-500 text-mint-600'
                              : 'border-transparent text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>

                    <div className="grid gap-4">
                      {sharingItems.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: item.id * 0.1 }}
                          className={`bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 p-6 ${
                            !item.available ? 'opacity-75' : ''
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4">
                              <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-3xl relative">
                                {item.image}
                                {!item.available && (
                                  <div className="absolute inset-0 bg-gray-500/50 rounded-xl flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">RENTED</span>
                                  </div>
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <h5 className="font-bold text-gray-900">{item.title}</h5>
                                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                                    {item.category}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-3 text-sm text-gray-600 mb-3">
                                  <span className="flex items-center">
                                    {item.ownerAvatar} {item.owner}
                                  </span>
                                  <span className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {item.distance} miles
                                  </span>
                                </div>
                                <div className="flex items-center space-x-2 mb-3">
                                  <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                    ))}
                                    <span className="text-sm text-gray-600 ml-1">{item.rating} ({item.reviews} reviews)</span>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-3">{item.description}</p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {item.features.map((feature, index) => (
                                    <span key={index} className="bg-mint-50 text-mint-700 px-2 py-1 rounded-full text-xs font-medium">
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-green-600">${item.price}/day</div>
                              <div className="text-sm text-gray-600 mb-3">{item.nextAvailable}</div>
                              <button
                                disabled={!item.available}
                                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                                  item.available
                                    ? 'bg-gradient-to-r from-mint-500 to-lavender-500 text-white hover:shadow-lg'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                              >
                                {item.available ? 'Borrow' : 'Unavailable'}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Comprehensive Events Tab */}
                {activeTab === 'events' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-2xl font-bold text-gray-900">Community Events</h4>
                      <button className="bg-gradient-to-r from-mint-500 to-lavender-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                        + Create Event
                      </button>
                    </div>

                    {/* Event Categories */}
                    <div className="flex space-x-2 border-b border-gray-200">
                      {['All', 'Social', 'Educational', 'Community Service', 'Planning'].map((category) => (
                        <button
                          key={category}
                          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                            category === 'All'
                              ? 'border-mint-500 text-mint-600'
                              : 'border-transparent text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>

                    <div className="grid gap-4">
                      {upcomingEvents.map((event) => (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: event.id * 0.1 }}
                          className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                          <div className="p-6">
                            <div className="flex items-start justify-between">
                              <div className="flex space-x-4">
                                <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">
                                  {event.image}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <h5 className="font-bold text-gray-900">{event.title}</h5>
                                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                                      {event.category}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                                    <span className="flex items-center">
                                      <Calendar className="w-4 h-4 mr-1" />
                                      {event.date}
                                    </span>
                                    <span className="flex items-center">
                                      <Clock className="w-4 h-4 mr-1" />
                                      {event.time}
                                    </span>
                                    <span className="flex items-center">
                                      <MapPin className="w-4 h-4 mr-1" />
                                      {event.location}
                                    </span>
                                    <span className="flex items-center">
                                      💰 {event.cost}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                                    <span>{event.organizerAvatar} Organized by {event.organizer}</span>
                                  </div>
                                  <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="text-sm font-medium text-gray-700 mb-1">What to bring:</div>
                                    <div className="text-sm text-gray-600">{event.whatToBring}</div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-600 mb-2">
                                  {event.attendees}/{event.maxAttendees} attending
                                </div>
                                <button
                                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 mb-2 ${
                                    event.rsvpStatus === 'going'
                                      ? 'bg-green-100 text-green-600 border border-green-200'
                                      : event.rsvpStatus === 'interested'
                                      ? 'bg-yellow-100 text-yellow-600 border border-yellow-200'
                                      : 'bg-gradient-to-r from-mint-500 to-lavender-500 text-white hover:shadow-lg'
                                  }`}
                                >
                                  {event.rsvpStatus === 'going' ? '✓ Going' : event.rsvpStatus === 'interested' ? '★ Interested' : 'RSVP'}
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-mint-500 to-lavender-500 h-2 rounded-full"
                                style={{ width: `${(event.attendees/event.maxAttendees)*100}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>{event.maxAttendees - event.attendees} spots left</span>
                              <span>{Math.round((event.attendees/event.maxAttendees)*100)}% full</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Comprehensive Delivery Network Tab */}
                {activeTab === 'delivery' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-2xl font-bold text-gray-900">Delivery Network</h4>
                      <button className="bg-gradient-to-r from-mint-500 to-lavender-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                        + Request Delivery
                      </button>
                    </div>

                    {/* Delivery Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                        <div className="text-2xl font-black text-green-600">$47</div>
                        <div className="text-sm text-green-700 font-medium">Earned This Month</div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                        <div className="text-2xl font-black text-blue-600">23</div>
                        <div className="text-sm text-blue-700 font-medium">Deliveries Made</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                        <div className="text-2xl font-black text-purple-600">4.9★</div>
                        <div className="text-sm text-purple-700 font-medium">Delivery Rating</div>
                      </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex space-x-2 border-b border-gray-200">
                      {['Available', 'My Requests', 'In Progress', 'Completed'].map((filter) => (
                        <button
                          key={filter}
                          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                            filter === 'Available'
                              ? 'border-mint-500 text-mint-600'
                              : 'border-transparent text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>

                    <div className="grid gap-4">
                      {deliveryRequests.map((request) => (
                        <motion.div
                          key={request.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: request.id * 0.1 }}
                          className={`bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 p-6 ${
                            request.status === 'claimed' ? 'opacity-75' : ''
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4">
                              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                                request.urgency === 'high' ? 'bg-red-100' :
                                request.urgency === 'normal' ? 'bg-blue-100' : 'bg-gray-100'
                              }`}>
                                <Truck className={`w-8 h-8 ${
                                  request.urgency === 'high' ? 'text-red-600' :
                                  request.urgency === 'normal' ? 'text-blue-600' : 'text-gray-600'
                                }`} />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <h5 className="font-bold text-gray-900">{request.type}</h5>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    request.urgency === 'high' ? 'bg-red-100 text-red-600' :
                                    request.urgency === 'normal' ? 'bg-blue-100 text-blue-600' :
                                    'bg-gray-100 text-gray-600'
                                  }`}>
                                    {request.urgency} priority
                                  </span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                                  <div>
                                    <span className="font-medium">From:</span> {request.from}
                                  </div>
                                  <div>
                                    <span className="font-medium">To:</span> {request.to}
                                  </div>
                                  <div>
                                    <span className="font-medium">Distance:</span> {request.distance} miles
                                  </div>
                                  <div>
                                    <span className="font-medium">Weight:</span> {request.weight}
                                  </div>
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                                  <span className="flex items-center">
                                    {request.requesterAvatar} {request.requester}
                                  </span>
                                  <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {request.timeWindow}
                                  </span>
                                </div>
                                <div className="text-sm text-gray-600 mb-3">
                                  <span className="font-medium">Items:</span> {request.items}
                                </div>
                                {request.notes && (
                                  <div className="bg-gray-50 rounded-lg p-3">
                                    <div className="text-sm font-medium text-gray-700 mb-1">Special Notes:</div>
                                    <div className="text-sm text-gray-600">{request.notes}</div>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-3xl font-bold text-green-600 mb-2">${request.reward}</div>
                              <div className="text-sm text-gray-600 mb-4">Delivery reward</div>
                              <button
                                disabled={request.status === 'claimed'}
                                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                                  request.status === 'available'
                                    ? 'bg-gradient-to-r from-mint-500 to-lavender-500 text-white hover:shadow-lg'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                              >
                                {request.status === 'available' ? 'Accept Delivery' : 'Claimed'}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Comprehensive Community Chat Tab */}
                {activeTab === 'chat' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-2xl font-bold text-gray-900">Community Chat</h4>
                      <button className="bg-gradient-to-r from-mint-500 to-lavender-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                        + New Channel
                      </button>
                    </div>

                    {/* Chat Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-mint-50 to-mint-100 rounded-xl p-4 border border-mint-200">
                        <div className="text-2xl font-black text-mint-600">5</div>
                        <div className="text-sm text-mint-700 font-medium">Active Channels</div>
                      </div>
                      <div className="bg-gradient-to-br from-lavender-50 to-lavender-100 rounded-xl p-4 border border-lavender-200">
                        <div className="text-2xl font-black text-lavender-600">127</div>
                        <div className="text-sm text-lavender-700 font-medium">Community Members</div>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200">
                        <div className="text-2xl font-black text-yellow-600">6</div>
                        <div className="text-sm text-yellow-700 font-medium">Unread Messages</div>
                      </div>
                    </div>

                    {/* Channel Categories */}
                    <div className="flex space-x-2 border-b border-gray-200">
                      {['All Channels', 'Community', 'Marketplace', 'Sharing', 'Events'].map((category) => (
                        <button
                          key={category}
                          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                            category === 'All Channels'
                              ? 'border-mint-500 text-mint-600'
                              : 'border-transparent text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>

                    <div className="grid gap-3">
                      {chatChannels.map((channel) => (
                        <motion.div
                          key={channel.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: channel.id * 0.1 }}
                          className={`bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 p-4 cursor-pointer ${
                            channel.pinned ? 'ring-2 ring-mint-200' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                channel.type === 'community' ? 'bg-gradient-to-br from-mint-400 to-mint-500' :
                                channel.type === 'marketplace' ? 'bg-gradient-to-br from-green-400 to-green-500' :
                                channel.type === 'sharing' ? 'bg-gradient-to-br from-blue-400 to-blue-500' :
                                channel.type === 'delivery' ? 'bg-gradient-to-br from-purple-400 to-purple-500' :
                                'bg-gradient-to-br from-gray-400 to-gray-500'
                              }`}>
                                <MessageCircle className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 flex-wrap">
                                  <h5 className="font-bold text-gray-900">{channel.name}</h5>
                                  {channel.pinned && (
                                    <span className="bg-mint-100 text-mint-600 px-2 py-1 rounded-full text-xs font-medium">
                                      📌 Pinned
                                    </span>
                                  )}
                                  {channel.aiFeatures?.beeGuardianActive && (
                                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                                      🤖 BeeGuardian
                                    </span>
                                  )}
                                  {channel.aiFeatures?.safetyScore >= 95 && (
                                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                                      🛡️ Safe
                                    </span>
                                  )}
                                  <span className="text-xs text-gray-500">{channel.members} members</span>
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                  <span className="font-medium">{channel.lastSender}:</span> {channel.lastMessage}
                                </div>
                                {channel.aiFeatures?.aiSuggestion && (
                                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-2 mt-2">
                                    <div className="flex items-center space-x-2">
                                      <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                        <span className="text-white text-xs">🤖</span>
                                      </div>
                                      <span className="text-xs font-medium text-blue-700">BeeGuardian:</span>
                                      <span className="text-xs text-blue-600">{channel.aiFeatures.aiSuggestion}</span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-gray-500 mb-1">{channel.timestamp}</div>
                              {channel.unread > 0 && (
                                <div className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center ml-auto">
                                  {channel.unread}
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
