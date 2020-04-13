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
    fetch('http://localhost:6001/transactions')
      .then(resp => resp.json())
      .then(data => this.setState({
        transactions: data
      }))
  }

  handleAddTransaction = (newTransaction) => {
    this.setState({
      transactions: [...this.state.transactions, newTransaction]
    })
  }

 handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      searchTerm: event.target.value
    })
  }

  filterTransactions = () => {
    let displayTransactions = this.state.transactions
    if (this.state.searchTerm !== "") {
      displayTransactions = displayTransactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    return displayTransactions
  }

  // handleFilter = (event) => {
  //   let copyTransactions = [...this.state.transactions]

  //   if (event.target.value.length > 0) {
  //     let filterResults = copyTransactions.filter(transaction => transaction.description.toLowerCase().includes(event.target.value.toLowerCase()))
  //     this.setState({
  //       filtered: filterResults
  //     })
  //   } else {
  //     this.setState({
  //       filtered: copyTransactions
  //     })
  //   }
  // }

  render() {
    // console.log(this.state.transactions)
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <AddTransactionForm handleAddTransaction={this.handleAddTransaction} />
        <TransactionsList transactions={this.filterTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
