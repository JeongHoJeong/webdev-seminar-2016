import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Page from 'Page'
import Colored from 'Colored'
import LinearLayout from 'LinearLayout'
import Center from 'Center'

class Image extends React.Component {
  render () {
    const style = {
      width: '10%',
      margin: '0 40px'
    }

    return (
      <img
        style={style}
        src={this.props.src}
      />
    )
  }
}

Image.propTypes = {
  src: React.PropTypes.string.isRequired
}

class Page7 extends React.Component {
  static getPageInfo () {
    return {
      group: 'Intro'
    }
  }

  render () {
    const styles = {
      page: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },
      base: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.themeBlack,
        padding: '30px',
        fontSize: '24px',
        color: Colors.white,
        fontFamily: 'monospace',
        flexGrow: 1
      },
      images: {
        flexGrow: 0.5,
        padding: '50px'
      },
      img: {
        width: '15%',
        margin: '0 20px'
      }
    }

    return (
      <Page
        style={styles.page}
      >
        <LinearLayout>
          <Center>
            <span
              style={styles.base}
            >
              {'(newStandards)'}
              &nbsp;
              <Colored color={Colors.blue}>{'=>'}</Colored>
              &nbsp;
              {'{'}
              &nbsp;
              <Colored color={Colors.lightYellow}>{'return'}</Colored>
              &nbsp;
              {'newFrameworksAndTools(newStandards) }'}
            </span>
          </Center>
          <Center
            style={styles.images}
          >
            <Image src='/nodejs.png' />
            <Image src='/rails.png' />
            <Image src='/django.png' />
            <Image src='/meteor.png' />
            <Image src='/laravel-logo.png' />
          </Center>
          <Center
            style={styles.images}
          >
            <Image src='/less_logo.png' />
            <Image src='/sass_logo.svg' />
            <Image src='/typescript.png' />
            <Image src='/babel.png' />
            <Image src='/webpack.png' />
          </Center>
          <Center
            style={styles.images}
          >
            <Image src='/angular.svg' />
            <Image src='/react.svg' />
            <Image src='/ionic.png' />
            <Image src='/nwjs.png' />
            <Image src='/vuejs.png' />
          </Center>
        </LinearLayout>
      </Page>
    )
  }
}

export default ConfiguredRadium(Page7)
