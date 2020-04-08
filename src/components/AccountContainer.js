import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: "",
    sortBy: ""
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

  handleSortBy = (event) => {
    this.setState({
      sortBy: event.target.value
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

  handleSort = () => {
    let filtered = this.handleFilter()
    if (this.state.sortBy === "category") {
      return [...filtered].sort((transaction1, transaction2) => {
        return transaction1.category.localeCompare(transaction2.category)
      })
    } 
    if (this.state.sortBy === "description") {
      return [...filtered].sort((transaction1, transaction2) => {
        return transaction1.description.localeCompare(transaction2.description)
      })
    }
    else {
      return filtered
    }
  }

  deleteTransaction = (deletedTransaction) => {
    fetch(`http://localhost:6001/transactions/${deletedTransaction.id}`, {
      method: "DELETE"
    })
    let updatedTransactions = this.state.transactions.filter(transaction => deletedTransaction.id !== transaction.id)
    this.setState({
      transactions: updatedTransactions
    })
  }

  render() {
    return (
      <div>
        <Search handleSearchTerm={this.handleSearchTerm} searchTerm={this.state.searchTerm} handleSortBy={this.handleSortBy}/>
        <AddTransactionForm handleSubmit={this.handleSubmit}/>
        <TransactionsList transactions={this.handleSort()} deleteTransaction={this.deleteTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
