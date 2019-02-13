> **选择**

- 关于现代Css语言说法正确的是
    ```css
    A: 结构与表现分离

    B：模块化开发模式

    C：全局的命名空间

    D：属性具有层叠性
    ```
- 关于现代Less语言说法正确的是
    ```css
    A: 可以在浏览器端编译运行

    B：基于Ruby语言开发

    C：注释可以保留在编译后的文件中

    D：支持运算
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
    ```css
    A: hello

    B：word

    C：hello word

    D：word hello
    ```
- 下面的输出结果是( 先思考再实践 )
    ```css
    @hello: "hello";
    @word: "word";
    @hello: "word";

    #header {
        &:after {
            content: @@hello;
        }
    }
    ```
    ```css
    A: hello

    B：word

    C：hello word

    D：word hello
    ```
> **简答**
- Css预处理器的产生背景

- Css预处理器解决了哪些问题

- 解释pre-processor与post-processor

- 从个人感受和使用便捷程度上更倾向于在今后工作中使用Sass还是Less, 请给出选择的理由和不选择的理由

> **实操**
- 使用Less混合语法实现prefixer, 以参数形式添加浏览器前缀
    ```css
    header {
        .border-radius(-webkit-, 9px);  
    }
    ```
- 利用Sass函数实现上题prefixer

- 利用Sass属性变量实现border四个方向边框颜色分别为
    ```css
    left-boeder-color: red;
    left-boeder-color: green;
    left-boeder-color: origin;
    left-boeder-color: pink;
    ```
- 利用Sass条件语句与循环语句实现下列样式( 10px * 10px ) ( 10 * 5 )
![image](./white.png)
- 使用下列四种布局方式分别实现双飞燕 (圣杯) 布局, 要求使用sass预处理器, 代码压缩, 包含作者和时间信息, 通过autoprefixer兼容过去10个版本浏览器
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

- 通过配置postcss.config.js集成autoprefixer与stylelint, 思考webpack处理css管道优劣势
    ```css
    例子
    module.exports = {
        plugins:[
            require('autoprefixer')({"browsers": ["last 10 versions"]}),
            require('stylelint'),
        ],
    }
    ```

> **选做**
- 选取stylelint-config-standard三种rule做适当深入了解
    > https://github.com/stylelint/stylelint-config-standard
