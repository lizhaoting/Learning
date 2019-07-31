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
> **`2：环境搭建`**
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

> **`6：总结`**
```css
本节课介绍了ES6新特征中Module的基本用法, 重点在于理解import与export的复合调用, 最后介绍了import()动态加载
```