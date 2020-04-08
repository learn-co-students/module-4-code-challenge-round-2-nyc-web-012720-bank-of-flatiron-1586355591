import React, { Component } from "react";

class AddTransactionForm extends Component {

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={event => this.props.handleSubmitTransaction(event)} className="ui form">
          <div className="inline fields">
            <input type="date" onChange={event => this.props.handleFormInput(event)} value={this.props.newTransaction.date} name="date" />
            <input type="text" onChange={event => this.props.handleFormInput(event)} value={this.props.newTransaction.description} name="description" placeholder="Description" />
            <input type="text" onChange={event => this.props.handleFormInput(event)} value={this.props.newTransaction.category} name="category" placeholder="Category" />
            <input type="number" onChange={event => this.props.handleFormInput(event)} value={this.props.newTransaction.amount} name="amount" placeholder="Amount" step="0.01"/>
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
