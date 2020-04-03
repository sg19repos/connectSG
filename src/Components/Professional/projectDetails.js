import React from "react";
import * as styles from "./styles.css";

const ProjectDetailsCard = ({ project }) => {
    const { title, domain, techStack, functionality, description } = {
        ...project
    };
    return (
        <div className="company-card-right">
            <div className="company-card-right-row">
                <div className="company-card-right-col company-card-title">
                    {title}
                </div>
                <div className="company-card-right-col company-card-description">
                    {description}
                </div>
                <ul>
                    {functionality.map(item => {
                        return (
                            <li>
                                <div className="company-card-right-col company-card-functionality">
                                    {item}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ProjectDetailsCard;
