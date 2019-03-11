import React, { Component } from 'react'; 
import Todos from './components/Todos';

class App extends Component {
  state= //cloud of data
  {
    todos: [
      {
        id: '1',
        title: 'todo1',
        completed: false
      },
      {
        id: '2',
        title: 'todo2',
        completed: false
      },
      {
        id: '3',
        title: 'todo3',
        completed: false
      },
    ]
  }

  //toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id)  {
        todo.completed =!todo.completed;
      }
      return todo;
    })});//if mached, update
  }
  //delete todo
delTodo = (id)=>{
  //console.log(id);
  this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]})
}

  render() {
    //console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo}/>   
      </div>//slipping props into Todos 
    );
  }
}

export default App;
