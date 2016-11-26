import React from 'react'
import { ConfiguredRadium, KeyCodes, Utils } from 'util'
import { RouteTransition } from 'react-router-transition'

import Navigator from 'Navigator'
import pages from 'pages'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.go = this.go.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)

    this.state = {
      page: Utils.getCurrentPage(),
      pageDelta: 1
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  go (delta) {
    const newPage = this.state.page + delta

    if (newPage <= pages.length && newPage >= 1) {
      this.setState({
        page: newPage,
        pageDelta: delta
      })

      this.context.router.push({
        pathname: `/page/${newPage}`
      })
    }
  }

  handleKeyDown (event) {
    switch (event.keyCode) {
      case KeyCodes.arrowRight:
      case KeyCodes.space:
        this.go(+1)
        break
      case KeyCodes.arrowLeft:
        this.go(-1)
        break
    }
  }

  render () {
    const styles = {
      base: {
        width: '100%',
        height: '100%'
      }
    }

    return (
      <div
        style={styles.base}
      >
        <RouteTransition
          pathname={this.props.location.pathname}
          atEnter={{translateX: 100 * this.state.pageDelta}}
          atLeave={{translateX: -100 * this.state.pageDelta}}
          atActive={{translateX: 0}}
          mapStyles={styles => ({transform: `translateX(${styles.translateX}%)`})}
          runOnMount={false}
          className='transition-wrapper'
        >
          {this.props.children}
        </RouteTransition>
        <Navigator />
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default ConfiguredRadium(App)
