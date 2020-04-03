import React from "react";
import * as TweetCSS from "./tweetStyles.css";

const TweetSection = () => {
    return (
        <div className="rt-main">
            <div className="gif-section">
                <img src="images/giphy.gif" />
            </div>
            <h5>
                {/* "Things around us are beautiful, feel them instead of thinking
                how to own them, which you can't actually" */}
                &quot;Every great developer you know got there by solving
                problems they were unqualified to solve until they actually did
                it.&quot; - Patrick McKenzie
            </h5>
        </div>
    );
};

export default TweetSection;
