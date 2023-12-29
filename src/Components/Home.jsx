import React, { useState, useEffect } from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";

import image from "../images/woman-with-tablet.jpg";
import imagejj from "../images/phonehomeimage.jpg";

const imageAltText =
  "Adult female in an office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with a Microsoft Surface Pen";

const useTypingAnimation = (texts, typingSpeed, erasingSpeed) => {
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isTyping) {
        if (currentText.length < texts[textIndex].length) {
          setCurrentText(texts[textIndex].slice(0, currentText.length + 1));
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setTextIndex((textIndex + 1) % texts.length);
            setCurrentText("");
          }, erasingSpeed);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        } else {
          setIsTyping(true);
        }
      }
    }, isTyping ? typingSpeed : 60.366);

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, textIndex, texts, typingSpeed, erasingSpeed]);

  return currentText;
};

const Home = ({ name }) => {
  const nameSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  const titles = ["Web Developer", "Community Leader", "IoT Enthusiast", "Open Source Developer"];
  const currentTitle = useTypingAnimation(titles, 100, 1000);

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" style={{ maxWidth: "100%" }} />
      <style>
        {`
        @media (max-width: 768px) {
          .background {
            background-image: url(${imagejj});
            
          }

          h1 {
            font-size: 3rem; /* Adjust the font size for h1 on smaller screens */
          }

          h2 {
            font-size: 1.5rem; /* Adjust the font size for h2 on smaller screens */
          }
        }
        `}
      </style>
      <div
        style={{
          position: "absolute",
          top: "5rem",
          left: "2rem",
          width: "30rem",
          color: "whitesmoke",
        }}
      >
        <animated.h1 style={nameSpring}>{name}</animated.h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <animated.h2>{currentTitle}</animated.h2>
          <div className="cursor" style={{ fontSize: "3rem" }}>|</div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%", display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "om",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;
