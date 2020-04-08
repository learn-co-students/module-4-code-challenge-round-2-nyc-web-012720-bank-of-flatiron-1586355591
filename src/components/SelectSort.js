import React from 'react';

const SelectSort = (props) => {
  return (
    <form onSubmit={props.handleSortSubmit}>
      <label>
        Sort filter
        <select value={props.sort} onChange={props.handleSort}>
          <option value='category'>category</option>
          <option value='description'>description</option>
        </select>
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};

export default SelectSort;
