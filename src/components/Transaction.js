import React from "react";

//SAMPLE OBJECT
// {
//   id: 1,
//   date: "2019-12-01",
//   description: "Paycheck from Bob's Burgers",
//   category: "Income",
//   amount: 1000
//   },

const Transaction = ({transaction}) => {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
};

export default Transaction;
