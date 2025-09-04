import React from "react";
import { motion } from "framer-motion";
import athenaDash from "../../assets/athenaDash.png";
import { FaBolt, FaChalkboardTeacher, FaChartBar } from "react-icons/fa";

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 14 } },
};

const LearningSection = () => (
  <section
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      minHeight: "660px",
      background: "linear-gradient(100deg, #ddf2fa 60%, #cbf0fc 100%)",
      borderRadius: "24px",
      margin: "48px auto",
      overflow: "visible",
      position: "relative",
      boxShadow: "0 6px 48px 0 rgba(100,140,255,0.05)"
    }}
  >
    {/* Dashboard image panel */}
    <div style={{ flex: 1.1, display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
      {/* Floating screenshot */}
      <motion.img
        src={athenaDash}
        alt="Athena LMS Dashboard"
        style={{
          width: "96%",
          maxWidth: 670,
          margin: "0 0 0 2vw",
          borderRadius: "26px",
          boxShadow: "0 14px 66px 0 rgba(50,80,120,0.09), 0 2px 24px 0 rgba(90,199,250,0.05)",
          position: "relative",
          zIndex: 2,
        }}
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, type: "spring", stiffness: 60, damping: 16 }}
        viewport={{ once: true }}
      />
    </div>

    {/* Approach panel */}
    <div style={{ flex: 1, minWidth: 430, maxWidth: 580, padding: "0 2.6vw" }}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.44, type: "tween" }}
        viewport={{ once: true }}
        style={{
          fontSize: "2.7rem",
          fontWeight: 700,
          margin: "7px 0 28px 0",
          color: "#1c2b3a",
          lineHeight: "1.2"
        }}
      >
        Our Modern Learning<br />Approach:
      </motion.h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          style={{
            display: "flex",
            alignItems: "flex-start",
            background: "#f7eaff",
            borderRadius: "16px",
            padding: "22px 28px 22px 20px",
            boxShadow: "0 7px 32px 0 rgba(150, 80, 255, .07)",
            gap: 18,
          }}
        >
          <div style={{
            minWidth: 44,
            height: 44,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fbe8ff",
            borderRadius: 12,
            fontSize: 23,
            color: "#8351e5",
            marginTop: 2
          }}>
            <FaBolt />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "1.32rem", marginBottom: 6 }}>Personalized Learning Journeys</div>
            <span style={{ color: "#222", opacity: 0.8, fontSize: "1.06rem" }}>
              Athena's AI creates unique pathways for each learner, <br />
              adapting content and pacing to individual needs
            </span>
          </div>
        </motion.div>
        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.11 }}
          style={{
            display: "flex",
            alignItems: "flex-start",
            background: "#eaf7ff",
            borderRadius: "16px",
            padding: "22px 28px 22px 20px",
            boxShadow: "0 7px 32px 0 rgba(80, 170, 255, .07)",
            gap: 18,
          }}
        >
          <div style={{
            minWidth: 44,
            height: 44,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#e1f5ff",
            borderRadius: 12,
            fontSize: 23,
            color: "#4999c7",
            marginTop: 2
          }}>
            <FaChalkboardTeacher />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "1.32rem", marginBottom: 6 }}>Immersive Content Delivery</div>
            <span style={{ color: "#222", opacity: 0.8, fontSize: "1.06rem" }}>
              Interactive modules, VR experiences, and gamification<br />
              to enhance engagement
            </span>
          </div>
        </motion.div>
        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          style={{
            display: "flex",
            alignItems: "flex-start",
            background: "#eafff8",
            borderRadius: "16px",
            padding: "22px 28px 22px 20px",
            boxShadow: "0 7px 32px 0 rgba(80, 255, 212, .07)",
            gap: 18,
          }}
        >
          <div style={{
            minWidth: 44,
            height: 44,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#e0fff4",
            borderRadius: 12,
            fontSize: 23,
            color: "#37ad8f",
            marginTop: 2
          }}>
            <FaChartBar />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "1.32rem", marginBottom: 6 }}>Data-Driven Insights</div>
            <span style={{ color: "#222", opacity: 0.8, fontSize: "1.06rem" }}>
              Real-time analytics help educators refine their<br />
              teaching strategies
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LearningSection;
