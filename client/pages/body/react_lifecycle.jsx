import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import References from 'References'

class Slide extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    const style = {
      img: {
        backgroundImage: 'url(/lifecycle.png)',
        backgroundSize: 'contain',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: Colors.themeBlack
      }
    }

    const references = [
      {
        name: 'React components lifecycle diagram by Eduardo Bouças',
        link: 'https://codepen.io/tgoyer/details/ONNJWE'
      }
    ]

    return (
      <Page>
        <div
          style={style.img}
        />
        <References
          items={references}
          color={Colors.orange}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Slide)
