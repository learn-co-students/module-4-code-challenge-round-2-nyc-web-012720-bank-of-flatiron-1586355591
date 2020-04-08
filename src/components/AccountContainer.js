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

  addTransaction = (transaction) => {
    const {date, description, category, amount} = transaction;
    
    const newTransactionHTTPObj = {
      'method': 'POST',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify({date, description, category, amount})
    }

    fetch(this.transactionsUrl, newTransactionHTTPObj)
      .then(res => res.json())
      .then(transaction => {
        this.setState({
          transactions:[
            ...this.state.transactions,
            transaction
          ],
          displayedTransactions:[
            ...this.state.displayedTransactions,
            transaction
          ]
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm handleSubmit={this.addTransaction}/>
        <TransactionsList transactions={this.state.displayedTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
