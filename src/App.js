// import logo from './logo.svg';
import React from "react";
import './App.css';
import EmployeeTable from "./components/EmployeeTable";


class App extends React.Component {

  state = {
    loading: true,
    employees: [],
    copyOfEmployees: [],
    filteredEmployees: [],
    search: "",
    sortOrder: ""
  }

  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=100&nat=us";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ employees: data.results, loading: false, copyOfEmployees: data.results, filteredEmployees: data.results });
    console.log(data.results);
    console.log(this.state.employees[0].name.first);
  }

  handleInputChange = (event) => {
    event.preventDefault();

    function firstUpper(word) {
      if (word !== "")
        return word[0].toUpperCase() + word.slice(1)
      else return word = ""
    }

    const searchTerm = firstUpper(event.target.value);

    // Updating the input's state
    this.setState({ ...this.state, search: searchTerm });

    const filteredArray = this.state.copyOfEmployees.filter(function (el) {
      return el.name.first.startsWith(searchTerm, 0)
    })

    this.setState({ filteredEmployees: filteredArray })

  };

  handleSortOnClick = (event) => {
    event.preventDefault();

    if (this.state.sortOrder === '^' || this.state.sortOrder === "") {
      const filteredArray = this.state.filteredEmployees
        .sort((a, b) => (a.name.first < b.name.first) ? 1 : -1);

      this.setState({ sortOrder: 'v' });

      this.setState({ filteredEmployees: filteredArray });
    }
    else {
      const filteredArray = this.state.filteredEmployees
        .sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);

      this.setState({ sortOrder: '^' });

      this.setState({ filteredEmployees: filteredArray });

    }

  };

  render() {

    return (
      <div>
        <div className="App-header">
          <p className="App-title"> Employee Directory</p>
          <p className="App-subtitle">Enter a name in the search field to find an employee or click on the name field to sort employee directory in ascending or descending order.</p>
          {/* Input search button here... */}
          <form className="App-form">
            <input
              value={this.state.search}
              name="search"
              onChange={this.handleInputChange}
              type="text"
              onKeyPress={e => { if (e.key === 'Enter') e.preventDefault() }}
            // placeholder="Search in here..."
            />
          </form>
          {/* <button onClick={this.handleSortOnClick}>Click here to sort the list by name.</button> */}
        </div>
        <div className="App-employee-list">
          {/* employee directory here... */}
          <EmployeeTable currentSort={this.state.sortOrder === '' ? '' : this.state.sortOrder === '^' ? '^' : 'v'} employees={this.state.filteredEmployees} sortClick={this.handleSortOnClick} />
        </div>
      </div>
    );
  }
}

export default App;
