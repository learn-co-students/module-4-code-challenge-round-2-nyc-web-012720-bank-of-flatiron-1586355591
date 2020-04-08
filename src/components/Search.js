import React from "react";

const Search = (props) => {
  return (
    <>
    <div className="ui large fluid icon input">
      <input
        name="searchTerm"
        type="text"
        placeholder={"Search your Recent Transactions (Case Sensitive!)"}
        onChange={props.handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
    <div>
    <label>Sort By:</label>
      <select name="sortBy" onChange={props.handleChange}>
        <option value="">No Sort</option>
        <option value="description">Description</option>
        <option value="category">Category</option>
      </select>
    </div>
    </>

  );
};

export default Search;
