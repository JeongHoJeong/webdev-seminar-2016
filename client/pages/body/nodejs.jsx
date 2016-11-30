import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import Explainer from 'Explainer'
import List from 'List'
import Plain from 'Plain'
import Colored from 'Colored'
import References from 'References'

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
      <Plain>Chrome V8 JavaScript 엔진으로 빌드된 <b>JavaScript 런타임</b></Plain>,
      <Plain><Colored color={Colors.lightOrange}>비동기 이벤트 주도</Colored>로 작성되어 스레드 모델과 대조적</Plain>,
      <Plain>기본적으로 싱글 스레드로 설계되었으나, fork나 cluster를 이용해 다수 코어간 로드 밸런싱 가능</Plain>
    ]

    const references = [
      {
        name: 'Node.js',
        link: 'https://nodejs.org/ko/'
      }
    ]

    return (
      <Page>
        <Explainer
          target={
            <img
              style={styles.img}
              src='/nodejs.png'
            />
          }
          title={'Node.js'}
          titleColor={Colors.orange}
        >
          <List
            items={explanation}
          />
        </Explainer>
        <References
          items={references}
          color={Colors.orange}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Slide)
