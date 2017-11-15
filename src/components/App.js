import React, { Component } from 'react';

import './../styles/css/App.css';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      taskBox: '',
      todos: [],
      selectedFilter: 'all'
    };

    this.appendTodo = this.appendTodo.bind(this);
    this.changeTaskBox = this.changeTaskBox.bind(this);
  }

  appendTodo(text) {
    let md5 = require('md5');

    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          {
            id: md5(text + Date.now()),
            text,
            completed: false
          }
        ],
        taskBox: ''
      }
    });
  }

  changeTaskBox(text) {
    this.setState({
      taskBox: text
    });
  }

  render() {
    const { taskBox, todos } = this.state;

    return (
      <div id="todo-app">
        <AddTodo taskBox={taskBox} _onChange={this.changeTaskBox} _onSubmit={this.appendTodo} />
        <TodoList tasks={todos} />
      </div>
    );
  }
}

export default App;