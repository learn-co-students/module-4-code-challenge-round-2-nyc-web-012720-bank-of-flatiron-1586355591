import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state={
    transactions: [],
    search: "",
    sort: ""
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

  handleSortChange = (event) => {
    this.setState({
      sort: event.target.value
    })
  }

  searchTransactions = () => {
    let transactions = this.state.transactions
    if (this.state.search !== ""){
      return transactions.filter(transaction => transaction.description.includes(this.state.search))
    } else {return transactions}
  }

  sortTransactions = () => {
    let searched = this.searchTransactions()
    if (this.state.sort === "category"){
      return [...searched].sort((a,b)=> a.category.localeCompare(b.category))
    } if (this.state.sort === "description"){
      return [...searched].sort((a,b)=> a.description.localeCompare(b.description))
    } else return searched
  }

 

  render() {
    return (
      <div>
        <Search 
          handleSearch={this.handleSearch} 
          handleSortChange={this.handleSortChange}
          sort={this.state.sort}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.sortTransactions()}/>
      </div>
    );
  }
} 

export default AccountContainer;
