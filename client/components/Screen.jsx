import React from 'react'
import pages from 'pages'
import { ConfiguredRadium, Utils } from 'util'
import NotFound from 'NotFound'

class Screen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      page: Utils.getCurrentPage()
    }
  }

  componentWillReceiveProps (props) {
    this.setState({
      page: props.routeParams.splat
    })
  }

  render () {
    if (!this.state.page || this.state.page > pages.length) {
      return <NotFound />
    }

    return React.createElement(pages[this.state.page - 1])
  }
}

Screen.contextTypes = {
  router: React.PropTypes.object
}

export default ConfiguredRadium(Screen)
