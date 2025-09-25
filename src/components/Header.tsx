import React from 'react';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full shadow-lg">
          <Globe className="w-10 h-10 text-white" />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 tracking-tight">
        Bousalih Network
      </h1>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
        Explore our curated collection of innovative digital services and tools
      </p>
      
      <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </div>
  );
};

export default Header;