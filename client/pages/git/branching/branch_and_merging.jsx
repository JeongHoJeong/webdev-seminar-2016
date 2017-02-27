import React from 'react'
import { ConfiguredRadium, RootPath } from 'util'
import Page from 'Page'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import MiniNavigator from 'MiniNavigator'

class _Page extends React.Component {
  static getPageInfo() {
    return {
      group: 'body'
    }
  }

  constructor (props) {
    super(props)

    this.items = [
      `${RootPath}/git/branching_1.png`,
      `${RootPath}/git/branching_2.png`,
      `${RootPath}/git/branching_3.png`,
      `${RootPath}/git/branching_4.png`,
      `${RootPath}/git/branching_5.png`,
      `${RootPath}/git/branching_6.png`,
      `${RootPath}/git/branching_7.png`,
      `${RootPath}/git/branching_8.png`
    ]
  }

  renderItems () {
    const style = {
      objectFit: 'contain',
      width: '600px',
      position: 'absolute'
    }

    return this.items.map((item, idx) => {
      return (
        <img
          key={idx}
          src={item}
          style={style}
        />
      )
    })
  }

  render () {
    return (
      <Page>
        <SimpleHeaderLayout
          title='Branch & Merging'
        >
          <MiniNavigator style={{width: '600px', height: '400px'}}>
            {this.renderItems()}
          </MiniNavigator>
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
