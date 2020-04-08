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

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList renderTransactions={this.renderTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
