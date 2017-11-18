const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
   devtool: '#eval-source-map',
   devServer: {
    contentBase: path.join(__dirname, 'backend/priv/static/assets'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'OSM Browser',
      template: 'src/index.ejs'
    })
  ]
})
