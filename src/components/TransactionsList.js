import React from "react";
import Transaction from "./Transaction";

const TransactionsList = props => {

  const renderList = list => {
    return list.map( trans => {
      return <Transaction key={trans.id} trans={trans}/>
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
        {renderList(props.tList)}
      </tbody>
    </table>
  );
};

export default TransactionsList;
