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
      <Plain>Node.js를 위한 <Colored color={Colors.lightOrange}>웹 프레임워크</Colored></Plain>,
      <Plain><b>미들웨어</b> 기반의 빠르고 간결한 코드 작성</Plain>
    ]

    const references = [
      {
        name: 'Express',
        link: 'http://expressjs.com/'
      }
    ]

    return (
      <Page>
        <Explainer
          target={
            <img
              style={styles.img}
              src='/express.png'
            />
          }
          title={'Express'}
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
