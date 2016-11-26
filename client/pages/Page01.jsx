import React from 'react'
import Page from 'Page'
import Center from 'Center'
import { Colors } from 'util'

class Page01 extends React.Component {
  render () {
    const style = {
      backgroundColor: Colors.themeBackgroundDark
    }

    return (
      <Page
        style={style}
      >
        <Center>
          Page01
        </Center>
      </Page>
    )
  }
}

export default Page01
