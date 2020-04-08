import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
// import Transaction from '/Transaction'

class AccountContainer extends Component {

  state = {
    transactionsList: []
  }


  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactionsListResp => {
      // console.log(transactionsListResp)

      this.setState({
        transactionsList: transactionsListResp
      })
    })
  }

  render() {
    console.log(this.state)
    console.log("state", this.state.transactionsList)

    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList  transactionsList={this.state.transactionsList}/>
      </div>
    );
  }
}

export default AccountContainer;
