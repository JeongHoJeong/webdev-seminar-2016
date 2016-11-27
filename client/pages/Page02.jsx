import React from 'react'
import Page from 'Page'
import Center from 'Center'
import { Colors } from 'util'
import CodeBlock from 'CodeBlock'

let code = require('!raw-loader!pages')

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
          <CodeBlock
            language='javascript'
            code={code}
          />
        </Center>
      </Page>
    )
  }
}

export default Page02
