import React from 'react'
import { ConfiguredRadium, RootPath } from 'util'
import Page from 'Page'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import Center from 'Center'

class _Page extends React.Component {
  static getPageInfo () {
    return {
      group: 'practice'
    }
  }

  render () {
    return (
      <Page>
        <Center
          style={{height: '100%'}}
        >
          <img
            style={{height: '100%', width: '100%', objectFit: 'contain'}}
            src={`${RootPath}/git/github_flow.png`}
          />
        </Center>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
