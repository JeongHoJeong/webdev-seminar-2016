import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import References from 'References'

class Page9 extends React.Component {
  static getPageInfo () {
    return {
      group: 'Intro'
    }
  }

  render () {
    const style = {
      img: {
        backgroundImage: 'url(/mobile_internet_usage.png)',
        backgroundSize: 'contain',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: Colors.themeBlack
      }
    }

    const references = [
      {
        name: 'KPCB: 2015 Internet Trends',
        link: 'http://www.kpcb.com/blog/2015-internet-trends/'
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

export default ConfiguredRadium(Page9)
