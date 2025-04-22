import React, { useState, useEffect } from 'react';
import './App.css';
import { ArrowRight, Search, Wifi, Ban, Sparkles, ChevronRight, Database } from 'lucide-react';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;
  
  const handleDotClick = (index) => {
    setActiveSlide(index);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalSlides]);
  
  const getScreenshotClass = (index) => {
    if (index === activeSlide) return "app-screenshot active";
    if (index === (activeSlide + 1) % totalSlides) return "app-screenshot secondary";
    if (index === (activeSlide + 2) % totalSlides) return "app-screenshot tertiary";
    return "app-screenshot";
  };
  
  return (
    <div className="App">
      <div className="hero-section">
        <div className="content-container">
          <h1 className="hero-title">Find Your Train, <span className="highlight">Effortlessly</span></h1>
          <p className="hero-subtitle">
            The smartest way to track trains without the hassle. No ads, just pure functionality.
          </p>
          
          <div className="hero-features">
            <div className="hero-feature">
              <Ban size={28} className="hero-feature-icon" />
              <span>Zero Ads</span>
            </div>
            <div className="hero-feature">
              <Wifi size={28} className="hero-feature-icon" />
              <span>Offline Ready</span>
            </div>
            <div className="hero-feature">
              <Sparkles size={28} className="hero-feature-icon" />
              <span>Modern UI</span>
            </div>
          </div>
          
          <div className="cta-container">
            <button className="cta-button">
              Download Now <ArrowRight size={16} className="arrow-icon" />
            </button>
            <p className="cta-subtext">Join thousands of travelers who've simplified their journey</p>
          </div>
        </div>
        
        <div className="app-showcase-container">
          <div className="app-device">
            <img 
              src="/images/app-screen-1.png" 
              alt="Find My Train App Search Screen" 
              className={getScreenshotClass(0)} 
            />
            <img 
              src="/images/app-screen-2.png" 
              alt="Find My Train App Results Screen" 
              className={getScreenshotClass(1)} 
            />
            <img 
              src="/images/app-screen-3.png" 
              alt="Find My Train App Details Screen" 
              className={getScreenshotClass(2)} 
            />
          </div>
          <div className="app-screens-nav">
            {[0, 1, 2].map((index) => (
              <button 
                key={index}
                className={`screen-dot ${activeSlide === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="features-section">
        <h2 className="section-title">Why Choose <span className="highlight-train">Find My Train</span>?</h2>
        
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <Search size={24} />
            </div>
            <div className="feature-content">
              <h3>Smart Search</h3>
              <p>Find any train by name, number, or origin-destination stations in seconds.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <Wifi size={24} />
            </div>
            <div className="feature-content">
              <h3>Offline Ready</h3>
              <p>Access all information offline, except live status. Perfect for your journey.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <Ban size={24} />
            </div>
            <div className="feature-content">
              <h3>Zero Ads</h3>
              <p>Absolutely no advertisements. Ever. We respect your time and attention.</p>
            </div>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <Sparkles size={24} />
            </div>
            <div className="feature-content">
              <h3>Modern UI</h3>
              <p>Sleek, intuitive design that makes finding train information a pleasure.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="api-section">
        <h2 className="section-title">Developer <span className="highlight-api">API Access</span></h2>
        <p className="api-subtitle">Integrate powerful train data into your applications with our reliable API</p>
        
        <div className="api-cards-container">
          <div className="api-card">
            <div className="api-card-icon">
              <Wifi size={24} />
            </div>
            <div className="api-card-content">
              <h3>Live Train Status</h3>
              <p>Real-time updates on train locations, delays, and platform information with high accuracy.</p>
            </div>
          </div>
          
          <div className="api-card">
            <div className="api-card-icon">
              <Search size={24} />
            </div>
            <div className="api-card-content">
              <h3>Autocomplete &amp; Search</h3>
              <p>Powerful search APIs for train names, numbers, and stations with smart autocomplete functionality.</p>
            </div>
          </div>
          
          <div className="api-card">
            <div className="api-card-icon">
              <ChevronRight size={24} />
            </div>
            <div className="api-card-content">
              <h3>Route Finder</h3>
              <p>Find optimal routes between stations based on connection wait times, distance, and journey duration.</p>
            </div>
          </div>
          
          <div className="api-card">
            <div className="api-card-icon">
              <Database size={24} />
            </div>
            <div className="api-card-content">
              <h3>Historical Data</h3>
              <p>Access historical performance data for trains, including punctuality statistics and seasonal trends.</p>
            </div>
          </div>
        </div>
        
        <div className="api-subscription">
          <div className="api-subscription-content">
            <h3>Ready to integrate train data?</h3>
            <p>Our API offers flexible monthly subscription plans for businesses of all sizes.</p>
            <button className="api-cta-button">
              Talk to Sales <ArrowRight size={16} className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>

      <footer className="App-footer">
        <p>&copy; 2025 Find My Train. All rights reserved.</p>
        <p className="disclaimer">This application is not officially affiliated with Indian Railways or any entity of the Government of India. It is an independent service developed to assist travelers.</p>
      </footer>
    </div>
  );
}

export default App;
