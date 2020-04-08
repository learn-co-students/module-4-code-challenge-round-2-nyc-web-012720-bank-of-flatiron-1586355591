import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "", 
    name: "", 
    description: "", 
    category: "", 
    amount: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addTransaction = (event) => {
    event.preventDefault()

    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        date: this.state.date, 
        name: this.state.name, 
        description: this.state.description, 
        category: this.state.category, 
        amount: this.state.amount
      })
      }
    )
      .then(resp => resp.json())
      .then(newTransaction => this.props.handleAddTransaction(newTransaction))
      .catch((error) => console.log(error))
    // now we need to reset the form after submission => reset the form's state to initial state
    // if I have more time, come back to clean up code and make DRY by saving initial state as a variable
    this.setState({
        date: "",
        name: "",
        description: "",
        category: "",
        amount: ""
    })
    // form is not resetting date and amount for some reason (number input form)
  }

  render() {
    console.log(this.state)

    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.addTransaction}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange} />
            <input type="text" name="description" placeholder="Description" value={this.state.value} onChange={this.handleChange} />
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleChange} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.value}
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
