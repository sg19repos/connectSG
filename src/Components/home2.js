import React from "react";
import SelfIntro from "./SelfIntroduction";
import TweetSection from "./TweetSection";
import SocialNet from "./SocialNet";
import SocialMeet from "./SocialMeet";
import Footer from "./Footer";
// import Business from "./SocialMeet/business";
import * as homeStyles2 from "./homeStyles2.css";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProHome from "./Professional";

const Home = () => {
    return (
        <div className="home-styles-main">
            <div className="home-tiles-main">
                <div className="home-tile home-tile-tweet">
                    <SelfIntro />
                    <TweetSection />
                </div>
                {/* <hr /> */}
                <div className="home-tile home-tile-bottom">
                    <div className="home-tile home-tile-bottom-left">
                        <SocialMeet />
                    </div>
                    <div className="home-tile home-tile-bottom-right">
                        <div className="home-tile home-tile-bottom-right-top">
                            <SocialNet />
                        </div>
                        <div className="home-tile home-tile-bottom-right-bottom">
                            <img src="./images/desktop2.png" />
                            <h5>
                                I got my 9am to 5pm covered with full time job
                            </h5>
                            <p>
                                <span>👉🏼</span>
                                <Button variant="contained">
                                    <Link to="/experience">View Details</Link>
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="home-footer-tile">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
