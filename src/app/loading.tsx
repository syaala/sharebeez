import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-mint-lavender flex items-center justify-center">
      <div className="text-center">
        {/* Animated Bee Logo */}
        <div className="w-24 h-24 mx-auto mb-8">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-bounce"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Loading Sharebeez"
          >
            {/* Bee Body */}
            <ellipse
              cx="50"
              cy="55"
              rx="18"
              ry="25"
              fill="#1f2937"
              className="drop-shadow-sm"
            />
            
            {/* Bee Stripes */}
            <ellipse cx="50" cy="45" rx="16" ry="3" fill="#fbbf24" />
            <ellipse cx="50" cy="55" rx="16" ry="3" fill="#fbbf24" />
            <ellipse cx="50" cy="65" rx="16" ry="3" fill="#fbbf24" />
            
            {/* Wings with animation */}
            <ellipse
              cx="35"
              cy="40"
              rx="12"
              ry="18"
              fill="rgba(255, 255, 255, 0.8)"
              className="animate-pulse"
            />
            <ellipse
              cx="65"
              cy="40"
              rx="12"
              ry="18"
              fill="rgba(255, 255, 255, 0.8)"
              className="animate-pulse"
              style={{ animationDelay: '0.1s' }}
            />
            
            {/* Eyes */}
            <circle cx="45" cy="35" r="3" fill="white" />
            <circle cx="55" cy="35" r="3" fill="white" />
            <circle cx="45" cy="35" r="1.5" fill="#1f2937" />
            <circle cx="55" cy="35" r="1.5" fill="#1f2937" />
          </svg>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-4">
          Loading Sharebeez
        </h2>
        <p className="text-white/80 text-lg">
          Preparing your community experience...
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}
