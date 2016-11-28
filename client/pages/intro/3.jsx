import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import Explainer from 'Explainer'
import List from 'List'
import Plain from 'Plain'
import Colored from 'Colored'
import References from 'References'

class Page3 extends React.Component {
  static getPageInfo () {
    return {
      group: 'Intro'
    }
  }

  render () {
    const styles = {
      img: {
        width: '240px'
      }
    }

    const explanation = [
      <Plain>W3C가 <Colored color={Colors.lightOrange}>2014년 10월 28일에 표준안으로 확정</Colored></Plain>,
      <Plain>멀티미디어 지원 대폭 강화</Plain>,
      <Plain><b>Graphics:</b> Canvas, WebGL, SVG, ...</Plain>
    ]

    const references = [
      {
        name: 'MDN: HTML5',
        link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
      }
    ]

    return (
      <Page>
        <Explainer
          target={
            <img
              style={styles.img}
              src='/html5_logo.png'
            />
          }
          title={'HTML 5'}
        >
          <List
            items={explanation}
          />
        </Explainer>
        <References
          items={references}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Page3)
