import React from "react";
import * as proData from "./companies.json";
import CompanyCard from "./companyCard";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import * as styles from "./styles.css";

const ProList = () => {
    return (
        <div className="prohome-main">
            <a href="/images/Resume.pdf" target="_blank">
                <FileCopyOutlinedIcon
                    style={{
                        fontSize: "60px",
                        border: "2px solid #000",
                        borderRadius: "12%",
                        boxShadow:
                            "rgba(8, 8, 8, 0.2) 5px 5px 0px 0px, rgba(0, 0, 0, 0.19) 15px 11px 20px 1px",
                    }}
                />
                <h5>Resume</h5>
            </a>
            {/* <a href="/images/Resume.pdf" target="_blank">
                Resume
            </a> */}
            <h4>
                4+ years of professional experience in IT services and product
                companies
            </h4>

            {proData.data.map((datum) => {
                // return datum.companyName;
                return <CompanyCard key={datum.id} companyData={datum} />;
            })}
        </div>
    );
};

export default ProList;
