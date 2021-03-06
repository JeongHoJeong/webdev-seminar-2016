import React from 'react'
import { ConfiguredRadium } from 'util'
import Page from 'Page'
import CodeBlock from 'CodeBlock'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import MiniNavigator from 'MiniNavigator'

const npmScript1 = require('!raw-loader!./../../../assets/codes/npm.sh')
const npmScript2 = require('!raw-loader!./../../../assets/codes/npm2.sh')
const expressCode = require('!raw-loader!./../../../assets/codes/express.js')

class Slide extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    const styles = {
      base: {
        width: '700px',
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
          title='Setting up Express project'
        >
          <MiniNavigator
            style={styles.base}
          >
            <CodeBlock
              key={0}
              style={styles.code}
              language='bash'
              code={npmScript1}
            />
            <CodeBlock
              key={1}
              style={styles.code}
              language='javascript'
              code={'/* server.js */\n' + expressCode}
            />
            <CodeBlock
              key={2}
              style={styles.code}
              language='bash'
              code={npmScript2}
            />
          </MiniNavigator>
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(Slide)
