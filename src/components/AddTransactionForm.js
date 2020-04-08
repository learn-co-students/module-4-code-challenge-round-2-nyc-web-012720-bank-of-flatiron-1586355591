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

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={e => this.props.handleSubmit(e, this.state)}>
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
