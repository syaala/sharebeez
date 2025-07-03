'use client';

import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen bg-gradient-mint-lavender flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="w-24 h-24 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-12 h-12 text-white" />
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-white/80 text-lg mb-8 leading-relaxed">
          We're sorry, but something unexpected happened. Don't worry, our team has been notified and we're working to fix it.
        </p>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-white/10 rounded-lg p-4 mb-8 text-left">
            <h3 className="text-white font-semibold mb-2">Error Details:</h3>
            <p className="text-white/80 text-sm font-mono break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-white/60 text-xs mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-white/10 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </button>
        </div>

        {/* Support Contact */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-white/60 text-sm">
            Need help? Contact our support team at{' '}
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
