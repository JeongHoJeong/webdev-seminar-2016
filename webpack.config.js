var path = require('path')

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  resolve: {
    root: [
      path.resolve('./client')
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
}
