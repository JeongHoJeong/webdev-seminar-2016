import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Color from 'color'

class CircledCharacter extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isMounted: false
    }
  }

  componentDidMount () {
    this._mounted = true

    setTimeout(() => {
      if (this._mounted) {
        this.setState({
          isMounted: true
        })
      }
    }, 100)
  }

  componentWillUnmount () {
    this._mounted = false
  }

  render () {
    const styles = {
      base: {
        position: 'relative',
        width: `${this.props.radius * 2}px`,
        height: `${this.props.radius * 2}px`,
        opacity: 0,
        transition: 'opacity 1s ease'
      },
      circle: {
        base: {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%) rotate(-120deg)',
          width: `${this.props.radius * 2}px`,
          height: `${this.props.radius * 2}px`,
          borderColor: Colors.white,
          borderWidth: '4px',
          borderRadius: this.props.radius,
          borderStyle: this.props.borderStyle,
          backgroundColor: null,
          transformOrigin: 'center',
          transition: 'all 1s ease'
        },
        mounted: {
          transform: 'translate(-50%, -50%) rotate(0deg)'
        }
      },
      innerCircle: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: `${this.props.radius * 2}px`,
        height: `${this.props.radius * 2}px`,
        borderRadius: this.props.radius,
        backgroundColor: this.props.background ? Color(Colors.white).alpha(0.3).hslString() : null
      },
      character: {
        display: 'flex',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        color: Colors.white,
        fontSize: `${this.props.radius * this.props.iconSizeRatio}px`,
        fontWeight: 700
      },
      mounted: {
        opacity: 1
      }
    }

    return (
      <div
        style={[styles.base, this.state.isMounted ? styles.mounted : null, this.props.style]}
      >
        <div
          style={[styles.circle.base, this.state.isMounted ? styles.circle.mounted : null]}
        />
        <div
          style={styles.innerCircle}
        />
        <div
          style={styles.character}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

CircledCharacter.propTypes = {
  radius: React.PropTypes.number,
  iconSizeRatio: React.PropTypes.number,
  background: React.PropTypes.bool,
  borderStyle: React.PropTypes.string
}

CircledCharacter.defaultProps = {
  radius: 200,
  iconSizeRatio: 0.66,
  background: false,
  borderStyle: 'solid'
}

export default ConfiguredRadium(CircledCharacter)
