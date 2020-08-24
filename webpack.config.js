const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './js/index.js',

  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin({
      // Simulate the removal of files: default: false
      dry: true,
      // Write Logs to Console, default: false
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild: default: true
      cleanStaleWebpackAssets: true,
      // Do not allow removal of current webpack assets: default: true
      protectWebpackAssets: false
    })
  ]

};