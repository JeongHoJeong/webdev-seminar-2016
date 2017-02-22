import React from 'react'
import { ConfiguredRadium } from 'util'
import Page from 'Page'
import CodeBlock from 'CodeBlock'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import MiniNavigator from 'MiniNavigator'
import LinearLayout from 'LinearLayout'
import SmallExplainer from 'SmallExplainer'
import List from 'List'

const init_sh = require('!raw-loader!./../../../../assets/codes/git/init.sh')

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
        code: init_sh,
        language: 'bash'
      }
    ]
  }

  renderCodes () {
    const style = {
      position: 'absolute',
      width: '100%'
    }

    return this.items.map((item, idx) => {
      return (
        <CodeBlock
          key={idx}
          style={style}
          language={item.language}
          code={item.code}
        />
      )
    })
  }

  render () {
    const styles = {
      base: {
        width: '700px',
        height: '400px'
      }
    }

    const description = {
      init: ['현재 working directory를 git 저장소로 초기화'],
      add: ['해당 파일을 stage'],
      commit: ['stage 된 파일들을 commit']
    }

    return (
      <Page>
        <SimpleHeaderLayout
          title='새로운 Git 저장소 생성'
        >
          <LinearLayout>
            <MiniNavigator
              style={styles.base}
            >
              {this.renderCodes()}
            </MiniNavigator>
            <LinearLayout>
              <SmallExplainer
                title='git init'
              >
                <List
                  items={description.init}
                />
              </SmallExplainer>
              <SmallExplainer
                title='git add'
              >
                <List
                  items={description.add}
                />
              </SmallExplainer>
              <SmallExplainer
                title='git commit'
              >
                <List
                  items={description.commit}
                />
              </SmallExplainer>
            </LinearLayout>
          </LinearLayout>
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
