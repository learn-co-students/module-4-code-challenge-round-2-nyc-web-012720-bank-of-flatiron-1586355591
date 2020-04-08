import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import SortBar from "./SortBar";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  constructor(){
    super();
    this.state = {
      transactions:[],
      displayedTransactions: [],
      searchTerm: "",
      sortBy: ""
    }
    this.transactionsUrl = 'http://localhost:6001/transactions';
  }

  componentDidMount(){
    fetch(this.transactionsUrl)
      .then(res => res.json())
      .then(transactions => this.setState({transactions, displayedTransactions: transactions}))
      .catch(err => console.log(err))
  }

  addTransaction = ({date, description, category, amount}) => {
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

  handleSearch = (event) => {
    event.persist();
    this.setState(() => {
      const searchTerm = event.target.value
      const displayedTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().indexOf(searchTerm) >= 0);
      return {searchTerm, displayedTransactions}
    })
  }

  sortTransactions = (event) => {
    this.setState({
      sortBy: event.target.value
      //run a sort on displayedTransactions based on obj passed in
    })
  }

  render() {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} onHandleSearch={this.handleSearch}/>
        <AddTransactionForm handleSubmit={this.addTransaction}/>
        <SortBar sortBy={this.state.sortBy} handleSort={this.sortTransactions}/>
        <TransactionsList transactions={this.state.displayedTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
