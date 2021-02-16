import React, { Component } from "react";
import { v4 } from "uuid";
import API from "../../utils/API";
import SearchForm from "../SearchForm"
import EmployeeTableTop from "../EmployeeTableTop"
import EmployeeRow from "../EmployeeRow"
import "./style.css";

export default class employeeTable extends Component {
    //data that will be used to modify whats displayed to the user
    state = {
        search: '',
        results: [],
        displayed: []
    }

    // When this component mounts, run the getEmployees function
    componentDidMount() {
        this.getEmployees();
    }

    // compare the search input value to the name values from the original results array
    // update the displayed array to the filtered results
    filterResults = () => {
        let x = this.state.search.toLocaleLowerCase()

        const filtered = this.state.results.filter(y => {
            y = y.name.first.toLocaleLowerCase()
            if (y.includes(x)) { return y }
        })

        this.setState({ displayed: filtered })
    }

    // get random users from the randomuser.me API
    // update the state.results to hold the results
    // pass the results into the sortAlpha function
    getEmployees = () => {
        API.search()
            .then(res => {
                res = res.data.results
                this.setState({ results: res }, () => { this.sortAlpha(res) })
            })
            .catch(err => console.log(err));
    };

    // hook react into the form element to be the single souce of truth
    // after each change, run the filterResults function
    handleInputChange = e => {
        let value = e.target.value;
        const name = e.target.name;

        this.setState({ [name]: value }, () => { this.filterResults() })
    };

    // reverse the current order of the displayed array
    reverseAlpha = () => {
        let reverse = this.state.displayed.reverse()
        this.setState({ displayed: reverse })
    }

    // sorth the passed in array alphabetically by last name
    // sort method relies on a -1, 0, or 1 to determine the relationship between 2 items.
    // the -1,0,1 value of the relationship will determine the order
    sortAlpha = (x) => {
        const sort = x.sort((a, b) => {
            a = a.name.last.toLowerCase()
            b = b.name.last.toLowerCase()
            if (a < b) { return -1 }
            else if (a > b) { return 1 }
            else if (a === b) { return 0 }
        })
        this.setState({ displayed: sort })
    }

    // build a container div housing a search form, out table header, and a row for each employee
    render() {
        return (
            <div className="container">
                <div className="row mb-4">
                    <SearchForm
                        search={this.state.search}
                        handleInputChange={this.handleInputChange}
                    />
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