import React, { Component } from 'react';
import Todo from './Todo';



class TodoList extends Component {

	render() {
		const { tasks } = this.props;
		
		let todos = tasks.map((todo) => {
			return (
				<Todo key={todo.id} task={todo} />
			);
		});

		return (
			<div id="todo-list">
				<ul>
					{todos}
				</ul>
			</div>
		);
	}

}

export default TodoList;