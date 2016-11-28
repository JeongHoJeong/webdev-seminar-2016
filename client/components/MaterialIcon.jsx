import React from 'react'

class MaterialIcon extends React.Component {
  render () {
    return (
      <i
        className='material-icons'
        style={this.props.style}
      >
        {this.props.name}
      </i>
    )
  }
}

MaterialIcon.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default MaterialIcon
