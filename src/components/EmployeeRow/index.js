import React, { Component } from "react";
import "./style.css";

//build a row for each employee
export default function employeeRow({ props, idx }) {
    let first = props.name.first
    let last = props.name.last
    let phone = props.cell
    let email = props.email

    //alternate background color styling
    let style = "odd"
    if (idx % 2 === 0) { style = 'even' }

    return (
        <div className={`row row-cols-4 employeeTable ${style}`}>

            <div className="col col-sm-2">
                <p>{idx}</p>
                <hr />
                <img src={props.picture.thumbnail} alt={`${first} ${last}`} />
            </div>

            <div className="col col-sm-2 overflow-auto">
                <p>{`${first} ${last}`}</p>
            </div>

            <div className="col col-sm-2 overflow-auto">
                <p>{phone}</p>
            </div>

            <div className="col col-sm-6 overflow-auto">
                <p>{email}</p>
            </div>
        </div>

    );
}



