import React, { Component } from "react";

const postApi = 'http://localhost:6001/transactions'

class AddTransactionForm extends Component {
  state = {
    date: '', 
    description: '', 
    category: '', 
    amount: 0
  }

  handleChange = (e) => {
    this.setState( {[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const requestObject = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    } 

    fetch(postApi, requestObject)
    .then(response => response.json())
    .then(data => console.log('Success', data))
    .catch(error => console.error('Error:', error))
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="inline fields">
            <input type="date" name="date" onChange={(e) => this.handleChange(e)} value={this.state.date}/>
            <input type="text" name="description" placeholder="Description" onChange={(e) => this.handleChange(e)} value={this.state.description}/>
            <input type="text" name="category" placeholder="Category" onChange={(e) => this.handleChange(e)} value={this.state.category}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={(e) => this.handleChange(e)}
              value={this.state.amount}
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
