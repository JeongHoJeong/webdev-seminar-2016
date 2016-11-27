import React from 'react'
import { ConfiguredRadium } from 'util'

class Center extends React.Component {
  render () {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1
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
