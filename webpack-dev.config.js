module.exports = require('./webpack.config-helper')({
  isProduction: false,
  devtool: 'cheap-eval-source-map',
  port: 8081,
  // host: '127.0.0.0'
});