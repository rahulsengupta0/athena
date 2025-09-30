import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import principles1 from "../../assets/education.jpg"; 
import principles2 from "../../assets/Uncover.jpg"; 
import "../AboutUs/Principles.css";

const Principles = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <section className="principles-section">
      <div className="principles-container">
        {/* Section Heading */}
        <div className="principles-heading animate-fadeInUp">
          <h4 className="principles-subtitle">
            Principles & Values
          </h4>
          <h1 className="principles-title">
            The foundation of Athena LMS
          </h1>
          <p className="principles-description">
            Two timeless principles that guide our learning philosophy —
            making education transformative and deeply insightful.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="principles-grid">
          {/* Principle Block */}
          {[{
            img: principles1,
            title: "Learning with a purpose",
            desc: "Learning should spark transformation — shifting perception, building clarity, and empowering learners with practical knowledge.",
            link: "Discover our journey",
          },
          {
            img: principles2,
            title: "Revealing the unseen",
            desc: "Great learning uncovers what's hidden — guiding focus, sparking curiosity, and delivering lasting understanding.",
            link: "Explore our approach",
          }].map((p, i) => (
            <div
              key={i}
              className="principle-card animate-cardIn"
              style={{ animationDelay: `${i * 0.2}s` }}
              onMouseEnter={(e) => {
                setHoverIndex(i);
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.2)";
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                const rotateX = (0.5 - y) * 8;
                const rotateY = (x - 0.5) * 8;
                e.currentTarget.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
              }}
              onMouseLeave={(e) => {
                setHoverIndex(null);
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.08)";
              }}
            >
              {/* Image */}
              <div className="card-image-container">
                <img
                  src={p.img}
                  alt={p.title}
                  className="card-image"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                {/* Shine sweep */}
                <div
                  className={`shine-effect ${hoverIndex === i ? 'shine-active' : ''}`}
                />
              </div>

              {/* Slide-up Overlay Content */}
              <div
                className={`card-overlay ${hoverIndex === i ? 'overlay-active' : ''}`}
              >
                <h2 className="overlay-title">
                  {p.title}
                </h2>
                <p className="overlay-description">
                  {p.desc}
                </p>
                <a
                  href="#"
                  className="overlay-link"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {p.link} <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;