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
          title={<Plain><Colored color={Colors.orange}>Git</Colored> 시작하기</Plain>}
          sectionNumber={1}
          imageUrl={`${RootPath}/git/startup.jpg`}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
