import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import LinearLayout from 'LinearLayout'
import Center from 'Center'

class SimpleHeaderLayout extends React.Component {
  render () {
    const styles = {
      title: {
        fontSize: '32px',
        fontWeight: 700,
        padding: '24px',
        color: Colors.white,
        backgroundColor: Colors.themeBlack
      },
      content: {
        width: '100%',
        flexDirection: this.props.vertical ? 'column' : null
      }
    }

    return (
      <LinearLayout>
        <Center>
          <div
            style={styles.title}
          >
            {this.props.title}
          </div>
        </Center>
        <Center
          style={styles.content}
        >
          {this.props.children}
        </Center>
      </LinearLayout>
    )
  }
}

SimpleHeaderLayout.propTypes = {
  title: React.PropTypes.string.isRequired,
  vertical: React.PropTypes.bool
}

export default ConfiguredRadium(SimpleHeaderLayout)
