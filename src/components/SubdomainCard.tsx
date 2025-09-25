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
      className={`group relative cursor-pointer bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border ${isFeatured ? 'border-blue-200' : 'border-gray-200'} hover:border-blue-300 overflow-hidden transform hover:-translate-y-1`}
      onClick={handleCardClick}
    >
      {isFeatured && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
            <svg className="w-4 h-4 mr-1 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            Featured
          </span>
        </div>
      )}
      
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-700 transition-colors duration-200">
            {name}
          </h3>
        </div>
      </div>

      <p className="text-gray-600 mb-4 text-sm leading-relaxed font-normal line-clamp-3">
        {description}
      </p>

      <div className="relative h-48 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="flex items-center space-x-2 text-gray-500">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-blue-500"></div>
              <span className="text-sm font-medium">Loading preview...</span>
            </div>
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <Globe className="w-10 h-10 text-gray-400 mb-2" />
            <span className="text-sm text-gray-500 font-medium">Preview unavailable</span>
          </div>
        ) : (
          <img
            src={previewImg || screenshotUrl}
            alt={`Preview of ${name}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ display: imageLoading ? 'none' : 'block' }}
          />
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
        <span className="text-xs text-gray-500 font-mono bg-gray-100 px-2.5 py-1 rounded-md">
          {url.replace('https://', '')}
        </span>
        <span className="text-xs text-gray-400 font-medium">Click to visit site</span>
      </div>
    </div>
  );
};

export default SubdomainCard;