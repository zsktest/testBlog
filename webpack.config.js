const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    "index.js": "./src/index.js"
  },

  output: {
    filename: "bundle.js",
    path: __dirname+"/dist"
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {test: /\.js$/, exclude: [path.resolve(__dirname, 'node_modules')], loader: ['babel-loader', 'eslint-loader']}
    ]
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['dist']
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      inject: false
    }),
  ],

  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },

  devServer: {
    historyApiFallback: true,
    writeToDisk: true
  }

};