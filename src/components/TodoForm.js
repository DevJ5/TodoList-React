import React, { Component } from 'react';
import shortid from 'shortid';

export default class TodoForm extends Component {
	third = React.createRef();
	// constructor() {
	// 	this.third = React.createRef()
	// }

	state = {
		text: ''
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.refs.first, this.second, this.third.current);
		const newTodo = {
			id: shortid.generate(),
			text: this.state.text,
			completed: false
		};

		this.props.onSubmit(newTodo);

		this.setState({
			text: ''
		});
	};

	render() {
		return (
			<form ref={this.third} onSubmit={this.handleSubmit}>
				<input
					ref="first"
					type="text"
					name="text"
					value={this.state.text}
					onChange={this.handleChange}
					placeholder="Todo..."
				/>
				<button ref={btn => (this.second = btn)}>Add</button>
			</form>
		);
	}
}
