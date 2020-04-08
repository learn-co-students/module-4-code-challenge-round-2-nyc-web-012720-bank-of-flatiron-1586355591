import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitHandler = () => {
    // event.preventDefault() not necessary, I want it to referesh to display the new transaction, clear the form, and reset the state of this component
    console.log(this.state)

    fetch("http://localhost:6001/transactions", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({date: this.state.date, description: this.state.description, category: this.state.category, amount: this.state.amount})
    })
   
  }

  render() {
    console.log(this.state)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="inline fields">
            <input type="date" name="date" value ={this.state.date} onChange={this.changeHandler} />
            <input type="text" name="description" placeholder="Description" value ={this.state.description} onChange={this.changeHandler} />
            <input type="text" name="category" placeholder="Category" value ={this.state.category} onChange={this.changeHandler} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value ={this.state.amount} 
              onChange={this.changeHandler}
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
