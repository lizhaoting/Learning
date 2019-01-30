## （四）初识PostCss

> **1：认识PostCss**
  - **两个概念**
    - **pre-processor（预处理器）**
      ```
      Sass
      Less
      Stylus
      ```
    - **post-processor（后处理器）**
      ```
      CSS Prefixer
      ```

  - **官方定义**
    ```
    PostCSS is a tool for transforming CSS with JS plugins.
    These plugins can support variables and mixins, transpile future CSS syntax, inline images, and more.

    PostCSS是一个用JS插件转换CSS的工具。这些插件可以支持变量和混合，转换未来的CSS语法，内联图像等。

    把 CSS 代码解析成抽象语法树结构（Abstract Syntax Tree，AST），再交由插件来进行处理
    ```

  - **PostCss定位**
    ```
    既不是预处理器
    也不是后处理器
    插件系统，css领域的webpack，整合预处理器和后处理器
    ```

  - **PostCss使用**
    ```
    一般不单独使用，与已有的构建工具Webpack、Grunt和Gulp进行集成
    最广泛的是与Webpack集成
    ```

> **2：与Webpack集成**

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

> **3：autoprefixer**

  ```css
  npm install autoprefixer --save-dev
  ```
  ```css
  {
    loader: "postcss-loader",
    "options": {
      plugins: [
        require('autoprefixer')({"browsers": ["last 10 versions"]}),
      ]
    }
  }
  ```
> **4：stylelint**
  ```css
  npm install stylelint stylelint-config-lost stylelint-config-standard --save-dev
  ```
  ```css
  {
    loader: "postcss-loader",
    "options": {
      plugins: [
        require('stylelint'),
      ]
    }
  },
  ```

> **5：postcss-cssnext**
  ```css
  npm install postcss-cssnext --save-dev
  ```
  ```css
  {
    loader: "postcss-loader",
    "options": {
      plugins: [
        require('postcss-cssnext'),
      ]
    }
  },
  ```

> **6：postcss-modules**
  ```css
  npm install postcss-modules --save-dev
  ```
  ```css
  {
    loader: "postcss-loader",
    "options": {
      plugins: [
        require('postcss-cssnext'),
      ]
    }
  },
  ```
> **7：lost**
  ```css
  npm install lost --save-dev
  ```
  ```css
  {
    loader: "postcss-loader",
    "options": {
      plugins: [
        require('lost'),
      ]
    }
  },
  ```

> **8：课后练习**

  - PostCss的定位
    ```
    A: 预处理器
    B: 后处理器
    C: 插件系统
    ```

  - 下面哪一中写法可以在scss文件中实现类名变量
    ```
    A: .@classname
    B: .$classname
    C: .@{classname}
    D: .${classname}
    E: .#{$member}
    F: .@{$member}
    ```

  - body的color是
    ```css
    .header {
      border: 1px solid #ddd;
    }
    body {
      @extend .header;
      color: green;
      color: orange;
    }
    .header {
      color: red;
      color: yellow;
    }
    ```
    ```css
    A:  green

    B:  orange

    C: red

    D: yellow
    ```

  - scss有几种编译风格？分别有什么特点？

  - 书写一个mixin，自动生成浏览器前缀

  - 用while循环实现讲义中的背景scss循环

> **7：总结**
```
本节课讲解了PostCss的定位,结合webpack介绍了PostCss主要的几个插件，autoprefixer、postcss-cssnext、postcss-modules、lost、stylelint
```