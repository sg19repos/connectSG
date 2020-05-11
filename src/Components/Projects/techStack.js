import React from "react";
import * as styles from "./project-card.css";

const TechStack = ({ TechArray }) => {
    return (
        <div className="tech-list">
            <ul>
                {TechArray.map((tech) => {
                    // const techName =
                    //     tech == "react" || tech == "express"
                    //         ? "devicon-" + tech + "-original"
                    //         : "devicon-" + tech + "-plain";
                    return (
                        <li
                            key={TechArray.indexOf(tech)}
                            className="card-techItem"
                        >
                            {/* <i className={techName}></i> */}
                            <img
                                className="tech-stack-img"
                                src={`images/languages/${tech}.png`}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TechStack;
