import React from 'react'
import Page from 'Page'
import Center from 'Center'
import { Colors } from 'util'

class Page02 extends React.Component {
  render () {
    const style = {
      backgroundColor: Colors.themeBackgroundLight
    }

    return (
      <Page
        style={style}
      >
        <Center>
          Page02
        </Center>
      </Page>
    )
  }
}

export default Page02
