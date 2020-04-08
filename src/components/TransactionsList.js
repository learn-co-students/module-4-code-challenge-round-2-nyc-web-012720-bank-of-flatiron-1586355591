import React, {Component} from "react";
import Transaction from "./Transaction";

class TransactionsList extends Component {
  render(){
    // const transactionss = this.props.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.props.searchTrans.toLowerCase()))
  
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
        {this.props.transactions
        .filter(transaction => transaction.description.toLowerCase().includes(this.props.searchTrans.toLowerCase()))
        .map(transaction => <Transaction key={transaction.id} transaction={transaction} />)}
      </tbody>
    </table>
  );
}
};

export default TransactionsList;
