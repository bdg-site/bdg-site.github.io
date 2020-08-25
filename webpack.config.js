const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './js/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '_site/webpack')
  },

  mode: 'production',

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
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
    }),
    new MiniCssExtractPlugin({filename: '[name].css'})
  ]

};