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
      base: {
        width: '900px',
        height: '800px'
      },
      center: {
        justifyContent: 'space-around'
      }
    }

    const items = [
      <Plain>2개 이상의 branch를 하나로 합치는 작업</Plain>,
      <Plain>병합의 결과로 하나의 새로운 merge commit이 생성된다.</Plain>
    ]

    const references = [
      {
        name: 'Fugitive.vim - Resolving Merge Conflicts with Vimdiff',
        link: 'http://vimcasts.org/episodes/fugitive-vim-resolving-merge-conflicts-with-vimdiff/'
      }
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
              src={`${RootPath}/git/merge.png`}
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
        <References
          items={references}
          color={Colors.orange}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
