'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

function buildConfig() {
  var isProd = false;
  const config = {
    output: {
      path: __dirname + '/dist',
      publicPath: isProd ? '/' : 'http://localhost:8080/',
      filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
      chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
    },
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
      modulesDirectories: [
        'node_modules'
      ]
    },
    devtool: 'cheap-source-map',
    module: {
      loaders: [
        {
          test: /\.ts$/,
          loader: 'awesome-typescript-loader',
          exclude: /node_modules/
        }
      ]
    },
    entry: {
      app: __dirname + '/src/app/app.ts'
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new CopyWebpackPlugin([{ from: __dirname + '/src/public'}]),
      new HtmlWebpackPlugin({
        template: './src/public/index.html',
        inject: 'body'
      })
    ]
  };
  config.devServer = {
    contentBase: './dist',
    stats: 'minimal',
    outputPath: './dist'
  };

  return config;
}

module.exports = buildConfig();
