import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  constructor(){
    super();
    this.state = {
      transactions:[],
      displayedTransactions: [],
      searchTerm: ""
    }
    this.transactionsUrl = 'http://localhost:6001/transactions';
  }

  componentDidMount(){
    fetch(this.transactionsUrl)
      .then(res => res.json())
      .then(transactions => this.setState({transactions, displayedTransactions: transactions}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.displayedTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
