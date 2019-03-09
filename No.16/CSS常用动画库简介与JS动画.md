##  （十六）CSS常用动画库简介与JS动画

> **`1：Animate.css`**
  - `cool, fun, and cross-browser animations`

  - `抖动(shake)、闪烁(flash)、弹跳(bounce)、翻转(flip)、旋转(rotateIn/rotateOut)、淡入淡出(fadeIn/fadeOut)等多达 60 多种动画效果`

  - `演示地址 - ` [https://daneden.github.io/animate.css/](https://daneden.github.io/animate.css/)

  - `Github地址 - ` [https://github.com/daneden/animate.css](https://github.com/daneden/animate.css)

  - `很值得学习内部代码的CSS动画库`

> **`2：Animate.css使用`**
- `引入Animate.css`
  - `本地引入`

  - `CDN引入 - 内容分发网络, 快速找到最近的节点提供资源下载`
    - `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">`

- `使用`
```css
<div class="animated bounce infinite"></div>
```

- `动态添加样式`
```css
document.getElementById("main").classList.add('bounce')
```

- `动态移除样式`
```css
document.getElementById("main").classList.remove('bounce')
```

- `重写样式`
```css
#main {
    animate-duration: 2s;
    animate-delay: 1s;
    animate-iteration-count: 2;
}
```

- `npm按需引入`
```css
npm install animate.css
```
```css
animate-config.json 文件

{
  "scripts": {
    "gulp": "./node_modules/gulp/bin/gulp.js",
  },
}
```

> **`10：课后练习`**

- `使用Animate.css动画库实现下图效果`

  ![image](./1.gif)

> **`12：总结`**

```
本节课介绍了CSS两种典型动画各自的特点, 重点介绍了CSS帧动画的六个常用属性, 最后结合练习题介绍了帧动画的常用场景
```