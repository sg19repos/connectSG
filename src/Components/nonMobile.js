import React from "react";
import * as styles from "./homeStyles2.css";

const NonMobile = () => {
    return (
        <div className="non-mobile-main">
            <h3>
                <p>Thanks for checking out</p>
                <p>
                    This is work in progress & <br /> for now functional only in
                    mobile platform
                </p>
                <p>You can check this on mobile</p>
                <span>👇</span>
                <p>
                    <img src="/images/qr.gif" />
                </p>
            </h3>
        </div>
    );
};

export default NonMobile;
