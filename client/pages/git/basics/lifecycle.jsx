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
        <SimpleHeaderLayout
          title='Git 파일 관리 생명주기'
        >
          <Center
            style={{height: '100%'}}
          >
            <img
              src='/git/git_lifecycle.png'
            />
          </Center>
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
