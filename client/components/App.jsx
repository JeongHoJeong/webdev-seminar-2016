import React from 'react'
import { ConfiguredRadium, KeyCodes, Utils, RootPath } from 'util'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Header from 'Header'
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
        pathname: `${RootPath}/page/${newPage}`
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
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        overflow: 'hidden'
      },
      transitionGroup: {
        width: '100vw',
        height: '100vh',
        position: 'absolute'
      }
    }

    return (
      <div
        style={styles.base}
      >
        <ReactCSSTransitionGroup
          transitionName={this.state.pageDelta > 0 ? 'slide-left' : 'slide-right'}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <div
            key={this.state.page}
            style={styles.transitionGroup}
          >
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
        <Header
          pageNumber={this.state.page}
        />
        <Navigator
          pageNumber={this.state.page}
        />
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default ConfiguredRadium(App)
