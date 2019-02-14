##  （六）Flex弹性盒模型

> **1：基本概念**

- **2009年W3C新方案—-Flex 布局 (弹性盒子模型), 可以简便、完整、响应式地实现各种页面布局**

- **Flex布局元素为Flex容器 (flex container), 子元素为容器成员 (flex item)**

- **容器默认存在两根轴**
	- 水平主轴 (main axis)
		- main start
		- main end
	- 垂直交叉轴 (cross axis)
		- cross start
		- cross end

	![image](./flex.png)

- **默认沿主轴排列**
- **单个容器成员占据的主轴空间叫做main size, 占据的交叉轴空间叫做cross size**

> **2：发展历程**
  - **最老版本**
	- box (弹性伸缩盒)

	- inline-box (内联块级弹性伸缩盒)
  - **过渡版本**
	- flexbox (弹性伸缩盒)

	- inline-flexbox (内联块级弹性伸缩盒)
  - **最新版本**
	- flex (弹性伸缩盒)

	- inline-flex (内联块级弹性伸缩盒)

> **3：容器 (flex container) 属性**
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
  - **最老版本**
  - **最老版本**

































> **3：CSS预处理器的魔法**

- **文件切分**
	- **`CSS 预处理器扩展了 @import 指令的能力`**

	- **`编译环节将切分后的文件重新合并为一个大文件`**
		- 解决了大文件不便维护的问题
		- 解决了一堆小文件在加载时的性能问题

- **模块化**
	- **`CSS 文件在合理切分`**
	- **`CSS 文件在合理切分`**

	- **`编译环节将切分后的文件重新合并为一个大文件`**
		- 解决了大文件不便维护的问题
		- 小文件的相互关系形成一个树形结构
			- 入口文件 -> 根节点
			- 模块文件 -> 树形的其它节点

		```
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

- **选择符嵌套**
	- **`传统嵌套`**
		- 手工维护缩进关系
		- 当上级选择符发生变化时，所有相关的下级选择符都要修改
		- 注释书写
		```css
		.header {
			margin: auto; /* 水平居中 */
			width: 1000px;
			color: #333;
		}
		.header li {
			float: left;
			width: 100px;
		}
		.header li a {
			display: block;
			text-decoration: none;
		}
		```
	- **`预处理器嵌套`**
		- 层级关系清晰
		- 注释清晰易读
		```css
		.header {
				margin: auto  // 水平居中
				width: 1000px
				color: #333
			
				li {
					float: left  // 水平排列
					width: 100px
				
					a {
						display: block
						text-decoration: none
					}
				}
		}
		```

- **变量(换肤)**
	- **`更容易实现网站视觉风格的统一`**
	```css
	strong {
		color: #ff4466;
		font-weight: bold;
	}
	
	/* ... */
	
	.error {
		color: #ff4466;
	}
	```
	- **`换肤`**
	```css
	$color-primary = #329FD9
	
	header {
		color: $color-default
	}

	.footer {
		color: $color-default
	}
	```

- **运算**
	```css
	$left: 20px;
	.header {
		margin-left: $left + 12px;
	}
	```

- **函数**
	```css
	.border-radius(@radius: 5px) {
		-webkit-border-radius: @radius;
		-moz-border-radius: @radius;
		border-radius: @radius;
	}
	```

> **4：常见的CSS预处理器**

- **Less**
	```
	Alexis Sellier于2009年设计

	LESS的第一个版本是用Ruby编写的，在后来的版本中，它被JavaScript代替

	Less 是一门 CSS 预处理语言，它扩充了 CSS 语言，增加了诸如变量、混合(mixin)、函数等功能，让 CSS 更易维护、方便制作主题、扩充

	Less 可以运行在 Node 或浏览器端
	```

- **Sass**
	```
	Hampton Catlin 设计

	于2006年由 Natalie Weizenbaum 开发

	Sass 扩展了 CSS3，增加了规则、变量、混入、选择器、继承等等特性
	基于ruby
	```

- **PostCss**
	```
	Andrey Sitnik开发

	理解为一种插件系统(类似于css领域的webpack)
	```
	- **常见的两个插件**
		- autoprefixer
		- stylelint

> **5：课后练习`**

- CSS发展历史上经历了哪几种布局革命
```
1
2
3
4
```

- 哪种CSS预处理器基于ruby开发  (单选)

```
A: Less
B: Sass
C: Stylus
D: PostCSS
```

> **`6：总结`**

```
本节课讲解了CSS的发展历史、四种布局方式、以及CSS预处理器主要功能，最后介绍了常见的三种CSS预处理器
```