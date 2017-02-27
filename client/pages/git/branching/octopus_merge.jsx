import React from 'react'
import { ConfiguredRadium, RootPath, Colors } from 'util'
import Page from 'Page'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import Center from 'Center'
import References from 'References'

class _Page extends React.Component {
  static getPageInfo () {
    return {
      group: 'branching'
    }
  }

  render () {
    const references = [
      {
        name: 'Complete Sample Merges of Git That Won\'t Work in SVN',
        link: 'http://stackoverflow.com/a/14960725/5945418'
      }
    ]

    return (
      <Page>
        <Center
          style={{height: '100%'}}
        >
          <img
            style={{height: '100%', objectFit: 'contain'}}
            src={`${RootPath}/git/octopus_merge.png`}
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
