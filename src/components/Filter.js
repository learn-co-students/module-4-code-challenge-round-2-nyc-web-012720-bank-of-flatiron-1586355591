import React from "react";

const Filter = props => {
  return (
    <div className="ui segment">
        Sort By: <select>
            <option onChange={props.handleFilterChange}value="description">Description</option>
            <option onChange={props.handleFilterChange}value="category">Category</option>
            <option onChange={props.handleFilterChange}value="amount">Amount</option>
        </select>
    </div>
  );
};

export default Filter;
