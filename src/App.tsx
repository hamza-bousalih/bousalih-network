import React, { useState, useEffect } from 'react';
import SubdomainCard from './components/SubdomainCard';
import Header from './components/Header';
import domainsData from './data/domains.json';

interface Domain {
  name: string;
  url: string;
  description: string;
  icon: string;
}

function App() {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setDomains(domainsData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-top-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Bousalih Network...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12">
          <Header />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {domains.map((domain, index) => (
              <div
                key={domain.name}
                className="animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <SubdomainCard
                  name={domain.name}
                  url={domain.url}
                  description={domain.description}
                  icon={domain.icon}
                />
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Bousalih Network. Connecting ideas, tools, and services.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;