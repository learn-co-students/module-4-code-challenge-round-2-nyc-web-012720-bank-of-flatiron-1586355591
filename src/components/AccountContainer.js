import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm"; 

class AccountContainer extends Component {
  state = {
    transactions: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
      .then(resp => resp.json())
      .then(data => this.setState({
        transactions: data 
      }))
  }

  handleAddTransaction = (newTransaction) => {
    this.setState({
      transactions: [...this.state.transactions, newTransaction]
    })
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm handleAddTransaction={this.handleAddTransaction} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
