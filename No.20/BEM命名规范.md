##  （二十）BEM命名规范

> **`1：基本概念`**
- `BEM 命名规范`
    - `Block - 更高级别的抽象或组件`
    - `Element - Block 的后代`
    - `Modifier - 不同状态`

- `命名方法`
```css
.block__element--modifier {
    display: flex;
}
.block--modifier {
    display: flex;
}
.block__element {
    display: flex;
}

<p class="header">
    <p class="header__body">
        <button class="header__button--primary"></button>
        <button class="header__button--default"></button>
    </p>
</p>
```

- `清晰的描述`

- `清晰的结构`

> **`2：Block`**
- `负责描述功能 - 不包含状态`
```css
/* correct */
.header {

}

/* wrong */
.header--select {

}
```

- `不影响自身布局 - 不包含具体样式`
```css
/* correct */
.header {

}

/* wrong */
.header {
    margin-top: 50px;
}
```

- `不使用元素选择器和ID选择器`
```css
/* correct */
.header {

}

/* wrong */
.header a {
    margin-top: 50px;
}
```

> **`3：Element`**
- `双下划线分开`
```css
/* correct */
.header__body {
    margin-top: 50px;
}

/* wrong */
.header .body {
    margin-top: 50px;
}
```

- `表示其目的 - 而不是其状态`
```css
.header__body {
    margin-top: 50px;
}

.header__logo {
    margin-top: 50px;
}

.header__title {
    margin-top: 50px;
}
```

- `不能脱离Block独立使用`
```css
/* correct */
<p class="header">
    <p class="header__body">
        <button class="header__button--primary"></button>
        <button class="header__button--default"></button>
    </p>
</p>

/* wrong */
<p>
    <p class="header__body">
        <button class="header__button--primary"></button>
        <button class="header__button--default"></button>
    </p>
</p>
```

> **`4：Modifier`**
- `双横杠分开`
```css
.header__button--default {
    background: none;
}
```

- `Boolean`
```css
.header__button--select {
    background: blue;
}
```

- `枚举`
```css
.header__button--primary {
    background: #329FD9;
}
```

- `不能单独使用`
```css
/* correct */
<p class="header">
    <p class="header__body">
        <button class="header__button--primary"></button>
        <button class="header__button--default"></button>
    </p>
</p>

/* wrong */
<p>
    <p>
        <button class="header__button--primary"></button>
        <button class="header__button--default"></button>
    </p>
</p>
```
> **`5：Less中使用`**
```css
@classname: header;

.@{classname} {
    .@{classname}__body {
        padding: 20px;
    }

    .@{classname}__button {
        .@{classname}__button--primary {
            background: #329FD9;
        }

        .@{classname}__button--default {
            background: none;
        }
    }
}
```
> **`6：Sass中使用`**
```css
.header {
    &__body {
        padding: 20px;
    }

    &__button {
        &--primary {
            background: #329FD9;
        }
        &--default {
            background: none;
        }
    }
}
```

> **`7：课后练习`**
- `谈一谈你对BEM命名规范的理解, 命名是否过于繁琐? 应如何解决`

- `使用BEM命名规范重新定义例子中的样式名`

  ![image](./6.gif)
  - `要求 - 严格遵循BEM规范`

> **`8：总结`**

```
本节课从BEM命名的基本概念入手, 介绍了Block、Element与Modifier常用的命名规范, 最后介绍了BEM命名规范在预处理器语言中的使用
```