import React from 'react';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-16 py-10 px-4">
      <div className="flex items-center justify-center mb-6">
        <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 p-3 rounded-full shadow-lg group hover:shadow-xl transition-all duration-300">
          <Globe className="w-12 h-12 text-white transform group-hover:scale-105 transition-transform duration-200" aria-hidden="true" />
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
        </div>
      </div>
      
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-semibold bg-gradient-to-r from-gray-900 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4 tracking-tight font-sans leading-tight"
        role="heading"
        aria-label="Bousalih Network"
      >
        Bousalih Network
      </h1>
      
      <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-normal transition-opacity duration-500 opacity-100">
        Discover our curated ecosystem of cutting-edge digital services and tools designed to empower your journey.
      </p>
      
      <div className="mt-10 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-xl mx-auto transition-all duration-300"></div>
    </header>
  );
};

export default Header;