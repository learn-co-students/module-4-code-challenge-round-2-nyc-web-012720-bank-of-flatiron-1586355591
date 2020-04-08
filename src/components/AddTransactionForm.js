import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }

  handleChange = e => {
    const key = e.target.name
    const value = e.target.value
    this.setState({[key]: value})
  }

  handleSubmit = e => {
    e.preventDefault()
    const newT = this.state
    fetch('http://localhost:6001/transactions', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ 
        date: newT.date,
        description: newT.description,
        category: newT.category,
        amount:newT.amount
      })
    })
    .then(res => res.json())
    .then(newT => this.props.handleNewT(newT))
    this.setState({
      date: "",
      description: "",
      category: "",
      amount: ""
    })
  }

  render() {
    // console.log("inside addTrans", this.state)
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange}/>
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleChange}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount} 
              onChange={this.handleChange}
            />
          </div>
          <button className="ui button" onClick={this.handleSubmit}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
