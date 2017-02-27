import React from 'react'
import { ConfiguredRadium, Colors, RootPath } from 'util'
import Page from 'Page'
import BaseSlide from 'BaseSlide'
import Center from 'Center'
import LinearLayout from 'LinearLayout'
import ImageWithCaption from 'ImageWithCaption'
import Plain from 'Plain'
import List from 'List'
import Colored from 'Colored'
import MiniNavigator from 'MiniNavigator'
import CodeBlock from 'CodeBlock'

class _Page extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  constructor (props) {
    super(props)

    this.items = [
      {
        src: `${RootPath}/git/cvcs_vs_dvcs_simple.png`,
        caption: 'Distributed Version Control'
      },
      {
        src: `${RootPath}/git/snapshots.png`,
        caption: 'Stream of Snapshots'
      },
      {
        src: `${RootPath}/git/non_linear_dev.png`,
        caption: 'Strong Non-linear Development'
      },
      {
        src: `${RootPath}/git/github_logo.png`,
        caption: 'Robust Community & Hosting'
      }
    ]
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
          imageHeight='350px'
        />
      )
    })
  }

  render () {
    const styles = {
      base: {
        width: '900px',
        height: '800px'
      }
    }

    return (
      <Page>
        <BaseSlide
          title='Git이란?'
          icon='help'
        >
          <Center>
            <MiniNavigator
              style={styles.base}
            >
              {this.renderItems()}
            </MiniNavigator>
          </Center>
        </BaseSlide>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
