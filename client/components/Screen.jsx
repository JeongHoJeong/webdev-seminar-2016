import React from 'react'
import pages from 'pages'
import { ConfiguredRadium, Utils } from 'util'
import NotFound from 'NotFound'

class Screen extends React.Component {
  componentWillMount () {
    this.page = Utils.getCurrentPage()
  }

  render () {
    if (!this.page || this.page > pages.length) {
      return <NotFound />
    }

    return React.createElement(pages[this.page - 1])
  }
}

export default ConfiguredRadium(Screen)
