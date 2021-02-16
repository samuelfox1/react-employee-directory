import React, { Component } from "react";
import "./style.css";

//build the top of the table for the employee data
export default function EmployeeTable({ reverseAlpha }) {

    return (
        <div className="row row-cols-4 employeeTableTop">
            <div className="col-sm-2"><a>Image</a></div>
            <div className="col-sm-2"><a onClick={reverseAlpha}>Name</a></div>
            <div className="col-sm-2"><a>Phone</a></div>
            <div className="col-sm-6"><a>Email</a></div>
        </div>

    );
}