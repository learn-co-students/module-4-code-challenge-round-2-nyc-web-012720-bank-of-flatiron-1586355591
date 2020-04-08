import React from "react";

const Sort = (props) => {
    return(
        <label>
        Sort Alphabetically By...
            <select value={props.sortBy} onChange={props.handleChange}>
                <option value="none">Unsorted</option>
                <option value="category">Category</option>
                <option value="description">Description</option>
            </select>
        </label>
    )
}

export default Sort