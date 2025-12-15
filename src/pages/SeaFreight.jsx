import React from "react";
import "../styles/SeaFreight.css";
import { useNavigate, Link } from "react-router-dom";

export default function SeaFreight() {
  const navigate = useNavigate();

  const services = [
    { 
      icon: "🚪", 
      text: "Import & Export Door-to-Door and Door-to-Port" 
    },
    { 
      icon: "📦", 
      text: "Full Container Load (FCL)" 
    },
    { 
      icon: "📦", 
      text: "Less than Container Load (LCL)" 
    },
    { 
      icon: "📦", 
      text: "Professional Packaging Services" 
    },
    { 
      icon: "🔧", 
      text: "Specialized Handling for All Cargo Types" 
    },
    { 
      icon: "📋", 
      text: "Customs Clearance" 
    }
  ];

  const handleQuoteClick = () => {
    window.location.href = "/quote";
  };

  const handleAirFreightClick = () => {
    navigate("/air-freight");
  };

  return (
    <div className="seafreight-page">
      {/* Banner Section */}
      <div className="seafreight-banner">
        <div
          className="banner-background"
          style={{ backgroundImage: "url('/LogisticsWebsite/images/sea3.jpg')" }}
        />
        <div className="banner-overlay" />
        
        <div className="banner-content">
          <div className="banner-icon">
            <span className="ship-icon">🚢</span>
          </div>
          <h1 className="banner-title">Sea / Ocean Freight Services</h1>
          <p className="banner-subtitle">
            Reliable Maritime Shipping Solutions Worldwide
          </p>
          <Link to="/services" className="back-link">← Back to Services</Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="seafreight-container">
        {/* Introduction Card */}
        <div className="intro-card">
          <h2 className="section-title">Your Trusted Sea Freight Partner</h2>
          
          <div className="intro-content">
            <p>
              When you have Sea Freight professionals matching frequent sailings and 
              flexible service options to your specific business objectives, you have 
              <strong> Uni-Q Logistics'</strong> brand of Personalized Service.
            </p>

            <p>
              Our freight management experts partner with you to learn your business 
              first-hand. Equipped with an intimate understanding of your supply chain 
              requirements, we pull from a range of standard Sea Freight products and 
              supplementary options to secure the space allocation, timing, frequency 
              and rates that fit your precise objectives.
            </p>

            <p>
              Whether we need to reserve an oversize container or securely transport 
              your high-value cargo, Uni-Q Logistics Sea Freight specialists treat 
              each shipment with the care and attention it takes to earn your trust.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="cta-wrapper">
            <button className="cta-button primary" onClick={handleQuoteClick}>
              Get a Quote
            </button>
            <button className="cta-button secondary" onClick={handleAirFreightClick}>
              Need Faster Shipping? Try Air Freight →
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-section">
          <h2 className="section-title center">Our Sea Freight Services</h2>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  <div className="service-icon-bg">
                    <span className="service-icon">{service.icon}</span>
                  </div>
                </div>
                <p className="service-text">{service.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Value Propositions */}
        <div className="value-props">
          <div className="value-card value-blue">
            <span className="value-icon">💰</span>
            <h3 className="value-title">Cost-Effective</h3>
            <p className="value-description">
              Competitive rates for FCL and LCL shipments worldwide
            </p>
          </div>
          
          <div className="value-card value-teal">
            <span className="value-icon">🛡️</span>
            <h3 className="value-title">Secure Transport</h3>
            <p className="value-description">
              Safe handling of high-value and specialized cargo
            </p>
          </div>
          
          <div className="value-card value-cyan">
            <span className="value-icon">🌊</span>
            <h3 className="value-title">Global Network</h3>
            <p className="value-description">
              Frequent sailings to major ports across the globe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}