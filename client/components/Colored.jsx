import React from 'react'
import { ConfiguredRadium, Colors } from 'util'

class Colored extends React.Component {
  render () {
    const style = {
      color: this.props.color
    }

    return (
      <span
        style={[style, this.props.style]}
      >
        {this.props.children}
      </span>
    )
  }
}

Colored.propTypes = {
  color: React.PropTypes.string
}

Colored.defaultProps = {
  color: Colors.orange
}

export default ConfiguredRadium(Colored)
