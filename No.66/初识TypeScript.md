##  （六十六）初识TypeScript

> **`1：基本概念`**
- `微软开发的自由和开源的编程语言`

- `JavaScript超集, 扩展了 JavaScript 的语法, 支持 ECMAScript 6 标准`

- `通过类型注解提供编译时的静态类型检查`

- `可以编译成纯 JavaScript`

```typescript
function hello(name: string) {
    return "Hello, " + name;
}
```
> **`2：TypeScript优势`**
- `静态类型，TypeScript代码比JavaScript 更容易预测且更容易调试`

- `面向对象的功能（如模块和命名空间）使组织大型代码库更易于管理`

- `编译步骤在到达运行时之前捕获错误`

- `很多框架类库使用TypeScript编写`
> **`3：环境搭建`**
- `npm安装编译`
  ```javascript
  npm i typescript -g
  ```



  ```typescript
  function hello(name) {
      return "Hello, " + name;
  }

  let user = "Eric";

  console.log(hello(user));
  ```



  ```typescript
  function hello(name: string) {
      return "Hello, " + name;
  }

  let user = "Eric";

  console.log(hello(user));
  ```



  ```css
  tsc hello.ts

  /* 可以同时编辑多个， 逗号分割 */


  /*
  function hello(name) {
    return "Hello, " + name;
  }
  var user = "Eric";
  console.log(hello(user));
  */
  ```


  ```css
  tsc error.ts


  /*
  Argument of type 'string[]' is not assignable to parameter of type 'string'.
  */
  ```

- `搭配Webpack`
  - `index.ts`
  ```typescript
  import './style.css';

  var element = document.createElement('div');

  function greeter(person: string) {
      return "Hello, " + person;
  }

  element.innerHTML = greeter('Eric');

  const className = 'header';

  element.classList.add(className);

  document.getElementById('app').appendChild(element);
  ```

  - `tsconfig.json`
  ```javascript
  {
    "compilerOptions": {
      "module": "commonjs",
      "target": "es6",
      "allowJs": true
    },
    "include": [
      "./*"
    ],
    "exclude": [
      "./node_modules"
    ]
  }
  ```

  - `webpack.config`
  ```typescript
  const path = require('path');

  module.exports = {
    entry: './index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    }
  };
  ```

> **`4：总结`**
```css
本节课介绍了TypeScript的产生背景与优势，结合npm与webpack介绍了TypeScript编译
```