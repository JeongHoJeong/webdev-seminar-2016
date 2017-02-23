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
      group: 'Intro'
    }
  }

  render () {
    const items = {
      fileManagement: [
        <Plain>Git은 working directory 내의 추적되는 파일만을 관리한다.</Plain>,
        <Plain>파일을 저장소에 등록하려면 원하는 파일을 <u>stage</u>한 후 <u>commit</u>을 해야 한다.</Plain>,
        <Plain>파일을 stage하는 명령어는 <Colored color={Colors.orange}>git add</Colored>, commit하는 명령어는 <Colored color={Colors.orange}>git commit</Colored>이다.</Plain>,
        <Plain><Colored color={Colors.orange}>git status</Colored> 명령어로 파일들의 관리 상태(staged, untracked, unmodified, modified)를 알 수 있다.</Plain>
      ],
      commit: [
        <Plain>하나의 commit 객체는 <b>저장소 전체의 한 상태(스냅샷)</b>를 나타낸다.</Plain>,
        <Plain>commit 객체는 해당 commit의 저자 등을 나타내는 일부 메타데이터를 담고 있으며, tree 객체와 바로 이전(부모) commit을 가리킨다.</Plain>,
        <Plain><Colored color={Colors.orange}>tree 객체</Colored>는 하나의 디렉토리의 구조와 동일하며, 각 파일은 <Colored color={Colors.orange}>blob 객체</Colored>로 나타내어진다.</Plain>
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
          title='중간 정리'
          vertical
        >
          <SmallExplainer
            title='파일의 관리'
            style={styles.explainer}
          >
            <List
              items={items.fileManagement}
            />
          </SmallExplainer>
          <SmallExplainer
            title='커밋(commit)'
            style={styles.explainer}
          >
            <List
              items={items.commit}
            />
          </SmallExplainer>
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
