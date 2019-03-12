##  （十七）REM布局原理

> **`1：基本概念`**
- `em - 当前对象内文本的字体大小相对单位`

- `rem - 字体大小相对单位`

- `物理像素`

- `逻辑像素`

- `设备像素比 - dpr`

- `<meta> 标签`
    
    
    ```css
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    ```

    - `layout viewport - 浏览器默认视口 - 可以显示PC界面`
        - `clientWidth`

        - `移动设备默认的viewport`

    - `visual viewport - 浏览器可视区域大小`
        - `innerWidth`

    - `ideal viewport - 理想viewport`
        - `iphone的ideal viewport宽度320px`

    - `initial-scale - layout viewport相对于ideal viewport缩放比例`

    - `取widthh和initial-scale中较大值`

    - `initial-scale - 0.5 (左) - 1 (右)`

    <img src="./scale1.jpg" width="45%" />
    &nbsp;&nbsp;&nbsp;&nbsp;
    <img src="./scale2.jpg" width="45%" />


> **`2：适配设备屏幕`**

<img src="./taobao.jpg" width="89%" style="margin-left: 40px"/>

- `目的 - 设计稿直接等比缩放在设备上`










> **`8：课后练习`**

> **`9：总结`**

```
本节课介绍了CSS动画其中一个比较常用的动画库, 简要介绍了Animate.css的使用, 之后介绍了JS动画的使用方法, 对比了CSS动画与JS各自的特点
```