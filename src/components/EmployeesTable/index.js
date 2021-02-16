import React, { Component } from "react";
import uuid, { v4 } from "uuid";
import API from "../../utils/API";
import SearchForm from "../SearchForm"
import EmployeeRow from "../EmployeeRow"
import "./style.css";

export default class EmployeesTable extends Component {
    state = {
        searchEmployee: '',
        results: []
    }

    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        API.search()
            // .then(res => res.data.results.map(x => console.log(x)))
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    };

    handleInputChange = e => {
        // Getting the value and name of the input which triggered the change
        let value = e.target.value;
        const name = e.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };



    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div className="container">

                <div className="row mb-4">
                    {/* <div className="col"> */}

                    <SearchForm
                        searchEmployee={this.state.searchEmployee}
                        handleInputChange={this.handleInputChange}
                    />
                    {/* </div> */}
                </div>

                <div className="container">
                    <div className="row row-cols-5 employeeTable">
                        <div className="col-sm-2"><p>Image</p></div>
                        <div className="col-sm-2"><a>Name</a></div>
                        <div className="col-sm-2"><p>Phone</p></div>
                        <div className="col-sm-4"><p>Email</p></div>
                        <div className="col-sm-2"><p>DOB</p></div>
                    </div>

                    {this.state.results.map(x =>
                        <EmployeeRow
                            key={v4()}
                            props={x}
                        />
                    )}
                </div>
            </div>
        );
    }
}