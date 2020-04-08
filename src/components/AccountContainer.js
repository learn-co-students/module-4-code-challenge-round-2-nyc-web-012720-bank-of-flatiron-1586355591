import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';
const transURL = ' http://localhost:3000/transactions';
class AccountContainer extends Component {
  state = {
    transactions: [],
  };
  componentDidMount() {
    fetch(transURL)
      .then((response) => response.json())
      .then((transactions) =>
        this.setState({ transactions }, () =>
          console.log(this.state.transactions)
        )
      );
  }
  renderTransaction = () => {
    return this.state.transactions.map((transaction) => {
      return (
        <TransactionsList key={transaction.id} transaction={transaction} />
      );
    });
  };
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        {this.renderTransaction()}
      </div>
    );
  }
}

export default AccountContainer;
