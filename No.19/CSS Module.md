##  （十九）CSS Module

> **`1：基本概念`**
- `模块是可组合、分解和更换的单元`

  ```css
    index.css
    ├─ header.css
    │   └─ reset.css
    ├─ content.css
    │   ├─ left.css
    │   │   └─ nav.css
    │   └─ right.css
    ├─ fotter.css
    └─ ...
	```

- `所有的类名都只有局部作用域的CSS文件`

> **`2：CSS Module解决了哪些问题`**
- `全局污染`
  - ` !important`
  - ` inline`
  - `复杂的选择器`

- `命名混乱`
  - `避免样式冲突 -> 选择器越来越复杂 -> 命名越来越长`

- `层级结构不清晰`

- `代码难以复用`
  - `很难从成千上万行代码中寻找`

- `代码压缩不彻底`
  - `长的 class 名无能为力`

> **`3：CSS Module原理`**
- `AST语法树`

```css
{
    nodes: [{
        raws: {
            before: '',
            between: '',
            semicolon: true,
            after: '\r\n'
        },
        type: 'rule',
        source: {
            start: {
                line: 1,
                column: 1
            },
            input: {
                css: '.header {\r\n  display: flex;\r\n  lost-column: 1/1;\r\n}\r\n',
                hasBOM: false,
                file: '../../../xiaokedao'
            },
            end: {
                line: 4,
                column: 1
            }
        },
        selector: '.header',
        lastEach: 14,
        indexes: {},
        nodes: []
    }]
}
```

> **`4：局部作用域`**

> **`5: 全局作用域`**

> **`6: 哈希规则`**

> **`7: 类组合`**

> **`8: 变量`**

> **`9：总结`**

```
本节课介绍了淘宝移动端适配方案的基本原理和使用方法, 介绍了实际开发中px到rem的转换方法, 最后介绍了字体在Rem布局中的特殊处理
```