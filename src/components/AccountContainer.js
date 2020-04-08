import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then(response => response.json())
    .then(json => this.setState({transactions: json}))
  }

  handleSubmit = (event, transaction) => {
    event.preventDefault()
    fetch("http://localhost:6001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(transaction)
    })
    .then(response => response.json())
    .then(newTransaction => this.setState({transactions: [...this.state.transactions, newTransaction]}))
  }

  handleSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleFilter = () => {
    if (this.state.searchTerm !== "") {
      return this.state.transactions.filter(transaction => {
        let lowerCase = transaction.description.toLowerCase()
        return lowerCase.includes(this.state.searchTerm.toLowerCase())
      })
    } 
    else {
      return this.state.transactions
    }
  }

  render() {
    return (
      <div>
        <Search handleSearchTerm={this.handleSearchTerm} searchTerm={this.state.searchTerm}/>
        <AddTransactionForm handleSubmit={this.handleSubmit}/>
        <TransactionsList transactions={this.handleFilter()}/>
      </div>
    );
  }
}

export default AccountContainer;
