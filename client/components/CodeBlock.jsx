import React from 'react'
import { ConfiguredRadium } from 'util'
import { PrismCode } from 'react-prism'
import Prism from 'prismjs'

class CodeBlock extends React.Component {
  render () {
    return (
      <PrismCode
        className={`language-${this.props.language}`}
      >
        {this.props.code}
      </PrismCode>
    )
  }
}

export default ConfiguredRadium(CodeBlock)
