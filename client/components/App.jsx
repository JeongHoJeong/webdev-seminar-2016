import React from 'react'
import { ConfiguredRadium, KeyCodes, Utils } from 'util'
import { RouteTransition } from 'react-router-transition'

import Navigator from 'Navigator'
import pages from 'pages'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.handleKeyDown = this.handleKeyDown.bind(this)

    this.state = {
      page: Utils.getCurrentPage()
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  goToNextPage () {
    if (this.state.page < pages.length) {
      this.setState({
        page: this.state.page + 1
      })
      this.context.router.push({
        pathname: `/page/${this.state.page}`
      })
    }
  }

  goToPrevPage () {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1
      })
      this.context.router.push({
        pathname: `/page/${this.state.page}`
      })
    }
  }

  handleKeyDown (event) {
    switch (event.keyCode) {
      case KeyCodes.arrowRight:
      case KeyCodes.space:
        this.goToNextPage()
        break
      case KeyCodes.arrowLeft:
        this.goToPrevPage()
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
          atEnter={{translateX: 100}}
          atLeave={{translateX: -100}}
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
