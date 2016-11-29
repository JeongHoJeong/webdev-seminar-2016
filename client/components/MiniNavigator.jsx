import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import MaterialIcon from 'MaterialIcon'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Arrow extends React.Component {
  render () {
    const isRight = this.props.direction === 'right'
    const style = {
      position: 'absolute',
      left: isRight ? null : '-70px',
      right: isRight ? '-70px' : null,
      top: '50%',
      transform: 'translateY(-50%)',
      color: Colors.orange,
      pointerEvents: 'initial',
      cursor: 'pointer',
      fontSize: '32px'
    }

    return (
      <MaterialIcon
        style={style}
        onClick={this.props.onClick}
        name={isRight ? 'navigate_next' : 'navigate_before'}
      />
    )
  }
}

Arrow.propTypes = {
  direction: React.PropTypes.string.isRequired
}

class MiniNavigator extends React.Component {
  constructor (props) {
    super(props)

    this.goBy = this.goBy.bind(this)

    this.state = {
      page: 0,
      pageDelta: 0
    }
  }

  goBy (delta) {
    const newPage = this.state.page + delta

    if (newPage >= 0 && newPage < this.props.children.length) {
      this.setState({
        page: newPage,
        pageDelta: delta
      })
    }
  }

  render () {
    const styles = {
      transitionGroup: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      base: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }

    return (
      <div
        style={[styles.base, this.props.style]}
      >
        <ReactCSSTransitionGroup
          transitionName={this.state.pageDelta > 0 ? 'slide-left-fade' : 'slide-right-fade'}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          style={styles.transitionGroup}
        >
          {this.props.children[this.state.page]}
        </ReactCSSTransitionGroup>
        <Arrow
          direction='left'
          onClick={this.goBy.bind(this, -1)}
        />
        <Arrow
          direction='right'
          onClick={this.goBy.bind(this, 1)}
        />
      </div>
    )
  }
}

export default ConfiguredRadium(MiniNavigator)
