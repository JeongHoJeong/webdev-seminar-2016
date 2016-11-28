import React from 'react'
import { ConfiguredRadium, Colors } from 'util'
import Center from 'Center'
import LinearLayout from 'LinearLayout'
import Color from 'color'

class Explainer extends React.Component {
  render () {
    const styles = {
      target: {
        flexGrow: 0.3
      },
      body: {
        base: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          flexGrow: 0.7,
          backgroundColor: Color(Colors.themeBlack).alpha(0.8).hslString(),
          height: '100%',
          paddingLeft: '40px',
          boxSizing: 'border-box'
        },
        title: {
          display: 'flex',
          alignItems: 'center',
          padding: '25px',
          marginBottom: '50px',
          fontSize: '48px',
          fontWeight: 700,
          color: Colors.orange,
          borderBottom: `8px solid ${Colors.orange}`
        },
        content: {
          padding: '30px',
          color: Colors.white,
          fontSize: '20px',
          backgroundColor: Color(Colors.themeBlack).alpha(0.3).hslString()
        }
      }
    }

    return (
      <LinearLayout
        horizontal
      >
        <Center
          style={styles.target}
        >
          {this.props.target}
        </Center>
        <Center
          style={styles.body.base}
        >
          <div
            style={styles.body.title}
          >
            {this.props.title}
          </div>
          <div
            style={styles.body.content}
          >
            {this.props.children}
          </div>
        </Center>
      </LinearLayout>
    )
  }
}

export default ConfiguredRadium(Explainer)
