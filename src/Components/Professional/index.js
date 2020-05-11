import React from "react";
import ProList from "./proHome";
import Header from "../Header";

const ProHome = () => {
    return (
        <div className="pro-home-title">
            <Header />
            <h5>Professional Experience and Projects</h5>
            <ProList />
        </div>
    );
};

export default ProHome;
