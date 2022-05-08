const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './client/src/index.tsx',
  output: {
    clean: true,
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', 'json'],
    modules: ['node_modules']
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Development',
      favicon: './client/src/assets/favicon.ico',
      template: './client/src/assets/index.html'
    })
  ]
};
