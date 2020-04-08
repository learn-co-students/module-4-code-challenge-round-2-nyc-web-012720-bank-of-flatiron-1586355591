import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    filter: ""
  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then(resp => resp.json())
    .then(data => this.setState({transactions: data}))
  }

  changeFilter = (newValue) => {
      this.setState({filter: newValue})
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Search filter={this.changeFilter}/>
        <AddTransactionForm />
        <TransactionsList transactions = {this.state.transactions} filter={this.state.filter}/>
      </div>
    );
  }
}

export default AccountContainer;
