'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Home, Building, Truck, ShoppingCart, Baby, Calendar, Laptop, Utensils, Network, Clock, Pill, Car, Heart, TrendingUp, Target, UserCheck, DollarSign, Music } from 'lucide-react';

const WhoItsForSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('families');

  const tabs = [
    {
      id: 'families',
      label: 'Families',
      icon: <Home className="w-6 h-6" />,
      title: 'Perfect for Growing Families',
      description: 'Save on bulk purchases, share childcare resources, and build a supportive community for your family.',
      benefits: [
        'Bulk buying for household essentials',
        'Shared childcare and babysitting networks',
        'Tool and equipment sharing',
        'Community events and playdates'
      ],
      image: <Home className="w-8 h-8" />,
      gradient: 'from-blue-400 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      stats: { members: '12,500+', savings: '$850/month', communities: '450+' },
      visualElements: [
        { icon: <Home className="w-6 h-6" />, label: 'Family Homes' },
        { icon: <ShoppingCart className="w-6 h-6" />, label: 'Group Orders' },
        { icon: <Baby className="w-6 h-6" />, label: 'Childcare' },
        { icon: <Calendar className="w-6 h-6" />, label: 'Events' }
      ]
    },
    {
      id: 'professionals',
      label: 'Professionals',
      icon: <Building className="w-6 h-6" />,
      title: 'Ideal for Busy Professionals',
      description: 'Coordinate group orders, share services, and build professional networks in your neighborhood.',
      benefits: [
        'Group meal delivery and catering',
        'Shared professional services',
        'Networking opportunities',
        'Time-saving group purchases'
      ],
      image: <Building className="w-8 h-8" />,
      gradient: 'from-purple-400 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      stats: { members: '8,200+', savings: '$650/month', communities: '320+' },
      visualElements: [
        { icon: <Laptop className="w-6 h-6" />, label: 'Remote Work' },
        { icon: <Utensils className="w-6 h-6" />, label: 'Meal Plans' },
        { icon: <Network className="w-6 h-6" />, label: 'Networking' },
        { icon: <Clock className="w-6 h-6" />, label: 'Time Saving' }
      ]
    },
    {
      id: 'seniors',
      label: 'Seniors',
      icon: <Users className="w-6 h-6" />,
      title: 'Great for Active Seniors',
      description: 'Stay connected with your community, access group discounts, and get support when you need it.',
      benefits: [
        'Medication and grocery group orders',
        'Social activities and events',
        'Mutual support network',
        'Shared transportation'
      ],
      image: <Users className="w-8 h-8" />,
      gradient: 'from-green-400 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
      stats: { members: '5,800+', savings: '$420/month', communities: '280+' },
      visualElements: [
        { icon: <Pill className="w-6 h-6" />, label: 'Healthcare' },
        { icon: <Car className="w-6 h-6" />, label: 'Transport' },
        { icon: <Music className="w-6 h-6" />, label: 'Activities' },
        { icon: <Heart className="w-6 h-6" />, label: 'Support' }
      ]
    },
    {
      id: 'businesses',
      label: 'Local Businesses',
      icon: <Truck className="w-6 h-6" />,
      title: 'Boost Your Local Business',
      description: 'Reach more customers through community group orders and build lasting relationships.',
      benefits: [
        'Direct access to local customers',
        'Bulk order opportunities',
        'Community partnership programs',
        'Reduced marketing costs'
      ],
      image: <Truck className="w-8 h-8" />,
      gradient: 'from-orange-400 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      stats: { members: '1,200+', savings: '25% costs', communities: '150+' },
      visualElements: [
        { icon: <TrendingUp className="w-6 h-6" />, label: 'Growth' },
        { icon: <Target className="w-6 h-6" />, label: 'Targeting' },
        { icon: <UserCheck className="w-6 h-6" />, label: 'Partnerships' },
        { icon: <DollarSign className="w-6 h-6" />, label: 'Revenue' }
      ]
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="user-types" className="section-padding bg-gradient-mint-lavender-soft" ref={ref}>
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
            Who It's
            <span className="block bg-gradient-to-r from-mint-500 to-lavender-500 bg-clip-text text-transparent">
              For
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Sharebeez brings value to everyone in the community, from families to local businesses
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isActive
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-xl`
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Background glow effect for active tab */}
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${tab.gradient} rounded-2xl blur-lg opacity-30 -z-10 scale-110`}></div>
                )}

                {/* Icon with enhanced styling */}
                <div className={`p-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-white/20'
                    : `bg-gradient-to-r ${tab.bgGradient} group-hover:scale-110`
                }`}>
                  {tab.icon}
                </div>

                <div className="flex flex-col items-start">
                  <span className="text-lg">{tab.label}</span>
                  <span className={`text-xs font-medium ${
                    isActive ? 'text-white/80' : 'text-gray-500'
                  }`}>
                    {tab.stats.members}
                  </span>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {activeTabData && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${activeTabData.bgGradient} rounded-full transform translate-x-32 -translate-y-32 opacity-20`}></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left Content */}
              <div>
                {/* Hero Visual */}
                <div className="flex items-center mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-r ${activeTabData.gradient} rounded-3xl flex items-center justify-center text-white mr-6 shadow-lg`}>
                    <div className="w-12 h-12">
                      {activeTabData.image}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">
                      {activeTabData.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="font-semibold">{activeTabData.stats.members} members</span>
                      <span>•</span>
                      <span className="font-semibold text-green-600">{activeTabData.stats.savings} avg savings</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {activeTabData.description}
                </p>

                {/* Visual Elements Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {activeTabData.visualElements.map((element, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`bg-gradient-to-br ${activeTabData.bgGradient} rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-200`}
                    >
                      <div className="flex justify-center mb-2 text-gray-700">
                        {element.icon}
                      </div>
                      <div className="text-sm font-semibold text-gray-700">{element.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Benefits List */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Key Benefits:</h4>
                  {activeTabData.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className={`w-6 h-6 bg-gradient-to-r ${activeTabData.gradient} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Content - CTA Section */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${activeTabData.bgGradient} rounded-3xl p-8 text-center relative overflow-hidden`}>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full"></div>

                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-r ${activeTabData.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}>
                      <div className="w-10 h-10">
                        {activeTabData.image}
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready to Get Started?
                    </h4>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Join <strong>{activeTabData.stats.members}</strong> community members who are already saving money and building connections.
                    </p>

                    {/* Stats Display */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-white/50 rounded-xl p-3">
                        <div className="text-2xl font-black text-gray-900">{activeTabData.stats.communities}</div>
                        <div className="text-xs font-medium text-gray-600">Communities</div>
                      </div>
                      <div className="bg-white/50 rounded-xl p-3">
                        <div className="text-2xl font-black text-green-600">{activeTabData.stats.savings}</div>
                        <div className="text-xs font-medium text-gray-600">Avg Savings</div>
                      </div>
                    </div>

                    <button className={`bg-gradient-to-r ${activeTabData.gradient} text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full`}>
                      Find Your Community
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WhoItsForSection;
