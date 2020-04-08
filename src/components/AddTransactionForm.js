import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: "",
  };

  handleChange = (e) => {
    return this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { date, description, category, amount } = this.state;
    let newTransaction = { date, description, category, amount };
    return (
      <div className="ui segment">
        <form
          className="ui form"
          onSubmit={() => this.props.handleSubmit(newTransaction)}
        >
          <div className="inline fields">
            <input
              type="date"
              name="date"
              val={this.state.date}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              val={this.state.description}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              val={this.state.category}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              val={this.state.amount}
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
