const config = require('./webpack.config.js')
const webpack = require('webpack')

let plugins = config.plugins || []

plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
}))

plugins.push(new webpack.optimize.UglifyJsPlugin())

config.plugins = plugins

module.exports = config
