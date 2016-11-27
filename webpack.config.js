var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/index/index.jsx',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  resolve: {
    root: [
      path.resolve('./client/index/'),
      path.resolve('./client/components/'),
      path.resolve('./client/layouts/'),
      path.resolve('./client/lib'),
      path.resolve('./client/pages')
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
        test: /\.(css|less)$/,
        loaders: ['style', 'css', 'less']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './client/index/index.html'
  })]
}
