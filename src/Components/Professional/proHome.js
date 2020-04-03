import React from "react";
import * as proData from "./companies.json";
import CompanyCard from "./companyCard";
import * as styles from "./styles.css";

const ProList = () => {
    return (
        <div className="prohome-main">
            <h4>
                4+ years of professional experience in IT services and product
                companies
            </h4>
            {proData.data.map(datum => {
                // return datum.companyName;
                return <CompanyCard companyData={datum} />;
            })}
        </div>
    );
};

export default ProList;
