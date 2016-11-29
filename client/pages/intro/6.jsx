import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import Explainer from 'Explainer'
import List from 'List'
import Plain from 'Plain'
import Colored from 'Colored'
import References from 'References'

class Page6 extends React.Component {
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
      <Plain><Colored color={Colors.lightYellow}>2011년 12월</Colored> IETF에서 <Colored color={Colors.lightYellow}>RFC 6455로 표준화</Colored></Plain>,
      <Plain>TCP 연결로 전이중 통신을 지원하며, 웹 서버와 브라우저 사이에 사용하도록 디자인됨</Plain>,
      <Plain>고전적인 Ajax 통신을 <b>경량 통신</b>으로 대체할 수 있음</Plain>
    ]

    const references = [
      {
        name: 'RFC 6455: The WebSocket Protocol',
        link: 'https://tools.ietf.org/html/rfc6455/'
      }
    ]

    return (
      <Page>
        <Explainer
          target={
            <img
              style={styles.img}
              src='/web_socket_logo.png'
            />
          }
          title={'Web Socket'}
          titleColor={Colors.white}
        >
          <List
            items={explanation}
          />
        </Explainer>
        <References
          items={references}
          color={Colors.themeBlack}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Page6)
