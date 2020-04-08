import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort"

class AccountContainer extends Component {
  
  state = {
    transactions: [],
    searchText: "",
    sortBy: "none"
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(response => response.json())
    .then(transactions => this.setState({ transactions }))
  }

  appendNewTransaction = transactionObj => {
    this.setState((prevState) => ({transactions: [...prevState.transactions, transactionObj]}))
  }

  handleSearchChange = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  handleSortChange = event => {
    this.setState({
      sortBy: event.target.value
    })
  }

  render() {
    let transactionsCopy = [...this.state.transactions]
    transactionsCopy = transactionsCopy.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchText))
    if (this.state.sortBy === "category") {
      transactionsCopy.sort((transactionA, transactionB) => transactionA.category.localeCompare(transactionB.category))
    }
    if (this.state.sortBy === "description") {
      transactionsCopy.sort((transactionA, transactionB) => transactionA.description.localeCompare(transactionB.description))
    }
    return (
      <div>
        <button onClick={() => console.log(this.state)}>Show State</button>
        <Search searchText={this.state.searchText} handleSearchChange={this.handleSearchChange}/>
        <Sort sortBy={this.state.sortBy} handleChange={this.handleSortChange}/>
        <AddTransactionForm appendNewTransaction={this.appendNewTransaction}/>
        <TransactionsList transactions={transactionsCopy}/>
      </div>
    );
  }
}

export default AccountContainer;
