import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';
import SelectSort from './SelectSort';

const transURL = ' http://localhost:3000/transactions';
class AccountContainer extends Component {
  state = {
    transactions: [],
    newTrans: {},
    target: null,
    search: null,
    sort: '',
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
  handleSort = (event) => {
    let sort = event.target.value;
    this.setState({ sort }, () => console.log(this.state.sort));
  };
  handleSortSubmit = (event) => {
    event.preventDefault();

    let clone = this.state.transactions;
    let option = this.state.sort;

    clone.sort((a, b) => {
      let nameA = a[option].toLowerCase();
      let nameB = b[option].toLowerCase();
      return nameA > nameB ? 1 : -1;
    });
  };
  render() {
    return (
      <div>
        <SelectSort
          handleSort={this.handleSort}
          sort={this.state.sort}
          handleSortSubmit={this.handleSortSubmit}
        />
        <Search handleSearch={this.handleSearch} />

        <AddTransactionForm handleSubmit={this.handleSubmit} />
        {this.renderTransaction()}
      </div>
    );
  }
}

export default AccountContainer;
