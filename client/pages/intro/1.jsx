import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import Focus from 'Focus'
import Plain from 'Plain'
import Colored from 'Colored'

class Page1 extends React.Component {
  static getPageInfo () {
    return {
      group: 'Intro'
    }
  }

  render () {
    return (
      <Page>
        <Focus
          title={<Plain><Colored color={Colors.orange}>2016년, 웹</Colored>에는<br /><u>무슨 일</u>이<br />일어나고 있는가</Plain>}
          sectionNumber={1}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Page1)
