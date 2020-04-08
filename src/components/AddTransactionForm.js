import React, { Component } from "react";

class AddTransactionForm extends Component {
	state = {
		dateInput: "",
		descriptionInput: "",
		categoryInput: "",
		amountInput: "",
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
    event.preventDefault();
    
		const data = {
      date: this.state.dateInput,
      description: this.state.descriptionInput,
      category: this.state.categoryInput,
      amount: this.state.amountInput
      };

		fetch("http://localhost:6001/transactions", {
			method: "POST", // or 'PUT'
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				this.props.addTransaction(data)
			})
			.then(this.setState({dateInput: "",
      descriptionInput: "",
      categoryInput: "",
      amountInput: ""}))
	};

	render() {
		// console.log(this.state);
		return (
			<div onSubmit={this.handleSubmit} className="ui segment">
				<form className="ui form">
					<div className="inline fields">
						<input
							type="date"
							name="dateInput"
							value={this.state.dateInput}
							onChange={this.handleChange}
						/>
						<input
							type="text"
							name="descriptionInput"
							placeholder="Description"
							value={this.state.descriptionInput}
							onChange={this.handleChange}
						/>
						<input
							type="text"
							name="categoryInput"
							placeholder="Category"
							value={this.state.categoryInput}
							onChange={this.handleChange}
						/>
						<input
							type="number"
							name="amountInput"
							placeholder="Amount"
							step="0.01"
							value={this.state.amountInput}
							onChange={this.handleChange}
						/>
					</div>
					<button className="ui button" type="submit">
						Add Transaction
					</button>
				</form>
			</div>
		);
	}
}

export default AddTransactionForm;
