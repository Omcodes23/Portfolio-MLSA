

import React from "react";
import "../styles.css";
import image from "../images/key.jpg"; // Replace with your background image

const Education = () => {
    return (
        <section className="education" id="education">
            <h2 className="animate__animated animate__fadeInDown" style={{color:"white"}} >Education</h2>
            <div className="timeline animate__animated animate__fadeInUp" >
                <div style={{ background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(10px)", padding:"2rem",margin:"0.1rem" ,border:"2px solid white"}}>
                <div className="timeline-item">
                    <div className="timeline-content" >
                        <h3 style={{color:"white"}}>Bachelor's of Computer Application</h3>
                        <p style={{color:"white"}}>The Maharaja Sayajirao Univarsity, 2022-2025</p>
                        <ul style={{color:"white"}}>
                            <li>Parsuing Second Year</li>
                            <li>Presentator at the Institute of Research and General</li>
                            <li>Founder of God² Open Source Tech Community</li>
                            <li>Microsoft Learn Student Ambassadors</li>
                        </ul>
                    </div>
                </div>
                {/* <div className="timeline-item">
                    <div className="timeline-content">
                        <h3 style={{color:"white"}}>Master's Degree in Software Engineering</h3>
                        <p style={{color:"white"}}>University of ABC, 2019-2021</p>
                        <ul style={{color:"white"}}>
                            <li>Course 1</li>
                            <li>Course 2</li>
                            <li>Course 3</li>
                        </ul>
                    </div>
                </div> */}
                </div>
            </div>
            <style jsx>{`
                .education {
                    background-image: url(${image});
                    padding: 50px 0;
                }

                .timeline {
                    position: relative;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .timeline:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 6px;
                    background-color: #d2d6de;
                    left: 50%;
                    margin-left: -3px;
                }

                .timeline-item {
                    margin-bottom: 50px;
                    position: relative;
                }

                .timeline-item:before {
                    content: '';
                    position: absolute;
                    top: 21px;
                    border-style: solid;
                    border-width: 15px 15px 15px 0;
                    border-color: transparent #d2d6de transparent transparent;
                }

                .timeline-item:after {
                    content: '';
                    position: absolute;
                    top: 0;

                    display: none;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 0 0 15px 15px;
                    border-color: transparent transparent #fff transparent;
                }

                .timeline-content {
                    padding: 20px;
                    background: "rgba(0, 0, 0, 0.5)", 
                    backdropFilter: "blur(10px)",
                    position: relative;
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
            `}</style>
        </section>
    );
};

export default Education;
