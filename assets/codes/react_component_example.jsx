import React from 'react'

class Example extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      number: 0
    }
  }

  handleClick (delta) {
    this.setState({
      number: this.state.number + delta
    })
  }

  render () {
    return (
      <div className='example'>
        <span onClick={this.handleClick.bind(this, -1)}>-</span>
        <span>{this.state.number}</span>
        <span onClick={this.handleClick.bind(this, +1)}>+</span>
      </div>
    )
  }
}

export default Example
