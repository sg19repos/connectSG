import React, { useState } from "react";
import OpenInNewRoundedIcon from "@material-ui/icons/OpenInNewRounded";
import LinkRoundedIcon from "@material-ui/icons/LinkRounded";
import CodeRoundedIcon from "@material-ui/icons/CodeRounded";
import TechStack from "./techStack";
// import ComponentLoader from "../Preloaders/componentLoader";

import ResponsiveDialog from "./responsiveDialog";

function CustomCard({ projectData }) {
    const [imageIsReady, setImageIsReady] = useState(false);
    const {
        id,
        name,
        description,
        techStack,
        image,
        category,
        themeColor,
        fontColor,
        halfImage,
    } = {
        ...projectData,
    };
    const imageDescription = "Image Description";
    const img = new Image();
    img.src = image;
    img.onload = () => {
        // when it finishes loading, update the component state
        setImageIsReady({ imageIsReady: true });
    };

    return (
        <div className="project-custom-card" style={{ height: halfImage }}>
            <div className="card-top-bar">
                <div className="card-category">{category}</div>
                {/* <div className="card-url">
                    <LinkRoundedIcon />
                </div>
                <div className="card-source-code">
                    <CodeRoundedIcon />
                </div> */}

                <div className="card-open-new-window">
                    {/* <OpenInNewRoundedIcon /> */}
                    <ResponsiveDialog
                        name={name}
                        image={image}
                        imageDescription={imageDescription}
                        description={description}
                        techStack={techStack}
                        themeColor={themeColor}
                        fontColor={fontColor}
                        halfImage={halfImage}
                    />
                </div>
            </div>
            <div className="card-title">{name}</div>
            <div className="card-center-content">
                <div className="card-techStack">
                    <TechStack TechArray={techStack} />
                </div>

                <div className="card-image-content">
                    {!imageIsReady ? (
                        <div>
                            <img
                                style={{
                                    height: "64px",
                                    width: "64px",
                                    margin: "35% 35% 5% 35%",
                                }}
                                src="images/preloaders/loaderplanet.gif"
                            />
                            <p style={{ color: "darkkhaki" }}>loading...</p>
                        </div>
                    ) : (
                        // <img src="images/ballsloader.gif" />
                        <img src={image} alt={imageDescription} />
                    )}

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
}

export default CustomCard;
