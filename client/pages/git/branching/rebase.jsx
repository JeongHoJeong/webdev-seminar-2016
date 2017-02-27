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
import References from 'References'

class _Page extends React.Component {
  static getPageInfo () {
    return {
      group: 'branching'
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
      <Plain>하나의 branch를 특정 commit부터 다시 시작하게 하는 작업</Plain>
    ]

    const references = [
      {
        name: 'Rewriting History',
        link: 'https://www.atlassian.com/git/tutorials/rewriting-history'
      }
    ]

    return (
      <Page>
        <BaseSlide
          title='리베이스(rebase)'
          icon='call_merge'
        >
          <Center
            style={styles.center}
          >
            <img
              src={`${RootPath}/git/rebase.svg`}
              style={styles.img}
            />
            <SmallExplainer
              title='리베이스'
            >
              <List
                items={items}
              />
            </SmallExplainer>
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

export default ConfiguredRadium(_Page)
