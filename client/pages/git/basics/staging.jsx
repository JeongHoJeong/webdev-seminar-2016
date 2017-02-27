import React from 'react'
import { ConfiguredRadium, RootPath } from 'util'
import Page from 'Page'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import Center from 'Center'

class _Page extends React.Component {
  static getPageInfo () {
    return {
      group: 'basics'
    }
  }

  render () {
    return (
      <Page>
        <Center
          style={{height: '100%'}}
        >
          <img
            src={`${RootPath}/git/staging.png`}
          />
        </Center>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
