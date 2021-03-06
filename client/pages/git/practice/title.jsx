import React from 'react'
import { ConfiguredRadium, Colors, RootPath } from 'util'
import Page from 'Page'
import Focus from 'Focus'
import Plain from 'Plain'
import Colored from 'Colored'

class _Page extends React.Component {
  static getPageInfo () {
    return {
      group: 'practice'
    }
  }

  render () {
    return (
      <Page>
        <Focus
          title={<Plain>Git의 <Colored color={Colors.lightBlue}><u>적용</u></Colored></Plain>}
          sectionNumber={3}
          imageUrl={`${RootPath}/git/tools.jpg`}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
