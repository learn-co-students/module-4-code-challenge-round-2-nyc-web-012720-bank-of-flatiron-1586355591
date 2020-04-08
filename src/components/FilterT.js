import React from "react";

const FilterT = props => {
    console.log("inside filter", props)
  return (
    <div className="ui segment">
        Sort By: <select>
            <option value="" onChange={props.handleFilterChange}>None</option>
            <option value="description" onChange={props.handleFilterChange}>Description</option>
            <option value="category" onChange={props.handleFilterChange}>Category</option>
            <option value="amount" onChange={props.handleFilterChange}>Amount</option>
        </select>
    </div>
  );
};

export default FilterT;
