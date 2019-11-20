const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const envVariables = require('../dev.config.json');
const helpers = require('./webpack_helpers');

module.exports = merge(baseConfig, {
  plugins: [
    // Minify CSS
    new webpack.DefinePlugin({
      ...helpers.envConfig(envVariables),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    contentBase: './build',
    historyApiFallback: { index: '/' },
    port: '8080',
  },
});
