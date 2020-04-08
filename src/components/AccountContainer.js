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

  handleDeleteClick = transactionId => {
    fetch(`http://localhost:6001/transactions/` + transactionId, {
      method: 'DELETE'
    })
    .then(() => this.setState((prevState) => ({
      transactions: prevState.transactions.filter(transaction => transaction.id !== transactionId)
      })))
  }

  render() {
    let transactionsCopy = [...this.state.transactions]
    transactionsCopy = transactionsCopy.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchText))
    if (this.state.sortBy !== "none") {
      transactionsCopy.sort((transactionA, transactionB) => transactionA[this.state.sortBy].localeCompare(transactionB[this.state.sortBy]))
    }
    return (
      <div>
        <button onClick={() => console.log(this.state)}>Show State</button>
        <Search searchText={this.state.searchText} handleSearchChange={this.handleSearchChange}/>
        <Sort sortBy={this.state.sortBy} handleChange={this.handleSortChange}/>
        <AddTransactionForm appendNewTransaction={this.appendNewTransaction}/>
        <TransactionsList transactions={transactionsCopy} handleClick={this.handleDeleteClick}/>
      </div>
    );
  }
}

export default AccountContainer;
