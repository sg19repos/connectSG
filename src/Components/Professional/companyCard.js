import React from "react";
import ProjectDetailsCard from "./projectDetails";
import * as styles from "./styles.css";

const CompanyCard = ({ companyData }) => {
    const { companyName, startDate, endDate, designation, projects, type } = {
        ...companyData
    };
    console.log("projects", {
        companyName,
        startDate,
        endDate,
        designation,
        projects,
        type
    });
    const calculateDuration = (startDate, endDate) => {
        return (
            new Date(startDate).toLocaleString("default", { month: "short" }) +
            ", " +
            new Date(startDate).getFullYear() +
            " to " +
            (endDate !== "Present"
                ? new Date(endDate).toLocaleString("default", {
                      month: "short"
                  }) +
                  ", " +
                  new Date(endDate).getFullYear()
                : "Present")
        );
    };

    // const projectDetails = () => {
    //     projects.map(project => {
    //         project.description, project.title, project.functionality;
    //     });
    // };
    // const title = projectDetails.title;
    // const description = projectDetails.description;
    // const functionality =

    // projectDetails();

    return (
        <div className="company-card-main">
            <div className="company-card-top"></div>
            <div className="company-card-bottom">
                <div className="company-card-left">
                    <div className="company-card-left-row">
                        <div className="company-card-left-col company-card-title">
                            {companyName}
                        </div>
                        <div className="company-card-left-col company-card-duration">
                            {calculateDuration(startDate, endDate)}
                        </div>
                        <div className="company-card-left-col company-card-designation">
                            {designation[designation.length - 1]}
                        </div>
                    </div>
                </div>
                <div className="project-details-main">
                    {projects.map(project => {
                        return <ProjectDetailsCard project={project} />;
                    })}
                </div>
                {/* <div className="company-card-right">
                    <div className="company-card-right-row">
                        <div className="company-card-right-col company-card-title">
                            {title}
                        </div>
                        <div className="company-card-right-col company-card-description">
                            {description}
                        </div>
                        <div className="company-card-right-col company-card-functionality"></div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default CompanyCard;
