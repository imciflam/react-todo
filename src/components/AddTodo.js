import React, { Component } from 'react'

export default class AddTodo extends Component {

    state = {
        title:''
    }

    getStyle = () => { 
        return {
            background: '#444444',
            color: '#fff',
            flex:1
          }      
    } 

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''})
    }
    onChange=(e)=>this.setState({[e.target.name]:e.target.value});
  render() {
    return (
      <form onSubmit = {this.onSubmit} style ={{display:'flex'}}>
          <input 
          type = "text" 
          name = "title" 
          style = {{flex:10,padding:'5px'}}
          placeholder="add todo.." 
          value={this.state.title}
          onChange={this.onChange}
          />
          <input style={this.getStyle()}
          type="submit"
          value = "Submit"/>
      </form>
    )
  }
}
