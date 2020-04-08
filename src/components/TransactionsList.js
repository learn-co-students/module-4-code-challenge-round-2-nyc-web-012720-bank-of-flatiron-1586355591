import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  const renderTransactions = () => {

    let transToDisplay = props.transactions.filter(trans => {
      return trans.description.includes(props.filter)
    })

    return transToDisplay.map(e => {
      return <Transaction key ={e.id} trans={e}/>
    })
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {renderTransactions()}
      </tbody>
    </table>
  );
};

export default TransactionsList;
