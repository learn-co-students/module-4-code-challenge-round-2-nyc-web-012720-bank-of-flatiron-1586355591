import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = 'http://localhost:6001/transactions'

class AccountContainer extends Component {
  state = {
    transactions: [], 
    displayTransactions: []
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({
      transactions: data,
      displayTransactions: data
    }))
  }

  handleSearchBar = (e) => {
    const searchTerm = e.target.value

    const queriedTransactions = this.state.transactions.filter(transaction => transaction.description.includes(searchTerm))
    this.setState({
      displayTransactions: queriedTransactions
    })
  }

  handleAddTransaction = (data) => {
    this.setState({
      displayTransactions: [...this.state.displayTransactions, data]
    }, () => console.log('Success', data))
  }

  render() {
    return (
      <div>
        <Search handleSearchBar={this.handleSearchBar}/>
        <AddTransactionForm handleAddTransaction={this.handleAddTransaction}/>
        <TransactionsList displayTransactions={this.state.displayTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
