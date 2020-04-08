import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>
        <button onClick={() => props.handleDelete(props.id)}>X</button>
        {props.date}
      </td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
    </tr>
  );
};

export default Transaction;
