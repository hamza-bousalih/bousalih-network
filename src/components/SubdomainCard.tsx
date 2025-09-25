import React, { useState } from 'react';
import { Globe } from 'lucide-react';

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
      className={`group relative cursor-pointer bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border ${isFeatured ? 'border-blue-300' : 'border-gray-200'} hover:border-blue-400 overflow-hidden transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2`}
      onClick={handleCardClick}
      tabIndex={0}
      role="button"
      aria-label={`Visit ${name} website`}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
    >
      <div className="absolute top-4 right-4">
        {isFeatured ? (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
            <svg className="w-4 h-4 mr-1.5 text-blue-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            Featured
          </span>
        ) : (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
            Active
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-xl text-gray-900 group-hover:text-blue-700 transition-colors duration-200 font-sans">
          {name}
        </h3>
      </div>

      <p className="text-gray-700 mb-4 text-sm leading-relaxed font-normal line-clamp-3">
        {description}
      </p>

      <div className="relative h-48 rounded-lg overflow-hidden bg-gray-50 border border-gray-200 group-hover:ring-1 group-hover:ring-blue-200 transition-all duration-300">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="flex items-center space-x-2 text-gray-500">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-blue-600"></div>
              <span className="text-sm font-medium">Loading preview...</span>
            </div>
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <Globe className="w-10 h-10 text-gray-400 mb-2" aria-hidden="true" />
            <span className="text-sm text-gray-500 font-medium">Preview unavailable</span>
          </div>
        ) : (
          <>
            <img
              src={previewImg || screenshotUrl}
              alt={`Preview of ${name}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{ display: imageLoading ? 'none' : 'block' }}
            />
            <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium bg-blue-600 px-3 py-1 rounded-full">
                Explore {name}
              </span>
            </div>
          </>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
        <span className="text-xs text-gray-600 font-mono bg-gray-100 px-3 py-1.5 rounded-md truncate max-w-[60%]">
          {url.replace('https://', '')}
        </span>
        <span className="text-xs text-gray-500 font-medium">Click or press Enter to visit</span>
      </div>
    </div>
  );
};

export default SubdomainCard;