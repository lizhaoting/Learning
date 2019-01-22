##  （一）初识CSS预处理器

@(侠课岛)

> **1：课程须知**

```
1：认真看视频，最好跟着老师一步一步完成上课的每一步操作

2：每一节课后，同学们必须自己不看视频或文档自己独立完成视频中的所有的操作

3：对每一节课的学习内容知识点能够课后反复回顾，最好做到举一反三，发散性思考

4：如果课后知识点回顾时，有不懂或不记得的知识点，根据老师所给的视频知识点说明，找到对应的知识点在视频中的时间点，再次看视频学习

5：每节课后，完成本课程的练习题，最好是看完视频，独立完成操作后，立即完成课后练习

6：每一个章节结束后，完成对应的章节的挑战题目

7：每一章都需要自己整理思维导图，将知识点融会贯通
```

> **2：传统CSS的局限性**

- **css发展史**
	- **`初代table布局`**：结构跟表现混合在一起
		```css
		<MULTICOLCOLS="3"GUTTER="25">

		<P><FONTSIZE="4"COLOR="RED">This would be some font broken up into columns</FONT></P>

		</MULTICOL>
		```
	- **`CSS+div布局`**：目前最流行的布局方式
		```css
		html { margin-left: 2cm; font-family: "Times", serif;}h1 { font-size: 24px;}
		```
	- **`Flex布局`**：移动端主流布局技术、单一维度的布局
		```css
		.flex {
            height: calc(100% - 120px);
            display: flex;
        }
		```
	- **`grid布局`**：拓宽了CSS布局的维度
		```
		.container {
            height: 100%;
            display: grid;
            grid-template-columns: 200px auto 200px;
            grid-template-rows: 80px auto 40px;
        }
		```

- **特点**
	- **`只有一个全局的命名空间，所以是无法避免出现选择器冲突的`**
	- **`模块化做的不够好，所以造成嵌套和覆盖混乱，容易产生一大堆乱糟糟的样式`**


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