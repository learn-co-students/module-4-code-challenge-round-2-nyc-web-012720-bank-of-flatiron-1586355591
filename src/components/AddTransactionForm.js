import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="addDate" value = {this.props.date} onChange = {this.props.handleChange}/>
            <input type="text" name="addDescription" value = {this.props.description} onChange = {this.props.handleChange}placeholder="Description" />
            <input type="text" name="addCategory" value = {this.props.category} onChange = {this.props.handleChange}placeholder="Category" />
            <input
              type="number"
              name="addAmount"
              value = {this.props.amount}
              onChange = {this.props.handleChange}
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit" onClick = {this.props.handleClick}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
