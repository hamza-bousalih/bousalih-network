import React, { useState } from 'react';
import { ExternalLink, Globe } from 'lucide-react';

interface SubdomainCardProps {
  name: string;
  url: string;
  description: string;
  previewImg?: string;
  isHidden: boolean;
  isFeatured: boolean;
}

const SubdomainCard: React.FC<SubdomainCardProps> = ({ 
  name, 
  url, 
  description, 
  previewImg,
  isFeatured
}) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  
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
      className={`group cursor-pointer bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border ${isFeatured ? 'border-blue-300 shadow-lg' : 'border-gray-100'} hover:border-blue-200 relative overflow-hidden`}
      onClick={handleCardClick}
    >
      {isFeatured && (
        <div className="absolute top-0 right-0 p-2">
          <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <h3 className="font-semibold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
        </div>
      </div>

      <p className="text-gray-600 mb-4 text-sm leading-relaxed font-medium">
        {description}
      </p>

      <div className="relative h-40 rounded-lg overflow-hidden bg-gray-50 border border-gray-100">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="flex items-center space-x-2 text-gray-500">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-blue-500"></div>
              <span className="text-sm font-medium">Loading preview...</span>
            </div>
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <Globe className="w-8 h-8 text-gray-400 mb-2" />
            <span className="text-sm text-gray-500 font-medium">Preview unavailable</span>
          </div>
        ) : (
          <img
            src={previewImg || screenshotUrl}
            alt={`Preview of ${name}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ display: imageLoading ? 'none' : 'block' }}
          />
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100">
        <span className="text-xs text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded">
          {url.replace('https://', '')}
        </span>
      </div>
    </div>
  );
};

export default SubdomainCard;