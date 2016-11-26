import React from 'react'
import { ConfiguredRadium } from 'util'

class Screen extends React.Component {
  render () {
    const style = {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100vw',
      height: '100vh'
    }

    return (
      <div
        style={[style, this.props.style]}
      >
        {this.props.children}
      </div>
    )
  }
}

export default ConfiguredRadium(Screen)
