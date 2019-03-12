import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Header from './components/layout/Header'
import uuid from 'uuid'
import axios from 'axios'

class App extends Component {
  state= //cloud of data
  {
    todos: [
      //hardcoded
      /*{
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
      },*/
    ]
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  //toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id)  {
        todo.completed =!todo.completed;
      }
      return todo;
    })});//if matched, update
  }
  //delete todo
delTodo = (id)=>{
  //console.log(id);
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]}))
  //this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]})
}
//add
addTodo = (title) =>{
  /*const newTodo = {
    id:uuid.v4(),
    title:title,
    completed:false 
  }
  this.setState({todos:[...this.state.todos, newTodo]})*/
  axios.post('https://jsonplaceholder.typicode.com/todos',{
    title:title,
    completed:false
  })
  .then(res=>this.setState({todos:
  [...this.state.todos,res.data]}));
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
        <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo}/>     {/* slipping props into Todos */}

      </React.Fragment>  
       )}/>
       <Route path = "/about" component = {About}/>
      </div>
      </div>
      </Router>
    ); 
  }
}

export default App;
