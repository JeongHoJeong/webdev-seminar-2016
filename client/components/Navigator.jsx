import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { ConfiguredRadium, Colors, Styles } from 'util'
import pages from 'pages'
import Color from 'color'

class Navigator extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      page: pages[this.props.pageNumber - 1]
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.pageNumber !== this.props.pageNumber) {
      this.updateToPage(nextProps.pageNumber)
    }
  }

  updateToPage (pageNumber) {
    if (pages[pageNumber - 1]) {
      this.setState({
        page: pages[pageNumber - 1],
        pageDelta: pageNumber - (this.props.pageNumber || 0)
      })
    }
  }

  render () {
    const styles = {
      base: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        height: '35px',
        width: '100%',
        backgroundColor: Color(Colors.themeBlack).alpha(0.0).hslString(),
        transition: 'background-color 130ms ease-in',
        ':hover': {
          backgroundColor: Color(Colors.themeBlack).alpha(0.8).hslString()
        }
      },
      groupName: [Styles.subtitleFont, {
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginRight: '10px',
        marginBottom: '10px',
        color: 'rgba(219, 205, 198, 0.8)',
        fontSize: '18px'
      }]
    }

    let groupName

    if (!this.state.page) {
      groupName = ''
    } else {
      groupName = this.state.page.getPageInfo().group
    }

    return (
      <div
        style={styles.base}
      >
        <ReactCSSTransitionGroup
          transitionName={this.state.pageDelta > 0 ? 'slide-left-fade' : 'slide-right-fade'}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <div
            key={groupName}
            style={styles.groupName}
          >
            {groupName.toLowerCase()}
          </div>
        </ReactCSSTransitionGroup>
        {/* <div>
          {`${this.props.pageNumber} / ${pages.length}`}
        </div> */}
      </div>
    )
  }
}

Navigator.propTypes = {
  pageNumber: React.PropTypes.number.isRequired
}

export default ConfiguredRadium(Navigator)
