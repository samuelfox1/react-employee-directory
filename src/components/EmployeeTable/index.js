import React, { Component } from "react";
import { v4 } from "uuid";
import API from "../../utils/API";
import SearchForm from "../SearchForm"
import EmployeeTableTop from "../EmployeeTableTop"
import EmployeeRow from "../EmployeeRow"
import "./style.css";

export default class employeeTable extends Component {
    state = {
        search: '',
        results: [],
        displayed: []
    }

    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = () => {
        API.search()
            // .then(res => res.data.results.map(x => console.log(x)))
            .then(res => {
                res = res.data.results
                this.setState({ results: res }, () => { this.sortAlpha(res) })
            })
            .catch(err => console.log(err));
    };

    sortAlpha = (x) => {
        // sort method relies on a -1, 0, or 1 to determine the relationship between 2 items and which order they will be sorted.
        const sort = x.sort((a, b) => {
            a = a.name.last.toLowerCase()
            b = b.name.last.toLowerCase()
            if (a < b) { return -1 }
            else if (a > b) { return 1 }
            else if (a === b) { return 0 }
        })
        this.setState({ displayed: sort })
    }

    reverseAlpha = () => {
        let reverse = this.state.results.reverse()
        this.setState({ results: reverse })
    }

    handleInputChange = e => {
        // Getting the value and name of the input which triggered the change
        let value = e.target.value;
        const name = e.target.name;
        // Updating the input's state and filter the results
        this.setState({ [name]: value }, () => { this.filterResults() })
    };

    filterResults = () => {
        let x = this.state.search.toLocaleLowerCase()
        const filtered = this.state.results.filter(y => {
            y = y.name.first.toLocaleLowerCase()
            if (y.includes(x)) { return y }
        })
        this.setState({ displayed: filtered })
    }



    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div className="container">

                <div className="row mb-4">
                    {/* <div className="col"> */}

                    <SearchForm
                        search={this.state.search}
                        handleInputChange={this.handleInputChange}
                    />
                    {/* </div> */}
                </div>
                <div className="container employeeTable">
                    <EmployeeTableTop
                        reverseAlpha={this.reverseAlpha}
                    />

                    {this.state.displayed.map((x, idx) =>
                        <EmployeeRow
                            key={v4()}
                            idx={idx + 1}
                            props={x}
                        />
                    )}
                </div>
            </div >
        );
    }
}