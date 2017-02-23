import React from 'react'
import Page from 'Page'
import { ConfiguredRadium, Styles, Colors } from 'util'

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
        backgroundImage: `url(/git/intro.jpg)`,
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
            2017. 2. 24. Enbsoft Seminar
          </div>
          <div
            style={styles.title}
          >
            GIT
          </div>
        </div>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
