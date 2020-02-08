##  （七十二）Gulp初体验

> **`1：基本概念`**

- `基于流的自动化构建工具`
    - `把一个文件拷贝到另外一个位置`

    - `把多个 JS 或者 CSS 文件合并成一个文件,以减少网络请求数`

    - `对JS文件和CSS进行合并压缩,以减少网络流量`

    - `把Sass或者Less文件编译成CSS`

    - `压缩图像文件,以减少网络流量`

    - `创建一个可以实时刷新页面内容的本地服务器`

    - `...`

- `不包括模块化的功能(需要引入外部文件)`

- `易于学习 - 较少的API`

- `易于使用 - 代码优于配置策略`

- `快速构建 - 没有频繁的 IO 操作`

- `高质量的插件 - 良好的生态`

- `...`

> **`2：安装Glup`**
- `安装Glup脚手架`
    ```css
    npm install --g gulp-cli
    ```

- `初始化项目`
    ```css
    mkdir example
    cd example
    npm init
    npm install --save-dev gulp
    ```
    ```json
    {
        "name": "example",
        "version": "1.0.0",
        "description": "example",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "eric",
        "license": "ISC",
        "devDependencies": {
            "gulp": "^4.0.2"
        }
    }
    ```
- `查看版本`
    ```css
    gulp --version
    ```
    ```css
    CLI version: 2.2.0
    Local version: 4.0.2
    ```
> **`3：开始使用`**
- `创建gulpfile配置文件`
    ```css
    touch gulpfile.js
    ```
    ```css
    /* gulpfile.js */

    function defaultTask(cb) {
        cb();
    }
    
    exports.default = defaultTask
    ```
- `运行`
    ```css
    gulp
    ```
    ```css
    [15:28:31] Using gulpfile ~/Desktop/Github/xiakedao/No.72/example/gulpfile.js
    [15:28:31] Starting 'default'...
    [15:28:31] Finished 'default' after 2.73 ms
    ```
> **`4：任务（Task）`**
- `异步的 JavaScript 函数`

- `分类`

    ```js
    const { series } = require('gulp');

    function private(cb) {
        cb();
    }

    function public(cb) {
        cb();
    }

    exports.public = public;
    exports.default = series(private, public);
    ```
    - `公开任务（Public tasks）- 从gulpfile中导出（export），可以命令直接调用`

    - `私有任务（Private tasks）- 内部使用，通常作为 series() 或 parallel() 组合的一部分`
    ```css
    gulp --tasks

    [00:00:00] Tasks for ~/Desktop/Github/xiakedao/No.72/example/gulpfile.js
    [00:00:00] ├── public
    [00:00:00] └─┬ default
    [00:00:00]   └─┬ <series>
    [00:00:00]     ├── private
    [00:00:00]     └── public
    ```
    - `导出（export）是主要的注册机制(旧版本task注册)`
    ```javascript
    gulp

    [00:00:00] Using gulpfile ~/Desktop/Github/xiakedao/No.72/example/gulpfile.js
    [00:00:00] Starting 'default'...
    [00:00:00] Starting 'private'...
    [00:00:00] Finished 'private' after 903 μs
    [00:00:00] Starting 'public'...
    [00:00:00] Finished 'public' after 222 μs
    [00:00:00] Finished 'default' after 3.99 ms
    ```
    - `组合任务`
        - `series() - 顺序执行`
            - `任何一个任务（task）的错误将导致整个任务组合结束`
            
        - `parallel() - 最大并发执行`
            - `任何一个任务的错误将结束整个任务组合的结束，但是其他并行的任务（task）可能会执行完，也可能没有执行完`
        ```js
        const { series, parallel } = require('gulp');

        function clean(cb) {
            cb();
        }

        function css(cb) {
            cb();
        }

        function javascript(cb) {
            cb();
        }

        exports.build = series(clean, parallel(css, javascript));
        ```
> **`6：总结`**
```css
本节课简要前端模块化的基本概念，重点介绍前端模块化的发展历程（当前模块化发展的基石），最后引入前端常用的量大打包工具Glup与Webpack
```