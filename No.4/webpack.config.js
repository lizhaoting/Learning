const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
                { loader: "css-loader", options: { importLoaders: 1 } },
                "postcss-loader"
            ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
  ]
};