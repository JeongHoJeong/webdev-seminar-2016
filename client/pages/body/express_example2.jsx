import React from 'react'
import { ConfiguredRadium } from 'util'
import Page from 'Page'
import CodeBlock from 'CodeBlock'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import References from 'References'

const code = require('!raw-loader!./../../../assets/codes/express_static_file_server.js')

class Slide extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    const references = [
      {
        name: 'Express: Express에서 정적 파일 제공',
        link: 'http://expressjs.com/ko/starter/static-files.html'
      }
    ]

    return (
      <Page>
        <SimpleHeaderLayout
          title='Express Static File Server'
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
