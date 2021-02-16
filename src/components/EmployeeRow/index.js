import React, { Component } from "react";
import "./style.css";


export default function employeeRow({ props, idx }) {
    let first = props.name.first
    let last = props.name.last
    let phone = props.cell
    let email = props.email
    let dob = props.dob.date
    let style = "odd"

    if (idx % 2 === 0) { style = 'even' }
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
        <div className={`row row-cols-5 employeeTable ${style}`}>

            <div className="col col-sm-1">
                <p>{idx}</p>
            </div>

            <div className="col col-sm-2">
                <img src={props.picture.thumbnail} alt={`${first} ${last}`} />
            </div>

            <div className="col col-sm-2 overflow-auto">
                <p>{`${first} ${last}`}</p>
            </div>

            <div className="col col-sm-2 overflow-auto">
                <p>{phone}</p>
            </div>

            <div className="col col-sm-5 overflow-auto">
                <p>{email}</p>
            </div>
        </div>

    );
}



