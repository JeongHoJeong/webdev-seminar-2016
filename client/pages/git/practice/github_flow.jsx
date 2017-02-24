import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import Explainer from 'Explainer'
import List from 'List'
import Plain from 'Plain'
import Colored from 'Colored'
import References from 'References'

class Slide extends React.Component {
  static getPageInfo () {
    return {
      group: 'body'
    }
  }

  render () {
    const styles = {
      img: {
        width: '500px'
      }
    }

    const explanation = [
      <Plain>GitHub이 제시하는 Git과 GitHub을 이용하는 <Colored color={Colors.lightOrange}>일반적인 협업 패턴</Colored></Plain>,
      <Plain>작업 브랜치 생성, 커밋 작성, <u>풀 리퀘스트(Pull Request) 제출</u>, 디스커션, 머지로 이루어지는 일련의 과정</Plain>,
      <Plain><b>GitLab</b>에서도 거의 똑같은 패턴으로 적용 가능</Plain>
    ]

    const references = [
      {
        name: 'Understanding the GitHub Flow',
        link: 'https://guides.github.com/introduction/flow/'
      }
    ]

    return (
      <Page>
        <Explainer
          target={
            <img
              style={styles.img}
              src='/git/Octocat.png'
            />
          }
          title={'GitHub Flow'}
          titleColor={Colors.orange}
        >
          <List
            items={explanation}
          />
        </Explainer>
        <References
          items={references}
          color={Colors.orange}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(Slide)
