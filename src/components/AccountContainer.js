import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';
const transURL = ' http://localhost:3000/transactions';
class AccountContainer extends Component {
  state = {
    transactions: [],
    newTrans: {},
    target: null,
    search: null,
  };
  componentDidMount() {
    fetch(transURL)
      .then((response) => response.json())
      .then((transactions) => this.setState({ transactions }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search) {
      this.setState({ target: null, search: null });
    }
  }
  renderTransaction = () => {
    if (this.state.target) {
      return <TransactionsList transaction={this.state.target} />;
    } else {
      return this.state.transactions.map((transaction, index) => {
        return <TransactionsList key={index} transaction={transaction} />;
      });
    }
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

  handleSearch = (event) => {
    let target;
    let search = event.target.value;

    this.state.transactions.map((transaction) => {
      let word = transaction.description.toLowerCase();
      if (word.includes(search)) {
        target = transaction;
        return target;
      }
    });

    this.setState({ target, search });
  };
  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <AddTransactionForm handleSubmit={this.handleSubmit} />
        {this.renderTransaction()}
      </div>
    );
  }
}

export default AccountContainer;
