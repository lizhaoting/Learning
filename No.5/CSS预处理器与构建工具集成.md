## （五）预处理器与构建工具集成

> **1：webpack环境布置**
- **搭建webpack环境**
    - **package.json**
      ```css
      npm init
      ```
      ```css
      {
        "name": "postcss",
        "version": "1.0.0",
        "description": "learn postcss",
        "main": "index.js",
        "scripts": {
          "build": "webpack --config webpack.config.js"
        },
        "author": "eric",
        "license": "ISC",
        "devDependencies": {}
      }
      ```
    - **webpack依赖包**
      ```css
      npm install webpack webpack-cli --save-dev
      ```
    - **webpack.config.js**
      ```css
      const path = require('path');

      module.exports = {
        entry: './index.js',
        output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'bundle.js'
        },
      };
      ```
    - **打包index.js**
      ```css
      import './style.css';

      function app() {
        var element = document.createElement('div');
        element.innerHTML = 'Hello Word!';
        element.classList.add('header');
        return element;
      }

      document.body.appendChild(app());
      ```
    - **分离css**
      ```
      npm install css-loader --save-dev
      npm install extract-text-webpack-plugin@next --save-dev
      npm install postcss-loader --save-dev
      ```

      ```css
      const ExtractTextPlugin = require("extract-text-webpack-plugin");
      ...
      module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                  "css-loader",
                ]
            })
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin("bundle.css"),
      ]
      ...
      ```

> **2：Webpack集成Less**
  ```css
  npm install less less-loader --save-dev
  ```
  ```css
  {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          "css-loader",
          "less-loader",
        ]
    })
  }
  ```
  ```css
  .borde_style {
    border-top: solid 1px #595959;
    border-bottom: solid 2px #595959;
  }

  #header a {
    color: #111;
    .borde_style;
  }

  #header span {
    height: 16px;
    .borde_style;
  }

  #header p {
    color: red;
    .borde_style();
  }
  ```

> **3：Webpack集成Sass**
  ```css
  npm install --save-dev node-sass sass-loader
  ```
  ```css
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          "css-loader",
          "sass-loader",
        ]
    })
  }
  ```
  ```css
  @for $index from 1 to 100 {
    .background-#{$index} {
        background-image: url("/image/#{$index}.jpg");
    }
  }
  ```

> **4：Webpack集成Sass与PostCss**
  ```css
  npm install --save-dev node-sass sass-loader
  ```
  ```css
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
                require('autoprefixer'),
              ]
            }
          },
          "sass-loader",
        ]
    })
  }
  ```
  ```css
  .borde_style {
    border-top: solid 1px #595959;
    border-bottom: solid 2px #595959;
    display: flex;
  }

  #header a {
    color: #111;
    .borde_style;
  }
  ```

> **5：课后练习**
  - Webpack能不能同时用Sass-loader和less-loader同时处理一个样式文件? 请说明理由
    ```
    A: 能

    B：不能
    ```

  - 下面哪种安装sass-loader的姿势是正确的
    ```
    A: npm i sass-loader --save-dev

    B：npm i --save-dev sass-loader

    C：npm install --save-dev sass-loader

    D：npm install sass-loader --save-dev
    ```

  - webpack为什么可以同时使用Sass与PostCss

  - 自己实现Webpack集成Less与PostCss

> **6：总结**
```
本节课讲解了Webpack如何与Css预处理集成，讲解了Sass、Less和PostCss组合集成
```

> **7：本章小结**
```
(一) 初识CSS预处理器
(二) Less初体验
(三) Sass初体验
(四) 初识PostCss
(五) 预处理器与构建工具集成

Css历史
Css局限性
Css预处理器
Sass与Less
PostCss插件系统
构建工具集成


抛砖引玉：
学习一个技术需要了解技术的起源和诞生背景
学习一个技术需要了解技术解决了什么问题
学习一个技术需要持续了解技术的发展进步
```
