import React from 'react'
import { ConfiguredRadium } from 'util'

class Navigator extends React.Component {
  render () {
    const styles = {
      base: {
        position: 'absolute',
        right: 0,
        bottom: 0
      }
    }

    return (
      <div
        style={styles.base}
      >
        Navigator
      </div>
    )
  }
}

export default ConfiguredRadium(Navigator)
