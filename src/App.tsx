import { useState, useEffect } from 'react';
import SubdomainCard from './components/SubdomainCard';
import Header from './components/Header';
import domainsData from './data/domains.json';

interface Domain {
  name: string;
  url: string;
  description: string;
  previewImg?: string;
  isHidden: boolean;
  isFeatured: boolean;
}

function App() {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDomains(domainsData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading Bousalih Network...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-12">
          <Header />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {domains.map((domain, index) => {
              return domain.isHidden || (
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
                    previewImg={domain.previewImg}
                    isHidden={domain.isHidden}
                    isFeatured={domain.isFeatured}
                  />
                </div>
              )
            })}
          </div>

          <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500 text-sm font-medium">
              © 2025 Bousalih Network. Connecting ideas, tools, and services.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;