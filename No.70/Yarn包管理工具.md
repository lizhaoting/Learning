##  （七十）Yarn包管理工具

> **`1：Yarn简介`**
- `Facebook 发布的新的 node.js 包管理器`

- `用以替代 npm`

- `优势(发布时)`
    - `yarn.lock - 锁定版本`

    - `并行安装`

    - `离线模式`

> **`2：基本用法(工作流)`**

- `安装`
    - `Windows -` [https://classic.yarnpkg.com/zh-Hans/docs/install#windows-stable](https://classic.yarnpkg.com/zh-Hans/docs/install#windows-stable)
    - `Mac - ` [https://classic.yarnpkg.com/zh-Hans/docs/install#mac-stable](https://classic.yarnpkg.com/zh-Hans/docs/install#mac-stable)

- `更换源`
    ```css
    yarn config set registry https://registry.npm.taobao.org
    ```

- `yarn init`
    - `package.json`
    ```json
    {
        "name": "example",
        "version": "1.0.0",
        "description": "example",
        "main": "index.js",
        "repository": "www.xiakedao.com",
        "author": "Eric",
        "license": "MIT",
        "private": true
    }
    ```
- `yarn install - 等价于 npm install`

- `yarn add [package]@[version][tag] - 等价于npm install [package]@[version][tag] --save`
    - `yarn.lock`
    ```json
    lodash@^4.17.15:
        version "4.17.15"
        resolved "https://registry.yarnpkg.com/lodash/-/lodash-4.17.15.tgz#b447f6670a0455bbfeedd11392eff330ea097548"
        integrity sha512-8xOcRHvCjnocdS5cpwXQXVzmmh5e5+saE2QGoeQmbKmRS6J3VQppPOIt0MnmE+4xlZoumy0GPG0D0MVIQbNA1A==
    ```
- `yarn add [package]@[version][tag] --dev - 等价于npm install [package]@[version][tag] --save-dev`

- `yarn upgrade [package]@[version][tag] - 等价于npm update [package]@[version][tag]`

- `yarn remove [package] - npm uninstall [package] —save `

- `yarn global add [package] - npm install package] -g`

> **`3：.yarnrc`**
- `yarn-offline-mirror "./packages-cache" - 离线数据包地址`

- `child-concurrency #number# - 控制并行执行的子进程数`

> **`4：Yarn离线缓存`**
- `yarn cache list - 列出所有已经缓存的包`
    ```css
    Name                 Version          Registry Resolved         
    @ant-design/colors   3.2.2            npmhttps://registry.yarnpkg.com/606e66a8423903   
    ```
- `yarn cache dir - 打印出当前的yarn全局缓存在哪里`
    ```css
    /Users/eric/Library/Caches/Yarn/v6
    ```
    ```css
    npm-es-abstract-1.15.0-8884928ec7e40a79e3c9bc812d37d10c8b24cc57-integrity
    npm-es-abstract-1.16.2-4e874331645e9925edef141e74fc4bd144669d34-integrity
    npm-es-abstract-1.17.0-next.1-94acc93e20b05a6e96dacb5ab2f1cb3a81fc2172-integrity
    npm-es-to-primitive-1.2.0-edf72478033456e8dda8ef09e00ad9650707f377-integrity
    npm-es-to-primitive-1.2.1-e55cd4c9cdc188bcefb03b366c736323fc5c898a-integrity
    npm-es5-ext-0.10.51-ed2d7d9d48a12df86e0299287e93a09ff478842f-integrity
    npm-es5-ext-0.10.53-93c5a3acfdbef275220ad72644ad02ee18368de1-integrity
    npm-es6-iterator-2.0.3-a7de889141a05a94b0854403b2d0a0fbfa98f3b7-integrity
    npm-es6-map-0.1.5-9136e0503dcc06a301690f0bb14ff4e364e949f0-integrity
    npm-es6-promise-4.2.8-4eb21594c972bc40553d276e510539143db53e0a-integrity
    ```
- `yarn cache clean - 清除本地缓存`

- `yarn config set cache-folder [CACHE_DIRECTORY_PATH] - 更改缓存地址`

- `yarn install -offline`

> **`5：总结`**
```css
本节课简要介绍了Yarn的基本功能与使用方式，介绍了Yarn脱机离线的工作方式
```