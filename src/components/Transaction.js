import React from "react";

const Transaction = (props) => {
  return (
    
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
      <td><input type="button" value="X" onClick={() => props.deleteTransaction(props.transaction)}/></td>
    </tr>
   
  );
};

export default Transaction;
