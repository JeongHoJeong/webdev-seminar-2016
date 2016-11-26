import React from 'react'
import { ConfiguredRadium } from 'util'

class Page extends React.Component {
  render () {
    const style = {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'
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

export default ConfiguredRadium(Page)
