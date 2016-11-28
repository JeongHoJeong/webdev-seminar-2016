import React from 'react'
import { ConfiguredRadium } from 'util'
import Page from 'Page'
import Focus from 'Focus'

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
          title={'2016년, 웹에는\n무슨 일이\n일어나고 있는가'}
          sectionNumber={1}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Page1)
