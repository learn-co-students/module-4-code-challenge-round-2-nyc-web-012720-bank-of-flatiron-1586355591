import React, { Component } from "react";

class AddTransactionForm extends Component {
  
  // Add state to this component(date, description, category, amount)
  // set input values to state values
  // Create a handleChange method
  // add handleChange to the input fields
  // create handleSubmit on this level (fetch post request)
  // Add onSubmit to the opening form tag
  // create method that appends the new object to our list one level up
  // pass that method as a prop

  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.postNewTransaction()
    this.setState({
      date: "",
      description: "",
      category: "",
      amount: ""
    })
  }

  postNewTransaction = () => {
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(this.props.appendNewTransaction)
  }

  render() {
    return (
      <div className="ui segment">
      <button onClick={() => console.log(this.state)}>Show form state</button>
        <form className="ui form" onSubmit={this.handleSubmit}>
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
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
