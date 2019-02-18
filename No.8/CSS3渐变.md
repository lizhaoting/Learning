##  （八）CSS3渐变

> **1：基本概念**

- **在两个或多个指定的颜色之间显示平稳的过渡**

	![image](./css.png)

- **渐变效果由浏览器生成**

- **渐变类型**
	- 线性渐变 (Linear Gradients) - 向下/向上/向左/向右/对角方向

	- 径向渐变 (Radial Gradients) - 由它们的中心定义

- **作为元素的 background-image( background ) 使用**

> **2：浏览器支持**
  - **完全支持该属性的第一个浏览器版本**

	![image](./borwer.png)

  - **浏览器前缀**
  ```css
  .header {
	/* Safari */
    background: -webkit-linear-gradient(red, blue);
	/* Opera */
    background: -o-linear-gradient(red, blue);
	/* Firefox */
    background: -moz-linear-gradient(red, blue);
	/* 标准的语法, 放在最后 */
    background: linear-gradient(red, blue);
}
  ```

> **3：线性渐变 (Linear Gradients)**

- **基本语法**

	```css
	background-image: linear-gradient(direction, color1, color2, ...);
	```

- **从上到下 - 默认方向**
	```css
	background-image: linear-gradient(#147B96, #E6D205);
	```

- **从左到右**
	```css
	to top/bottom/left/right

	background: linear-gradient(to right, #147B96, #E6D205);
	```

- **对角**
	```css
	to left top/left top/bottom right/right bottom

	background: linear-gradient(to bottom right, #147B96 , #E6D205);
	```

- **使用角度**

	![image](./angle.png)
	```css
	background: linear-gradient(45deg, #147B96 , #E6D205);
	```

- **多种颜色**
	```css
	background-image: linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);
	```

- **重复渐变**
	```css
	background-image: repeating-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);
	```

> **4：线性渐变实例**

> **4：课后练习**
- Flex container存在下列哪几个描述, 分别代表什么
	```css
	A : Main axis
	B : Cross axis
	C : Row axis
	D ：Column axis
	```
- Flex item存在下列哪几个描述, 分别代表什么
	```css
	A : Main size
	B : Cross size
	C : Row size
	D ：Column size
	```
- item元素的实际宽度是多少
	```css
	.main {
	    display: flex;
	}
	.main .item {
	    flex-basis: 200px;
	    width: 100px;
	} 
	```
- Flex container具有哪几个属性, 分别代表什么

- Flex item具有哪几个属性, 分别代表什么

- class为two的容器宽度是多少? 并说明原因 (实操)
	```css
	.main {
	    display: flex;
	    background: #8A469B;
	}
	.main span{
	    width: 800px;
	    height: 50px;
	    border: 1px solid #FFF;
	    box-sizing: border-box;
	    background: #EA7F26;
	}
	.zero {
	    flex-shrink: 0;
	}
	.one {
	    flex-shrink: 1;
	}
	.two {
	    flex-shrink: 9;
	}

	<div class="main">
        <span class="zero">1</span>
        <span class="one">2</span>
        <span class="two">3</span>
    </div>
	```

- 计算出各个 li 元素实际宽度 (计算)
	```css
	.main {
	    display: flex;
	    width: 400px;
	    margin: 0;
	    padding: 0;
	    list-style: none;
	}
	.main li {
	    width: 200px;
	}
	.main li:nth-child(1) {
	    background: #888;
	}
	.main li:nth-child(2) {
	    background: #ccc;
	}
	.main li:nth-child(3) {
	    flex-shrink: 3;
	    background: #aaa;
	}
	```

> **`5：总结`**

```
本节课讲解了Flex弹性盒模型的基本概念, 简要介绍了Flex弹性盒模型的发展历程，最后重点介绍了Flex container六个属性以及Flex item的六个属性
```