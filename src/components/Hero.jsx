import { useEffect, useState } from "react";
import "../styles/Hero.css";

export default function Hero() {
  const base = import.meta.env.BASE_URL || '/';
  const images = [
    `${base}images/air2.jpg`,
    `${base}images/truck1.jpg`,
    `${base}images/sea1.jpg`,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero-wrapper">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`hero-${i}`}
            className={`hero-image ${index === i ? "active" : ""}`}
          />
        ))}

        <div className="slide-indicator">
          {`Slide ${index + 1} / ${images.length}`}
        </div>
      </div>

      <section className="intro-section">
        <div className="intro-content">
          <h1 className="intro-title">
            Global Shipping.<br/>Local Expertise.
          </h1>
          <p className="intro-text">
            Unique International Logistics connects businesses worldwide with
            reliable, transparent, and efficient logistics solutions.
          </p>
        </div>
      </section>
    </>
  );
}
