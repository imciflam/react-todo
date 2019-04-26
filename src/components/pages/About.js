import React from 'react'

 function About() {
  return (
    <React.Fragment>
      <div style={divStyle}>
      <h1>About</h1>
      <p>Todolist, react version</p>
      </div>
    </React.Fragment>
  )
}

const divStyle={
  color:'#333333',
  textAlign:'center',
  padding:'10px'
}

export default About;