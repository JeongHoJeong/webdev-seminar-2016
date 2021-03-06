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
            2016. 11. 30 Enbsoft Seminar
          </div>
          <div
            style={styles.title}
          >
            WEB DEV TRENDS 2016
          </div>
        </div>
      </Page>
    )
  }
}

export default ConfiguredRadium(Home)
