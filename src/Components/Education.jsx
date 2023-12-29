import React from "react";
import "../styles.css";
import image from "../images/key.jpg"; // Replace with your background image

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="animate__animated animate__fadeInDown" style={{ color: "white" }}>
        Education
      </h2>
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(10px)",
          padding: "2rem",
          margin: "1rem",
          width: "70%",
          border: "2px solid white",
        }}
      >
        <div className="timeline-item">
          <div className="timeline-content">
            <h3 style={{ color: "white" }}>Bachelor's of Computer Application</h3>
            <p style={{ color: "white" }}>The Maharaja Sayajirao University, 2022-2025</p>
            <ul style={{ color: "white" }}>
              <li>Pursuing Second Year</li>
              <li>Presenter at the Institute of Research and General</li>
              <li>Founder of God² Open Source Tech Community</li>
              <li>Microsoft Learn Student Ambassadors</li>
            </ul>
          </div>
          <div className="timeline-date">
            <p style={{ color: "white" }}>2022-2025</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .education {
          background-image: url(${image});
          padding: 50px 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        .timeline {
          display: flex;
          flex-direction: row; /* Change to row */
          justify-content: space-between; /* Add space between content and date */
          align-items: center; /* Center items vertically */
          width: 50%;
          max-width: 1200px;
          margin: 50%;
        }

        .timeline-content {
          flex: 1; /* Take remaining space */
          padding: 20px;
        //   background: rgba(0, 0, 0, 0.5);
        //   backdrop-filter: blur(10px);
          position: relative;
          border-radius: 6px;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        }

        .timeline-date {
          width: 30%; /* Adjust width for date container */
          padding: 20px;
            text-align: center;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          position: relative;
          border: 2px solid white;
          border-radius: 6px;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        
        }

        .timeline-content h3 {
          margin-top: 0;
          color: #333;
        }

        .timeline-content p {
          margin-bottom: 0;
          color: #666;
          font-size: 14px;
        }

        .timeline-content ul {
          margin-top: 10px;
          padding-left: 20px;
        }

        .timeline-content li {
          margin-bottom: 10px;
          color: #666;
          font-size: 14px;
        }

        @media (max-width: 767px) {
          .timeline {
            flex-direction: column; /* Change to column for mobile */
          }

          .timeline-date {
            width: 100%; /* Take full width in mobile */
            margin-top: 10px; /* Add margin between date and content in mobile */
          }

          .timeline-content,
          .timeline-date {
            padding: 10px;
          }

          .education {
            padding: 30px 0;
            width: 100%;
          }

          h2 {
            font-size: 24px;
          }

          .timeline-content h3 {
            font-size: 18px;
          }

          .timeline-content p,
          .timeline-content ul,
          .timeline-content li {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
