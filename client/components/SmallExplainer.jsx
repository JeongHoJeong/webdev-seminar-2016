import React from 'react'
import { ConfiguredRadium } from 'util'

const styles = {
  base: {
    width: '450px',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '15px',
    marginBottom: '15px'
  },
  title: {
    fontSize: '32px',
    fontWeight: 700
  },
  content: {
    padding: '15px',
    fontSize: '20px'
  }
}

class SmallExplainer extends React.Component {
  render () {
    return (
      <div style={styles.base}>
        <div style={styles.title}>
          {this.props.title}
        </div>
        <div style={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default ConfiguredRadium(SmallExplainer)
