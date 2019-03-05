import React, { Component } from 'react';  
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
      console.log(this.props.todos);//props of todo 
    return this.props.todos.map((todo) => 
    (
        <TodoItem key={todo.id} todo ={todo} />//unique key props
    )
    );
  }
}

export default Todos;
