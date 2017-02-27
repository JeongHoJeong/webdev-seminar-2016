import React from 'react'
import { ConfiguredRadium, RootPath } from 'util'
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
        <SimpleHeaderLayout
          title='git status'
        >
          <Center
            style={{height: '100%'}}
          >
            <img
              src={`${RootPath}/git/git_status.png`}
            />
          </Center>
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
