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
      group: 'practice'
    }
  }

  render () {
    const items = {
      commitAmend: [
        <Plain>현재 브랜치의 끝에 있는 commit의 메세지를 수정한다.</Plain>
      ],
      checkout: [
        <Plain>해당 파일을 HEAD의 상태로 되돌린다. 즉, modified 상태인 파일을 unmodified 상태로 되돌린다.</Plain>
      ],
      resetHead: [
        <Plain>현재 branch가 특정 commit을 가리키게 한다.</Plain>
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
          title='되돌리기'
          vertical
        >
          <SmallExplainer
            title={<Plain>git commit --amend</Plain>}
            style={styles.explainer}
          >
            <List
              items={items.commitAmend}
            />
          </SmallExplainer>
          <SmallExplainer
            title={<Plain>git checkout -- <Colored color={Colors.blue}>&lt;file&gt;</Colored></Plain>}
            style={styles.explainer}
          >
            <List
              items={items.checkout}
            />
          </SmallExplainer>
          <SmallExplainer
            title={<Plain>git reset --hard <Colored color={Colors.blue}>&lt;commit&gt;</Colored></Plain>}
            style={styles.explainer}
          >
            <List
              items={items.resetHead}
            />
          </SmallExplainer>
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
