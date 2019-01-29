const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
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
              "css-loader",
              {
                loader: "postcss-loader",
                "options": {
                  plugins: [
                    require('postcss-modules'),
                  ]
                }
              },
              {
                loader: "postcss-loader",
                "options": {
                  plugins: [
                    require('autoprefixer')({"browsers": ["last 10 versions"]}),
                    require('lost'),
                    require('lost'),
                  ]
                }
              },
              {
                loader: "postcss-loader",
                "options": {
                  plugins: [
                    require('stylelint'),
                  ]
                }
              },
            ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
  ]
};