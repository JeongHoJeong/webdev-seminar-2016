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
      log: [
        <Plain>HEAD로 오기까지의 커밋들의 변경 이력을 표시한다.</Plain>
      ],
      logFile: [
        <Plain>특정 파일의 변경 이력을 실제 변경 내용(-p)을 기반으로 표시한다.</Plain>
      ],
      diff: [
        <Plain>modified 상태의 파일들이 HEAD에 비교해 어디가 바뀌었는지 표시한다.</Plain>,
        <Plain>--cached를 주면 staged 상태의 파일들이 HEAD에 비교해 어디가 바뀌었는지 표시한다.</Plain>
      ],
      diffCommits: [
        <Plain>앞 커밋을 기반으로 뒤 커밋에 어떤 차이가 있는지 비교한다.</Plain>
      ],
      blame: [
        <Plain>해당 파일의 매 라인을 누가 어떤 커밋에서 바꿨는지에 대한 변경 내역을 본다.</Plain>,
        <Plain>-L 4,10 옵션을 주면 4번째 줄부터 10번째 줄까지만 볼 수 있다.</Plain>
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
          title='유용한 명령어들'
          vertical
        >
          <SmallExplainer
            title={<Plain>git log</Plain>}
            style={styles.explainer}
          >
            <List
              items={items.log}
            />
          </SmallExplainer>
          <SmallExplainer
            title={<Plain>git log <Colored color={Colors.blue}>&lt;file&gt;</Colored></Plain>}
            style={styles.explainer}
          >
            <List
              items={items.logFile}
            />
          </SmallExplainer>
          <SmallExplainer
            title={<Plain>git diff</Plain>}
            style={styles.explainer}
          >
            <List
              items={items.diff}
            />
          </SmallExplainer>
          <SmallExplainer
            title={<Plain>git diff <Colored color={Colors.blue}>&lt;commit-a&gt;</Colored> <Colored color={Colors.blue}>&lt;commit-b&gt;</Colored></Plain>}
            style={styles.explainer}
          >
            <List
              items={items.diffCommits}
            />
          </SmallExplainer>
          <SmallExplainer
            title={<Plain>git blame <Colored color={Colors.blue}>&lt;file&gt;</Colored></Plain>}
            style={styles.explainer}
          >
            <List
              items={items.blame}
            />
          </SmallExplainer>
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
