/* global PrismLanguages */

import React from 'react'
import { ConfiguredRadium } from 'util'
import Prism from 'prismjs'
import PrismLanguages from 'prism-languages'

class CodeBlock extends React.Component {
  componentDidMount () {
    Prism.highlightElement(this.refs.code, Prism.languages[this.props.language])
  }

  render () {
    return (
      <code
        ref='code'
        style={[this.props.style]}
        className={`language-${this.props.language}`}
      >
        {this.props.code}
      </code>
    )
  }
}

export default ConfiguredRadium(CodeBlock)
