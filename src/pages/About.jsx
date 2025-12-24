import React from "react";
import "../styles/About.css";

export default function AboutUs() {
  return (
    <div className="about-page">

      {/* Banner / Header */}
      <div className="about-hero">
      </div>

      {/* Company Description */}
      <div className="about-section">
      <h1>About Us</h1>
        <p>
          Uni-Q is a leading Logistics provider in the Middle East & GCC region.
          At Unique International Logistics we offer wide array of services customized to the requirements of our valued customers.
          Our dedicated Operations team with many years of experience in Freight Industry caters to the customized requirements of our customers.
        </p>

        <ul className="about-services-icons">
          <li>✈️ Air Freight: Fast, secure air cargo solutions with real-time tracking and international delivery.</li>
          <li>🚢 Sea Freight: Cost-effective FCL & LCL options with full coordination from port to port.</li>
          <li>🚛 Land Freight: Regional transportation within the UAE and GCC with timely, secure delivery</li>
        </ul>

        <p>
          Our services include Domestic & International Freight transport solutions.
          Import and export customs clearance, Airfreight consolidation with door to airport and door to door services, 
          Ocean Freight - Full Container Load & Less than Container Load services, Sea-Air movements, Air-Air movements, 
          Sea-Shore Shipment, Transshipments, Cross Shipment arrangements, Warehousing & Distribution, 
          Overland Transportation to GCC & Middle East - FTL & LTL, Procurement & Outsourcing, Project Management, 
          Consultancy Services and many more.
        </p>

        <p>
          We take the time to understand your Company’s Logistic needs. Our personal involvement and global network ensure 
          that your shipments will meet all regional, national and international regulations to help minimize delays and 
          maximize productivity.
        </p>

        <p>
          We are proud to be able to bring added value to the logistics operating chain and, through that, to create strong 
          growth opportunities with customers and partners.
        </p>

        <p>
          As a leading International Logistics company, we deliver reliable, efficient, and affordable cargo and freight 
          solutions tailored to individuals and businesses.
        </p>
      </div>

      {/* Contact Box */}
      <div className="about-contact-box">
        <h3>Our Contacts Details</h3>

        <p>📍 <strong>Address:</strong> Saraya Building, 5th floor, King Khaled Street, Dammam, KSA</p>
        <p>📞 <strong>Contact Numbers:</strong> +234567890</p>
        <p>✉️ <strong>Email Address:</strong> sales@uniqIntl.com</p>
      </div>
    </div>
  );
}
