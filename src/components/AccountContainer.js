import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    tList: [],
    tSearch: ''
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(tList => this.setState({tList})) 
  }

  handleSeachChange = e => {
    this.setState({tSearch: e.target.value})
  }

  handleSearchClick = () => {
    const list = [...this.state.tList]
    if (list !== "") {
      return list.filter(trans => trans.description.toLowerCase().includes(this.state.tSearch.toLowerCase()))
    } else {
      return list
    }
  }

  render() {
    console.log("inside render",this.state.tSearch)
    return (
      <div>
        <Search handleSeachChange={this.handleSeachChange} handleSearchClick={this.handleSearchClick}/>
        <AddTransactionForm />
        <TransactionsList tList={this.handleSearchClick()}/>
      </div>
    );
  }
}

export default AccountContainer;
