import React from 'react'
import { ConfiguredRadium } from 'util'

class LinearLayout extends React.Component {
  render () {
    const style = {
      display: 'flex',
      flexDirection: this.props.horizontal ? 'row' : 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    }

    return (
      <div
        style={style}
      >
        {this.props.children}
      </div>
    )
  }
}

LinearLayout.propTypes = {
  horizontal: React.PropTypes.bool
}

LinearLayout.defaultProps = {
  horizontal: false
}

export default ConfiguredRadium(LinearLayout)
