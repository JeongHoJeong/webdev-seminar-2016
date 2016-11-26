import React from 'react'
import { Motion, spring, presets } from 'react-motion'
import { KeyCodes } from 'util'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.handleKeyDown = this.handleKeyDown.bind(this)

    this.state = {
      position: 0
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown (event) {
    if (event.keyCode === KeyCodes.space) {
      if (this.state.position === 0) {
        this.setState({
          position: 300
        })
      } else {
        this.setState({
          position: 0
        })
      }
    }
  }

  render () {
    return (
      <Motion
        defaultStyle={{x: 0}}
        style={{x: spring(this.state.position, presets.wobbly)}}
      >
        {value =>
          <div
            style={{
              marginLeft: `${value.x}px`
            }}
          >
            {Math.round(value.x)}
          </div>
        }
      </Motion>
    )
  }
}

export default App
