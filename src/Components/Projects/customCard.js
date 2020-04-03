import React from "react";
import OpenInNewRoundedIcon from "@material-ui/icons/OpenInNewRounded";
import LinkRoundedIcon from "@material-ui/icons/LinkRounded";
import CodeRoundedIcon from "@material-ui/icons/CodeRounded";
import TechStack from "./techStack";

const CustomCard = ({ projectData }) => {
    const { name, description, techStack, image, category } = {
        ...projectData
    };
    const imageDescription = "Image Description";

    return (
        <div className="project-custom-card">
            <div className="card-top-bar">
                <div className="card-category">{category}</div>
                <div className="card-url">
                    <LinkRoundedIcon />
                </div>
                <div className="card-source-code">
                    <CodeRoundedIcon />
                </div>
                <div className="card-open-new-window">
                    <OpenInNewRoundedIcon />
                </div>
            </div>
            <div className="card-title">{name}</div>
            <div className="card-center-content">
                <div className="card-techStack">
                    <TechStack TechArray={techStack} />
                </div>

                <div className="card-image-content">
                    <img src={image} alt={imageDescription} />
                    {/* <div className="card-description">
                        <p>{description.substr(0, 15)}...</p>
                    </div> */}
                </div>
            </div>
            {/* <div className="card-urls">
                <div className="card-description">
                    <p>{description.substr(0, 15)}...</p>
                </div>
            </div> */}
        </div>
    );
};

export default CustomCard;
