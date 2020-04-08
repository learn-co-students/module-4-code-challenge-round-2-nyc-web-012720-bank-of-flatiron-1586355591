import React from "react";

const Search = (props) => {

  const filterHandle = (event) => {
    props.filter(event.target.value)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={filterHandle}
      />
      <br/>
      <button onClick={props.switchSort}>Sorting/Searching by: {props.sort}</button>
    </div>
  );
};

export default Search;
