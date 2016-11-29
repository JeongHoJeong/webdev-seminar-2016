import React from 'react'
import { ConfiguredRadium } from 'util'
import Page from 'Page'
import BaseSlide from 'BaseSlide'
import LinearLayout from 'LinearLayout'
import Center from 'Center'

class Page2 extends React.Component {
  static getPageInfo () {
    return {
      group: 'Intro'
    }
  }

  render () {
    const styles = {
      img: {
        height: '170px',
        padding: '35px'
      }
    }

    return (
      <Page>
        <BaseSlide
          title='웹 환경의 급격한 진화'
          icon='error'
        >
          <LinearLayout
            horizontal
          >
            <Center>
              <img
                style={styles.img}
                src='/html5_logo.png'
              />
            </Center>
            <Center>
              <img
                style={styles.img}
                src='/css3_logo.png'
              />
            </Center>
            <Center>
              <img
                style={styles.img}
                src='/es6.png'
              />
            </Center>
            <Center>
              <img
                style={styles.img}
                src='/web_socket_logo.png'
              />
            </Center>
          </LinearLayout>
        </BaseSlide>
      </Page>
    )
  }
}

export default ConfiguredRadium(Page2)
