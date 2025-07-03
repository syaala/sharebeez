'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Shield, TrendingUp, Users, MessageCircle, ShoppingBag, Truck, Zap, Bot, Sparkles, Target, BarChart3 } from 'lucide-react';

const AIFeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFeature, setActiveFeature] = useState('marketplace');

  const aiFeatures = [
    {
      id: 'marketplace',
      icon: ShoppingBag,
      title: 'Smart Marketplace AI',
      description: 'Intelligent deal optimization and personalized recommendations',
      color: 'from-mint-500 to-emerald-500',
      features: [
        'AI-powered deal suggestions based on your preferences',
        'Auto-generated catchy descriptions and optimal pricing',
        'Smart boost recommendations for trending deals',
        'Predictive analytics for best posting times',
        'Dynamic pricing optimization'
      ]
    },
    {
      id: 'beeguardian',
      icon: Shield,
      title: 'BeeGuardian AI Assistant',
      description: 'Your personal AI mentor for community safety and engagement',
      color: 'from-blue-500 to-purple-500',
      features: [
        'Real-time chat moderation and scam detection',
        'Sentiment analysis and conflict resolution',
        'Personalized guidance and tips',
        'Badge and karma system management',
        'Community safety monitoring'
      ]
    },
    {
      id: 'automation',
      icon: Zap,
      title: 'Intelligent Automation',
      description: 'Smart systems that optimize performance and user experience',
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Automated storage optimization and cleanup',
        'Smart image compression and format conversion',
        'Intelligent driver and delivery matching',
        'Privacy protection and data encryption',
        'Performance monitoring and optimization'
      ]
    },
    {
      id: 'regenerative',
      icon: Brain,
      title: 'Self-Evolving Platform',
      description: 'AI that learns from community feedback to improve the app',
      color: 'from-purple-500 to-pink-500',
      features: [
        'Continuous feedback collection and analysis',
        'Pattern recognition from millions of user interactions',
        '70% Rule validator for community-driven features',
        'Auto-generated feature suggestions and wireframes',
        'Adaptive interface based on user behavior'
      ]
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Data-driven insights for community growth and optimization',
      color: 'from-cyan-500 to-blue-500',
      features: [
        'Community growth projection and trend analysis',
        'User behavior segmentation and insights',
        'Demand prediction for deliveries and services',
        'Opportunity identification for local micro-hustles',
        'Performance optimization recommendations'
      ]
    },
    {
      id: 'monetization',
      icon: Target,
      title: 'Smart Monetization',
      description: 'AI-driven revenue optimization that benefits everyone',
      color: 'from-green-500 to-teal-500',
      features: [
        'Dynamic boost pricing based on engagement',
        'Intelligent upsell suggestions for Pro features',
        'Automated affiliate and influencer matching',
        'Smart fee optimization for maximum value',
        'Community project funding recommendations'
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 via-white to-mint-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-mint-200/30 to-lavender-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-mint-500 to-lavender-500 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <span className="block text-gray-900">
              Community Intelligence
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the future of community collaboration with advanced AI that learns, adapts, and evolves to serve your neighborhood better every day.
          </motion.p>
        </motion.div>

        {/* AI Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                activeFeature === feature.id ? 'border-mint-300 ring-4 ring-mint-100' : 'border-gray-100 hover:border-mint-200'
              }`}
              onClick={() => setActiveFeature(feature.id)}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <div className="space-y-3">
                {feature.features.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-mint-500 to-lavender-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
                {feature.features.length > 3 && (
                  <div className="text-sm text-mint-600 font-medium">
                    +{feature.features.length - 3} more features
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Feature View */}
        {activeFeature && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100"
          >
            {(() => {
              const feature = aiFeatures.find(f => f.id === activeFeature);
              return (
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mb-6 shadow-lg`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-lg text-gray-600 mb-8">{feature.description}</p>
                    
                    <div className="space-y-4">
                      {feature.features.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl"
                        >
                          <div className="w-6 h-6 bg-gradient-to-r from-mint-500 to-lavender-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                      <div className="flex items-center space-x-3 mb-6">
                        <Bot className="w-8 h-8 text-mint-400" />
                        <span className="text-xl font-bold">AI in Action</span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="text-mint-400 text-sm font-medium mb-2">System Status</div>
                          <div className="text-white">🟢 All AI systems operational</div>
                        </div>
                        
                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="text-mint-400 text-sm font-medium mb-2">Recent Activity</div>
                          <div className="text-white text-sm">
                            • Analyzed 1,247 user interactions<br/>
                            • Optimized 23 deal descriptions<br/>
                            • Prevented 3 potential scams<br/>
                            • Generated 15 smart suggestions
                          </div>
                        </div>
                        
                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="text-mint-400 text-sm font-medium mb-2">Performance</div>
                          <div className="flex items-center space-x-4">
                            <div className="text-white">
                              <div className="text-2xl font-bold">98.7%</div>
                              <div className="text-xs text-gray-400">Accuracy</div>
                            </div>
                            <div className="text-white">
                              <div className="text-2xl font-bold">2.3s</div>
                              <div className="text-xs text-gray-400">Response Time</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AIFeaturesSection;
