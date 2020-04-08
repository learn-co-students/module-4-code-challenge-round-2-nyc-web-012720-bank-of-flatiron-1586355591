import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  //The new transaction state and submit function probably should have been on the AddTransactionForm, I could have avoided passing some data around, but I still would have had to create a function that was passed down to add the new transaction to the list here

  //################## CORE DELIVERABLES ###################
  state = {
    transactions: [],
    date: "",
    description: "",
    category: "",
    amount: 0,
    searchTerm: "",
    sortBy: ""
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactions => this.setState({ transactions }))
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitTxn = () => {
    const configObj = {
      method: 'POST',
      headers: {'content-type': 'application/json',
      'accept': 'applicaiton/json'
    },
    body: JSON.stringify({
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount
    })
    }
    fetch('http://localhost:6001/transactions', configObj)
    .then(resp => resp.json())
    .then(result => this.setState({transactions: [...this.state.transactions, result]}))
  }

  //################# BONUS DELIVERABLES ###################

  deleteTxn = (id) => {
    const deleteObj = {
      method: 'DELETE',
      headers: {'content-type': 'application/json',
      'accept': 'application/json'
    }
    }
    fetch(`http://localhost:6001/transactions/${id}`, deleteObj)
    .then(resp => resp.json())
    .then(this.setState({transactions: this.state.transactions.filter(transaction => transaction.id !== id)}))
  }

  
  render() {
    let displayTransactions = this.state.transactions.filter(transaction => transaction.description.includes(this.state.searchTerm))
    if (this.state.sortBy === "description") {
      displayTransactions.sort((a,b) => a.description > b.description ? 1 : -1)
    }
    else if (this.state.sortBy === "category") {
      displayTransactions.sort((a,b) => a.category > b.category ? 1 : -1)
    }



    return (
      <div>
        <Search 
        searchTerm={this.state.searchTerm} 
        handleChange={this.handleChange}/>
        <AddTransactionForm 
        txnState={this.state} 
        handleChange={this.handleChange}
        submitTxn={this.submitTxn}/>
        <TransactionsList 
        transactions={displayTransactions}
        deleteTxn={this.deleteTxn}/>
      </div>
    );
  }
}

export default AccountContainer;
