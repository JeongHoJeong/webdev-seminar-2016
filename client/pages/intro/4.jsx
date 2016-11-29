import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import Explainer from 'Explainer'
import List from 'List'
import Plain from 'Plain'
import Colored from 'Colored'
import References from 'References'

class Page4 extends React.Component {
  static getPageInfo () {
    return {
      group: 'Intro'
    }
  }

  render () {
    const styles = {
      img: {
        width: '180px'
      }
    }

    const explanation = [
      <Plain>2015년 W3C에서 <Colored color={Colors.lightBlue}>CSS Snapshot 2015</Colored>를 발표</Plain>,
      <Plain>모듈별로 표준화가 별도로 진행되고 있으며, 2007년부터 표준 스냅샷이 발표되고 있음</Plain>,
      <Plain>Media Query, Flexbox, Animation &amp; Transition, ...</Plain>
    ]

    const references = [
      {
        name: 'W3C: CSS Snapshot 2015',
        link: 'https://www.w3.org/TR/css-2015/'
      },
      {
        name: 'MDN: CSS3',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3'
      }
    ]

    return (
      <Page>
        <Explainer
          target={
            <img
              style={styles.img}
              src='/css3_logo.png'
            />
          }
          title={'CSS 3'}
          titleColor={Colors.blue}
        >
          <List
            items={explanation}
          />
        </Explainer>
        <References
          items={references}
          color={Colors.blue}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Page4)
