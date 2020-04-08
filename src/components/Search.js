import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(filterTerm) => { props.handleFilter(filterTerm) }
        }
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
