import React from "react";

//It doesn't like the button being the child of a <tr> but the functionality is working ok...
const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
      <button className='delete' onClick={() => props.deleteTxn(props.transaction.id)}>Delete</button>
    </tr>
  );
};

export default Transaction;
