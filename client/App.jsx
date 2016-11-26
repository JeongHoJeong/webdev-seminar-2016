import React from 'react'
import { ConfiguredRadium, KeyCodes } from 'util'
import { RouteTransition } from 'react-router-transition'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.handleKeyDown = this.handleKeyDown.bind(this)

    this.state = {
      position: 0
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown (event) {
    if (event.keyCode === KeyCodes.space) {
      if (this.state.position === 0) {
        this.setState({
          position: 1
        })
        this.context.router.push('/foo')
      } else {
        this.setState({
          position: 0
        })
        this.context.router.push('/')
      }
    }
  }

  render () {
    const style = {
      width: '100%',
      height: '100%'
    }

    return (
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{translateX: 100}}
        atLeave={{translateX: -100}}
        atActive={{translateX: 0}}
        mapStyles={styles => ({transform: `translateX(${styles.translateX}%)`})}
        style={style}
        className='transition-wrapper'
      >
        {this.props.children}
      </RouteTransition>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default ConfiguredRadium(App)
