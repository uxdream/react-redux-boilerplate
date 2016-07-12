var path = require('path')

var autoprefixer = require('autoprefixer')
var Html         = require('html-webpack-plugin')



module.exports = {
  context: path.resolve('./src'),
  entry: [
    'babel-polyfill',
    './scripts/index.js',
    './styles/index.sass',
  ],
  module: {
    loaders: [
      {
        test: /\.(jpg|png)$/,
        loader: 'file',
        query: {
          name: 'assets/[hash].[ext]',
        },
      },
    ],
  },
  output: {
    filename: '[hash].js',
    path: path.resolve('./build'),
  },
  plugins: [
    new Html({
      minify: {
        collapseWhitespace: true,
      },
      showErrors: false,
      template: './index.html',
    }),
  ],
  postcss: function postcss() {
    return [
      autoprefixer,
    ]
  },
  resolve: {
    alias: {
      assets: path.resolve('./src/assets'),
      styles: path.resolve('./src/styles'),
    },
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },
}