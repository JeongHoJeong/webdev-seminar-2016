import React from 'react'
import { ConfiguredRadium } from 'util'
import Page from 'Page'
import BaseSlide from 'BaseSlide'
import Center from 'Center'
import LinearLayout from 'LinearLayout'
import ImageWithCaption from 'ImageWithCaption'

class Slide extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    const style = {
      width: '310px'
    }

    return (
      <Page>
        <BaseSlide
          title='Babel과 Webpack'
          icon='error'
        >
          <LinearLayout
            horizontal
          >
            <Center>
              <ImageWithCaption
                style={style}
                src='/babel.png'
                caption='Babel'
              />
            </Center>
            <Center>
              <ImageWithCaption
                style={style}
                src='/webpack.png'
                caption='Webpack'
              />
            </Center>
          </LinearLayout>
        </BaseSlide>
      </Page>
    )
  }
}

export default ConfiguredRadium(Slide)
