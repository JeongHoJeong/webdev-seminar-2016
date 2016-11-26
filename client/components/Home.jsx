import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Screen from 'Screen'

class Home extends React.Component {
  render () {
    const style = {
      backgroundColor: Colors.themeBackgroundDark
    }

    return (
      <Screen
        style={style}
      >
        Home
      </Screen>
    )
  }
}

export default ConfiguredRadium(Home)
