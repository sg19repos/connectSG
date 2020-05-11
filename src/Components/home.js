import React from "react";
import SelfIntro from "./SelfIntroduction";
import TweetSection from "./TweetSection";
import SocialNet from "./SocialNet";
import SocialMeet from "./SocialMeet";
import Header from "./Header";
import Footer from "./Footer";
import * as homeStyles from "./homeStyles.css";

const Home = () => {
    return (
        <div className="home-styles-main">
            <TweetSection />
            <SelfIntro />
            <SocialNet />
            <SocialMeet />
            <Footer />
        </div>
    );
};

export default Home;
