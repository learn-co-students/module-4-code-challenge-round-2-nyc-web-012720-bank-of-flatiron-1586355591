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
    }
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactions => this.setState({ transactions }))
  }


  renderTransactions = () => {
    let copiedTransactions = this.state.transactions
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
        transactions: [...this.state.transactions, createdTransaction], 
        newTransaction: {
          date: "", 
          description: "", 
          category: "", 
          amount: ""
        }
      })
    })
  }

  render() {
    console.log(this.state.newTransaction)
    return (
      <div>
        <Search />
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
