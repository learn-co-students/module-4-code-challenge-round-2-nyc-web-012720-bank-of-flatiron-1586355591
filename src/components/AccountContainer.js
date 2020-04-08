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
    fetch(`http://localhost:6001/transactions`)
    .then(res => res.json())
    .then( data => this.setState({ transactions: data}))
  }

  handleSubmit = (transaction) => {
    fetch(`http://localhost:6001/transactions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(transaction)
    })
    .then(res => res.json())
    .then(newTran => this.setState({
      transactions: [...this.state.transactions, transaction]
    }))
    .then(console.log("success"))
  }

  filterTransactions = () => {
    if (this.state.searchTerm !== "") {
      return this.state.transactions.filter( tran => tran.description.startsWith(this.state.searchTerm))
    } else {
      return this.state.transactions
    }
  }

  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  handleChange = (event) => {
      this.setState({
        searchTerm: this.Capitalize(event.target.value)
      })
  }

  deleteTransaction = (deletedTran) => {
    fetch(`http://localhost:6001/transactions/${deletedTran.id}`, {method: "DELETE"})
  let newArray = this.state.transactions.map( tran => { return tran.id !== deletedTran.id && tran })
  this.setState({
    transactions: newArray
  })
}

  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
        <AddTransactionForm handleSubmit={this.handleSubmit}/>
        <TransactionsList transactions={this.filterTransactions()} deleteTransaction={this.deleteTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
