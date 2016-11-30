import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import References from 'References'
import Page from 'Page'
import BaseSlide from 'BaseSlide'
import Center from 'Center'

class Slide extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    const references = [
      {
        name: '8 no-Flux strategies for React component communication',
        link: 'http://andrewhfarmer.com/component-communication/'
      }
    ]

    return (
      <Page>
        <BaseSlide
          title='컴포넌트간 의사소통 방식'
          icon='error'
        >
          <Center>
            <img
              src='/react_communication.png'
            />
          </Center>
        </BaseSlide>
        <References
          items={references}
          color={Colors.orange}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Slide)
