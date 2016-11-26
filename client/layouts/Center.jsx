import React from 'react'
import { ConfiguredRadium } from 'util'
import Screen from 'Screen'

class Center extends React.Component {
  render () {
    const styles = {
      screen: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }

    return (
      <Screen
        style={[styles.screen, this.props.style]}
      >
        {this.props.children}
      </Screen>
    )
  }
}

export default ConfiguredRadium(Center)
