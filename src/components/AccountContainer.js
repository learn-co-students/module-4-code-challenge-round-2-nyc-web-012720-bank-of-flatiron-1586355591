import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    filter: "",
    sort: "Description"
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then(resp => resp.json())
    .then(data => this.setState({transactions: data}))
  }

  changeFilter = (newValue) => {
      this.setState({filter: newValue})
  }

  switchSort = () => {
    if (this.state.sort === "Description") { 
      this.setState({sort: "Category"})
    }
    else {
      this.setState({sort: "Description"})
    }
  }

  deleteRecord = async (id) => {
    await fetch(`http://localhost:6001/transactions/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
    await fetch("http://localhost:6001/transactions")
    .then(resp => resp.json())
    .then(data => this.setState({transactions: data}))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Search filter={this.changeFilter} switchSort={this.switchSort} sort={this.state.sort}/>
        <AddTransactionForm />
        <TransactionsList 
          transactions = {this.state.transactions} 
          sort={this.state.sort.toLowerCase()} 
          filter={this.state.filter}
          delete={this.deleteRecord}/>
      </div>
    );
  }
}

export default AccountContainer;
