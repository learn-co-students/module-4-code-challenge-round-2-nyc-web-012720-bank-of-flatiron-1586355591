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
    this.fetchTransactions();
  }

  fetchTransactions = () => {
    return fetch(`http://localhost:6001/transactions`)
      .then((resp) => resp.json())
      .then((resp) => this.setState({ transactions: resp }));
  };

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
        transaction.description
          .toString()
          .toUpperCase()
          .includes(query.toString().toUpperCase()) && transaction
      );
    });
    return results.length > 1
      ? this.setState({ transactions: results })
      : this.fetchTransactions();
  };

  handleDelete = (transaction) => {
    let newTransactions = this.state.transactions.filter(
      (transaction) => transaction.id !== transaction
    );

    console.log("BOUTTA DELETE SUMN", newTransactions);
    fetch(`http://localhost:6001/transactions/${transaction}`, {
      method: "DELETE",
    });

    return this.setState({ transactions: newTransactions });
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
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
