var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/assets/index.jsx',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  resolve: {
    root: [
      path.resolve('./client/assets/'),
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
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './client/assets/index.html'
  })]
}
