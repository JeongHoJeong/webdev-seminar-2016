import React from 'react'
import Page from 'Page'
import Center from 'Center'
import { ConfiguredRadium } from 'util'

class NotFound extends React.Component {
  render () {
    return (
      <Page>
        <Center>
          Sorry, page not found!
        </Center>
      </Page>
    )
  }
}

export default ConfiguredRadium(NotFound)
