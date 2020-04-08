import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {

  renderTransactions = () => {

    if(this.props.searchTerm.length > 0){
      let transaction = this.props.transactions.filter(tran => this.props.searchTerm === tran.description)
      return transaction.map(tran => <Transaction key={tran.id}  handleDelete = {this.props.handleDelete} {...tran}/>)
    }else{

    return this.props.transactions.sort((a,b) => {
      if(a.description > b.description) return 1
      else if(a.description < b.description) return -1
      return 0
    }).map(tran => 
    <Transaction key={tran.id} handleDelete = {this.props.handleDelete} {...tran}/>)
  }}

  render(){
    // console.log(this.props.transactions.sort((a,b) => a.category < b.category))
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
          <th>
            <h3 className="ui center aligned header">Delete</h3>
          </th>
        </tr>
        {this.renderTransactions()}
      </tbody>
    </table>
  );
}};

export default TransactionsList;
