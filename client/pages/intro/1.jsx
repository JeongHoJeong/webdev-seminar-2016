import React from 'react'
import { ConfiguredRadium } from 'util'
import Page from 'Page'
import LinearLayout from 'LinearLayout'
import Center from 'Center'

class Page1 extends React.Component {
  render () {
    return (
      <Page>
        <LinearLayout
          horizontal
        >
          <Center>
            Hello
          </Center>
          <Center>
            Hello2
          </Center>
          <Center>
            Hello3
          </Center>
        </LinearLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(Page1)
