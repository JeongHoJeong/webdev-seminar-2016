import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import LinearLayout from 'LinearLayout'
import Center from 'Center'
import CircledCharacter from 'CircledCharacter'
import Color from 'color'

class Focus extends React.Component {
  renderCircle (leftOrTop) {
    if (!this.props.horizontal && leftOrTop) {
      const style = {
        marginRight: '45px'
      }

      return (
        <CircledCharacter
          style={style}
          radius={150}
          background
          borderStyle='dashed'
        >
          {this.props.sectionNumber}
        </CircledCharacter>
      )
    } else if (this.props.horizontal && !leftOrTop) {
      return (
        <CircledCharacter
          radius={150}
          background
          borderStyle='dashed'
        >
          {this.props.sectionNumber}
        </CircledCharacter>
      )
    } else if (!this.props.horizontal && !leftOrTop) {
      const style = {
        height: '350px'
      }

      return (
        <div
          style={style}
        />
      )
    }
  }

  render () {
    const styles = {
      base: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${this.props.imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      title: {
        container: {
          width: this.props.horizontal ? null : '100%',
          height: '100%',
          flexGrow: 0.4,
          backgroundColor: Color(Colors.themeBlack).alpha(0.95).hslString()
        },
        base: {
          textAlign: 'right',
          fontSize: '64px',
          fontWeight: 700,
          whiteSpace: 'pre-wrap',
          color: Colors.white
        }
      },
      subtitle: {
        container: {
          flexGrow: 0.6
        },
        base: {}
      }
    }

    return (
      <LinearLayout
        style={styles.base}
        horizontal={this.props.horizontal}
      >
        <Center
          style={styles.title.container}
        >
          {this.renderCircle(true)}
          <div
            style={styles.title.base}
          >
            {this.props.title}
          </div>
        </Center>
        <Center
          style={styles.subtitle.container}
        >
          {this.renderCircle(false)}
        </Center>
      </LinearLayout>
    )
  }
}

Focus.propTypes = {
  sectionNumber: React.PropTypes.number.isRequired,
  imageUrl: React.PropTypes.string.isRequired,
  horizontal: React.PropTypes.bool
}

Focus.defaultProps = {
  horizontal: true
}

export default ConfiguredRadium(Focus)
