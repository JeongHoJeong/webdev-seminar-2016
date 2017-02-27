import React from 'react'
import { ConfiguredRadium, Colors, RootPath } from 'util'
import Page from 'Page'
import BaseSlide from 'BaseSlide'
import Center from 'Center'
import LinearLayout from 'LinearLayout'
import ImageWithCaption from 'ImageWithCaption'
import Plain from 'Plain'
import List from 'List'
import Colored from 'Colored'
import MiniNavigator from 'MiniNavigator'
import CodeBlock from 'CodeBlock'
import References from 'References'

class _Page extends React.Component {
  static getPageInfo () {
    return {
      group: 'basics'
    }
  }

  constructor (props) {
    super(props)

    this.items = [
      {
        src: `${RootPath}/git/blob_object.png`,
        caption: 'Blob Object'
      },
      {
        src: `${RootPath}/git/git_tree.png`,
        caption: 'Tree Object'
      },
      {
        src: `${RootPath}/git/git_objects.png`,
        caption: 'Commit Object'
      },
      {
        src: `${RootPath}/git/commits.png`,
        caption: 'Commits and Parents'
      }
    ]
  }

  renderItems () {
    const style = {
      position: 'absolute'
    }

    return this.items.map((item, idx) => {
      return (
        <ImageWithCaption
          key={idx}
          src={item.src}
          caption={item.caption}
          style={style}
          imageHeight='350px'
        />
      )
    })
  }

  render () {
    const styles = {
      base: {
        width: '800px',
        height: '700px'
      }
    }

    const references = [
      {
        name: 'The Git Object Model',
        link: 'http://shafiulazam.com/gitbook/1_the_git_object_model.html'
      },
      {
        name: 'Git Objects',
        link: 'https://git-scm.com/book/en/v2/Git-Internals-Git-Objects'
      }
    ]

    return (
      <Page>
        <BaseSlide
          title='커밋(commit) 객체 이해하기'
          icon='help'
        >
          <Center>
            <MiniNavigator
              style={styles.base}
            >
              {this.renderItems()}
            </MiniNavigator>
          </Center>
        </BaseSlide>
        <References
          items={references}
          color={Colors.orange}
        />
      </Page>
    )
  }
}

export default ConfiguredRadium(_Page)
