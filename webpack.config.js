const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app.ts',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map', // Or alternatively: `inline-source-map`
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          /** @see https://www.npmjs.com/package/ts-loader */
          'ts-loader'
        ]
      }
    ]
  }
}
