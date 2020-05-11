import React from "react";
import SelfIntroDesc from "./selfIntroDesc";
import SelfImage from "./selfImage";
import SelfNavigator from "./selfNavigator";
import * as styles from "./styles.css";

const SelfIntro = () => {
    return (
        <div className="self-intro-main">
            {/* <SelfIntroDesc /> */}
            <SelfImage />

            {/* <h4>Srinivas G</h4> */}
            {/* <SelfNavigator /> */}
        </div>
    );
};

export default SelfIntro;
