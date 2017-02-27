import React from 'react'
import Page from 'Page'
import { ConfiguredRadium, Styles, Colors, RootPath } from 'util'

class _Page extends React.Component {
  static getPageInfo () {
    return {
      group: 'intro'
    }
  }

  render () {
    const styles = {
      page: {
        backgroundColor: Colors.themeBackgroundDark,
        backgroundImage: `url(${RootPath}/git/intro.jpg)`,
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
      announcement: [Styles.koreanFont, {
        position: 'absolute',
        top: '25px',
        width: '100%',
        fontSize: '24px',
        textAlign: 'center',
        fontWeight: 300
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
            2017. 2. 24. Enbsoft Seminar / Jeongho Jeong
          </div>
          <div
            style={styles.title}
          >
            GIT
          </div>
        </div>
        <div
          style={styles.announcement}
        >
          <p>
            가급적 최신 브라우저를 사용해 주세요.
          </p>
          <p>
            키보드의 좌우 화살표 키로 슬라이드를 넘기세요.
          </p>
        </div>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
