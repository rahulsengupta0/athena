import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import principles1 from "../../assets/education.jpg"; 
import principles2 from "../../assets/Uncover.jpg"; 

const Principles = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <section
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #EAF6FB, #F5F9FC)",
        padding: "64px 0 96px 0",
        borderRadius: "50px 50px 0 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        {/* Section Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "64px",
          }}
          className="animate-fadeInUp"
        >
          <h4
            style={{
              color: "#6495ED",
              fontWeight: "500",
              textTransform: "uppercase",
              letterSpacing: "2px",
              fontSize: "14px",
              marginBottom: "16px",
            }}
          >
            Principles & Values
          </h4>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
              fontWeight: "bold",
              fontFamily: '"NeueMontreal", sans-serif',
              color: "#1E3A8A",
              lineHeight: "1.2",
              margin: "0 0 16px 0",
            }}
          >
            The foundation of Athena LMS
          </h1>
          <p
            style={{
              margin: "16px 0 0 0",
              fontSize: "18px",
              color: "#374151",
              opacity: "0.7",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: "1.6",
            }}
          >
            Two timeless principles that guide our learning philosophy —
            making education transformative and deeply insightful.
          </p>
        </div>

        {/* Principles Grid */}
        <div
          className="principles-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
          }}
        >
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
              className="animate-cardIn"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "25px",
                backgroundColor: "white",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.08)",
                transition: "transform 0.2s ease, box-shadow 0.5s ease",
                cursor: "pointer",
                animationDelay: `${i * 0.2}s`,
              }}
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
              <div style={{ overflow: "hidden", borderRadius: "25px 25px 0 0", position: "relative" }}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                {/* Shine sweep */}
                <div
                  style={{
                    position: "absolute",
                    top: "-50%",
                    left: "-50%",
                    width: "50%",
                    height: "200%",
                    background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.45), transparent)",
                    transform: hoverIndex === i ? "translateX(120%) rotate(25deg)" : "translateX(-120%) rotate(25deg)",
                    transition: "transform 0.9s ease-out, opacity 0.3s ease",
                    opacity: hoverIndex === i ? 1 : 0,
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Slide-up Overlay Content */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "28px",
                  color: "white",
                  background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.35), transparent)",
                  transform: hoverIndex === i ? "translateY(0%)" : "translateY(100%)",
                  transition: "transform 0.5s ease",
                  borderRadius: "25px",
                }}
              >
                <h2
                  style={{
                    fontSize: "26px",
                    fontWeight: "bold",
                    fontFamily: '"NeueMontreal", sans-serif',
                    color: "#ffffff",
                    margin: "0 0 12px 0",
                  }}
                >
                  {p.title}
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: "rgba(255,255,255,0.9)",
                    lineHeight: "1.7",
                    margin: "0 0 18px 0",
                  }}
                >
                  {p.desc}
                </p>
                <a
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#ffffff",
                    fontWeight: "600",
                    textDecoration: "none",
                    transition: "transform 0.3s ease",
                  }}
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

      {/* Animations & Responsive Styles */}
      <style>{`
        @media (min-width: 768px) {
          .principles-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 48px !important;
          }
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes cardIn {
          from {
            transform: translateY(50px) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-cardIn {
          animation: cardIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Principles;
