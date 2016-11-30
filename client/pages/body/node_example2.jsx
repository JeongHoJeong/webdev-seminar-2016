import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import CodeBlock from 'CodeBlock'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import References from 'References'

const code = require('!raw-loader!./../../../assets/codes/node_static_file_server.js')

class Slide extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    const style = {
      height: '500px',
      overflow: 'scroll',
      backgroundColor: Colors.codeBlockBackground
    }

    const references = [
      {
        name: 'MDN: Node server without framework',
        link: 'https://developer.mozilla.org/en-US/docs/Node_server_without_framework'
      }
    ]

    return (
      <Page>
        <SimpleHeaderLayout
          title='Node.js HTTP Static File Server?'
        >
          <div
            style={style}
          >
            <CodeBlock
              language='javascript'
              code={code}
            />
          </div>
        </SimpleHeaderLayout>
        <References
          items={references}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Slide)
