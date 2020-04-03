import React from "react";
import ProjectList from "./projectsList";
import * as styles from "./styles.css";

const Projects = () => {
    return (
        <div className="projects-home">
            <h5>List of Projects</h5>
            <ProjectList />
        </div>
    );
};

export default Projects;
