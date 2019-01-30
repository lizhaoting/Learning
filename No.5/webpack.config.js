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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              "css-loader",
              {
                loader: "postcss-loader",
                "options": {
                  plugins: [
                    require('autoprefixer')({"browsers": ["last 10 versions"]}),
                  ]
                }
              },
              "sass-loader",
            ]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              "css-loader",
              "less-loader",
            ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              "css-loader",
              // {
              //   loader: "postcss-loader",
              //   "options": {
              //     plugins: [
              //       require('postcss-modules'),
              //     ]
              //   }
              // },
              {
                loader: "postcss-loader",
                "options": {
                  plugins: [
                    // require('autoprefixer')({"browsers": ["last 10 versions"]}),
                    require('lost'),
                    // require('postcss-cssnext'),
                  ]
                }
              },
              // {
              //   loader: "postcss-loader",
              //   "options": {
              //     plugins: [
              //       require('stylelint'),
              //     ]
              //   }
              // },
            ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
  ]
};