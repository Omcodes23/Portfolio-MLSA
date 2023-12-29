
import React from "react";
import "../styles.css"; // Import your global styles
import "../styles/header.css"
const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        overflow: "hidden",
        justifyContent: "center",
        gap: "1rem",
        background: "rgba(255,255,255,0.75)",
        padding: "0.7rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#education">Education</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
