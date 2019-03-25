> 1 

- C

> 2

- A

```css
Sass基于Ruby开发
```

> 3

- B、D

> 4

```css
编译后的CSS代码不符合StyleLint规范
```

> 5
```css
html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}

.title {
	height: 80px;
	background-color: #cdcdcd;
}

.content {
	height: calc(100% - 120px);
}

.leftBar {
	lost-column: 1/5 0 0px;
	height: 100%;
	background-color: #ffff99;
}
.container {
	lost-column: 3/5 0 0px;
	height: 100%;
	background-color: #EE8888;
}
.rightBar {
	lost-column: 1/5 0 0px;
	height: 100%;
	background-color: #ffff99;
}

.footer { 
    height: 40px;
    background-color: #cdcdcd;
}
```
