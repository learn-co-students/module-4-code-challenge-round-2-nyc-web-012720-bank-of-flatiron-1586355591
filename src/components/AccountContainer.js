import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';
const transURL = ' http://localhost:3000/transactions';
class AccountContainer extends Component {
  state = {
    transactions: [],
    newTrans: {},
  };
  componentDidMount() {
    fetch(transURL)
      .then((response) => response.json())
      .then((transactions) => this.setState({ transactions }));
  }

  renderTransaction = () => {
    return this.state.transactions.map((transaction) => {
      return (
        <TransactionsList key={transaction.id} transaction={transaction} />
      );
    });
  };
  handleSubmit = (event, newTrans) => {
    event.preventDefault();
    this.setState({
      transactions: [...this.state.transactions, newTrans],
      newTrans,
    });

    fetch(transURL, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newTrans),
    });
  };
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm handleSubmit={this.handleSubmit} />
        {this.renderTransaction()}
      </div>
    );
  }
}

export default AccountContainer;
