import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SportsEsportsRoundedIcon from "@material-ui/icons/SportsEsportsRounded";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

export default function MeetWays() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <Button variant="outlined" color="primary">
                <Link to="/friends">We know each other</Link>
            </Button> */}
            {/* <Button variant="outlined" color="primary">
                <Link to="/business">Looking for a part-time developer?</Link>
            </Button> */}
            {/* <img className="free-lancer-icon" src="./images/cater9.png" /> */}
            <img className="free-lancer-icon" src="./images/employee.png" />
            <h4 className="portfolio-text">
                {/* my portfolio here */}
                {/* <span>👉</span> */}
                <p>
                    I often work on some interesting stuff. You can check my
                    projects here
                </p>
                {/* <span>👉</span> */}
                <Button variant="contained">
                    <Link to="/portfolio">my portfolio</Link>
                </Button>
            </h4>
            {/* <Button variant="outlined" color="primary">
                <Link to="/jobs">Wanna offer a full time job?</Link>
            </Button> */}
            <div className="surprise-div">
                <div className="surprise-left">
                    <h5>
                        {/* Here's something <br /> you may like  */}
                        (Coming soon...)
                    </h5>
                </div>
                <div className="surprise-right">
                    <SportsEsportsRoundedIcon />
                </div>
            </div>
        </div>
    );
}
