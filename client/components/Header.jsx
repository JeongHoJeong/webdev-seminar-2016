import React from 'react'
import { ConfiguredRadium } from 'util'

class Header extends React.Component {
  render () {
    return (
      <div>
        {}
      </div>
    )
  }
}

Header.propTypes = {
  pageNumber: React.PropTypes.number.isRequired
}

export default ConfiguredRadium(Header)
