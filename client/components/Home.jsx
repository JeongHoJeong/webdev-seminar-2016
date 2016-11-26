import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Center from 'Center'

class Home extends React.Component {
  render () {
    const style = {
      backgroundColor: Colors.themeBackgroundDark
    }

    return (
      <Center
        style={style}
      >
        Home
      </Center>
    )
  }
}

export default ConfiguredRadium(Home)
