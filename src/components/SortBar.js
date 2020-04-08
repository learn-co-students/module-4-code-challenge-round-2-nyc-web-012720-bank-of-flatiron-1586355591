import React from 'react';

const SortBar = (props) => {
    return(
        <div className="ui segment">
            <h4>Sort Transactions:</h4>
            <form className="ui form">
                <div className="inline fields">

                    <div className="ui toggle checkbox five wide field">
                        <input type="radio" className="hidden" name="date" value="date" checked={props.sortBy === "date"} onChange={e => props.handleSort(e)}/>
                        <label>Date</label>
                    </div>
                    
                    <div className="ui toggle checkbox five wide field">
                        <input type="radio" className="hidden" name="description" value="description" checked={props.sortBy === "description"} onChange={e => props.handleSort(e)}/>
                        <label>Description</label>
                    </div>
                    
                    <div className="ui toggle checkbox five wide field">
                        <input type="radio" className="hidden" name="category" value="category" checked={props.sortBy === "category"} onChange={e => props.handleSort(e)}/>
                        <label>Category</label>
                    </div>

                    <div className="ui toggle checkbox five wide field">
                        <input type="radio" className="hidden" name="amount" value="amount" checked={props.sortBy === "amount"} onChange={e => props.handleSort(e)}/>
                        <label>Amount</label>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default SortBar;