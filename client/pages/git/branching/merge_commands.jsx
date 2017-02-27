import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import SimpleHeaderLayout from 'SimpleHeaderLayout'
import SmallExplainer from 'SmallExplainer'
import List from 'List'
import Plain from 'Plain'
import Colored from 'Colored'

class _Page extends React.Component {
  static getPageInfo () {
    return {
      group: 'branching'
    }
  }

  render () {
    const items = {
      merge: [
        <Plain>HEAD 브랜치와 대상 브랜치(커밋)를 머지한 새 커밋을 만들고, 그 커밋으로 브랜치를 이동시킨다.</Plain>
      ],
      mergeAbort: [
        <Plain>머지 시도 후 충돌이 발생했을 때, 충돌 해결을 포기하고 머지를 시도하기 전 상태로 복귀한다.</Plain>
      ],
      rebase: [
        <Plain>HEAD 브랜치를 대상 브랜치(커밋)부터 다시 쌓아올린 형태로 히스토리를 변환한다.</Plain>
      ],
      rebaseInteractive: [
        <Plain>rebase와 같으나, 대화창을 열어 각 커밋에 대해 특수한 처리를 한다.</Plain>
      ]
    }

    const styles = {
      explainer: {
        width: '700px',
        flexGrow: 1
      }
    }

    return (
      <Page>
        <SimpleHeaderLayout
          title='머지 & 리베이스'
          vertical
        >
          <SmallExplainer
            title={<Plain>git merge <Colored color={Colors.blue}>&lt;commit&gt;</Colored></Plain>}
            style={styles.explainer}
          >
            <List
              items={items.merge}
            />
          </SmallExplainer>
          <SmallExplainer
            title={<Plain>git merge --abort</Plain>}
            style={styles.explainer}
          >
            <List
              items={items.mergeAbort}
            />
          </SmallExplainer>
          <SmallExplainer
            title={<Plain>git rebase <Colored color={Colors.blue}>&lt;commit&gt;</Colored></Plain>}
            style={styles.explainer}
          >
            <List
              items={items.rebase}
            />
          </SmallExplainer>
          <SmallExplainer
            title={<Plain>git rebase -i <Colored color={Colors.blue}>&lt;commit&gt;</Colored></Plain>}
            style={styles.explainer}
          >
            <List
              items={items.rebaseInteractive}
            />
          </SmallExplainer>
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
