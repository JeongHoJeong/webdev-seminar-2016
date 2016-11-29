import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import CircledCharacter from 'CircledCharacter'
import MaterialIcon from 'MaterialIcon'

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
    const numOfDecorators = 10
    let length = 12
    let position = 0
    let decorators = []

    for (let i = 0; i < numOfDecorators; i++) {
      const currentLength = length
      const currentPosition = position

      position += length + 0.5
      length /= 1.7

      decorators.push({
        position: currentPosition,
        length: currentLength
      })
    }

    return decorators.map((decorator, idx) => {
      // const lowestOpacity = 0.2
      // const highestOpacity = 1.0
      // const cellColor = Color(Colors.white).alpha(lowestOpacity + (highestOpacity - lowestOpacity) / (decorators.length - 1) * (decorators.length - idx - 1)).hslString()
      const cellColor = Colors.sweetBrown

      const style = {
        position: 'absolute',
        width: `${decorator.length}%`,
        height: '100%',
        right: this.state.isMounted ? `${decorator.position}%` : `${-decorator.length}%`,
        background: `repeating-linear-gradient(45deg, ${cellColor}, ${cellColor} 8px, rgba(0, 0, 0, 0) 8px, rgba(0, 0, 0, 0) 20px)`,
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
          position: 'absolute',
          display: 'flex',
          left: '35px',
          top: '35px',
          height: '16%',
          padding: '30px 350px 30px 30px',
          alignItems: 'center',
          fontSize: '42px',
          boxSizing: 'border-box',
          color: Colors.white,
          backgroundColor: Colors.orange,
          overflow: 'hidden'
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
        padding: '170px 40px 40px 40px'
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
            radius={20}
            borderStyle='dotted'
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
