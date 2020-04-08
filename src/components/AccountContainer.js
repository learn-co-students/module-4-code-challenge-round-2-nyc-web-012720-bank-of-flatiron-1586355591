import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    date: "",
    description: "",
    category: "",
    amount: 0,
    searchTerm: ""
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
  
  render() {
    let displayTransactions = this.state.transactions.filter(transaction => transaction.description.includes(this.state.searchTerm))
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
        transactions={displayTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
