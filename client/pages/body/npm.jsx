import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import Explainer from 'Explainer'
import List from 'List'
import Plain from 'Plain'
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
      <Plain><b>Node Package Manager</b></Plain>,
      <Plain>3rd party JavaScript 패키지 매니저</Plain>,
      <Plain>오픈 소스와 프라이빗(유료 라이센스) 패키지 모두 지원</Plain>,
      <Plain>2016년 11월 말 기준 37만개의 패키지가 있음</Plain>
    ]

    const references = [
      {
        name: 'npmjs',
        link: 'https://www.npmjs.com/'
      }
    ]

    return (
      <Page>
        <Explainer
          target={
            <img
              style={styles.img}
              src='/npm-logo.svg'
            />
          }
          title={'npm'}
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
