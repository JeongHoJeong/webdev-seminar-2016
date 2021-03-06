import React from 'react'
import { ConfiguredRadium } from 'util'
import Page from 'Page'
import CodeBlock from 'CodeBlock'
import SimpleHeaderLayout from 'SimpleHeaderLayout'

const code = require('!raw!./../../../assets/codes/react_component_embedding.jsx')

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
          title='React: 컴포넌트의 임베딩'
        >
          <CodeBlock
            language='jsx'
            code={code}
          />
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(Slide)
