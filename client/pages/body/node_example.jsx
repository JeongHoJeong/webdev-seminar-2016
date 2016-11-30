import React from 'react'
import { ConfiguredRadium } from 'util'
import Page from 'Page'
import CodeBlock from 'CodeBlock'
import SimpleHeaderLayout from 'SimpleHeaderLayout'

const code = require('!raw-loader!./../../../assets/codes/node.js')

class Slide extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    return (
      <Page>
        <SimpleHeaderLayout
          title='Node.js HTTP Server'
        >
          <CodeBlock
            language='javascript'
            code={code}
          />
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(Slide)
