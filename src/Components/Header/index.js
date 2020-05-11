import React from "react";
// import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as styles from "./styles.css";
import KeyboardBackspaceRoundedIcon from "@material-ui/icons/KeyboardBackspaceRounded";

const Header = () => {
    return (
        <div className="header-main">
            <Link to="/">
                <KeyboardBackspaceRoundedIcon className="header-home-icon" />
            </Link>
        </div>
    );
};

export default Header;
