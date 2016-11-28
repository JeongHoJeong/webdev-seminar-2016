import React from 'react'
import { ConfiguredRadium, Styles } from 'util'

class List extends React.Component {
  renderItems () {
    const style = {
      marginTop: '14px',
      marginBottom: '14px'
    }

    return this.props.items.map((item, idx) => {
      return (
        <div
          key={idx}
          style={style}
        >
          {item}
        </div>
      )
    })
  }

  render () {
    const style = [Styles.koreanFont, {
      fontWeight: 300
    }]

    return (
      <div
        style={[style, this.props.style]}
      >
        {this.renderItems()}
      </div>
    )
  }
}

List.propTypes = {
  items: React.PropTypes.array.isRequired
}

export default ConfiguredRadium(List)
