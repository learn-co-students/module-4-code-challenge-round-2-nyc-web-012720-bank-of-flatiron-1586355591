import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm"; 

class AccountContainer extends Component {
  state = {
    transactions: [], 
    displayTransactions: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
      .then(resp => resp.json())
      .then(data => this.setState({
        transactions: data, 
        displayTransactions: data
      }))
  }

  handleAddTransaction = (newTransaction) => {
    this.setState({
      transactions: [...this.state.transactions, newTransaction]
    })
  }

  handleFilter = (event) => {
    console.log(event.target.value)
    let filteredTransactions = this.state.displayTransactions.filter(transaction => transaction.description.includes(event.target.value))
    if (event.target.value.length > 0) {
      this.setState({
        displayTransactions: filteredTransactions
      })
    } else {
      this.setState({
        displayTransactions: this.state.transactions
      })
    }
  }

  render() {
    return (
      <div>
        <Search filterTerm={this.state.filterTerm} handleFilter={this.handleFilter} />
        <AddTransactionForm handleAddTransaction={this.handleAddTransaction} />
        <TransactionsList transactions={this.state.displayTransactions} />
      </div>
    );
  }
}

export default AccountContainer;
