import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import Focus from 'Focus'
import Plain from 'Plain'
import Colored from 'Colored'

class Slide extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    return (
      <Page>
        <Focus
          title={<Plain><Colored color={Colors.orange}>모던 웹 프레임워크</Colored><br />맛보기</Plain>}
          sectionNumber={2}
          imageUrl='/body_intro.jpg'
          horizontal={false}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Slide)
