import React from "react";

const Transaction = (props) => {
  const {id, date, description, category, amount} = props.data
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={() => props.handleClick(id)}>Delete</button></td>
    </tr>
  );
};

export default Transaction;
