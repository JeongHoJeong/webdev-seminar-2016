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
        name: 'From Subversion to Git',
        link: 'https://www.git-tower.com/learn/git/ebook/en/desktop-gui/appendix/from-subversion-to-git'
      }
    ]

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
        <References
          items={references}
          color={Colors.orange}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
