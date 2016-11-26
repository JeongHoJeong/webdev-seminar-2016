import React from 'react'
import { ConfiguredRadium } from 'util'

class Center extends React.Component {
  render () {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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

export default ConfiguredRadium(Center)
