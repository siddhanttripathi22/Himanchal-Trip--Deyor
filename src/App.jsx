import { HomePage } from './components/pages/HomePage';
import React, { useState, useEffect } from 'react';
import { OverviewPage } from './components/pages/OverviewPage';
import { ItineraryPage } from './components/pages/ItineraryPage';
import { AccommodationsPage } from './components/pages/AccommodationsPage';
import { PricingPage } from './components/pages/PricingPage';
import { ContactPage } from './components/pages/ContactPage';


import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';

const App = () => {
 
  const [currentPage, setCurrentPage] = useState('home');
  const [activeDay, setActiveDay] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} isLoaded={isLoaded} />;
      case 'overview':
        return <OverviewPage />;
      case 'itinerary':
        return <ItineraryPage activeDay={activeDay} setActiveDay={setActiveDay} />;
      case 'accommodations':
        return <AccommodationsPage />;
      case 'pricing':
        return <PricingPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} isLoaded={isLoaded} />;
    }
  };

  return (
    <div className="min-h-screen">
      
      <style>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(1deg); }
    66% { transform: translateY(-20px) rotate(-1deg); }
  }

  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-float {
    animation: float 20s ease-in-out infinite;
  }

  .animate-fade-in-up {
    animation: fade-in-up 1s ease-out;
  }
`}</style>
      
     
      {currentPage !== 'home' && (
        <Navigation 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
      
    
      <main className={currentPage !== 'home' ? 'pt-16' : ''}>
        {renderCurrentPage()}
      </main>
      
   
      {currentPage !== 'home' && <Footer />}
    </div>
  );
};

export default App