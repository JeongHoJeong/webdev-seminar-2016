import React from 'react'
import { ConfiguredRadium } from 'util'

class MaterialIcon extends React.Component {
  render () {
    const style = {
      pointerEvents: 'none'
    }

    return (
      <i
        className='material-icons'
        style={[style, this.props.style]}
      >
        {this.props.name}
      </i>
    )
  }
}

MaterialIcon.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default ConfiguredRadium(MaterialIcon)
