import React, { Component } from 'react'; 
import Todos from './components/Todos';

class App extends Component {
  state=
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
        completed: true
      },
      {
        id: '3',
        title: 'todo3',
        completed: false
      },
    ]
  }
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos = {this.state.todos}/>   
      </div>//slipping props into Todos 
    );
  }
}

export default App;
