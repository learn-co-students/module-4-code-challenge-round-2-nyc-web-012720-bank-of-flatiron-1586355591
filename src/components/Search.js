import React from "react";

const Search = (props) => {
  return (
    <div>
      <div className="ui large fluid icon input">
        <input type="text" placeholder={"Search your Recent Transactions"} onChange={(event) => props.handleSearchTerm(event)} value={props.searchTerm}/>
        <i className="circular search link icon"></i><br/>
      </div>
      Sort by: Category<input type="radio" name="sort" value="category" onChange={props.handleSortBy}/> Sort by: Description<input type="radio" name="sort" value="description" onChange={props.handleSortBy}/>
    </div>
  );
};

export default Search;
