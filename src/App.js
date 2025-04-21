import React from 'react';
import './App.css';
import { ArrowRight, Search, Wifi, Ban, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <div className="content-container">
          <h1 className="hero-title">Find Your Train, <span className="highlight">Effortlessly</span></h1>
          <p className="hero-subtitle">
            The smartest way to track trains without the hassle. No ads, just pure functionality.
          </p>
          
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
          
          <div className="cta-container">
            <button className="cta-button">
              Download Now <ArrowRight size={16} className="arrow-icon" />
            </button>
            <p className="cta-subtext">Join thousands of travelers who've simplified their journey</p>
          </div>
        </div>
        
        <div className="app-image-container">
          <img src="app-screenshot.png" alt="Find My Train App Screenshot" className="app-screenshot" />
        </div>
      </div>
      
      <div className="testimonial-section">
        <div className="testimonial-container">
          <h2>What Our Users Say</h2>
          <div className="testimonials">
            <div className="testimonial-card">
              <p>"Finally, a train app without annoying ads! The offline feature is a lifesaver when I'm traveling through areas with poor connectivity."</p>
              <p className="testimonial-author">- Rahul S.</p>
            </div>
            <div className="testimonial-card">
              <p>"The UI is so clean and intuitive. I can find my train in seconds, and all the information I need is right there."</p>
              <p className="testimonial-author">- Priya M.</p>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="App-footer">
        <p>&copy; 2025 Find My Train. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
