import React from "react";
import "../styles/AirFreight.css";
import { Link, useNavigate } from "react-router-dom";

export default function AirFreight() {
  const services = [
    { 
      icon: "⏱️", 
      text: "International Air freight service (Standard to Expedited)" 
    },
    { 
      icon: "📦", 
      text: "Air freight Direct and Consolidation shipments" 
    },
    { 
      icon: "📍", 
      text: "Airport to Airport / Door to Airport / Door-to-Door services" 
    },
    { 
      icon: "✈️", 
      text: "Charter Services" 
    },
    { 
      icon: "🛡️", 
      text: "Project Cargo" 
    },
    { 
      icon: "📏", 
      text: "Oversized Cargo" 
    },
    { 
      icon: "⚠️", 
      text: "Hazardous Goods" 
    },
    { 
      icon: "🍃", 
      text: "Perishable Goods" 
    },
    { 
      icon: "🌡️", 
      text: "Temperature Controlled Goods" 
    },
    { 
      icon: "🚚", 
      text: "Pickup & Delivery" 
    },
    { 
      icon: "📋", 
      text: "Customs Clearance" 
    },
    { 
      icon: "📄", 
      text: "Professional Documentation Services" 
    }
  ];

  const handleQuoteClick = () => {
    // Navigate to quote page or open contact form
    navigate("/quote");
  };

  const navigate = useNavigate();

  return (
    <div className="airfreight-page">
      {/* Banner Section */}
      <div className="airfreight-banner">
        <div
          className="banner-background"
          style={{ backgroundImage: "url('/images/air_f.jpeg')" }}
        />
        <div className="banner-overlay" />
        
        <div className="banner-content">
          <Link to="/services" className="back-link">← Back to Services</Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="airfreight-container">
        {/* Introduction Card */}
        <div className="intro-card">
        <h1 className="banner-title">Air Freight Services</h1>
          <h2 className="section-title">Fast, Reliable Air Cargo Solutions</h2>
          
          <div className="intro-content">
            <p>
              Whether your cargo needs priority, speed, or special handling, we have
              shipping options that suit your requirements. Our experts will work
              with you and your logistics team to understand your air freight
              transportation challenges and provide a cost-effective solution with
              speed and efficiency.
            </p>

            <p>
              We will assess your worldwide air freight transit time requirements and
              provide the best solution to your air cargo shipment needs. We offer
              express, standard, and deferred air service. From airport to airport or
              door to door, reach out for a quote today.
            </p>
          </div>

          {/* CTA Button */}
          <div className="cta-wrapper">
            <button className="cta-button" onClick={handleQuoteClick}>
              Get a Quote
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-section">
          <h2 className="section-title center">Our Comprehensive Services</h2>
          
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
          <div className="value-card value-purple">
            <span className="value-icon">⏱️</span>
            <h3 className="value-title">Speed</h3>
            <p className="value-description">
              Express delivery options for time-sensitive cargo
            </p>
          </div>
          
          <div className="value-card value-blue">
            <span className="value-icon">🛡️</span>
            <h3 className="value-title">Security</h3>
            <p className="value-description">
              Safe handling of all cargo types including hazardous materials
            </p>
          </div>
          
          <div className="value-card value-indigo">
            <span className="value-icon">🌍</span>
            <h3 className="value-title">Global Reach</h3>
            <p className="value-description">
              Worldwide network for seamless international shipping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}