import React from "react";
import * as styles from "./techStackImagesStyles.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

const TechStackIcons = ({ techStack }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [popUpValue, setPopUpValue] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(!anchorEl);
        setAnchorEl(event.currentTarget);
        setPopUpValue(event.currentTarget.getElementsByTagName("img")[0].id);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
        <div className="tech-stack-main">
            {techStack.map((technology) => (
                <div
                    key={techStack.indexOf(technology)}
                    className="tech-stack-div"
                >
                    <div>
                        <Button aria-describedby={id} onClick={handleClick}>
                            <img
                                id={technology}
                                className="tech-stack-img"
                                src={`images/languages/${technology}.png`}
                            />
                        </Button>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                        >
                            <Typography
                                style={{
                                    textTransform: "upperCase",
                                    padding: "2px 10px",
                                    color: "#fff",
                                    backgroundColor: "#000",
                                    border: "1px solid #000",
                                    fontFamily: "Poppins",
                                }}
                                className={classes.typography}
                            >
                                {popUpValue}
                            </Typography>
                        </Popover>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TechStackIcons;
