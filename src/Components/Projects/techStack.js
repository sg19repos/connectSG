import React from "react";
import * as styles from "./project-card.css";

const TechStack = ({ TechArray }) => {
    const { TechList } = { ...TechArray };

    return (
        <div className="tech-list">
            <ul>
                {TechArray.map(tech => {
                    const techName =
                        tech == "react" || tech == "express"
                            ? "devicon-" + tech + "-original"
                            : "devicon-" + tech + "-plain";
                    return (
                        <li className="card-techItem">
                            <i className={techName}></i>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TechStack;
