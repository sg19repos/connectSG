import React from "react";
import * as styles from "./styles.css";

const SocialNet = () => {
    return (
        <div className="social-net-main">
            <h5>I'm social via </h5>
            {/* <span>👇</span> */}
            <div className="social-net-icons-main">
                <a className="social-net" href="https://twitter.com/SreeG19">
                    <img
                        className="social-net-icons twitter-icon-1"
                        src="./images/icons/twitter.png"
                        alt="twitter"
                    />
                </a>

                <a
                    className="social-net"
                    href="https://www.linkedin.com/in/srinivas-govindu-a42b8b74/"
                >
                    <img
                        className="social-net-icons linkedIn-icon-1"
                        src="./images/icons/linkedin.png"
                        alt="linkedin"
                    />
                </a>
                <a className="social-net" href="skype:srinivasgovindu94?chat">
                    <img
                        className="social-net-icons skype-icon-1"
                        src="./images/icons/skype.png"
                        alt="skype"
                    />
                </a>
                <a
                    className="social-net"
                    target="_blank"
                    href="https://mail.google.com/mail/?subject=Nice to meet you&view=cm&fs=1&tf=1&to=sg19repos@gmail.com&body=Hi there!"
                >
                    <img
                        className="social-net-icons gmail-icon-1"
                        src="./images/icons/gmail.png"
                        alt="gmail"
                    />
                </a>
                <a
                    className="social-net"
                    target="_blank"
                    href="intent://send/919885761260#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end"
                >
                    <img
                        className="social-net-icons whatsapp-icon-1"
                        src="./images/icons/whatsapp.png"
                        alt="whatsapp"
                    />
                </a>
                {/* <a className="social-net" href="https://github.com/sg19repos">
                    <img
                        className="social-net-icons github-icon-1"
                        src="./images/icons/github.png"
                        alt="github"
                    />
                </a> */}
            </div>
        </div>
    );
};

export default SocialNet;
