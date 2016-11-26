import React from 'react'
import Center from 'Center'
import { ConfiguredRadium } from 'util'

class NotFound extends React.Component {
  render () {
    return (
      <Center>
        Sorry, page not found!
      </Center>
    )
  }
}

export default ConfiguredRadium(NotFound)
