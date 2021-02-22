// import logo from './logo.svg';
import React from "react";
import './App.css';
import FetchEmployees from "./components/FetchEmployee";


class App extends React.Component {

  state = {
    loading: true,
    employees: [],
    filteredEmployees: []
  }

  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=10&nat=us";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ employees: data.results, loading: false, filteredEmployees: data.results });
    console.log(data.results);
    console.log(this.state.employees[0].name.first);
  }

  render() {

    return (
      <div className="App-header">
        <p className="App-title"> Employee Directory</p>
        <p className="App-subtitle">Enter a name in the search field to find an employee or click on the name field to sort employee directory in ascending or descending order.</p>

        {/* Input search button here... */}
        {/* employee directory here... */}
        <FetchEmployees employees={this.state.filteredEmployees} />
      </div>
    );
  }
}

export default App;
