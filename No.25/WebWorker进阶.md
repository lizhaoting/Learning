##  （二十五）WebWorker进阶

> **`1：WebWorker与主线程通信`**

- `通信内容`
	- `字符串`
	- `对象`
	- `二进制`
	- `...`
	- `任何Javascript可以表示存储的内容`

- `通信是拷贝关系`

- `二进制数据转移 - 转移之后当前线程无法操作`
	```css
	webWorker.postMessage(arrayBuffer, [arrayBuffer]);
	```


> **`2：执行同页面的WebWorker`**
- `未知的Script类型 - 代码不会执行`
```css
<script id="samePageWorker" type="unknow">
    addEventListener('message', () => {
        postMessage('send message!');
    }, false);
</script>
```
- `二进制读取并开启新的WebWorker`
```css
const blob = new Blob([document.getElementById('samePageWorker').text]);
const url = URL.createObjectURL(blob);
/* 获取保存在内存中的文件地址 */
const webWorker = new Worker(url);

webWorker.postMessage(123);
```

> **`3：WebWorker嵌套`**
```css
const webWorker = new Worker('./main.js');

window.webWorker = webWorker;

webWorker.postMessage('Hello');
```

```css
this.addEventListener('message', event => {
    console.log('received index.html data', event.data);
}, false);

const webWorker = new Worker('./index.js');

webWorker.postMessage('Word');
```

```css
this.addEventListener('message', event => {
    console.log('received main data', event.data);
}, false);
```

> **`4：Shared WebWorker - 跨页面通信`**

- `不能使用console`

> **`14：总结`**
```css
本节课从浏览器存储技术的历史讲起, 介绍了cookie、sessionStorage、localStorage、IndexedDb、WebSQL的技术背景和技术特征, 最后结合实例了四种Web存储技术的使用方法
```