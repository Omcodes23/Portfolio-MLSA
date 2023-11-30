
import React from "react";
import image from "../images/key.jpg";

const About = () => {
  const imageAltText = "purple and blue abstract background";

  const description = `I'm a student studying at Maharaja Sayajirao University. 
    I enjoy creating unique and innovative projects in creative ways.`;

  const skillsList = [
    "Responsive Web Design",
    "IOT",
    "Java",
    "Python",
    "Git",
    "JavaScript",
    "C",
    "C++",
    "HTML",
    "CSS",


  ];

  const detailOrQuote = `I am passionate about solving problems in new creative ways 
    to drive innovation. By leveraging my Web Development & Open Source experience I continually look for new 
    and better ways to make tech accessible by all.`;

  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          width: "60%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          fontFamily: "Arial, sans-serif",
          background: "rgba(0, 0, 0, 0.5)", 
          backdropFilter: "blur(15px)",
           border: "2px solid white",
           color:"white"
        }}
      >
        <h2 style={{ fontSize: "2.5rem", color: "white", margin: "0 0 2rem" }}>
          About Myself
        </h2>
        <p
          className="large"
          style={{ fontSize: "1.5rem", color: "whitesmoke", margin: "0 0 2rem" }}
        >
          {description}
        </p>
        <hr style={{ margin: "2rem 0" }} />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 8rem",
            gap: "3rem",
            // backgroundColor: "#fff",
            borderRadius: "5px",
            padding: "1rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill} style={{ color: "whitesmoke" }}>
              {skill}
            </li>
          ))}
        </ul>
        <hr style={{ margin: "2rem 0" }} />
        <p
          style={{
            fontSize: "1.5rem",
            color: "whitesmoke",
            margin: "0 3rem 1rem",
            padding: "1rem",
            
          }}
        >
          {detailOrQuote}
        </p>
      </div>
    </section>
  );
};

export default About;
