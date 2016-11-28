import React from 'react'
import { ConfiguredRadium } from 'util'
import Page from 'Page'
import BaseSlide from 'BaseSlide'

class Page2 extends React.Component {
  static getPageInfo () {
    return {
      group: 'Intro'
    }
  }

  render () {
    return (
      <Page>
        <BaseSlide
          title='웹 환경의 급격한 변화'
          icon='error_outline'
        >
          Body goes here
        </BaseSlide>
      </Page>
    )
  }
}

export default ConfiguredRadium(Page2)
