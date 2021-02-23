// import logo from './logo.svg';
import React from "react";
import './App.css';
import FetchEmployees from "./components/FetchEmployee";


class App extends React.Component {

  state = {
    loading: true,
    employees: [],
    filteredEmployees: [],
    search: ""
  }

  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=10&nat=us";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ employees: data.results, loading: false, filteredEmployees: data.results });
    console.log(data.results);
    console.log(this.state.employees[0].name.first);
  }

  handleInputChange = (event) => {
    event.preventDefault();

    // Updating the input's state
    this.setState({ search: event.target.value });
    
    // const filteredArray = this.state.filteredEmployees.filter(function (el) {
    //   return el.first === this.state.search
    // })

    // this.setState ({ filteredEmployees: filteredArray})

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
              onKeyPress={e => { if (e.key === 'Enter') e.preventDefault()}}
            // placeholder="Search in here..."
            />
          </form>
        </div>
        <div className="App-employee-list">
          {/* employee directory here... */}
          <FetchEmployees employees={this.state.filteredEmployees} />
        </div>
      </div>
    );
  }
}

export default App;
