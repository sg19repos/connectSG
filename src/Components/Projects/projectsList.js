import React from "react";
import * as projectData from "./projectList.json";
import CustomCard from "./customCard";

const ProjectList = () => {
    return projectData.data.map(datum => {
        return datum.id == "9" || datum.id == "10" ? null : (
            <CustomCard projectData={datum} />
        );
    });
};

export default ProjectList;
