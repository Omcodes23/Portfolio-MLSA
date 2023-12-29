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
        className="about-container"
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul>
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p>{detailOrQuote}</p>
      </div>

      {/* Media Query for Responsive Styling on Mobile Devices */}
      <style>
        {`
          .about-container {
            width: 40%;
            padding: 4rem;
            margin: auto;
            text-align: center;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            font-family: Arial, sans-serif;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(15px);
            border: 2px solid white;
            color: white;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            justify-content: center;
          }

          h2 {
            font-size: 2.5rem;
            color: white;
            margin: 0 0 2rem;
          }

          p.large {
            font-size: 1.5rem;
            color: whitesmoke;
          }

          ul {
            columns: 2;
            font-size: 1.25rem;
            margin: 0;
            gap: 3rem;
            padding: 2rem;
            border-radius: 5px;
            padding: 1rem;
            list-style: none;
          }

          hr {
            margin: 2rem 0;
          }

          li {
            color: whitesmoke;
          }

          /* Media Query for Responsive Styling on Mobile Devices */
          @media (max-width: 768px) {
            .about-container {
              width: 70%;
              padding: 2rem;
              font-size: 1.2rem;
            }

            h2 {
              font-size: 2rem;
            }

            p.large {
              font-size: 1.2rem;
            }

            ul {
              columns: 1;
              font-size: 1rem;
              gap: 1.5rem;
              padding: 1rem;
            }

            hr {
              margin: 1rem 0;
            }

            li {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;
