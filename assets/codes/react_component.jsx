import React from 'react'
import ReactDOM from 'react-dom'

class Welcome extends React.Component {
  render () {
    return <h1>Hello, {this.props.name}!</h1>
  }
}

ReactDOM.render(
  <Welcome name='Jeongho' />,
  document.getElementById('root')
)
