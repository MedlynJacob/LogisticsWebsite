import React from "react";
import { Link } from "react-router-dom";
import "../styles/OverlandFreight.css";

export default function OverlandFreight() {
  const services = [
    { 
      icon: "📦", 
      text: "Less Than Truckload (LTL)" 
    },
    { 
      icon: "🚛", 
      text: "Full Truckload (FTL)" 
    },
    { 
      icon: "🔧", 
      text: "Dyna Load Transport" 
    },
    { 
      icon: "🏗️", 
      text: "Low Bed Trailers" 
    },
    { 
      icon: "📏", 
      text: "Extra Wide-Bodied Trailers" 
    },
    { 
      icon: "⚖️", 
      text: "Overweight Shipments" 
    },
    { 
      icon: "📦", 
      text: "Palletized - Stackable & Non-Stackable" 
    },
    { 
      icon: "📋", 
      text: "Customs Clearance" 
    },
    { 
      icon: "🚚", 
      text: "Pickup & Deliveries" 
    },
    { 
      icon: "📦", 
      text: "Professional Packing Services" 
    }
  ];

  const handleQuoteClick = () => {
    window.location.href = "/quote";
  };

  return (
    <div className="overland-page">
      {/* Banner Section */}
      <div className="overland-banner">
        <div
          className="banner-background"
          style={{ backgroundImage: "url('/LogisticsWebsite/images/truck3.jpg')" }}
        />
        <div className="banner-overlay" />
        
        <div className="banner-content">
          
          <Link to="/services" className="back-link">← Back to Services</Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="overland-container">
        {/* Introduction Card */}
        <div className="intro-card">
        <h1 className="banner-title">Overland Freight / By Road</h1>
          <h2 className="section-title">Expert Road Freight Services</h2>
          
          <div className="intro-content">
            <p>
              <strong>Uni-Q International Logistics</strong> Road freight service provides 
              flexible regional transport in GCC Countries, with expert skills in crossing 
              border procedures, type of product and priority shipment handling. This is 
              for individual or consolidation loads in general cargo as well as Chemicals.
            </p>

            <p>
              Our dedicated fleet enables us to control schedules and delivery priorities 
              that we commit to. Leading international partners enable us to provide similar 
              service levels in the other Middle East Countries if required.
            </p>

            <p>
              Our local dedicated fleet of vehicles is all equipped and designed for 
              specialist applications, therefore ensuring that we provide superior service 
              levels and quick, accurate delivery.
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
          <h2 className="section-title center">Our Overland Transport Services</h2>
          
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
          <div className="value-card value-orange">
            <span className="value-icon">⚡</span>
            <h3 className="value-title">Fast & Flexible</h3>
            <p className="value-description">
              Dedicated fleet with controlled schedules for priority deliveries
            </p>
          </div>
          
          <div className="value-card value-red">
            <span className="value-icon">🎯</span>
            <h3 className="value-title">Specialized Equipment</h3>
            <p className="value-description">
              Low bed trailers, wide-bodied vehicles, and specialized transport solutions
            </p>
          </div>
          
          <div className="value-card value-amber">
            <span className="value-icon">🌍</span>
            <h3 className="value-title">Regional Expertise</h3>
            <p className="value-description">
              Expert handling of cross-border procedures across GCC and Middle East
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}