import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state={
    transactions: [],
    search: ""
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(res=>res.json())
    .then(transactions => this.setState({transactions}))
  }

  addTransaction = (transaction) => {
    this.setState({
      transactions: [...this.state.transactions, transaction]
    })
  }

  handleSearch = (event) => {
    event.preventDefault()
    this.setState({
      search: event.target.value
    })
  }

  searchTransactions = () => {
    let transactions = this.state.transactions
    if (this.state.search !== ""){
      return transactions.filter(transaction => transaction.description.includes(this.state.search))
    } else {return transactions}
  }

 

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.searchTransactions()}/>
      </div>
    );
  }
} 

export default AccountContainer;
