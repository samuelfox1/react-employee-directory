import React, { Component } from "react";
import "./style.css";

export default function EmployeeTable({ reverseAlpha }) {

    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
        <div className="row row-cols-5 employeeTableTop">
            <div className="col-sm-1"><a></a></div>
            <div className="col-sm-2"><a>Image</a></div>
            <div className="col-sm-2"><a onClick={reverseAlpha}>Name</a></div>
            <div className="col-sm-2"><a>Phone</a></div>
            <div className="col-sm-5"><a>Email</a></div>
        </div>

    );
}