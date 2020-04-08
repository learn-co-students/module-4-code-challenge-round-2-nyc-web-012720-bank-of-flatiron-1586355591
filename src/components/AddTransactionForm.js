import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    description: "",

    category: "",

    amount: ""
  }

  handleForm = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
      
    })
    console.log(this.state)
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(e) => this.state.handleSubmit (e, this.state)}className="ui form">
          <div className="inline fields">
            <input onChange={this.handleForm}type="date" name="date" />
            <input onChange={this.handleForm}type="text" name="description" placeholder="Description" />
            <input onChange={this.handleForm}type="text" name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
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
