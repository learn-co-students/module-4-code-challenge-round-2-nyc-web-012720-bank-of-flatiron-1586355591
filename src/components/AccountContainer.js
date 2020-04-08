import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state= {
    transactions: [],
    searchTerm: ""
  }
  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(resp=> resp.json())
    .then(transactions=>this.getTransactions(transactions))
  }

  getTransactions = (transactions) => {
    this.setState({transactions:transactions})
  }

  addTransaction = (transaction) => {
    this.setState((prevState)=> ({...prevState.transactions, transaction}))
  }

  handleSearch = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    console.log(this.state)
    const filterTranscation = this.state.transactions.filter(transaction=> transaction.description.toUpperCase().includes(this.state.searchTerm.toUpperCase()))
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={filterTranscation}/>
      </div>
    );
  }
}

export default AccountContainer;
