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
      overview: [
        <Plain>Git Flow는 merge 기반의 브랜칭 모델이다.</Plain>,
        <Plain>master와 develop을 영구 브랜치로 두고, feature 브랜치에서 신규 기능을 작업한다.</Plain>
      ],
      details: [
        <Plain><Colored color={Colors.orange}><b>master:</b></Colored> 가장 안정적인 브랜치. 최종 배포 상태 커밋만이 이 브랜치에 오며, 각 배포 버전마다 태그를 붙인다.</Plain>,
        <Plain><Colored color={Colors.orange}><b>develop:</b></Colored> 개발 브랜치. 개발 작업은 모두 이쪽으로 머지된다.</Plain>,
        <Plain><Colored color={Colors.orange}><b>feature:</b></Colored> 기능 브랜치. 신규 기능은 develop 브랜치에서 새 feature 브랜치를 따서 개발한 후 <b>develop 브랜치에 머지</b>한다.</Plain>,
        <Plain><Colored color={Colors.orange}><b>release:</b></Colored> 배포 브랜치. 배포를 위한 최종 작업을 진행한 후 <b>develop과 master 브랜치에 머지</b>해 배포를 완료한다.</Plain>,
        <Plain><Colored color={Colors.orange}><b>hotfix:</b></Colored> 핫픽스 브랜치. master에 release 브랜치가 머지된 후에도 발견된 문제가 있으면 수정하고 <b>develop과 master 브랜치에 머지</b>한다.</Plain>
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
          title='Git-Flow'
          vertical
        >
          <SmallExplainer
            title='개요'
            style={styles.explainer}
          >
            <List
              items={items.overview}
            />
          </SmallExplainer>
          <SmallExplainer
            title='브랜치별 관리법'
            style={styles.explainer}
          >
            <List
              items={items.details}
            />
          </SmallExplainer>
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
