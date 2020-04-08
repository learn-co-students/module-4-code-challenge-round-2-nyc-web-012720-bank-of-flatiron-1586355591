import React, { Component } from "react";

class AddTransactionForm extends Component {

  initialState = {
    date: "",
    description: "",
    category: "",
    amount: 0
  }

  state = this.initialState 

  handleChange = (event) => {
    console.log(event.target.name)
    this.setState({[event.target.name]: event.target.value});
  }
  

  handleSubmit = (event)  => {
    event.preventDefault();

    const { date, description , category , amount } = this.state

    fetch('http://localhost:6001/transactions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({date, description, category,  amount 
        })
    })
    .then(response => response.json())
    .then(transaction => this.props.addTransaction(transaction))

    // clear the form after Submited
 

    this.setState({
      date: "",
      description: "",
      category: "",
      amount: 0
    })

  }


  render() {
    const { date, description , category , amount } = this.state 

    console.log(this.state)
    return (
      <div className="ui segment">
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
