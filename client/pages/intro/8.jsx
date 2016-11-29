import React from 'react'
import { ConfiguredRadium } from 'util'
import Page from 'Page'
import BaseSlide from 'BaseSlide'
import MiniNavigator from 'MiniNavigator'
import Center from 'Center'
import ImageWithCaption from 'ImageWithCaption'

class Page8 extends React.Component {
  static getPageInfo () {
    return {
      group: 'Intro'
    }
  }

  constructor (props) {
    super(props)

    this.items = [
      {
        src: '/isomorphic.jpg',
        caption: 'isomorphic web'
      },
      {
        src: '/responsive-design.png',
        caption: 'responsive web'
      },
      {
        src: '/pwa.png',
        caption: 'progressive web apps'
      },
      {
        src: '/cross-platform-development.png',
        caption: 'cross platform'
      }
    ]

    this.state = {
      page: 0
    }
  }

  renderItems () {
    const style = {
      position: 'absolute'
    }

    return this.items.map((item, idx) => {
      return (
        <ImageWithCaption
          key={idx}
          src={item.src}
          caption={item.caption}
          style={style}
        />
      )
    })
  }

  render () {
    const styles = {
      navigator: {
        width: '40%',
        height: '500px'
      }
    }

    return (
      <Page>
        <BaseSlide
          title='변화하는 트렌드'
          icon='error'
        >
          <Center>
            <MiniNavigator
              style={styles.navigator}
            >
              {this.renderItems()}
            </MiniNavigator>
          </Center>
        </BaseSlide>
      </Page>
    )
  }
}

export default ConfiguredRadium(Page8)
