import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    addDate:'',
    addDescription:'',
    addCategory:'',
    addAmount: '',
    searchTerm: ''
  }

componentDidMount(){
  fetch('http://localhost:6001/transactions')
  .then(resp => resp.json())
  .then(data => this.setState({transactions: data}))
}

handleChange = event => {
  // event.preventDefault()
  if(event.target.name === "addAmount"){
    this.setState({
      [event.target.name]: parseInt(event.target.value)
    })
  }else{
  this.setState({
    [event.target.name]: event.target.value
  })
}}

handleSubmit = (event) => {

  event.preventDefault()

  let data = {
    date: this.state.addDate,
    description: this.state.addDescription,
    category: this.state.addCategory,
    amount: this.state.addAmount
  }

  fetch('http://localhost:6001/transactions', {
    method: "POST",
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(data)
  })
  .then(resp => resp.json())
  .then(newTran => this.setState({
    transactions: [...this.state.transactions, newTran]
  }))
}

handleDelete = (id) => {
  fetch(`http://localhost:6001/transactions/${id}`, {
    method: "DELETE"
  })
  .then(this.componentDidMount())
}

  render() {
    // console.log(this.state)
    return (
      <div>
        <Search 
        handleChange = {this.handleChange}
        term = {this.state.searchTerm}/>

        <AddTransactionForm 
        date = {this.state.addDate}
        description = {this.state.addDescription}
        category = {this.state.addCategory}
        amount = {this.state.amount}
        handleChange = {this.handleChange}
        handleClick = {this.handleSubmit}/>

        <TransactionsList 
        handleDelete = {this.handleDelete}
        transactions={this.state.transactions}
        searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default AccountContainer;
