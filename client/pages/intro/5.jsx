import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import Explainer from 'Explainer'
import List from 'List'
import Plain from 'Plain'
import Colored from 'Colored'
import References from 'References'

class Page5 extends React.Component {
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
      <Plain>W3C가 <Colored color={Colors.lightYellow}>2014년 10월 28일에 표준안으로 확정</Colored></Plain>,
      <Plain>멀티미디어 지원, 그래픽 툴 발전, 하드웨어 지원 향상 등</Plain>,
      <Plain><b>Multimedia:</b> &lt;audio&gt;, &lt;video&gt;  support</Plain>,
      <Plain><b>Graphics:</b> Canvas, WebGL, SVG, ...</Plain>,
      <Plain><b>Performance:</b> Web Worker, Browser History, ...</Plain>
    ]

    const references = [
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
              src='/es6.png'
            />
          }
          title={'ECMAScript 6'}
          titleColor={Colors.yellow}
        >
          <List
            items={explanation}
          />
        </Explainer>
        <References
          items={references}
          color={Colors.yellow}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Page5)
