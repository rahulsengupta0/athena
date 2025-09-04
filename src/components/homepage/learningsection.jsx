import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import athenaDash from "../../assets/athenaDash.png";
import { FaBolt, FaChalkboardTeacher, FaChartBar, FaArrowRight, FaUser, FaClock, FaBook, FaChartLine } from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.96 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 90, 
      damping: 14,
      duration: 0.6
    } 
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17
    }
  }
};

const floatingCardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 100
    }
  }),
  float: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const LearningSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
        minHeight: "660px",
        background: "linear-gradient(100deg, #ddf2fa 60%, #cbf0fc 100%)",
        borderRadius: "24px",
        margin: "48px auto",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 6px 48px 0 rgba(100,140,255,0.05)",
        padding: "20px 0"
      }}
    >
      {/* Background decorative elements */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.4) 0px, transparent 40px),
                          radial-gradient(circle at 85% 30%, rgba(255, 255, 255, 0.3) 0px, transparent 30px)`,
        zIndex: 1
      }} />
      
      {/* Left panel with dashboard image and floating cards */}
      <div style={{ 
        flex: 1.2, 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        position: 'relative',
        zIndex: 2,
        padding: "0 20px"
      }}>
        {/* Floating cards in diagonal step pattern */}
        {isVisible && (
          <>
            {/* Activity Card */}
            <motion.div
              custom={0}
              initial="initial"
              animate={["animate", "float"]}
              variants={floatingCardVariants}
              style={{
                position: "absolute",
                top: "12%",
                left: "5%",
                background: "white",
                borderRadius: "12px",
                padding: "12px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                width: "120px",
                height: "60px",
                zIndex: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "6px" }}>
                <div style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "4px",
                  background: "linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "8px"
                }}>
                  <FaUser style={{ color: "white", fontSize: "10px" }} />
                </div>
                <span style={{ fontSize: "11px", color: "#718096" }}>Active</span>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "#2D3748", marginLeft: "24px" }}>13</span>
            </motion.div>

            {/* Study Time Card */}
            <motion.div
              custom={1}
              initial="initial"
              animate={["animate", "float"]}
              variants={floatingCardVariants}
              style={{
                position: "absolute",
                top: "30%",
                left: "8%",
                background: "white",
                borderRadius: "12px",
                padding: "12px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                width: "120px",
                height: "60px",
                zIndex: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "6px" }}>
                <div style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "4px",
                  background: "linear-gradient(135deg, #FF512F 0%, #F09819 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "8px"
                }}>
                  <FaClock style={{ color: "white", fontSize: "10px" }} />
                </div>
                <span style={{ fontSize: "11px", color: "#718096" }}>Study Time</span>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "#2D3748", marginLeft: "24px" }}>8.5h</span>
            </motion.div>

            {/* Courses Card */}
            <motion.div
              custom={2}
              initial="initial"
              animate={["animate", "float"]}
              variants={floatingCardVariants}
              style={{
                position: "absolute",
                top: "48%",
                left: "11%",
                background: "white",
                borderRadius: "12px",
                padding: "12px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                width: "120px",
                height: "60px",
                zIndex: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "6px" }}>
                <div style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "4px",
                  background: "linear-gradient(135deg, #0BA360 0%, #3CBA92 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "8px"
                }}>
                  <FaBook style={{ color: "white", fontSize: "10px" }} />
                </div>
                <span style={{ fontSize: "11px", color: "#718096" }}>Courses</span>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "#2D3748", marginLeft: "24px" }}>5</span>
            </motion.div>

            {/* Performance Card */}
            <motion.div
              custom={3}
              initial="initial"
              animate={["animate", "float"]}
              variants={floatingCardVariants}
              style={{
                position: "absolute",
                top: "66%",
                left: "14%",
                background: "white",
                borderRadius: "12px",
                padding: "12px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                width: "120px",
                height: "60px",
                zIndex: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "6px" }}>
                <div style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "4px",
                  background: "linear-gradient(135deg, #FF057C 0%, #8D0B93 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "8px"
                }}>
                  <FaChartLine style={{ color: "white", fontSize: "10px" }} />
                </div>
                <span style={{ fontSize: "11px", color: "#718096" }}>Performance</span>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "#2D3748", marginLeft: "24px" }}>92%</span>
            </motion.div>
          </>
        )}

        {/* Dashboard screenshot - Made bigger */}
        <motion.img
          src={athenaDash}
          alt="Athena LMS Dashboard"
          style={{
            width: "100%",
            maxWidth: 720,
            borderRadius: "20px",
            boxShadow: "0 24px 80px 0 rgba(50,80,120,0.15), 0 4px 30px 0 rgba(90,199,250,0.1)",
            position: "relative",
            zIndex: 2,
          }}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 16 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Right panel with content - Slightly narrower */}
      <motion.div 
        style={{ 
          flex: 0.9, 
          minWidth: 380, 
          maxWidth: 500, 
          padding: "0 2.6vw",
          zIndex: 2
        }}
        variants={itemVariants}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.44, type: "tween" }}
          viewport={{ once: true }}
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            margin: "7px 0 28px 0",
            color: "#1c2b3a",
            lineHeight: "1.2"
          }}
        >
          Our Modern Learning<br />Approach:
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "flex-start",
              background: "#f7eaff",
              borderRadius: "16px",
              padding: "22px 28px 22px 20px",
              boxShadow: "0 7px 32px 0 rgba(150, 80, 255, .07)",
              gap: 18,
              cursor: "pointer",
              transformOrigin: "center"
            }}
          >
            <div style={{
              minWidth: 44,
              height: 44,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "linear-gradient(135deg, #8351e5 0%, #a374ff 100%)",
              borderRadius: 12,
              fontSize: 23,
              color: "white",
              marginTop: 2
            }}>
              <FaBolt />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.32rem", marginBottom: 6, color: "#2D3748" }}>Personalized Learning Journeys</div>
              <span style={{ color: "#4A5568", fontSize: "1.06rem", lineHeight: 1.5 }}>
                Athena's AI creates unique pathways for each learner, adapting content and pacing to individual needs
              </span>
            </div>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
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
              cursor: "pointer"
            }}
          >
            <div style={{
              minWidth: 44,
              height: 44,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "linear-gradient(135deg, #4999c7 0%, #6bc2f5 100%)",
              borderRadius: 12,
              fontSize: 23,
              color: "white",
              marginTop: 2
            }}>
              <FaChalkboardTeacher />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.32rem", marginBottom: 6, color: "#2D3748" }}>Immersive Content Delivery</div>
              <span style={{ color: "#4A5568", fontSize: "1.06rem", lineHeight: 1.5 }}>
                Interactive modules, VR experiences, and gamification to enhance engagement
              </span>
            </div>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
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
              cursor: "pointer"
            }}
          >
            <div style={{
              minWidth: 44,
              height: 44,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "linear-gradient(135deg, #37ad8f 0%, #5dd1b1 100%)",
              borderRadius: 12,
              fontSize: 23,
              color: "white",
              marginTop: 2
            }}>
              <FaChartBar />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "1.32rem", marginBottom: 6, color: "#2D3748" }}>Data-Driven Insights</div>
              <span style={{ color: "#4A5568", fontSize: "1.06rem", lineHeight: 1.5 }}>
                Real-time analytics help educators refine their teaching strategies
              </span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Demo Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginTop: "40px",
            padding: "16px 32px",
            backgroundColor: "#4F46E5",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(79, 70, 229, 0.4)",
            transition: "all 0.3s ease"
          }}
        >
          View Interactive Demo
          <FaArrowRight style={{ fontSize: "14px" }} />
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default LearningSection;