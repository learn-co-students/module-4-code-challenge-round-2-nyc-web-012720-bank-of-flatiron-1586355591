import React from 'react';
import Transaction from './Transaction';

const TransactionsList = (props) => {
  const { date, description, category, amount } = props.transaction;
  return (
    <table className='ui celled striped padded table'>
      <tbody>
        <tr>
          <th>
            <h3 className='ui center aligned header'>Date: {date}</h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>
              Description: {description}
            </h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>Category: {category}</h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>Amount: {amount}</h3>
          </th>
        </tr>
        {/* render Transactions here */}
      </tbody>
    </table>
  );
};

export default TransactionsList;
