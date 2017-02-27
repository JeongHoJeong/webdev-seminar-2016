import React from 'react'
import { ConfiguredRadium, RootPath, Colors } from 'util'
import Page from 'Page'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import Center from 'Center'
import References from 'References'

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

    const references = [
      {
        name: 'Git Basics - Recording Changes to the Repository',
        link: 'https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository'
      }
    ]

    return (
      <Page>
        <SimpleHeaderLayout
          title='Git 파일 관리 생명주기'
        >
          <Center
            style={{height: '100%'}}
          >
            <img
              src={`${RootPath}/git/git_lifecycle.png`}
            />
          </Center>
        </SimpleHeaderLayout>
        <References
          items={references}
          color={Colors.orange}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
