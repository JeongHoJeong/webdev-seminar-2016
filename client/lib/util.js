import Radium from 'radium'
import Color from 'color'

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
  themeBackgroundDark: '#8d99ae',
  themeBlack: '#0e1600',
  themeYellow: '#fef400',
  dustStorm: '#dbcdc6',
  champagnePink: '#ead7d1',
  white: '#ffffff',
  sweetBrown: '#ad343e',
  outerSpace: '#474747',
  orange: '#f16529',
  blue: '#29a9df',
  yellow: '#fbde34',
  transparent: 'rgba(255, 255, 255, 0)',
  codeBlockBackground: '#f5f2f0'
}

Colors.lightOrange = Color(Colors.orange).lighten(0.5).hslString()

Colors.lightBlue = Color(Colors.blue).lighten(0.5).hslString()

Colors.lightYellow = Color(Colors.yellow).lighten(0.5).hslString()

Colors.darkYellow = Color(Colors.yellow).darken(0.5).hslString()

let Styles = {
  emphasizedFont: {
    fontFamily: '\'Bungee\', cursive'
  },
  subtitleFont: {
    fontFamily: '\'Ubuntu\', sans-serif'
  },
  koreanFont: {
    fontFamily: '\'NanumBarunGothic\', sans-serif'
  }
}

let Utils = {
  getCurrentPage: () => {
    const regex = /page\/([0-9]+)/m
    let match = regex.exec(window.location.href)

    return match && parseInt(match[1])
  }
}

const RootPath =
  (location.hostname.indexOf('enbsoft') !== -1) ?
  '/~jhjeong/git-seminar' : ''

export { KeyCodes, ConfiguredRadium, Colors, Styles, Utils, RootPath }
