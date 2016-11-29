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
      <Plain>2015년 6월 ECMA International에서 <Colored color={Colors.lightYellow}>ECMAScript 2015 Language Specification을 발표함</Colored></Plain>,
      <Plain><b>ES6</b>, <b>ECMAScript Harmony</b> 등으로도 불림</Plain>,
      <Plain><b>class, iterator, generator, promise</b> 등 유지보수성과 확장성을 높이는 요소들이 대거 추가됨</Plain>
    ]

    const references = [
      {
        name: 'ECMA International: ECMAScript 2015 Language Specification',
        link: 'http://www.ecma-international.org/ecma-262/6.0/'
      },
      {
        name: 'ECMAScript 6 - New Features: Overview & Comparison',
        link: 'http://es6-features.org/'
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
          color={Colors.darkYellow}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Page5)
