import React from "react";

const Transaction = (props) => {
  const transaction = props.transaction
  const id = transaction.id
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td><button onClick={() => props.handleClick(id)}>X</button></td>
    </tr>
  );
};

export default Transaction;
