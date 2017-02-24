import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
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
import SmallExplainer from 'SmallExplainer'

class Panel extends React.Component {
  render () {
    return (
      <ImageWithCaption
        style={{padding: '25px'}}
        src={this.props.src}
        caption={this.props.caption}
      />
    )
  }
}

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
        src: '/git/isolated_dev.png',
        caption: '개발 환경의 격리'
      },
      {
        src: '/git/safe_merge.jpg',
        caption: '안전한 병합'
      },
      {
        src: '/git/code-review.jpg',
        caption: '코드 리뷰'
      }
    ]
  }

  renderItems () {
    return this.items.map((item, idx) => {
      return (
        <Panel
          key={idx}
          src={item.src}
          caption={item.caption}
        />
      )
    })
  }

  render () {
    return (
      <Page>
        <BaseSlide
          title='Git으로 이루고자 하는 것들'
          icon='done'
        >
          <LinearLayout horizontal>
            {this.renderItems()}
          </LinearLayout>
        </BaseSlide>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
