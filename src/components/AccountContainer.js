import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    console.log("hi")
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList />
      </div>
    );
  }
} 

export default AccountContainer;
