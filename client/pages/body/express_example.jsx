import React from 'react'
import { ConfiguredRadium } from 'util'
import Page from 'Page'
import CodeBlock from 'CodeBlock'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import References from 'References'

const code = require('!raw-loader!./../../../assets/codes/express.js')

class Slide extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    const references = [
      {
        name: 'Express: Hello World 예제',
        link: 'http://expressjs.com/ko/starter/hello-world.html'
      }
    ]

    return (
      <Page>
        <SimpleHeaderLayout
          title='Express HTTP Hello World Server'
        >
          <CodeBlock
            language='javascript'
            code={code}
          />
        </SimpleHeaderLayout>
        <References
          items={references}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Slide)
