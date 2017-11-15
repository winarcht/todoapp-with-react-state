import React, { Component } from 'react';

class Todo extends Component {

	render() {
		const { task } = this.props;

		let classes = task.completed ? 'completed' : '';

		return (
			<li className={classes}>
				{task.text}
			</li>
		);		
	}

}

export default Todo;