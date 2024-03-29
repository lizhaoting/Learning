##  （二十一）Web存储技术(上)

> **`1：背景介绍`**
- `Cookie - 网站身份证`
	- `网站为了辨别用户身份、进行 session 跟踪而储存在用户本地终端上的数据`

	- `存储电脑硬盘上的一个txt类型的小文件`

	- `安全性问题 - 双刃剑`

	- `...`

- `Cookie局限`
	- `主流浏览器最大支持 4096 字节`

	- `主流浏览器限制每个网站的Cookie个数 - 20`

	- `Cookie默认会跟随所有Http请求发送 - 浪费网络资源`

	- `部分浏览器限制Cookie总数 - 300`

	- `...`

- `Web Storage应运而出`
	- `存储大量数据`

	- `支持复杂的本地数据库`

	- `SessionStorage`

	- `LocalStorage`

	- `WebSQL`

> **`2：Cookie`**

![image](./cookie.jpg)

- `HTML4 - 一般不需要考虑兼容`

- `身份证 - 服务器可以针对不同用户, 做出不同的响应`

- `浏览器储存在用户的机器上的纯文本, 没有可执行代码`

- `浏览器默认携带当前访问网站的Cookie`

- `Cookie类型`
	- `会话Cookie - 退出浏览器即删除`

	- `持久Cookie`
		- `特定的过期时间(Expires)`
		- `有效期(Max-Age)`

- `Cookie域 - Domain`
	- `控制Cookie使用权限`

- `Cookie路径 - Path`
	```css
	www.baidu.com                id="123456" domain="www.baidu.com"
	www.baidu.com/user           id="123456" user="eric" domain="www.baidu.com" path="/user/"

	www.baidu.com/search         id="123456";
	www.baidu.com/user/search    id="123456" user="eric";
	```

- `Cookie - secure`
	- `只有https情况下使用`

- `Cookie - HttpOnly`
	- `不允许Javascript操作Cookie`

- `安全性`
  - `服务器无法分辨用户和攻击者(攻击者窃取网站Cookie)`

	- `跨站点脚本XSS`

	- `跨站请求伪造CSRF`

> **`3：SessionStorage`**
	
![image](./sessionStorageValue.jpg)

- `基本概念`

	- `Key - Value键值对`

	- `HTML5新增的会话存储对象`

		![image](./sessionStorage.jpg)

	- `临时保存同一窗口(标签页)的数据`

	- `关闭窗口(标签页)删除数据`

- `特点`
	- `同源策略 - 同一协议、同一主机名和同一端口统一Tab`

	- `单标签页限制`

	- `只在本地存储 - 不会跟随HTTP请求发送到服务器`

	- `存储方式采用key、value键值对 - 字符串类型`

	- `存储上限限制 - 5MB`

	- `超出覆盖`

- `属性`
	- `sessionStorage.length - 键值对数量`

	- `sessionStorage.key(int index) -> null`

	- `sessionStorage.getItem(string key) -> null`

	- `sessionStorage[string key]`

	- `sessionStorage.setItem(string key, string value)`

	- `sessionStorage.removeItem(string key)`

	- `sessionStorage.clear()`

- `Json对象`
	- `JSON.stringify()`
	- `JSON.parse()`

> **`4：LocalStorage`**

![image](./localStorage.png)

- `Key - Value键值对`

- `HTML5新增的存储对象`

	![image](./localstoragesupport.jpg)

- `特点`
	- `同源策略 - localStorage`

	- `无标签页限制`

	- `只在本地存储 - 不会跟随HTTP请求发送到服务器`

	- `存储方式采用key、value键值对 - 字符串类型`

	- `存储上限限制 - 5MB`

	- `无痕模式下不可读取`

	- `永久性存储`

	- `超出报错`

- `属性`

	- `localStorage.length - 键值对数量`

	- `localStorage.key(int index) -> null`

	- `localStorage.getItem(string key) -> null`

	- `localStorage[string key]`

	- `localStorage.setItem(string key, string value)`

	- `localStorage.removeItem(string key)`

	- `localStorage.clear()`

- `注意事项`
	- `Web中不可靠`

	- `IOS浏览器中不可重复setItem, 先removeItem`

> **`5：监听storage变化`**
- `同源`

	![image](./origin.png)
	- `禁止不同源执行任何脚本`

- `监听同源网页 - 同一网页无效`
```css
window.addEventListener("storage", function (event) {
    console.log(event.key);
    console.log(event.oldValue);
    console.log(event.newValue);
    console.log(event.url);
    console.log(event.storageArea);
});
```

> **`6：课后练习`**

- `简要概括浏览器存储技术的发展历程`

- `使用LocalStorage实现下列数据的增删改查`
	```css
	key： Date.parse(new Date)
	value：{
		finished: false,
		content: '完成侠客岛No.22小节学习',
	}
	```
	- `要求`
		- `包含一条数据`
		- `包含增删改查四个Button`
		- `新增时key为时间戳`
		- `删除时根据key删除`
		- `更新时根据key更新`
		- `查询时根据key查询`

- `使用SessionStorage实现下列数据的增删改查`
	```css
	key： Date.parse(new Date)
	value：{
		finished: false,
		content: '完成侠客岛No.22小节学习',
	}
	```
	- `要求`
		- `包含一条数据`
		- `包含增删改查四个Button`
		- `新增时key为时间戳`
		- `删除时根据key删除`
		- `更新时根据key更新`
		- `查询时根据key查询`
