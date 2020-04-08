import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  state = {
    transactions: [],
    searchBar: ""
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(response => response.json())
    .then(transactions => this.setState({ transactions }))
  }

  appendNewTransaction = transactionObj => {
    this.setState((prevState) => ({transactions: [...prevState.transactions, transactionObj]}))
  }

  render() {
    return (
      <div>
        <button onClick={() => console.log(this.state)}>Show State</button>
        <Search />
        <AddTransactionForm appendNewTransaction={this.appendNewTransaction}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
