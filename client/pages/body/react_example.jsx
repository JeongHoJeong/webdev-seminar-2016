import React from 'react'
import { ConfiguredRadium } from 'util'
import Page from 'Page'
import CodeBlock from 'CodeBlock'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import MiniNavigator from 'MiniNavigator'

const reactCodeJsx = require('!raw!./../../../assets/codes/react_hello.jsx')
const reactCodeJs = require('!raw!./../../../assets/codes/react_hello.js')

class Slide extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    const styles = {
      base: {
        width: '500px',
        height: '400px'
      },
      code: {
        position: 'absolute',
        width: '100%'
      }
    }

    return (
      <Page>
        <SimpleHeaderLayout
          title='React: Hello, World'
        >
          <MiniNavigator
            style={styles.base}
          >
            <CodeBlock
              key={0}
              style={styles.code}
              language='jsx'
              code={reactCodeJsx}
            />
            <CodeBlock
              key={1}
              style={styles.code}
              language='javascript'
              code={reactCodeJs}
            />
          </MiniNavigator>
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(Slide)
