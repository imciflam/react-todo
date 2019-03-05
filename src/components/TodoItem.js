import React, { Component } from 'react' //rce shortcut

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

export default TodoItem
