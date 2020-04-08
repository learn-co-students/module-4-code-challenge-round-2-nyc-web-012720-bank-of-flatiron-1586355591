import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input type="text" placeholder={"Search your Recent Transactions"} name="search" value={props.search} onChange={(event) => props.handleSearchInput(event)}/>
      <i onClick={props.handleSearchRequest} className="circular search link icon"></i>
    </div>
  );
};

export default Search;
