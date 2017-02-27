import React from 'react'
import { ConfiguredRadium, Colors, RootPath } from 'util'
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
      <Plain>Vincent Driessen이 2010년에 발표한 <b>branching model</b></Plain>,
      <Plain>영구적인 <Colored color={Colors.lightOrange}>main branch</Colored>와
        <Colored color={Colors.lightOrange}> supporting branch</Colored>들을 사용해 브랜치를 관리
      </Plain>
    ]

    const references = [
      {
        name: 'A successful Git branching model',
        link: 'http://nvie.com/posts/a-successful-git-branching-model/'
      }
    ]

    return (
      <Page>
        <Explainer
          target={
            <img
              style={styles.img}
              src={`${RootPath}/git/branching_model.png`}
            />
          }
          title={'Git-Flow'}
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
