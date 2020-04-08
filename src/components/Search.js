import React from "react";

const Search = (props) => {
  return (
    <div>
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={props.handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
      <br/>

      <div>
    <strong>Sort by: </strong>
    <label>
      <input type="radio" name="sort" value="category" checked={props.sort === "category"} onChange={props.handleSortChange}/>
      Category
    </label>
    <label>
      <input type="radio" name="sort" value="description" checked={props.sort === "description"} onChange={props.handleSortChange}/>
      Description
    </label>
    </div>
      
    </div>


  );
};

export default Search;
