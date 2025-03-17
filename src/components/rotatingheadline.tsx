import { useState, useEffect } from "react";

const headlines = [
  "Restaurants",
  "Real Estate Agents",
  "Travel Agents",
  "Storefronts",
  "Service Providers",
  "Fitness Trainers",
  "Creators",
  "Marketers",
  "Models",
 
];

const RotatingHeadline = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="headline-container">
      {headlines.map((text, i) => (
        <h2 key={i} className={`headline ${i === index ? "active" : ""}`}>
          {text}
        </h2>
      ))}
      <style>
        {`
          .headline-container {
            position: relative;
            height: 55px;
            overflow: hidden;
          }

          .headline {
            position: absolute;
            width: 100%;
            text-align: left;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
          }

          .headline.active {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
    </div>
  );
};

export default RotatingHeadline;
