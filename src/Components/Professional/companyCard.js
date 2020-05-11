import React from "react";
import ProjectDetailsCard from "./projectDetails";
import DateRangeIcon from "@material-ui/icons/DateRange";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import * as styles from "./styles.css";

const CompanyCard = ({ companyData }) => {
    const { companyName, startDate, endDate, designation, projects, type } = {
        ...companyData,
    };

    const calculateDuration = (startDate, endDate) => {
        return (
            new Date(startDate).toLocaleString("default", { month: "short" }) +
            ", " +
            new Date(startDate).getFullYear() +
            " to " +
            (endDate !== "Present"
                ? new Date(endDate).toLocaleString("default", {
                      month: "short",
                  }) +
                  ", " +
                  new Date(endDate).getFullYear()
                : "Present")
        );
    };

    return (
        <div className="company-card-main">
            <div className="company-card-top"></div>
            <div className="company-card-bottom">
                <div className="company-card-left">
                    <div className="company-card-left-row">
                        <div className="company-card-left-col company-card-title">
                            <WorkOutlineIcon />
                            <div>{companyName}</div>
                        </div>
                        <div className="company-card-left-col company-card-duration">
                            <DateRangeIcon />
                            <div>{calculateDuration(startDate, endDate)}</div>
                        </div>
                        <div className="company-card-left-col company-card-designation">
                            <PermContactCalendarOutlinedIcon />
                            <div>{designation[designation.length - 1]}</div>
                        </div>
                    </div>
                </div>
                <div className="project-details-main">
                    {projects.map((project) => {
                        return (
                            <ProjectDetailsCard
                                key={project.id}
                                project={project}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;
