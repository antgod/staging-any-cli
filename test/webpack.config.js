var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var publicPath = path.resolve(__dirname, 'public');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: [
      path.resolve(__dirname, 'render/index.js')
    ],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: publicPath,
    filename: '[name].js?[hash]'   //增加hash
  },
  resolve: {
    //现在可以写 require('file') 代替 require('file.js')
    extension: ['', '.js', '.jsx', '.json'],
    //这样待打包的脚本中的 require('moment'); 其实就等价于 require('moment/min/moment-with-locales.min.js');
    alias: {
      moduleB: "./util/moduleB"
    }
  },
  module: {
    loaders: [
      {
        test: /\.tpl/,
        loader: 'element-loader',
        query: {
          banner: `import { createElement, Component } from 'rax';`
        }
      },
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.less/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
      {
        test: /\.(png|jpg)$/,                                      //图片内嵌
        loader: 'url?limit=8192'
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,   //字体图标
        loader: "url?limit=10000"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js?[hash]'),
    new ExtractTextPlugin("[name].css?[hash]", {
      allChunks: true,
      disable: false
    }),
    new HtmlWebpackPlugin({
      title: 'react',
      template: './render/index.html',
    })
  ],
  devtool: 'source-map'
};