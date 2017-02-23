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
      createBranch: [
        <Plain>현재 커밋(HEAD)을 가리키는 새로운 브랜치를 만든다.</Plain>
      ],
      checkout: [
        <Plain>HEAD가 특정 branch를 가리키게 만들고, 해당 branch의 상태에 맞게 working directory를 업데이트한다.</Plain>
      ],
      checkoutWithCreation: [
        <Plain>git branch &lt;new-branch-name&gt; &amp;&amp; git checkout &lt;new-branch-name&gt;의 shortcut</Plain>
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
          title='브랜치의 조작'
          vertical
        >
          <SmallExplainer
            title={<Plain>git branch <Colored color={Colors.blue}>&lt;new-branch-name&gt;</Colored></Plain>}
            style={styles.explainer}
          >
            <List
              items={items.createBranch}
            />
          </SmallExplainer>
          <SmallExplainer
            title={<Plain>git checkout <Colored color={Colors.blue}>&lt;branch&gt;</Colored></Plain>}
            style={styles.explainer}
          >
            <List
              items={items.checkout}
            />
          </SmallExplainer>
          <SmallExplainer
            title={<Plain>git checkout -b <Colored color={Colors.blue}>&lt;new-branch-name&gt;</Colored></Plain>}
            style={styles.explainer}
          >
            <List
              items={items.checkoutWithCreation}
            />
          </SmallExplainer>
        </SimpleHeaderLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
