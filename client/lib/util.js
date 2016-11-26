import Radium from 'radium'

let KeyCodes = {
  space: 32,
  arrowLeft: 37,
  arrowUp: 38,
  arrowRight: 39,
  arrowDown: 40
}

function ConfiguredRadium (component) {
  return Radium({
    plugins: [
      Radium.Plugins.mergeStyleArray,
      Radium.Plugins.checkProps,
      Radium.Plugins.resolveMediaQueries,
      Radium.Plugins.resolveInteractionStyles,
      Radium.Plugins.keyframes,
      Radium.Plugins.visited,
      Radium.Plugins.removeNestedStyles,
      Radium.Plugins.prefix,
      Radium.Plugins.checkProps
    ]
  })(component)
}

let Colors = {
  themeBackgroundLight: '#edf2f4',
  themeBackgroundDark: '#8d99ae'
}

export { KeyCodes, ConfiguredRadium, Colors }
