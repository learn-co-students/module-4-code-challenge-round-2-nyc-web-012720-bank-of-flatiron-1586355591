import React from "react";

const Search = (props) => {
  
  // set input value equal to state that exists one level up
  // create handleChange method one level up that updates state with input's value
  // pass state and the handleChange methods down to this component
  // add conditional filter in the AccountContainer that limits displayed transactions

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.searchText}
        onChange={props.handleSearchChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
