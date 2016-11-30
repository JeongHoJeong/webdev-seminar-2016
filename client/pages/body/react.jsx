import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import Explainer from 'Explainer'
import List from 'List'
import Plain from 'Plain'
import References from 'References'
import Colored from 'Colored'

class Slide extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    const styles = {
      img: {
        width: '240px'
      }
    }

    const explanation = [
      <Plain>Facebook에서 개발한 <Colored color={Colors.lightBlue}>JavaScript UI 라이브러리</Colored></Plain>,
      <Plain>뷰 데이터의 명령적(imperative)이 아닌 <b>선언적(declarative) 기술</b></Plain>,
      <Plain>Component 기반의 구조화</Plain>,
      <Plain><b>React Native</b>를 통한 <Colored color={Colors.lightBlue}>cross-platform 지원</Colored></Plain>
    ]

    const references = [
      {
        name: 'React',
        link: 'https://facebook.github.io/react/'
      }
    ]

    return (
      <Page>
        <Explainer
          target={
            <img
              style={styles.img}
              src='/react.svg'
            />
          }
          title={'React'}
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

export default ConfiguredRadium(Slide)
