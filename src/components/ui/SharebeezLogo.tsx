import React from 'react';

interface SharebeezLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const SharebeezLogo: React.FC<SharebeezLogoProps> = ({ 
  className = '', 
  showText = true, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24'
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Bee Icon */}
      <div className={`${sizeClasses[size]} aspect-square`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Sharebeez bee logo"
        >
          {/* Bee Body - Main oval shape */}
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
          
          {/* Left Wing */}
          <ellipse
            cx="35"
            cy="40"
            rx="12"
            ry="18"
            fill="rgba(94, 234, 212, 0.8)"
            className="animate-bounce-gentle"
            style={{ transformOrigin: '35px 58px' }}
          />
          
          {/* Right Wing */}
          <ellipse
            cx="65"
            cy="40"
            rx="12"
            ry="18"
            fill="rgba(216, 180, 254, 0.8)"
            className="animate-bounce-gentle"
            style={{ transformOrigin: '65px 58px', animationDelay: '0.1s' }}
          />
          
          {/* Wing Details */}
          <ellipse cx="35" cy="35" rx="8" ry="12" fill="rgba(94, 234, 212, 0.6)" />
          <ellipse cx="65" cy="35" rx="8" ry="12" fill="rgba(216, 180, 254, 0.6)" />
          
          {/* Antennae */}
          <circle cx="45" cy="25" r="2" fill="#1f2937" />
          <circle cx="55" cy="25" r="2" fill="#1f2937" />
          <line x1="45" y1="27" x2="47" y2="32" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
          <line x1="55" y1="27" x2="53" y2="32" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
          
          {/* Eyes */}
          <circle cx="45" cy="35" r="3" fill="white" />
          <circle cx="55" cy="35" r="3" fill="white" />
          <circle cx="45" cy="35" r="1.5" fill="#1f2937" />
          <circle cx="55" cy="35" r="1.5" fill="#1f2937" />
        </svg>
      </div>
      
      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-gray-900 ${textSizeClasses[size]} leading-none`}>
            Sharebeez
          </span>
          <span className="text-sm text-gray-600 font-medium leading-tight">
            Buy Together. Save Together. Share Smarter.
          </span>
        </div>
      )}
    </div>
  );
};

export default SharebeezLogo;
