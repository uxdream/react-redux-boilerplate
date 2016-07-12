var Sync    = require('browser-sync-webpack-plugin')
var merge   = require('webpack-merge')
var Webpack = require('webpack')

var config = require('./config')

var port       = process.env.npm_package_config_port
var publicPath = process.env.npm_package_config_public_path



module.exports = merge(config, {
  devtool: '#eval',
  devServer: {
    contentBase: 'build',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: parseInt(port) - 1,
  },
  eslint: {
    failOnError: true,
    fix: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'es2015',
            'react',
            'react-hmre',
            'stage-0',
          ],
        },
      },
      {
        test: /\.sass$/,
        loaders: [
          'style',
          'css?sourceMap',
          'postcss',
          'sass?sourceMap',
        ],
      },
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
    ],
  },
  output: {
    publicPath: 'http://localhost:' + port + publicPath,
  },
  plugins: [
    new Sync({
      host: 'localhost',
      logLevel: 'silent',
      notify: false,
      open: false,
      port: parseInt(port),
      proxy: 'http://localhost:' + (parseInt(port) - 1) + publicPath,
      ui: false,
    }, {
      reload: false,
    }),
    new Webpack.HotModuleReplacementPlugin(),
  ],
})