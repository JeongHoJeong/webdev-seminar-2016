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
        name: 'Getting Started with Git - Git Status Example',
        link: 'http://jr0cket.co.uk/slides/getting-started-with-git.html#/sec-7-2'
      }
    ]

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
        <References
          items={references}
          color={Colors.orange}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
