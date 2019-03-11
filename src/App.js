import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layout/Header'
import uuid from 'uuid'

class App extends Component {
  state= //cloud of data
  {
    todos: [
      {
        id: uuid.v4(),
        title: 'todo1',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'todo2',
        completed: false
      },
      {
        id: uuid.v4(),
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
//add
addTodo = (title) =>{
  const newTodo = {
    id:uuid.v4(),
    title:title,
    completed:false
  }
  this.setState({todos:[...this.state.todos, newTodo]})
}
  render() {
    //console.log(this.state.todos);
    return (
      <Router> 
      <div className="App">
      <div className = 'container'> 
      <Header/>
      <Route exact path = '/' render = {props => (
      <React.Fragment>
      <AddTodo addTodo = {this.addTodo}/>
        <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo}/> 
      </React.Fragment>  
       )}/>
       <Route path = "/about" component = {About}/>
      </div>
      </div>
      </Router>
    );//slipping props into Todos 
  }
}

export default App;
