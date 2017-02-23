import React from 'react'
import { ConfiguredRadium } from 'util'
import Page from 'Page'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import Center from 'Center'

class _Page extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    return (
      <Page>
        <Center
          style={{height: '100%'}}
        >
          <img
            src='/git/staging.png'
          />
        </Center>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
