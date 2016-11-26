import React from 'react'
import { ConfiguredRadium } from 'util'

class Navigator extends React.Component {
  render () {
    const styles = {
      base: {
        position: 'absolute',
        width: '100%',
        height: '100%'
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
