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
    const fullHeightStyle = {
      height: '100%'
    }

    return (
      <Page>
        <Center
          style={fullHeightStyle}
        >
          <img
            style={fullHeightStyle}
            src={`${RootPath}/git/cvcs_vs_dvcs.png`}
          />
        </Center>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
