import React, { Component } from "react";
import "./style.css";


export default function searchForm(props) {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
        <form className="col d-flex">
            <input className="form-control me-2"
                value={props.searchEmployee}
                name="searchEmployee"
                type="search"
                onChange={props.handleInputChange}
                placeholder="Search Employee"
                aria-label="Search Employee"
            />
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
    );
}

