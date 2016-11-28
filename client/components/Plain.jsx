import React from 'react'

class Plain extends React.Component {
  render () {
    return (
      <span>
        {this.props.children}
      </span>
    )
  }
}

export default Plain
