import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {  

  state = {
    transactions: [],
    searchTrans: ''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then( transactions => this.setState({transactions}))
  } 

  handleSearch = (event) => {
    this.setState({ searchTrans: event.target.value})
  }

  addTransaction = (newTrans) => {
    this.setState({ 
      transactions: [...this.state.transactions, newTrans]  
    })
  }

  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm  addTransaction={this.addTransaction} />
        <TransactionsList transactions={this.state.transactions} 
                          searchTrans={this.state.searchTrans}/>
      </div>
    );
  }
}

export default AccountContainer;
