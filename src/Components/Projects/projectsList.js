import React from "react";
import * as projectData from "./projectList.json";
import CustomCard from "./customCard";

const ProjectList = () => {
    return projectData.data.map((datum) => {
        return datum.id == "7" ? null : (
            <CustomCard key={datum.id} projectData={datum} />
        );
    });
};

export default ProjectList;
