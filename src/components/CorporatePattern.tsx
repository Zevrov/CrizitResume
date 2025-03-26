import React from 'react';

interface CorporatePatternProps {
  pattern: 'dots' | 'circuit' | 'grid' | 'squares';
  color?: string;
}

const CorporatePattern: React.FC<CorporatePatternProps> = ({ pattern, color = 'white' }) => {
  const getPattern = () => {
    switch (pattern) {
      case 'dots':
        return (
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill={color} />
          </pattern>
        );
      case 'circuit':
        return (
          <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M10 10h40M10 30h40M10 50h40M30 10v40"
              stroke={color}
              strokeWidth="0.5"
              fill="none"
            />
            <circle cx="30" cy="30" r="2" fill={color} />
            <circle cx="10" cy="10" r="2" fill={color} />
            <circle cx="50" cy="10" r="2" fill={color} />
            <circle cx="10" cy="50" r="2" fill={color} />
            <circle cx="50" cy="50" r="2" fill={color} />
          </pattern>
        );
      case 'grid':
        return (
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M0 20h40M20 0v40"
              stroke={color}
              strokeWidth="0.5"
              fill="none"
            />
          </pattern>
        );
      case 'squares':
        return (
          <pattern id="squares" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect x="5" y="5" width="30" height="30" stroke={color} strokeWidth="0.5" fill="none" />
            <rect x="15" y="15" width="10" height="10" fill={color} opacity="0.3" />
          </pattern>
        );
      default:
        return null;
    }
  };

  return (
    <svg className="w-full h-full">
      <defs>{getPattern()}</defs>
      <rect width="100%" height="100%" fill={`url(#${pattern})`} />
    </svg>
  );
};

export default CorporatePattern; 