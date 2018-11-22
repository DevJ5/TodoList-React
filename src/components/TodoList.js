import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends Component {
	state = {
		todos: [],
		todoToShow: 'all'
	};

	addTodo = newTodo => {
		this.setState({
			todos: [newTodo, ...this.state.todos]
		});
	};

	toggleComplete = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			})
		});
	};

	updateTodoToShow = e => {
		this.setState({
			todoToShow: e.target.value
		});
	};

	deleteTodo = id => {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id)
		});
	};

	deleteCompletedTodos = () => {
		this.setState({
			todos: this.state.todos.filter(todo => !todo.completed)
		});
	};

	toggleAll = () => {
		if (this.state.todos.every(todo => todo.completed)) {
			this.setState(state => ({
				todos: state.todos.map(todo => {
					return { ...todo, completed: false };
				})
			}));
		} else {
			this.setState(state => ({
				todos: this.state.todos.map(todo => {
					return { ...todo, completed: true };
				})
			}));
		}
	};

	render() {
		const showDeleteAllButton = !!this.state.todos.some(todo => todo.completed);
		let todos = [];

		if (this.state.todoToShow === 'all') todos = this.state.todos;
		else if (this.state.todoToShow === 'active')
			todos = this.state.todos.filter(todo => !todo.completed);
		else if (this.state.todoToShow === 'completed')
			todos = this.state.todos.filter(todo => todo.completed);

		return (
			<div className="todo-list">
				{todos.map(todo => (
					<Todo
						key={todo.id}
						todo={todo}
						toggleComplete={() => this.toggleComplete(todo.id)}
						deleteTodo={() => this.deleteTodo(todo.id)}
					/>
				))}
				<div className="todos-left">
					Todos left: {this.state.todos.filter(todo => !todo.completed).length}
				</div>
				<div className="filter-buttons">
					<button value="all" onClick={this.updateTodoToShow}>
						All
					</button>
					<button value="active" onClick={this.updateTodoToShow}>
						Active
					</button>
					<button value="completed" onClick={this.updateTodoToShow}>
						Completed
					</button>
				</div>

				{showDeleteAllButton && (
					<div className="delete-completed">
						<button onClick={this.deleteCompletedTodos}>
							Delete Completed
						</button>
					</div>
				)}
				<div className="toggle-all">
					<button onClick={this.toggleAll}>Toggle All</button>
				</div>
				<TodoForm onSubmit={this.addTodo} />
			</div>
		);
	}
}
