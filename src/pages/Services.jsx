import React from "react";
import "../styles/Services.css";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Air Freight",
    image: "/LogisticsWebsite/images/air1.jpg",
    link: "/air-freight",
  },
  {
    title: "Sea Freight",
    image: "/LogisticsWebsite/images/sea2.jpg",
    link: "/sea-freight",
  },
  {
    title: "Overland Freight",
    image: "/LogisticsWebsite/images/truck2.jpg",
    link: "/overland-freight",
  },
  {
    title: "Customs Clearance",
    image: "/LogisticsWebsite/images/common.jpg",
    link: "/customs-clearance",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      <h1 className="services-header">Our Services</h1>

      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => navigate(service.link)}
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="service-title">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}