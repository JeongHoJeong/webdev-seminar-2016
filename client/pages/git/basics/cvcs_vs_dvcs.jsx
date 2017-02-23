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
            src='/git/cvcs_vs_dvcs.png'
          />
        </Center>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
