import React from 'react';

export default function Todo(props) {
	const { todo } = props;
	return (
		<div>
			<span
				style={{
					textDecoration: todo.completed ? 'line-through' : null
				}}
				// className={todo.completed ? 'completed' : null}
				onClick={props.toggleComplete}>
				{todo.text}
			</span>
			<button onClick={props.deleteTodo}>X</button>
		</div>
	);
}
