import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import CircledCharacter from 'CircledCharacter'
import MaterialIcon from 'MaterialIcon'
import Color from 'color'

class BaseSlide extends React.Component {
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

  renderDecorators () {
    const numOfDecorators = 5
    let length = 12
    let position = 0
    let decorators = []

    for (let i = 0; i < numOfDecorators; i++) {
      const currentLength = length
      const currentPosition = position

      position += length + 3
      length /= 1.8

      decorators.push({
        position: currentPosition,
        length: currentLength
      })
    }

    return decorators.map((decorator, idx) => {
      const lowestOpacity = 0.2
      const highestOpacity = 0.8
      const cellColor = Color(Colors.white).alpha(lowestOpacity + (highestOpacity - lowestOpacity) / (decorators.length - 1) * (decorators.length - idx - 1)).hslString()

      const style = {
        position: 'absolute',
        width: `${decorator.length}%`,
        height: '100%',
        right: this.state.isMounted ? `${decorator.position}%` : `${-decorator.length}%`,
        background: `repeating-linear-gradient(45deg, ${cellColor}, ${cellColor} 5px, rgba(0, 0, 0, 0) 5px, rgba(0, 0, 0, 0) 20px)`,
        transition: 'right 1s ease'
      }

      return (
        <div
          key={idx}
          style={style}
        />
      )
    })
  }

  render () {
    const styles = {
      base: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%'
      },
      title: {
        base: {
          position: 'relative',
          display: 'flex',
          height: '20%',
          padding: '30px',
          alignItems: 'center',
          fontSize: '54px',
          fontWeight: 700,
          boxSizing: 'border-box',
          color: Colors.champagnePink,
          backgroundColor: Colors.themeBlack
        },
        icon: {
          container: {
            marginLeft: '10px',
            marginRight: '30px'
          },
          base: {
            fontSize: '40px'
          }
        }
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        boxSizing: 'border-box',
        padding: '40px'
      }
    }

    return (
      <div
        style={[styles.base, this.props.style]}
      >
        <div
          style={styles.title.base}
        >
          <CircledCharacter
            style={styles.title.icon.container}
            radius={35}
          >
            <MaterialIcon
              style={styles.title.icon.base}
              name={this.props.icon}
            />
          </CircledCharacter>
          {this.renderDecorators()}
          <span>
            {this.props.title}
          </span>
        </div>
        <div
          style={styles.body}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

BaseSlide.propTypes = {
  title: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired
}

export default ConfiguredRadium(BaseSlide)
