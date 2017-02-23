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
    return this.items.map((item, idx) => {
      return (
        <CodeBlock
          key={idx}
          language={item.language}
          code={item.code}
        />
      )
    })
  }

  render () {
    const styles = {
      explainer: {
        flexGrow: 1
      },
      codeWrapper: {
        display: 'flex',
        padding: '20px',
        flexGrow: 1
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
          vertical
        >
          <div
            style={styles.codeWrapper}
          >
            <CodeBlock
              language={'bash'}
              code={init_sh}
            />
          </div>
          <SmallExplainer
            title='git init'
            style={styles.explainer}
          >
            <List
              items={description.init}
            />
          </SmallExplainer>
          <SmallExplainer
            title='git add'
            style={styles.explainer}
          >
            <List
              items={description.add}
            />
          </SmallExplainer>
          <SmallExplainer
            title='git commit'
            style={styles.explainer}
          >
            <List
              items={description.commit}
            />
          </SmallExplainer>
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
