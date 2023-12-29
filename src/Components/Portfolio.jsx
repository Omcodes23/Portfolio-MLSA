import React from "react";
import "../styles.css";
import image from "../images/dosomthinggreate.jpg";
import image1 from "../images/stickynotes.png";
import image2 from "../images/joke.png";
import image3 from "../images/esp.png";
import image4 from "../images/hor.png";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Sticky Notes",
    description:
      "This is a simple sticky notes app built with Javascript. It allows you to create, edit, and delete notes.",
    url: "https://stickynotes-seven.vercel.app/",
    image: image1,
  },
  {
    title: "Random Joke Generator",
    description:
      "This is a simple app built with Javascript that fetches a random joke from an API and displays it.",
    url: "https://github.com/Omcodes23/The-100-Days-0f-code/tree/bba8962d607ddd4fd128d979d5a430d15ae2670c/31",
    image: image2,
  },
  {
    title: "ESP 8266 Evil Twin",
    description:
      "This is a Simple Deauthering Attack tool using ESP8266 and NodeMCU.",
    url: "https://www.linkedin.com/posts/omcodes23_guys-i-made-a-evil-twin-esp-8266-deauther-activity-7077236067967336448-1HuN?utm_source=share&utm_medium=member_desktop",
    image: image3,
  },
  {
    title: "Horizontal Accordion",
    description:
      "This is a horizontal accordion built with HTML, CSS, and Javascript.",
    url: "https://horizontalaccordion.vercel.app/",
    image: image4,
  },
  {
    title: "Horizontal Accordion",
    description:
      "This is a horizontal accordion built with HTML, CSS, and Javascript.",
    url: "https://horizontalaccordion.vercel.app/",
    image: image4,
  },
  {
    title: "Horizontal Accordion",
    description:
      "This is a horizontal accordion built with HTML, CSS, and Javascript.",
    url: "https://horizontalaccordion.vercel.app/",
    image: image4,
  },
  {
    title: "Horizontal Accordion",
    description:
      "This is a horizontal accordion built with HTML, CSS, and Javascript.",
    url: "https://horizontalaccordion.vercel.app/",
    image: image4,
  },
  {
    title: "Horizontal Accordion",
    description:
      "This is a horizontal accordion built with HTML, CSS, and Javascript.",
    url: "https://horizontalaccordion.vercel.app/",
    image: image4,
  },
];

// ... (unchanged code above)

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center", color: "whitesmoke" }}>Portfolio</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          // paddingTop: "3rem",
        }}
      >
        <img className="background" src={image} alt={imageAltText} />
        <div className="container" style={{ display: "flex", flexWrap: "wrap",overflow:"hidden",margin:"5% 10%" }}>
          {projectList.map((project) => (
            <div
              className="box"
              key={project.title}
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(10px)",
                border: "2px solid white",
                marginBottom: "20px", // Add margin between cards
                flex: "20%", // Set each card to take up 25% of the container width
                // padding: "20%",
              }}
            >
              <style>
        {`
        @media (max-width: 768px) {
          .box {
            // width: 100%;
            // padding: 4rem;
            margin: 10%;
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
            font-size: 3rem;
            color: white;
            margin:2rem;
            padding: 1rem;
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
        
        }`}
      </style>
              
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <h3
                  style={{
                    flexBasis: "40px",
                    color: "white",
                    marginBottom: "5%", // Add margin below title
                    marginTop: "5%", // Add margin above title
                  }}
                >
                  {project.title}
                </h3>
              </a>
              <p
                className="small"
                style={{ color: "white", marginBottom: "10px" }}
              >
                {project.description}
              </p>
              <hr />
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "0%",
                  border: "2px solid white",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ... (unchanged code below)


export default Portfolio;


