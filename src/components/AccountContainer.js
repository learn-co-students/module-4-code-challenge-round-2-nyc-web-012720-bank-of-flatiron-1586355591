import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      allTransactions: [],
      searchedTransactions: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          allTransactions: data,
          searchedTransactions: data,
        });
      });
  }

  handleSearch = (event) => {
    console.log(event.target.value);
    let searchedTransactions = this.state.allTransactions.filter((t) =>
      t.description.includes(event.target.value)
    );
    this.setState({
      searchedTransactions: searchedTransactions,
    });
  };

  postTransaction = (transaction) => {
    console.log(transaction.description);
    // fetch("http://localhost:6001/transactions")
    //   .then()
    //   .then()
  };

  render() {
    console.log(this.state.searchedTransactions);
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <AddTransactionForm postTransaction={this.postTransaction} />
        <TransactionsList transactions={this.state.searchedTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
