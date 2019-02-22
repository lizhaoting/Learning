##  （九）Grid网格布局

> **`1：基本概念 (Grid Layout)`**

- **二维的基于网格的布局系统 (同时处理列和行)**

- **第一个专门为解决布局问题而生的CSS模块**

- **`Grid Container` - Grid容器 (设置了 display: gird 的元素)**
	```css
	.main {
	    display: grid;
	}
	```
	![image](./grid.png)

- **`Grid Item` - Grid容器成员 (直接子元素)**
	```css
	<div class="main">
	    <div class="item"></div>
	    <div class="item"></div>
	    <div class="item"></div>
	</div> 
	```

- **`Grid Line` - Grid (行、列) 网格线**

	- **垂直网格线 (column grid lines)**

	- **水平网格线 (row grid lines)**

	![image](./gridLine.png)

- **`Grid Track` - 两个相邻网格线之间的空间**

	![image](./gridTrack.png)

- **`Grid Cell` - 两个相邻的行和两个相邻的列网格线之间的空间, 基础单元**

	![image](./gridCell.png)

- **`Grid Area` - 四个网格线包围的总空间, 可以由任意数量的Grid Cell组成**

	![image](./gridArea.png)

> **`2：浏览器兼容`**

  ![image](./browser.png)

> **3：容器 (flex container) 属性**
   ```css
	flex-direction

	flex-wrap

	flex-flow

	justify-content

	align-items

	align-content
  ```
  - **flex-direction (决定主轴方向)**
	- row (横向从左到右排列 - 左对齐)

	- row-reverse (反转横向排列 - 右对齐)

	- column (纵向排列)

	- column-reverse (反转纵向排列)
	```css
	.main {
	    display: flex;
	    flex-direction: row; 
	}
	```
  - **flex-wrap (换行)**
	- nowrap (子元素溢出时不换行)

	- wrap (子元素溢出时自动换行)

	- wrap-reverse (反转 wrap 排列)
	```css
	.main {
	    display: flex;
	    flex-wrap: nowrap; 
	}
	```
  - **flex-flow (flex-direction与flex-wrap简写)**
	```css
	.main {
	    display: flex;
	    flex-flow: wrap row;
	}
	```
  - **justify-content (容器成员 (flex item) 主轴上的对齐方式)**
	- flex-start (主轴起始位置对齐 - 左对齐)

	- flex-end (主轴结束位置对齐 - 右对齐)

    - center (主轴中间位置对齐 - 居中)
		- 未溢出：第一个元素与主轴起始位置的边距 === 最后一个元素与主轴起始位置的边距

		- 溢出：第一个元素溢出 === 最后一个元素溢出
	- space-between (平均地分布在主轴上)
		- 未溢出：两两之间间隔相等

		- 溢出
			- 只有一个子元素 (flex-start)

			- 最左边的剩余空间是负数 (flex-start)
	- space-around (平均地分布在主轴上, 两端保留子元素与子元素之间间距大小的一半)
		- 未溢出

		- 溢出
			- 只有一个子元素 (center)

			- 最左边的剩余空间是负数 (center)
	- space-evenly (平均地分布在主轴上, 两端保留子元素与子元素之间间距相同间距)
		- 未溢出

		- 溢出
			- 只有一个子元素 (center)

			- 最左边的剩余空间是负数 (center)
	```css
	.main {
	    display: flex;
	    justify-content: center; 
	}
	```
  - **align-items (容器成员 (flex item) 交叉轴上的对齐方式)**
	- stretch (拉伸容器成员 (flex item) 适应容器 - 默认属性)
	- flex-start (交叉轴起始位置对齐 - 上对齐)

	- flex-end (交叉轴结束位置对齐 - 下对齐)

    - center (交叉轴中间位置对齐 - 居中)
		- 未溢出：容器成员上边距交叉轴起始位置距离 === 容器成员上边距交叉轴起始位置距离

		- 溢出：两个方向溢出相同的长度
	- baseline (容器成员 (flex item) 基线对齐)
	```css
	.main {
	    display: flex;
	    align-items: center; 
	}
	```
  - **align-content (多根轴线的对齐方式, 单轴线不起作用 - 每一根轴线理解为一个容器成员 (flex item))**
	- flex-start

	- flex-end

	- center

	- space-between

	- space-around

	- stretch

> **3：容器成员 (flex item) 属性**
  ```css
	order

	flex-grow

	flex-shrink

	flex-basis

	flex

	align-self
  ```
  - **order (容器成员排列顺序 - integer)**
	- 0 (默认 - 数值越小, 排列越靠前, 可以为负值)
	```css
	.item {
	    order: 1;
	}
	```
  - **flex-grow (容器成员放大比例 - number)**
	- 0 (默认 - 数值越大, 占据的剩余空间越大, 不允许负值)
	```css
	.item {
	    flex-grow: 1;
	}
	```
  - **flex-shrink (容器成员缩小比例 - number)**
	- 1 (默认 - 数值越大, 压缩比例越大, 不允许负值)
	- 最小宽度制约
	```css
	.item {
	    flex-shrink: 0;
	}
	```
  - **flex-basis (分配多余空间之前，容器成员占据的主轴空间)**
	- auto (容器成员原本大小)
	- px
	- %
	```css
	.item {
	    flex-basis: 50px;
	}
	```
- **flex (flex-grow, flex-shrink 和 flex-basis的简写)**
	- 顺序
	- auto - (1 1 auto)
	- none - (0 0 auto)
	- 1 - (1 1 auto)
	```css
	.item {
	   flex: auto;
	}
	```
- **align-self (允许单个容器成员有与其他容器成员不同的对齐方式)**
	- auto (默认)
	- flex-start
	- flex-end
	- center
	- baseline
	- stretch
	```css
	.item {
	    align-self: auto;
	}
	```

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