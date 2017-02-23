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

class _Page extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    const styles = {
      base: {
        width: '900px',
        height: '800px'
      },
      center: {
        justifyContent: 'space-around'
      }
    }

    const items = [
      <Plain>2개 이상의 branch를 하나로 합치는 작업</Plain>
    ]

    return (
      <Page>
        <BaseSlide
          title='병합(merge)'
          icon='call_merge'
        >
          <Center
            style={styles.center}
          >
            <img
              src='/git/merge.png'
            />
            <SmallExplainer
              title='병합'
            >
              <List
                items={items}
              />
            </SmallExplainer>
          </Center>
        </BaseSlide>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
