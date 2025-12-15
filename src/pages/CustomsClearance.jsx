import React from "react";
import { Link } from "react-router-dom";
import "../styles/CustomsClearance.css";

export default function CustomsClearance() {
  const base = import.meta.env.BASE_URL || '/';
  const handleQuoteClick = () => {
    window.location.href = "/quote";
  };

  return (
    <div className="customs-page">
      {/* Banner Section */}
      <div className="customs-banner">
        <div
          className="banner-background"
          style={{ backgroundImage: `url(${base}images/customs.jpg)` }}
        />
        <div className="banner-overlay" />

        <div className="banner-content">
          <h1 className="banner-title">Customs Clearance & Brokerage</h1>
          <p className="banner-subtitle">
            Professional Customs Brokerage & Documentation Services
          </p>
          <Link to="/services" className="back-link">← Back to Services</Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="customs-container">
        {/* Intro Card */}
        <div className="intro-card">
          <h2 className="section-title">Customs Clearance and Brokerage</h2>

          <div className="intro-content">
            <p>
              We believe in proving total logistics, door to door. In that spirit, our Customs Brokerage Operations team assist our clients with their import Customs clearance and supply chain challenges. Our clients’ shipments can be customs cleared from all airports, seaports and borders in the Kingdom.
            </p>

            <p>
              Our staffs are trained to provide valuable assistance to importers in highly technical areas of valuation and product classification, as well as with various governmental regulatory requirements for various Gateways.
            </p>

            <p>
              Our focus is to prepare compliant import and export transactions and to maintain the highest level of integrity with all governmental agencies on behalf of our clients.

            </p>

            <p>
              We also support all Customs Clearance documentation needs including Saber.
            </p>
          </div>

          <div className="cta-wrapper">
            <button className="cta-button" onClick={handleQuoteClick}>
              Get a Quote
            </button>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="value-props">
          <div className="value-card value-purple">
            <span className="value-icon">📄</span>
            <h3 className="value-title">Documentation</h3>
            <p className="value-description">
              Complete compliance and documentation support for all import/export needs.
            </p>
          </div>

          <div className="value-card value-blue">
            <span className="value-icon">🛃</span>
            <h3 className="value-title">Expert Clearance</h3>
            <p className="value-description">
              Trained specialists handling valuation, classification and regulations.
            </p>
          </div>

          <div className="value-card value-indigo">
            <span className="value-icon">🌍</span>
            <h3 className="value-title">Nationwide Coverage</h3>
            <p className="value-description">
              Clearance at airports, seaports, and borders across the Kingdom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
