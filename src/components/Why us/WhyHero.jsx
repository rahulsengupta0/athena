import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EnhancedAthenaHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const colors = {
    skyLight: "#E8F6FF",
    skyMedium: "#BEE8FF",
    skyDark: "#70C8FF",
    primary: "#1EA7FF",
    accent: "#FF7A59",
    white: "#FFFFFF",
    textDark: "#083044",
    textLight: "#5D6A75",
    gradient: "linear-gradient(135deg, #E8F6FF 0%, #BEE8FF 50%, #70C8FF 100%)"
  };

  const stats = [
    { number: 98, suffix: "%", label: "Completion Rate" },
    { number: 50, suffix: "+", label: "Active Courses" },
    { number: 70, suffix: "+", label: "Auto Assessments" },
    { number: 100, suffix: "+", label: "Happy Learners" }
  ];

  // Floating particles component
  const FloatingParticles = () => {
    const particles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 5,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    }));

    return (
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 1,
        pointerEvents: "none"
      }}>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            style={{
              position: "absolute",
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${colors.primary}20, transparent 70%)`,
              opacity: 0.4
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  // Background geometric shapes
  const BackgroundShapes = () => {
    return (
      <>
        {/* Large circle */}
        <motion.div 
          style={{
            position: "absolute",
            top: "15%",
            right: "8%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            border: `2px dashed ${colors.primary}20`,
            zIndex: 1
          }}
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Triangle */}
        <motion.div 
          style={{
            position: "absolute",
            bottom: "20%",
            left: "10%",
            width: "200px",
            height: "200px",
            borderLeft: `2px dashed ${colors.accent}20`,
            borderRight: `2px dashed ${colors.accent}20`,
            borderBottom: `2px dashed ${colors.accent}20`,
            zIndex: 1
          }}
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Squares */}
        <motion.div 
          style={{
            position: "absolute",
            top: "25%",
            left: "15%",
            width: "120px",
            height: "120px",
            border: `2px dashed ${colors.primary}15`,
            zIndex: 1
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          style={{
            position: "absolute",
            bottom: "30%",
            right: "20%",
            width: "80px",
            height: "80px",
            border: `2px dashed ${colors.accent}15`,
            zIndex: 1
          }}
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Connection lines */}
        <svg width="100%" height="100%" style={{position: "absolute", top: 0, left: 0, zIndex: 1}}>
          <motion.line
            x1="15%"
            y1="30%"
            x2="25%"
            y2="40%"
            stroke={colors.primary}
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="80%"
            y1="25%"
            x2="70%"
            y2="35%"
            stroke={colors.accent}
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1="20%"
            y1="65%"
            x2="30%"
            y2="75%"
            stroke={colors.primary}
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </>
    );
  };

  // Glowing orbs
  const GlowingOrbs = () => {
    return (
      <>
        <motion.div 
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${colors.primary}10, transparent 70%)`,
            filter: "blur(40px)",
            zIndex: 1
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          style={{
            position: "absolute",
            bottom: "15%",
            left: "5%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${colors.accent}08, transparent 70%)`,
            filter: "blur(30px)",
            zIndex: 1
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div 
          style={{
            position: "absolute",
            top: "60%",
            left: "5%",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${colors.primary}05, transparent 70%)`,
            filter: "blur(25px)",
            zIndex: 1
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div 
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${colors.accent}06, transparent 70%)`,
            filter: "blur(30px)",
            zIndex: 1
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </>
    );
  };

  return (
    <div style={{
      width: "100%",
      background: colors.gradient,
      padding: "100px 0 0 0",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Inter', 'Poppins', 'Segoe UI', sans-serif",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Background geometric shapes */}
      <BackgroundShapes />
      
      {/* Glowing orbs */}
      <GlowingOrbs />

      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 40px",
        position: "relative",
        zIndex: 2
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "80px"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(255, 255, 255, 0.9)",
              padding: "12px 24px",
              borderRadius: "50px",
              marginBottom: "24px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 24px rgba(8, 48, 68, 0.08)"
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill={colors.primary} />
            </svg>
            <span style={{ 
              fontSize: "15px", 
              fontWeight: "600", 
              color: colors.primary 
            }}>
              AI-Powered Learning Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
              fontWeight: "800",
              lineHeight: "1.15",
              color: colors.textDark,
              marginBottom: "28px",
              background: "linear-gradient(135deg, #083044 0%, #1EA7FF 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              maxWidth: "900px"
            }}
          >
            The Future of Learning <span style={{ color: colors.primary }}>Starts Here</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              lineHeight: "1.6",
              color: colors.textLight,
              marginBottom: "50px",
              maxWidth: "800px"
            }}
          >
            Transform your learning experience with our AI-powered platform designed 
            for educators and organizations worldwide. Create, assess, and track progress 
            with cutting-edge technology.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "80px",
            flexWrap: "wrap",
            marginBottom: "60px"
          }}
        >
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ flex: "1 1 500px" }}
          >
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "30px",
                padding: "40px",
                background: "rgba(255, 255, 255, 0.7)",
                borderRadius: "24px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 15px 35px rgba(8, 48, 68, 0.12)",
                marginBottom: "50px",
                border: "1px solid rgba(255, 255, 255, 0.6)"
              }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 + idx * 0.1 }}
                  style={{ 
                    textAlign: "center",
                    padding: "15px"
                  }}
                >
                  <motion.div
                    style={{
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: "800",
                      color: colors.primary,
                      marginBottom: "12px"
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      delay: 1.5 + idx * 0.2 
                    }}
                  >
                    {stat.number}{stat.suffix}
                  </motion.div>
                  <div style={{
                    fontSize: "16px",
                    color: colors.textLight,
                    fontWeight: "600"
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
                fontWeight: "700",
                color: colors.textDark,
                marginBottom: "24px"
              }}
            >
              Transforming Education Through Innovation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.2rem)",
                lineHeight: "1.7",
                color: colors.textLight,
                marginBottom: "50px",
                maxWidth: "600px"
              }}
            >
              Athena LMS combines cutting-edge AI technology with intuitive design to deliver 
              immersive learning experiences. Create engaging courses, automate assessments, 
              and track progress with our next-generation platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              style={{ 
                display: "flex", 
                gap: "20px", 
                marginBottom: "40px", 
                flexWrap: "wrap" 
              }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 12px 30px rgba(30, 167, 255, 0.4)" 
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, #0E8DE3 100%)`,
                  color: colors.white,
                  padding: "20px 40px",
                  borderRadius: "14px",
                  border: "none",
                  fontSize: "17px",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 10px 28px rgba(30, 167, 255, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15.59 12.26L9.99999 15.36L9.99999 9.16001L15.59 12.26Z" fill="white"/>
                </svg>
                Start Free Trial
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(30, 167, 255, 0.1)" 
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  backgroundColor: "transparent",
                  color: colors.textDark,
                  padding: "20px 40px",
                  borderRadius: "14px",
                  border: `2px solid ${colors.primary}40`,
                  fontSize: "17px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={colors.textDark} strokeWidth="2"/>
                  <path d="M12 16V12H8" stroke={colors.textDark} strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ 
              flex: "1 1 500px", 
              position: "relative",
              perspective: "1000px"
            }}
          >
            <motion.div
              initial={{ rotateY: 15, rotateX: -5 }}
              animate={{ rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              style={{
                width: "100%",
                height: "520px",
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "28px",
                padding: "35px",
                boxShadow: "0 30px 60px rgba(8, 48, 68, 0.18)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.6)",
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                overflow: "hidden",
                position: "relative"
              }}
            >
              {/* Dashboard header */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px"
              }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <div style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    backgroundColor: colors.accent
                  }}></div>
                  <div style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    backgroundColor: colors.primary
                  }}></div>
                  <div style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    backgroundColor: colors.skyDark
                  }}></div>
                </div>
                <div style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: colors.textLight
                }}>
                  Athena Dashboard
                </div>
              </div>

              {/* Course progress */}
              <div style={{
                padding: "25px",
                background: "rgba(190, 232, 255, 0.3)",
                borderRadius: "18px",
                border: "1px solid rgba(190, 232, 255, 0.5)"
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "18px"
                }}>
                  <div style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: colors.textDark
                  }}>
                    AI in Education
                  </div>
                  <div style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: colors.primary
                  }}>
                    72% Complete
                  </div>
                </div>
                <div style={{
                  width: "100%",
                  height: "10px",
                  borderRadius: "5px",
                  backgroundColor: "rgba(190, 232, 255, 0.5)",
                  overflow: "hidden"
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "72%" }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    style={{
                      height: "100%",
                      background: `linear-gradient(90deg, ${colors.primary}, ${colors.skyDark})`,
                      borderRadius: "5px"
                    }}
                  />
                </div>
              </div>

              {/* Recent activity */}
              <div>
                <div style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: colors.textDark,
                  marginBottom: "18px"
                }}>
                  Recent Activity
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  {[
                    { course: "Machine Learning Basics", time: "2 hours ago", progress: 45 },
                    { course: "Data Visualization", time: "5 hours ago", progress: 80 },
                    { course: "Neural Networks", time: "1 day ago", progress: 30 }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        padding: "15px",
                        background: "rgba(255, 255, 255, 0.7)",
                        borderRadius: "14px",
                        border: "1px solid rgba(190, 232, 255, 0.3)"
                      }}
                    >
                      <div style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "12px",
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.skyDark})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: colors.white,
                        fontWeight: "600",
                        fontSize: "16px"
                      }}>
                        {item.course[0]}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          color: colors.textDark
                        }}>
                          {item.course}
                        </div>
                        <div style={{
                          fontSize: "14px",
                          color: colors.textLight
                        }}>
                          {item.time}
                        </div>
                      </div>
                      <div style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: colors.primary
                      }}>
                        {item.progress}%
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick actions */}
              <div style={{
                display: "flex",
                gap: "15px",
                marginTop: "auto"
              }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    flex: 1,
                    padding: "15px",
                    background: colors.primary,
                    color: colors.white,
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  New Course
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    flex: 1,
                    padding: "15px",
                    background: "transparent",
                    color: colors.textDark,
                    border: `1px solid ${colors.primary}40`,
                    borderRadius: "12px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer"
                  }}
                >
                  Generate Quiz
                </motion.button>
              </div>
            </motion.div>

            {/* Floating elements around dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              style={{
                position: "absolute",
                top: "-25px",
                right: "-25px",
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${colors.accent}20, transparent 70%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: -1
              }}
            >
              <div style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                background: colors.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colors.white,
                fontWeight: "600",
                fontSize: "16px"
              }}>
                🔥
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "-20px",
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${colors.primary}20, transparent 70%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: -1
              }}
            >
              <div style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                background: colors.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colors.white,
                fontWeight: "600",
                fontSize: "14px"
              }}>
                🚀
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Early Adopters section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          style={{
            textAlign: "center",
            padding: "40px 0",
            marginTop: "40px"
          }}
        >
          <div style={{
            fontSize: "16px",
            color: colors.textLight,
            marginBottom: "30px",
            fontWeight: "500"
          }}>
            Join our community of early adopters
          </div>
          <motion.div 
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              background: "rgba(255, 255, 255, 0.7)",
              padding: "30px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 30px rgba(8, 48, 68, 0.1)"
            }}
          >
            {["Innovative Educators", "Tech Enthusiasts", "Forward-Thinking Organizations", "Education Pioneers"].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                style={{
                  padding: "15px 25px",
                  background: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "15px",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: colors.textDark,
                  boxShadow: "0 5px 15px rgba(8, 48, 68, 0.05)"
                }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 8px 20px rgba(8, 48, 68, 0.1)" 
                }}
              >
                {type}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Full-width curved bottom */}
      <div style={{ 
        width: "100%", 
        marginTop: "auto",
        position: "relative",
        zIndex: 3
      }}>
        <svg style={{ display: "block", width: "100%", height: "120px" }} viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0V80.1385C127.5 80.1385 255 33.4881 382.5 33.4881C510 33.4881 637.5 80.1385 765 80.1385C892.5 80.1385 1020 33.4881 1147.5 33.4881C1275 33.4881 1402.5 80.1385 1530 80.1385V0H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default EnhancedAthenaHero;