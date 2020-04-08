import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm"; 

class AccountContainer extends Component {
  state = {
    transactions: [], 
    filterTerm: ""
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

  handleFilter = (event) => {
    let filteredTransactions = this.state.transactions.filter(transaction => transaction.description === this.state.filterTerm)
    this.setState({
      filterTerm: event.target.value, 
      transactions: filteredTransactions
    })
  }

  render() {
    return (
      <div>
        <Search filterTerm={this.state.filterTerm} handleFilter={this.handleFilter} />
        <AddTransactionForm handleAddTransaction={this.handleAddTransaction} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
