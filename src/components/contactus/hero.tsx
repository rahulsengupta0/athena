import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import contacthero from "../../assets/contacthhero.jpg";

export default function Hero() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowImage(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const mainRowStyle = {
    marginBottom: showImage ? "0px" : "0px",
    transition: "margin-bottom 0.5s ease",
  };

  return (
    <section className="hero-section">
      <style>{`
        .hero-section {
  width: 100%;
  min-height: 80vh;
  padding: 8vh 4vw 8vh 2vw; /* reduced left padding */
  background: linear-gradient(to bottom, #e6f2ff, #f9fbff 70%, #ffffff 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

        .hero-row {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .hero-text-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-main-row {
          display: flex;
          align-items: center;
          gap: 2px; /* Reduced gap between image and LET'S BUILD */
          position: relative;
          margin-bottom: 0; /* Controlled dynamically */
        }
        .hero-img-container {
          width: 180px;
          height: 150px;
          position: relative;
          flex-shrink: 0;
        }
        .hero-img {
          border-radius: 16px;
          box-shadow: 0 2px 12px #0001, 0 1.5px 12px #0a29311a;
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: #155944;
          display: block;
        }
        .hero-heading {
          font-family: 'Oswald', 'Impact', 'Arial Black', Arial, sans-serif;
          font-size: 7vw;
          font-weight: 700;
          color: #141d28;
          text-transform: uppercase;
          letter-spacing: -1.3px;
          line-height: 1.07;
          margin: 0;
          white-space: nowrap;
        }
        .hero-subheading {
          font-family: 'Oswald', 'Impact', 'Arial Black', Arial, sans-serif;
          font-size: 7vw; /* same as hero-heading */
          font-weight: 700;
          color: #141d28;
          text-transform: uppercase;
          letter-spacing: -1.3px;
          line-height: 1.07;
          margin: 0;
          margin-top: 0;
          max-width: 900px;
          white-space: nowrap;
        }
        .hero-form-label {
          font-family: 'Montserrat', 'Arial', sans-serif;
          font-size: 1.4rem;
          color: #334155;
          margin-top: 3vw;
          margin-bottom: 0.1vw;
          font-weight: 500;
        }
        @media (max-width: 1200px) {
          .hero-heading, .hero-subheading {
            font-size: 9vw;
          }
          .hero-img-container {
            width: 150px;
            height: 125px;
          }
        }
        @media (max-width: 900px) {
          .hero-heading, .hero-subheading {
            font-size: 11vw;
          }
          .hero-img-container {
            width: 120px;
            height: 100px;
          }
        }
        @media (max-width: 600px) {
          .hero-main-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px; /* add gap for column layout */
          }
          .hero-heading, .hero-subheading {
            font-size: 14vw;
            white-space: normal;
          }
          .hero-img-container {
            width: 100px;
            height: 80px;
            margin-bottom: 1rem;
          }
          .hero-form-label {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="hero-row">
        <div className="hero-main-row" style={mainRowStyle}>
          <AnimatePresence>
            {showImage && (
              <motion.div
                className="hero-img-container"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img src={contacthero} alt="start" className="hero-img" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.h1
            className="hero-heading"
            animate={{
              x: showImage ? 180 + 2 : 0, // 180 image width + 2px gap
              transition: { duration: 0.8, ease: "easeOut", delay: showImage ? 0.1 : 0 },
            }}
          >
            LET'S BUILD
          </motion.h1>
        </div>

        <h1 className="hero-subheading">
          SMARTER LEARNING EXPERIENCES
          <br />
          TOGETHER
        </h1>

        <div>
          <div className="hero-form-label">Fill the form below:</div>
        </div>
      </div>
    </section>
  );
}
