import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
  state = {
    transactions: [],
    queriedTransactions: [],
    searchQuery: "",
  };

  componentDidMount() {
    return fetch(`http://localhost:6001/transactions`)
      .then((resp) => resp.json())
      .then((resp) => this.setState({ transactions: resp }));
  }

  handleSubmit = (newTransaction) => {
    fetch(`http://localhost:6001/transactions`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newTransaction),
    }).then((newTransaction) => console.log);
  };

  handleSearch = (e) => {
    let query = e.target.value;
    let results = this.state.transactions.filter((transaction) => {
      return (
        transaction.description.toString().includes(query.toString()) &&
        transaction
      );
    });
    return this.setState({ transactions: results });
  };

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer
          transactions={this.state.transactions}
          handleSubmit={this.handleSubmit}
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}

export default App;
