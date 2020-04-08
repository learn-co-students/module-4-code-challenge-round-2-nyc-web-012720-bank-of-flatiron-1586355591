import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  state = {
    transactions: [],
    searchText: ""
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(response => response.json())
    .then(transactions => this.setState({ transactions }))
  }

  appendNewTransaction = transactionObj => {
    this.setState((prevState) => ({transactions: [...prevState.transactions, transactionObj]}))
  }

  handleSearchChange = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  render() {
    let transactionsCopy = [...this.state.transactions]
    transactionsCopy = transactionsCopy.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchText))
    return (
      <div>
        <button onClick={() => console.log(this.state)}>Show State</button>
        <Search searchText={this.state.searchText} handleSearchChange={this.handleSearchChange}/>
        <AddTransactionForm appendNewTransaction={this.appendNewTransaction}/>
        <TransactionsList transactions={transactionsCopy}/>
      </div>
    );
  }
}

export default AccountContainer;
