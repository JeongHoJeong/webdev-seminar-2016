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
import SmallExplainer from 'SmallExplainer'

class _Page extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    const styles = {
      img: {
        height: '500px'
      },
      center: {
        justifyContent: 'space-around'
      }
    }

    const items = [
      <Plain><Colored color={Colors.orange}><b>넓은 의미:</b></Colored> 하나의 독립적인 작업 흐름</Plain>,
      <Plain><Colored color={Colors.orange}><b>좁은 의미:</b></Colored> 특정 commit으로의 포인터</Plain>,
      <Plain>보통 작업의 단위마다 브랜치를 나누고, 작업을 마친 후 하나로 합친다.</Plain>
    ]

    return (
      <Page>
        <BaseSlide
          title='브랜치(branch)'
          icon='call_split'
        >
          <Center
            style={styles.center}
          >
            <img
              src={`${RootPath}/git/branches.svg`}
              style={styles.img}
            />
            <SmallExplainer
              title='브랜치'
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
