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
    const numOfDecorators = 4
    let length = 2
    let position = 0
    let decorators = []

    for (let i = 0; i < numOfDecorators; i++) {
      const currentLength = length
      const currentPosition = position

      position += length * 2
      length *= 2

      decorators.push({
        position: currentPosition,
        length: currentLength
      })
    }

    return decorators.map((decorator, idx) => {
      const style = {
        position: 'absolute',
        width: `${decorator.length}%`,
        height: '100%',
        right: this.state.isMounted ? `${decorator.position}%` : `${-decorator.length}%`,
        backgroundColor: Colors.outerSpace,
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
          <span>
            {this.props.title}
          </span>
          {this.renderDecorators()}
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
