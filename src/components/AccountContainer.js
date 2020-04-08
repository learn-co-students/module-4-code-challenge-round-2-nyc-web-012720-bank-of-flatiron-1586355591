import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [], 
    newTransaction: {
      date: "", 
      description: "", 
      category: "", 
      amount: ""
    }, 
    search: ""
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactions => this.setState({ transactions }))
  }


  renderTransactions = () => {
    let copiedTransactions = [...this.state.transactions]
    if (this.state.search !== ""){
      return copiedTransactions.filter(transactions => transactions.description.toLowerCase().includes(this.state.search.toLowerCase()))
    }
    return copiedTransactions
  }

  handleFormInput = (event) => {
    this.setState({
      newTransaction: {
        ...this.state.newTransaction,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmitTransaction = (event) => {
    event.preventDefault()
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state.newTransaction)
    })
    .then(resp => resp.json())
    .then(createdTransaction => {
      this.setState({ 
        transactions: [createdTransaction, ...this.state.transactions], 
        newTransaction: {
          date: "", 
          description: "", 
          category: "", 
          amount: ""
        }
      })
    })
  }

  handleSearchInput = (event) => {
    this.setState({search: event.target.value})
  }

  handleSearchRequest = () => {
    if (!this.state.transactions.find(transaction => transaction.description === this.state.search)) {
      alert("Are You Sure You Typed That Correctly?")
    }
  }

  render() {
    console.log(this.state.search)
    return (
      <div>
        <Search 
          handleSearchInput={this.handleSearchInput} 
          handleSearchRequest={this.handleSearchRequest}
          search={this.state.search}
        />
        <AddTransactionForm 
          newTransaction={this.state.newTransaction}
          handleFormInput={this.handleFormInput} 
          handleSubmitTransaction={this.handleSubmitTransaction}
          />
        <TransactionsList renderTransactions={this.renderTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
