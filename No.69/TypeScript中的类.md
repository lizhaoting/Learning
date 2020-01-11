##  （六十九）NPM入门

> **`1：NPM简介`**
- `Node Package Manager - Node.js包管理工具`

- `Node.js包标准发布平台，用于 Node.js包的发布、传播、依赖控制`

  - `从NPM服务器下载别人写好的包或命令行程序到本地直接使用`

  - `将自己写好的包或命令行程序上传到NPM服务器供别人使用`

> **`2：NPM基本用法`**
- `安装`
  - `随Node.js一同安装，可命令行查看和升级NPM版本`
  ```javascript
  npm -v
  // 6.9.0
  ```
  - `升级版本`
  ```css
  npm install npm@latest -g
  ```
- `初始化NPM`
  ```css
  npm init
  ```
- `package.json`
  ```json
  {
    "name": "basic",
    "version": "1.0.0",
    "description": "basic npm example",
    "main": "index.js",
    "scripts": {
      "lint": "eslint --cache --ext .js --ext .jsx src",
      "run": "karma start --log-leve=error karma.config.js --single-run=true",
      "prerun": "npm run lint",
      "postrun": "echo 'Finished running run'"
    },
    "repository": {
      "type": "git",
      "url": "https://github.com/eric"
    },
    "keywords": [
      "npm",
      "basic"
    ],
    "author": "eric",
    "license": "ISC"
  }
  ```
    - `name - 包名`
    - `version - 包的版本号`
    - `description - 包的描述`
    - `script - 脚本`
    - `homepage - 包的官网 url `
    - `author - 包的作者姓名`
    - `contributors - 包的其他贡献者姓名`
    - `dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下`
    - `repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上`
    - `main - main 字段指定了程序的主入口文件`
    - `keywords - 关键字`
    - `license - 开源许可证`

- `package-lock.json - 锁定安装时包的版本号`
  ```json
  "express": {
    "version": "4.15.4",
    "resolved": "https://registry.npmjs.org/express/-/express-4.15.4.tgz",
    "integrity": "sha1-Ay4iU0ic+PzgJma+yj0R7XotrtE=",
    "requires": {
      "accepts": "1.3.3",
      "array-flatten": "1.1.1",
      "content-disposition": "0.5.2",
      "content-type": "1.0.2",
      "cookie": "0.3.1",
      "cookie-signature": "1.0.6",
      "debug": "2.6.8",
      "depd": "1.1.1",
      "encodeurl": "1.0.1",
      "escape-html": "1.0.3",
      "etag": "1.8.0",
      "finalhandler": "1.0.4",
      "fresh": "0.5.0",
      "merge-descriptors": "1.0.1",
      "methods": "1.1.2",
      "on-finished": "2.3.0",
      "parseurl": "1.3.1",
      "path-to-regexp": "0.1.7",
      "proxy-addr": "1.1.5",
      "qs": "6.5.0",
      "range-parser": "1.2.0",
      "send": "0.15.4",
      "serve-static": "1.12.4",
      "setprototypeof": "1.0.3",
      "statuses": "1.3.1",
      "type-is": "1.6.15",
      "utils-merge": "1.0.0",
      "vary": "1.1.1"
    }
  }
  ```
- `安装依赖包`
  -  `本地安装（local）- 当前项目node_modules`
  ```css
  npm install <package name>
  npm i <package name>
  ```
  - `全局安装`
  ```css
  sudo npm install -global <package name>
  sudo npm i -global <package name>
  ```
> **`3：NPM基本语法`**
- `npm init - 初始化生成新的package.json`
  ```javascript
  npm init

  npm init -y
  // 跳过询问阶段
  ```
- `npm set - 用来设置环境变量`
  ```bash
  npm set init-author-name 'eric'
  npm set init-author-email "ericli00@163.com"
  npm set init-author-url 'http://github.com'
  npm set init-license 'ISC'
  ```
- `npm info - 查看模块具体信息`
  ```javascript
  npm info lodash

  /*
  lodash@4.17.15 | MIT | deps: none | versions: 108
  Lodash modular utilities.
  https://lodash.com/

  keywords: modules, stdlib, util

  dist
  .tarball: https://registry.npmjs.org/lodash/-/lodash-4.17.15.tgz
  .shasum: b447f6670a0455bbfeedd11392eff330ea097548
  .integrity: sha512-8xOcRHvCjnocdS5cpwXQXVzmmh5e5+saE2QGoeQmbKmRS6J3VQppPOIt0MnmE+4xlZoumy0GPG0D0MVIQbNA1A==
  .unpackedSize: 1.4 MB

  maintainers:
  - jdalton <john.david.dalton@gmail.com>
  - mathias <mathias@qiwi.be>

  dist-tags:
  latest: 4.17.15  

  published 5 months ago by jdalton <john.david.dalton@gmail.com>
  */
  ```
- `npm search - 搜索 npm 仓库，字符串或正则表达式`
  ```javascript
  NAME                      | DESCRIPTION          | AUTHOR          | DATE       
  lodash                    | Lodash modular…      | =jdalton…       | 2019-07-19 
  lodash.template           | The Lodash method…   | =jdalton…       | 2019-07-10 
  lodash.merge              | The Lodash method…   | =jdalton…       | 2019-07-10 
  @sailshq/lodash           | A fork of Lodash…    | =irl…           | 2019-08-21 
  lodash-es                 | Lodash exported as…  | =jdalton…       | 2019-07-19 
  @babel/types              | Babel Types is a…    | =danez…         | 2019-11-22 
  ext                       | JavaScript…          | =tjholowaychuk  | 2019-11-29 
  lodash.defaultsdeep       | The Lodash method…   | =jdalton…       | 2019-07-10 
  eslint-plugin-you-dont-ne | Check methods you…   | =cht8687…       | 2019-10-21 
  ed-lodash-underscore      |                      |                 |            
  rambda                    | Lightweight faster…  | =self_refactor  | 2019-11-26 
  @types/lodash             | TypeScript…          | =types          | 2019-11-18 
  lodash.get                | The lodash method…   | =jdalton…       | 2016-08-13 
  lodash.throttle           | The lodash method…   | =jdalton…       | 2016-08-13 
  lodash.uniq               | The lodash method…   | =jdalton…       | 2016-08-13 
  lodash.isequal            | The Lodash method…   | =jdalton…       | 2017-01-10 
  babel-plugin-transform-im | Transforms member…   | =amctheatres    | 2019-07-01 
  ports                     |                      |                 |            
  lodash.templatesettings   | The Lodash method…   | =jdalton…       | 2019-07-10 
  lodash.isplainobject      | The lodash method…   | =jdalton…       | 2016-08-13 
  grunt                     | The JavaScript Task… | =cowboy =shama… | 2019-03-22 
  lodash.memoize            | The lodash method…   | =jdalton…       | 2016-08-13 
  ```
- `npm list - 列出当前项目安装的所有模块`
  ```javascript
  npm list
  npm list -global

  /usr/local/lib
  ├─┬ cnpm@6.1.0
  │ ├── auto-correct@1.0.0
  │ ├── bagpipe@0.3.5
  │ ├── colors@1.4.0
  │ ├─┬ commander@2.10.0
  │ │ └── graceful-readlink@1.0.1
  │ ├─┬ cross-spawn@0.2.9
  │ │ └── lru-cache@2.7.3
  │ ├─┬ debug@2.6.9
  │ │ └── ms@2.0.0
  │ ├── giturl@1.0.1
  │ ├── ini@1.3.5
  │ ├─┬ npm@6.11.3
  │ │ ├── abbrev@1.1.1
  │ │ ├── ansicolors@0.3.2
  │ │ ├── ansistyles@0.1.3
  │ │ ├── aproba@2.0.0
  │ │ ├── archy@1.0.0
  │ │ ├─┬ bin-links@1.1.3
  │ │ │ ├── bluebird@3.5.5 deduped
  │ │ │ ├── cmd-shim@3.0.3 deduped
  │ │ │ ├── gentle-fs@2.2.1 deduped
  │ │ │ ├── graceful-fs@4.2.2 deduped
  │ │ │ └── write-file-atomic@2.4.3 deduped
  ```
- `npm uninstall <package name> - 卸载依赖包`
  ```css
  npm install <package name>
  ```

- `npm install <package name>@version - 安装更新依赖`
  ```css
  npm i lodash@latest
  ```
> **`4：NPM国内镜像`**
- `安装cnpm`
  ```css
  npm install -g cnpm --registry=https://registry.npm.taobao.org
  ```
  ```css
  cnpm不走lock文件！！！
  ```
- `替换NPM源`
  ```css
  npm config set registry http://registry.npm.taobao.org/
  ```
> **`5：总结`**
```css
本节课介绍了NPM的基本概念与基本用法，结合具体的NPM介绍了NPM的常用语法，最后介绍了国内淘宝NPM镜像的使用方法
```