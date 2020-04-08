import React, { Component } from "react";

class AddTransactionForm extends Component {

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

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(event, transaction) => this.props.handleSubmit(event, this.state)}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleChange}/>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange}placeholder="Description" />
            <input type="text" name="category" value={this.state.category} onChange={this.handleChange}placeholder="Category" />
            <input type="number" name="amount" placeholder="Amount" step="0.01" value={this.state.amount} onChange={this.handleChange}/>
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
