import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: ""
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      date: "",
      description: "",
      category: "",
      amount: ""
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleInputChange} value={this.state.date}/>
            <input type="text" name="description" placeholder="Description" onChange={this.handleInputChange} value={this.state.description}/>
            <input type="text" name="category" placeholder="Category" onChange={this.handleInputChange} value={this.state.category}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleInputChange}
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
