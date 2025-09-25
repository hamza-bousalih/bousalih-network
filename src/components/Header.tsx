import React from 'react';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full shadow-lg">
          <Globe className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
        Welcome to Bousalih Network
      </h1>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Discover our collection of digital services, tools, and resources.
      </p>
      
      <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </div>
  );
};

export default Header;