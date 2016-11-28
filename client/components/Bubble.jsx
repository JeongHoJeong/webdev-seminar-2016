import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Color from 'color'

class Bubble extends React.Component {
  render () {
    const backgroundColor = Color(Colors.orange).alpha(0.9).hslString()
    const borderRadius = '7px'

    const styles = {
      base: {},
      triangle: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: 0,
        height: 0,
        borderBottom: `20px solid ${backgroundColor}`,
        borderLeft: '20px solid transparent'
      },
      bubble: {
        position: 'absolute',
        left: '20px',
        bottom: 0,
        backgroundColor: backgroundColor,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        padding: '20px',
        color: Colors.white
      }
    }

    return (
      <div
        style={[styles.base, this.props.style]}
      >
        <div
          style={styles.triangle}
        />
        <div
          style={styles.bubble}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default ConfiguredRadium(Bubble)
