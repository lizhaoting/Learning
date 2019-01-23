## （二）Less初体验

> **1：引入Less**
```
npm install less -g
```

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>初识 Less</title>
    <link href="./main.css" rel="stylesheet">
</head>
<body>
    <div class="container">1</div>
    <div class="container2">2</div>
    <div class="container3">3</div>
</body>
</html>
```

```css
@width: 100%;
@height: 100px;
@color: red;

.container{
   width: @width;
   height: @height;
   background-color: @color;
   margin-bottom: 5px;
 }

.container2{
  width: @width;
  height: @height;
  background-color: @color;
  margin-bottom: 5px;
}

.container3{
  width: @width;
  height: @height;
  background-color: @color;
  margin-bottom: 5px;
}
```

```
lessc main.less main.css
```

> **2：Less基本语法**

- **Less嵌套**

    在 css 中父子元素的写法通常如下：
    ```css
    .container {
        padding: 0;
    }
    .container .header {
        background-color: red;
    }
    ```
    Less 写法如下，父子嵌套关系一目了然。
    ```css
    .container {
        padding: 0;
        .header {
            background-color: red;
        }
    }
    ```
    伪类的写法，在 css 中写法如下：
    ```css
    #header :after {
      content: " ";
      display: block;
      font-size: 0;
      height: 0;
      clear: both;
      visibility: hidden;
    }
    ```
    less 引入符号 `&` 代替主类 `#header`。
    ```css
    #header {
      &:after {
        content: " ";
        display: block;
        font-size: 0;
        height: 0;
        clear: both;
        visibility: hidden;
      }
    }
    ```

- **Less变量**

  将三个 div 的背景颜色改成蓝色（blue）
  ```css
  @width: 100%;
  @height: 100px;
  @color: blue;
  ...
  ```

    - less 就是用 js 的写法来写 css
    - 使用 @ 符号定义变量
    - `@变量名` 看成是一个字符串
    ```css
    @classname: main;

    @color: red;

    .@classname {
        background-color: @color;
    }
    ```
    - 变量可以作为样式属性值：`background-color: @color;`
    - 也可以作为类名：`.@classname` 表示的就是 `.main`。

- **Less函数**

  - 使用 `$ lessc func.less` 进行转译 func.css 文件
  ```css
  .border-radius(@radius) {
    -webkit-border-radius: @radius;
      -moz-border-radius: @radius;
            border-radius: @radius;
  }
  #header {
    .border-radius(4px);
  }
  .button {
    .border-radius(6px);
  }
  ```

  ```css
  #header {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .button {
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
  }
  ```
  - 函数的参数设置默认值
  ```css
  .border-radius(@radius: 5px) {
    -webkit-border-radius: @radius;
    -moz-border-radius: @radius;
    border-radius: @radius;
  }
  ```

  - 函数有多个参数时用分号隔开

    - 调用时就是通过变量名称，而不是位置

    ```css
    .mixin(@color; @padding:2) {
      color-2: @color;
      padding-2: @padding;
    }
    ```

  - Less 内置函数
    - escape
      - escape('htts://www.baidu.com/images/1.png')
    - percentage
      - percentage(.5)
    - convert
      - convert(9s, 'ms')
    - . . .
  
- **Less混合**
  - 公用样式
  ```css
  #header a {
      color: #111;
      border-top: solid 1px #595959;
      border-bottom: solid 2px #595959;
  }

  #header span {
      height: 16px;
      border-top: solid 1px #595959;
      border-bottom: solid 2px #595959;
  }

  #header p {
      color: red;
      border-top: solid 1px #595959;
      border-bottom: solid 2px #595959;
  }
  ```
  - 抽取公共类
  ```css
  .borde_style {
      border-top: solid 1px #595959;
      border-bottom: solid 2px #595959;
  }

  #header a {
      color: #111;
      .borde_style;
  }

  #header span {
      height: 16px;
      .borde_style;
  }

  #header p {
      color: red;
      .borde_style();
  }
  ```

- **Less引入**
  - one.less
  ```css
  .container {
    width: 100px;
    height: 200px;
  }
  ```
  - two.less
  ```css
  @import "one";
  ```

> **3：Less的优势与劣势**
  - 优势
    - 更接近 CSS 语法，开发者能够更平滑地进行切换
    - 可以在浏览器中运行，实现主题定制功能

  - 劣势
    - 功能上比Sass若，比如对象、循环和判断
    - 生态环境略逊与Sass(2006)

> **4：课后练习**

  - 下面函数的执行结果是
    ```css
    .squre (@height: 5px; @width: 10px) {
      height: @height;
      width: @width;
    }

    .header {
      .squre(@width: 5px;);
    }
    ```
    ```css
    A:  .header {
          height: 5px;
          width: 10px;
        }

    B:  .header {
          height: 5px;
          width: 5px;
        }
    ```
  - class_one和class_two哪个在宽度上更宽
  ```css
  .format {
    width: percentage(0.5);
  }

  .class_one {
    .format
  }

  .class_two {
    .format()
  }
  ```
  ```
  A: class_one
  B: class_two
  C: 不知道
  D: 相同
  ```

> **5：总结**
```
本节课讲解了Less的基本使用，从嵌套、混合、变量、函数和引入五个方面介绍了Less的基础用法，并和Sass进行了概念层次的比较，分析Less的优劣势
```