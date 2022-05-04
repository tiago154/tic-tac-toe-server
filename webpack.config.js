const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json'],
    modules: ['node_modules']
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Development',
      favicon: './src/favicon.ico',
      template: './src/index.html'
    })
  ]
};
