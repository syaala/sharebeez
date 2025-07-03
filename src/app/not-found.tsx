'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Home, ArrowLeft } from 'lucide-react';
import SharebeezLogo from '@/components/ui/SharebeezLogo';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-mint-lavender flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <SharebeezLogo size="lg" showText={false} className="justify-center" />
        </div>

        {/* 404 Message */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Search Suggestion */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-white font-semibold mb-2">Looking for something specific?</h3>
          <p className="text-white/80 text-sm">
            Try visiting our homepage or check out our features to find what you need.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-white/10 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <Link
            href="/#features"
            className="text-white/80 hover:text-white transition-colors duration-300 p-3 rounded-lg hover:bg-white/10"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="text-white/80 hover:text-white transition-colors duration-300 p-3 rounded-lg hover:bg-white/10"
          >
            How It Works
          </Link>
          <Link
            href="/#faq"
            className="text-white/80 hover:text-white transition-colors duration-300 p-3 rounded-lg hover:bg-white/10"
          >
            FAQ
          </Link>
          <Link
            href="/#user-types"
            className="text-white/80 hover:text-white transition-colors duration-300 p-3 rounded-lg hover:bg-white/10"
          >
            Who It's For
          </Link>
        </div>

        {/* Support Contact */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">
            Still need help? Contact us at{' '}
            <a 
              href="mailto:support@sharebeez.com" 
              className="text-white hover:text-white/80 underline"
            >
              support@sharebeez.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
