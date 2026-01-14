import React, { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WorkFlowStack from './components/WorkFlowStack';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import TrialCTA from './components/TrialCTA';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import { VoiceProvider } from './context/VoiceContext';
import { LanguageProvider } from './context/LanguageContext';

// Define the navigation context
interface NavigationContextType {
  path: string;
  navigateTo: (path: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('useNavigation must be used within a NavigationProvider');
  return context;
};

const App: React.FC = () => {
  // Use state as the source of truth for the current view
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigateTo = (path: string) => {
    try {
      // Attempt to update the URL, but don't crash if restricted
      window.history.pushState({}, '', path);
    } catch (e) {
      console.warn('Navigation: URL update blocked by security policy, falling back to state-only routing.', e);
    }
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '/privacy-policy':
        return <PrivacyPolicy />;
      case '/terms':
        return <Terms />;
      default:
        return (
          <>
            <Hero />
            <WorkFlowStack />
            <Features />
            <Pricing />
            <FAQ />
            <TrialCTA />
          </>
        );
    }
  };

  return (
    <NavigationContext.Provider value={{ path: currentPath, navigateTo }}>
      <LanguageProvider>
        <VoiceProvider>
          <div className="min-h-screen font-sans selection:bg-brand-500 selection:text-white bg-white dark:bg-slate-950">
            <Navbar />
            <main>
              {renderContent()}
            </main>
            <Footer />
          </div>
        </VoiceProvider>
      </LanguageProvider>
    </NavigationContext.Provider>
  );
};

export default App;