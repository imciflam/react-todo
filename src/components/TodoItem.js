import React, { Component } from 'react' //rce shortcut
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    /*getStyle = () => 
    {
        if (this.props.todo.completed)
        {
            return
            {
                textDecoration:'line-through'
            }
        }
        else
        {
            return
            {
                textDecoration:'none';
            }
        }
    }*/
  render() {
    return (
      <div style ={{backgroundColor: '#E8E8E8'}}>
        <p>{this.props.todo.title}</p>
      </div>
    )
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
export default TodoItem
