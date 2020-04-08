import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Filter from "./Filter";

class AccountContainer extends Component {

  state = {
    tList: [],
    tSearch: '',
    tFilter: ''
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(tList => this.setState({tList})) 
  }

  handleSeachChange = e => {
    this.setState({tSearch: e.target.value})
  }

  handleNewT = newT => {
    // console.log("Inside newT", newT)
    this.setState({tList: [...this.state.tList, newT]})
  }

  handleFilterChange = e => {
    
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
    // console.log("inside render",this.state.tSearch)
    return (
      <div>
        <Search handleSeachChange={this.handleSeachChange} handleSearchClick={this.handleSearchClick}/>
        <AddTransactionForm handleNewChange={this.handleNewChange} handleNewT={this.handleNewT}/>
        <Filter/>
        <TransactionsList tList={this.handleSearchClick()}/>
      </div>
    );
  }
}

export default AccountContainer;
