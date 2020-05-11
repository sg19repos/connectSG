import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import OpenInNewRoundedIcon from "@material-ui/icons/OpenInNewRounded";
import TechStackIcons from "./techStackIcons";

export default function ResponsiveDialog({
    name,
    image,
    imageDescription,
    description,
    techStack,
    themeColor,
    fontColor,
    halfImage,
}) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                color="inherit"
                style={{ padding: "0px", textTransform: "capitalize" }}
                onClick={handleClickOpen}
            >
                {/* Open responsive dialog */}
                View details
                <OpenInNewRoundedIcon />
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{name}</DialogTitle>
                <DialogContent>
                    <DialogContentText
                        style={{
                            backgroundColor: themeColor,
                            borderColor: themeColor,
                            color: fontColor,
                        }}
                        className="responsive-dialog-description"
                    >
                        {description}
                    </DialogContentText>
                    <h5 className="tech-stack-heading">
                        This application is built using the below tech stack
                    </h5>
                    <TechStackIcons techStack={techStack} />
                    <br />
                    <img
                        style={{ height: halfImage }}
                        className="project-detail-dialog-img"
                        src={image}
                        alt={imageDescription}
                    />
                    {/* <h5 className="tech-stack-heading">
                        While the release version of code might not be open for
                        the public availability, you can access the below repo
                        for exploring the project's code
                    </h5> */}
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="primary"
                        autoFocus
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
