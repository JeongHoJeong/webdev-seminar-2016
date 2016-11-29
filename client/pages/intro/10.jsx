import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import References from 'References'
import LinearLayout from 'LinearLayout'
import Center from 'Center'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import ImageWithCaption from 'ImageWithCaption'

class CustomImageWithCaption extends React.Component {
  render () {
    const style = {
      width: '180px'
    }

    return (
      <Center>
        <ImageWithCaption
          style={style}
          src={this.props.src}
          caption={this.props.caption}
          imageHeight='180px'
          captionFontColor={Colors.themeBlack}
          captionBackgroundColor={Colors.transparent}
        />
      </Center>
    )
  }
}

CustomImageWithCaption.propTypes = {
  caption: React.PropTypes.string.isRequired,
  src: React.PropTypes.string.isRequired
}

class Page10 extends React.Component {
  static getPageInfo () {
    return {
      group: 'Intro'
    }
  }

  render () {
    const references = [
      {
        name: 'React Native Showcase',
        link: 'https://facebook.github.io/react-native/showcase.html'
      },
      {
        name: 'Electron',
        link: 'http://electron.atom.io/'
      }
    ]

    return (
      <Page>
        <SimpleHeaderLayout
          title='CROSS PLATFORM APPS'
        >
          <LinearLayout
            horizontal
          >
            <CustomImageWithCaption
              src='/facebook.png'
              caption='Facebook'
            />
            <CustomImageWithCaption
              src='/instagram.jpeg'
              caption='Instagram'
            />
            <CustomImageWithCaption
              src='/slack-chat.png'
              caption='Slack'
            />
            <CustomImageWithCaption
              src='/airbnb.png'
              caption='Airbnb'
            />
          </LinearLayout>
        </SimpleHeaderLayout>
        <References
          items={references}
          color={Colors.orange}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Page10)
