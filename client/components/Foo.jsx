import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Center from 'Center'

class Foo extends React.Component {
  render () {
    const style = {
      backgroundColor: Colors.themeBackgroundLight
    }

    return (
      <Center
        style={style}
      >
        FOO!
      </Center>
    )
  }
}

export default ConfiguredRadium(Foo)
