import React from 'react'
import { ConfiguredRadium, Colors, RootPath } from 'util'
import Page from 'Page'
import Focus from 'Focus'
import Plain from 'Plain'
import Colored from 'Colored'

class _Page extends React.Component {
  static getPageInfo () {
    return {
      group: 'Intro'
    }
  }

  render () {
    return (
      <Page>
        <Focus
          title={<Plain>Git <Colored color={Colors.orange}><u>Branching</u></Colored></Plain>}
          sectionNumber={2}
          imageUrl={`${RootPath}/git/branches_image.jpg`}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
