import React from 'react'
import Page from 'Page'
import { ConfiguredRadium, Styles, Colors } from 'util'

class Home extends React.Component {
  static getPageInfo () {
    return {
      group: 'Home'
    }
  }

  render () {
    const styles = {
      page: {
        backgroundColor: Colors.themeBackgroundDark,
        backgroundImage: `url(/main-page3.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      },
      base: {
        position: 'absolute',
        left: '20px',
        bottom: '20px'
      },
      title: [Styles.emphasizedFont, {
        fontSize: '64px'
      }],
      subtitle: [Styles.subtitleFont, {
        fontSize: '24px'
      }],
      help: [Styles.koreanFont, {
        position: 'absolute',
        left: '20px',
        top: '20px'
      }]
    }

    return (
      <Page
        style={styles.page}
      >
        <div
          style={styles.base}
        >
          <div
            style={styles.subtitle}
          >
            2016. 11. 30 Enbsoft Seminar by Jeongho Jeong
          </div>
          <div
            style={styles.title}
          >
            WEB DEV TRENDS 2016
          </div>
        </div>
        <div
          style={styles.help}
        >
          <p>가급적 최신 브라우저를 사용해 주세요.</p>
          <p>키보드의 좌우 화살표 키로 슬라이드를 넘기세요.</p>
        </div>
      </Page>
    )
  }
}

export default ConfiguredRadium(Home)
