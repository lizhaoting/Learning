> **选择**

- 关于现代Css语言说法正确的是
    ```
    A: 结构与表现分离

    B：模块化开发模式

    C：全局的命名空间

    D：属性具有层叠性
    ```

- 下面伪元素的输出结果是( 先思考再实践 )
    ```css
    @hello: "word";
    @content: "hello";

    #header {
        &:after {
            content: @@content;
        }
    }
    ```
    ```
    A: hello

    B：word

    C：hello word

    D：word hello
    ```
> **简答**
- Css预处理器的产生背景

> **实操**
- 使用下列四种布局方式分别实现双飞燕 (圣杯) 布局, 要求使用sass预处理器, 代码压缩, 且包含作者和时间信息
    ```css
    table
    div
    flex
    grid
    ```
    ![image](./sanGreal.png)
    ```css
    header
        height: 80px;
        background-color: #cdcdcd;

    left
        width: 200px;
        background-color: #ffff99;

    center
        width: auto;
        background-color: #ee8888;

    right
        width: 200px;
        background-color: #ffff99;

    footer
        height: 40px;
        background-color: #cdcdcd;
    ```
- 在上一题的布局中实现点击头部实现 '目录' 与 '内容' 颜色互换, 要求使用Less在浏览器端实现换肤

    - 提示: less.js
    - 思考：网站的APP换肤是怎么实现的, 各有什么优劣