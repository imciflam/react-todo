import React, { Component } from 'react' //rce shortcut
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => { 
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
          }      
    } 

    /*markComplete = (e)=> {//doesn't have access to component's stuff since it's a custom function
        console.log(this.props);
    }*/
  render() {
    const { id, title } = this.props.todo;
    const isCompleted = this.props.todo.completed;
     return (
        <div style={this.getStyle()}> 
        


        <div className="page__toggle"><p>  
      <label className="toggle">
        <input className="toggle__input" type="checkbox" onChange={this.props.markComplete.bind(this, id)} checked={isCompleted ? 'checked' : ''}/> { ' '}
        <span className="toggle__label">
          <span className="toggle__text"></span>
        </span>
      </label>
         <label>
         <span>{this.props.todo.title} </span></label><button onClick={this.props.delTodo.bind(this,id)} style = {btnStyle}>x</button>
     
           </p>
    </div>  
      </div>
    )//equals to title
  

 
} 
  
 

}

TodoItem.propTypes =
{
    todo:PropTypes.object.isRequired
}

const itemStyle = 
{
    backgroundColor: '#f4f4f4'
}

const btnStyle = {
  background: '#c93a52',
  color:'#ffffff',
  cursor:'pointer',
  float:'right',
  border: '1px solid #f00',
  borderRadius: '2em',
  fontSize: '12px',
  height: '20px',
    lineHeight: '2px',
    width: '20px'
}
export default TodoItem
