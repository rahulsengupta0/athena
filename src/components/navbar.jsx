import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll <= 0) {
        setShow(true);
        setLastScroll(0);
        return;
      }
      if (currentScroll > lastScroll) {
        // Scrolling Down
        setShow(false);
      } else {
        // Scrolling Up
        setShow(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#6fa4f7",
        padding: "10px 24px",
        borderRadius: "20px",
        fontFamily: "inherit",
        position: "fixed",
        top: "16px",
        left: "16px",
        right: "16px",
        zIndex: 100,
        transition: "transform 0.3s ease, opacity 0.3s ease",
        transform: show ? "translateY(0)" : "translateY(-130%)",
        opacity: show ? 1 : 0,
        boxShadow: "0 4px 16px 0 rgba(0,0,0,0.06)",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "2rem", color: "#fff" }}>
        ATHENA LMS
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <a href="/" style={navLinkStyle}>About Us</a>
        <a href="/" style={navLinkStyle}>Features</a>
        <a href="/" style={navLinkStyle}>Why Us</a>
        <a href="/" style={navLinkStyle}>FAQ</a>
        <a href="/" style={navLinkStyle}>Contact Us</a>
        <a
          href="/"
          style={{
            background: "#fff",
            color: "#3182f6",
            padding: "8px 26px",
            borderRadius: "7px",
            fontWeight: "600",
            fontSize: "1.2rem",
            textDecoration: "none",
            marginLeft: "12px",
          }}
        >
          Login
        </a>
      </div>
    </nav>
  );
};

const navLinkStyle = {
  color: "#fff",
  fontWeight: "600",
  fontSize: "1.2rem",
  textDecoration: "none",
};

export default Navbar;
