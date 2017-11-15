import React, { Component } from 'react';

import './../styles/css/App.css';

import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div id="todo-app">
        <TodoList tasks={TODOS} />
      </div>
    );
  }
}

const TODOS = [
  { id: 1, text: 'Task #1', completed: false},
  { id: 2, text: 'Task #2', completed: false},
  { id: 3, text: 'Task #3', completed: true},
  { id: 4, text: 'Task #4', completed: false},
  { id: 5, text: 'Task #5', completed: false},
];

export default App;