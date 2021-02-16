import React, { Component } from "react";
import "./style.css";


export default function employeeRow({ props }) {
    let first = props.name.first
    let last = props.name.last
    let phone = props.cell
    let email = props.email
    let dob = props.dob.date
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
        <div className="row row-cols-5 employeeTable">

            <div className="col col-sm-2">
                <img src={props.picture.thumbnail} alt={`${first} ${last}`} />
            </div>

            <div className="col col-sm-2 overflow-auto">
                <p>{`${first} ${last}`}</p>
            </div>

            <div className="col col-sm-2 overflow-auto">
                <p>{phone}</p>
            </div>

            <div className="col col-sm-4 overflow-auto">
                <p>{email}</p>
            </div>

            <div className="col col-sm-2">
                {/* <p>{dob}</p> */}
            </div>
        </div>

    );
}

