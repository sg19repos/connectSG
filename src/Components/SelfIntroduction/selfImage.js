import React, { useState } from "react";
import * as imageStyles from "./styles.css";

const SelfImage = () => {
    const [imageIsReady, setImageIsReady] = useState(false);
    const img = new Image();
    img.src = "/images/profile/profile2-min.jpg";
    img.onload = () => {
        // when it finishes loading, update the component state
        setImageIsReady({ imageIsReady: true });
    };
    {
        return imageIsReady ? (
            <>
                <div className="self-image-main"></div>
                <h4>Srinivas G</h4>
            </>
        ) : (
            <div>
                <img
                    style={{
                        height: "51px",
                        width: "64px",
                        margin: "15% 35% 0% 35%",
                    }}
                    src="images/preloaders/loadercat.gif"
                />
                <p>I'm on my way, it's not me</p>
            </div>
        );
    }
};

export default SelfImage;
