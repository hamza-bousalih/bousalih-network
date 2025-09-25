import React, { useState } from 'react';
import { ExternalLink, Globe } from 'lucide-react';

interface SubdomainCardProps {
  name: string;
  url: string;
  description: string;
  icon: string;
}

const SubdomainCard: React.FC<SubdomainCardProps> = ({ name, url, description, icon }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  
  // Generate screenshot URL using microlink.io API
  const screenshotUrl = `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1200&viewport.height=800`;
  
  const handleCardClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <div 
      onClick={handleCardClick}
      className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200/50 hover:border-blue-200"
    >
      {/* Header with icon and name */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="font-semibold text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
        </div>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        {description}
      </p>

      {/* Live preview */}
      <div className="relative h-40 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="flex items-center space-x-2 text-gray-500">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-top-blue-500"></div>
              <span className="text-sm">Loading preview...</span>
            </div>
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <Globe className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-500">Preview unavailable</span>
          </div>
        ) : (
          <img
            src={screenshotUrl}
            alt={`Preview of ${name}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ display: imageLoading ? 'none' : 'block' }}
          />
        )}
      </div>

      {/* URL display */}
      <div className="mt-4 pt-3 border-t border-gray-100">
        <span className="text-xs text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded">
          {url.replace('https://', '')}
        </span>
      </div>
    </div>
  );
};

export default SubdomainCard;