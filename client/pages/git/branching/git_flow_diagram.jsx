import React from 'react'
import { ConfiguredRadium, RootPath } from 'util'
import Page from 'Page'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import Center from 'Center'

class _Page extends React.Component {
  static getPageInfo () {
    return {
      group: 'branching'
    }
  }

  render () {
    return (
      <Page>
        <Center
          style={{height: '100%'}}
        >
          <img
            style={{height: '100%', objectFit: 'contain'}}
            src={`${RootPath}/git/gitflow.png`}
          />
        </Center>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
