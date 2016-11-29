import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import BaseSlide from 'BaseSlide'
import MiniNavigator from 'MiniNavigator'
import Center from 'Center'

class ImageWithCaption extends React.Component {
  render () {
    const styles = {
      root: {
        position: 'absolute',
        width: '100%'
      },
      base: {
        width: '100%'
      },
      image: {
        container: {
          height: '300px',
          backgroundColor: Colors.white,
          overflow: 'hidden',
          textAlign: 'center'
        },
        img: {
          height: '100%'
        }
      },
      caption: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90px',
        backgroundColor: Colors.themeBlack,
        color: Colors.white,
        fontSize: '32px',
        fontWeight: 700
      }
    }

    return (
      <div
        style={styles.root}
      >
        <div
          style={styles.base}
        >
          <div
            style={styles.image.container}
          >
            <img
              style={styles.image.img}
              src={this.props.src}
            />
          </div>
          <div
            style={styles.caption}
          >
            {this.props.caption}
          </div>
        </div>
      </div>
    )
  }
}

ImageWithCaption.propTypes = {
  src: React.PropTypes.string.isRequired,
  caption: React.PropTypes.string.isRequired
}

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
        src: '',
        caption: 'responsive web'
      }
    ]

    this.state = {
      page: 0
    }
  }

  renderItems () {
    return this.items.map((item, idx) => {
      return (
        <ImageWithCaption
          key={idx}
          src={item.src}
          caption={item.caption}
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
