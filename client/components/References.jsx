import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { ConfiguredRadium, Colors } from 'util'
import MaterialIcon from 'MaterialIcon'
import Color from 'color'
import Bubble from 'Bubble'

class References extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      show: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      show: !this.state.show
    })
  }

  renderItems () {
    const styles = {
      base: {
        marginTop: '3px',
        marginBottom: '3px'
      },
      name: {
        marginRight: '7px'
      },
      link: {
        fontSize: '12px'
      }
    }

    return this.props.items.map((item, idx) => {
      return (
        <div
          key={idx}
          style={styles.base}
        >
          <b
            style={styles.name}
          >
            {item.name}
          </b>
          <a
            style={styles.link}
            href={item.link}
            target='_blank'
          >
            {item.link}
          </a>
        </div>
      )
    })
  }

  renderBubble () {
    const style = {
      position: 'absolute',
      left: '90px',
      bottom: '50px',
      color: 'black',
      whiteSpace: 'nowrap'
    }

    if (!this.state.show) {
      return null
    }

    return (
      <Bubble
        key={this.state.show}
        style={style}
      >
        {this.renderItems()}
      </Bubble>
    )
  }

  render () {
    const radius = 20
    const styles = {
      base: {
        display: 'flex',
        position: 'absolute',
        left: '30px',
        bottom: '30px',
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        backgroundColor: Color(Colors.orange).alpha(0.5).hslString(),
        borderRadius: `${radius}px`,
        color: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 200ms ease',
        cursor: 'pointer',

        ':hover': {
          backgroundColor: Color(Colors.orange).alpha(0.8).hslString()
        }
      },
      bubble: {
        position: 'absolute',
        left: '90px',
        bottom: '50px',
        color: 'black'
      }
    }

    return (
      <div>
        <div
          style={[styles.base, this.props.style]}
          onClick={this.handleClick}
        >
          <MaterialIcon
            name='library_books'
          />
        </div>
        <ReactCSSTransitionGroup
          transitionName='smooth'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.renderBubble()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

References.propTypes = {
  items: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      link: React.PropTypes.string.isRequired
    })
  ).isRequired
}

export default ConfiguredRadium(References)
