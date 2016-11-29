import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import LinearLayout from 'LinearLayout'
import Center from 'Center'
import CircledCharacter from 'CircledCharacter'
import Color from 'color'

class Focus extends React.Component {
  render () {
    const styles = {
      base: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/intro2.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      title: {
        container: {
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
      },
      circle: {}
    }

    return (
      <LinearLayout
        style={styles.base}
        horizontal
      >
        <Center
          style={styles.title.container}
        >
          <div
            style={styles.title.base}
          >
            {this.props.title}
          </div>
        </Center>
        <Center
          style={styles.subtitle.container}
        >
          <CircledCharacter
            style={styles.circle}
            background
            borderStyle='dashed'
          >
            {this.props.sectionNumber}
          </CircledCharacter>
        </Center>
      </LinearLayout>
    )
  }
}

Focus.propTypes = {
  title: React.PropTypes.string.isRequired,
  sectionNumber: React.PropTypes.number.isRequired
}

export default ConfiguredRadium(Focus)
