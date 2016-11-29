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
        onClick={this.props.onClick ? this.props.onClick : () => {}}
      >
        {this.props.name}
      </i>
    )
  }
}

MaterialIcon.propTypes = {
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func
}

export default ConfiguredRadium(MaterialIcon)
