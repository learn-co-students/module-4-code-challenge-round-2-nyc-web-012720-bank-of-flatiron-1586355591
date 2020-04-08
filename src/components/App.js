import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
  state = {
    transactions: [],
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

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer
          transactions={this.state.transactions}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
