import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  const iterateThroughTransactions = () => {
    return props.renderTransactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <button className="ui center aligned header" name="date" onClick={event => props.handleSort(event)}>Date</button>
          </th>
          <th>
            <button className="ui center aligned header" name="description" onClick={event => props.handleSort(event)}>Description</button>
          </th>
          <th>
            <button name="category" onClick={event => props.handleSort(event)} className="ui center aligned header">Category</button>
          </th>
          <th>
            <button name="amount" onClick={event => props.handleSort(event)} className="ui center aligned header">Amount</button>
          </th>
        </tr>
        {iterateThroughTransactions()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
