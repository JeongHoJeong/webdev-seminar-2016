import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import CodeBlock from 'CodeBlock'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import Center from 'Center'
import Example from './../../../assets/codes/react_component_example.jsx'

const exampleCode = require('!raw!./../../../assets/codes/react_component_example.jsx')

class Slide extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    const styles = {
      leftBox: {
        flexGrow: 0.5
      },
      codeBlockContainer: {
        height: '500px',
        overflow: 'scroll',
        backgroundColor: Colors.codeBlockBackground
      }
    }

    return (
      <Page>
        <SimpleHeaderLayout
          title='Component & state'
        >
          <Center
            style={styles.leftBox}
          >
            <div
              style={styles.codeBlockContainer}
            >
              <CodeBlock
                language='jsx'
                code={exampleCode}
              />
            </div>
          </Center>
          <Center>
            <Example />
          </Center>
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(Slide)
