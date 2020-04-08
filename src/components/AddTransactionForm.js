import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={this.props.txnState.date} onChange={this.props.handleChange}/>
            <input type="text" name="description" placeholder="Description" value={this.props.txnState.description} onChange={this.props.handleChange} />
            <input type="text" name="category" placeholder="Category" value={this.props.txnState.category} onChange={this.props.handleChange} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.props.txnState.amount} onChange={this.props.handleChange}
            />
          </div>
          <button className="ui button" type="submit" onClick={this.props.submitTxn}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
