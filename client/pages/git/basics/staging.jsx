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
    const references = [
      {
        name: 'Staging Area',
        link: 'https://git-scm.com/about/staging-area'
      }
    ]

    return (
      <Page>
        <Center
          style={{height: '100%'}}
        >
          <img
            src={`${RootPath}/git/staging.png`}
          />
        </Center>
        <References
          items={references}
          color={Colors.orange}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
