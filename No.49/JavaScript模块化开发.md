##  （四十九）JavaScript模块化开发
> **`1：发展历史`**

- `早期的Javascript - <script>标签引入 - 没有模块化`
    - `简单粗暴`

    - `逻辑混乱`

    - `页面复杂, 可维护性差`

    - `全局变量暴露`

    - `文件引入顺序`

- `JavaScript引入模块化`

    - `避开全局污染`

    - `模块复用, 提高开发效率与协作`

    - `模块功能单一职能方便维护`

    - `解决文件依赖顺序`

- `CommonJs`

- `AMD - 异步模块`

- `CMD - 通用模块`

> **`2：CommonJs`**

- `CommonJs社区贡献`

- `规范`
    - `定义模块标识规范`

    - `全局函数require - 传入模块标识来引入其他模块(暴露API)`

    - `模块嵌套 - 依次加载引用模块`

    - `通过exports暴露API`

- `定义模块`
    ```css
    var basic = 1;
    var increase = function(value) {
        return value + basic;
    }

    module.exports.increase = increase;
    ```

- `引入模块`
    ```css
    var myModule = require('./myModule.js');

    console.log(myModule.increase(1));
    ```

> **`3：AMD(Asynchronous Module Definition)`**

- `异步加载模块`

- `回调函数中执行逻辑`

- `使用define定义模块`

- `define(id?, dependencies?, factory)`
    - `模块的标识(名字)`

    - `模块依赖(数组) - ['module1', 'module2']`

    - `模块逻辑`
        - `return`

        - `exports`

        - `module.exports`

- `定义模块`
    ```javascript
    define(['increase', 'reduce'], function(increase, reduce) {
        return function(value) {
            return increase(value) + reduce(value);
        }
    });
    ```

- `引入模块`
    ```javascript
    require.config({
        baseUrl: "./js",
        paths: {
            "myModule": "myModule.js"
        }
    });
    require(['myModule'], (myModule) => console.log(myModule(1)));
    ```

> **`3：CMD(Common Module Definition)`**

- `玉伯 - sea.js`

- `AMD改进版本`

- `按需加载`

- `定义模块`
    ```javascript
    define(function(require, exports, module) {
        var increase = require('increase');
        var reduce = require('./reduce');

        module.exports = function(value) {
            return increase(value) + reduce(value);
        }
    });
    ```

- `引入模块`
    ```javascript
    seajs.use('./myModule', function(myModule) {
        console.log(myModule(1));
    });
    ```

> **`4：课后练习`**
- `分析AMD与CMD规范对于网页的响应速度, 从首次加载与后续操作两个角度考虑`

- `尝试使用AMD规范引入Jquery, 并重命名为myJQuery`

> **`5：总结`**
```css
本节课从JavaScript发展历史讲起, 介绍了模块化开发的发展历程, 并结合实例介绍了CommonJS、AMD、CMD三种规范的基本用法
```