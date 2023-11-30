// import React from "react";
// import "../styles.css"; // Import your global styles
// import image from "../images/dosomthinggreate.jpg"; // Replace with your background image

// const imageAltText = "desktop with books and laptop";

// const projectList = [
//   {
//     title: "Sticky Notes",
//     description:
//       "This a simple sticky notes app built with Javascript. It allows you to create, edit, and delete notes.",
//     url: "https://stickynotes-seven.vercel.app/",
//     image: "https://i.imgur.com/5zQ3j5M.png",
//   },
//   {
//     title: "Randome Joke Generator",
//     description:
//       "This is a simple app built with Javascript that fetches a random joke from an API and displays it.",
//     url: "https://github.com/Omcodes23/The-100-Days-0f-code/tree/bba8962d607ddd4fd128d979d5a430d15ae2670c/31",
//   },
//   {
//     title: "Esp 8266 Evil Twin",
//     description:
//       "This is Simple Deauthering Attack tool using ESP8266 and NodeMCU.",
//     url: "https://www.linkedin.com/posts/omcodes23_guys-i-made-a-evil-twin-esp-8266-deauther-activity-7077236067967336448-1HuN?utm_source=share&utm_medium=member_desktop",
//   },
//   {
//     title: "Horizontal Accordion",
//     description:
//       "This is a horizontal accordion built with HTML, CSS, and Javascript.",
//     url: "https://horizontalaccordion.vercel.app/",
//   }
// ];

// const Portfolio = () => {
//   return (
//     <section className="padding" id="portfolio">
//       <h2 style={{ textAlign: "center", color: "whitesmoke" }}>Portfolio</h2>
//       <div style={{ display: "flex",flexDirection:"column-reverse", paddingTop: "3rem" }}>
//         <img className="background" src={image} alt={imageAltText} />
//         <div className="container">
//           {projectList.map((project) => (
//             <div className="box" key={project.title} style={{ background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)", border: "2px solid white" }}>
//               <a href={project.url} target="_blank" rel="noopener noreferrer">
//                 <h3 style={{ flexBasis: "40px", color:"white" }}>{project.title}</h3>
//               </a>
//               <p className="small" style={{color:"white"}}>{project.description}</p>
//               <hr/>
//               <img src={image} alt="Sample Image" style={{ width: "100%", height: "50%", borderRadius: "0%", border:"2px solid white" }} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import React from "react";
import "../styles.css"; // Import your global styles
import image from "../images/dosomthinggreate.jpg"; // Replace with your background image
import image1 from "../images/stickynotes.png"; // Replace with your background image
import image2 from "../images/joke.png"; // Replace with your background image
import image3 from "../images/esp.png"; // Replace with your background image
import image4 from "../images/hor.png"; // Replace with your background image

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Sticky Notes",
    description:
      "This a simple sticky notes app built with Javascript. It allows you to create, edit, and delete notes.",
    url: "https://stickynotes-seven.vercel.app/",
    image: image1, // Use the variable directly, without quotes
  },
  {
         title: "Randome Joke Generator",
         description:
           "This is a simple app built with Javascript that fetches a random joke from an API and displays it.",
         url: "https://github.com/Omcodes23/The-100-Days-0f-code/tree/bba8962d607ddd4fd128d979d5a430d15ae2670c/31",
         image : image2,
       },
       {
         title: "Esp 8266 Evil Twin",
         description:
           "This is Simple Deauthering Attack tool using ESP8266 and NodeMCU.",
         url: "https://www.linkedin.com/posts/omcodes23_guys-i-made-a-evil-twin-esp-8266-deauther-activity-7077236067967336448-1HuN?utm_source=share&utm_medium=member_desktop",
         image : image3,
       },
       {
         title: "Horizontal Accordion",
         description:
           "This is a horizontal accordion built with HTML, CSS, and Javascript.",
         url: "https://horizontalaccordion.vercel.app/",
         image : image4,
       }
  // ... other projects
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center", color: "whitesmoke" }}>Portfolio</h2>
      <div style={{ display: "flex",flexDirection:"column-reverse", paddingTop: "3rem" }}>
        <img className="background" src={image} alt={imageAltText} />
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title} style={{ background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)", border: "2px solid white" }}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px", color:"white" }}>{project.title}</h3>
              </a>
              <p className="small" style={{color:"white"}}>{project.description}</p>
              <hr/>
              <img src={project.image} alt={project.title} style={{ width: "100%", height: "50%", borderRadius: "0%", border:"2px solid white" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;