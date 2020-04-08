import React, { Component } from 'react';

class AddTransactionForm extends Component {
  state = {
    date: '',
    description: '',
    category: '',
    amount: '',
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { date, description, category, amount } = this.state;
    const data = this.state;
    return (
      <div className='ui segment'>
        <form
          className='ui form'
          onSubmit={(event) => this.props.handleSubmit(event, data)}>
          <div className='inline fields'>
            <input
              type='date'
              name='date'
              value={date}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='description'
              placeholder='Description'
              onChange={this.handleChange}
              value={description}
            />
            <input
              type='text'
              name='category'
              placeholder='Category'
              onChange={this.handleChange}
              value={category}
            />
            <input
              type='number'
              name='amount'
              placeholder='Amount'
              onChange={this.handleChange}
              step='0.01'
              value={amount}
            />
          </div>
          <button className='ui button' type='submit'>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
