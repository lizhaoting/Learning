##  （四十七）JavaScript实现Ajax
> **`1：基本概念`**
- `XMLHttpRequest - 网络请求模块(浏览器网络线程)`

- `用于从URL获取数据`

- `页面的无刷新请求数据`

- `可以用于获取多种类型的数据(ftp、文件)`

> **`2：实例化XMLHttpRequest`**
```css
var xhr = new XMLHttpRequest();
```

> **`3：初始化请求`**
```css
/* method   - 请求方式 */
/* url      - 请求地址 */
/* async    - 是否异步 */
/* user     - 用户名   */
/* password - 密码     */
xhr.open(method, url, async, user, password);
```

> **`4：发送请求(encodeURIComponent)`**
```css
xhr.send(data);
```

> **`5：接收网络请求返回`**
- `responseText - 请求返回的数据内容`

- `responseXML - 如果响应内容是text/xml、application/xml, 这个属性将保存响应数据的XML、DOM文档`

- `status - 响应的HTTP状态，如 200 304 404 等`

- `statusText - HTTP状态说明`

- `readyStatus - 请求/响应过程的当前活动阶段`

    - `0 - 未调用open`
    - `1 - 已调用open但未发送`
    - `2 - 已调用send`
    - `3 - 已接收到请求返回的数据`
    - `4 - 请求已完成`

- `timeout - 设置请求超时时间`
```javascript
xhr.onreadystatechange = () => {
    if (xhr.readyStatus === 4) {
        /* HTTP 状态在 200-300 之间表示请求成功 */
        /* HTTP 状态为 304 表示请求内容未发生改变，可直接从缓存中读取 */
        if (xhr.status >= 200 && 
            xhr.status < 300 || 
            xhr.status == 304) {
            console.log('请求成功', xhr.responseText)
        }
    }
}
```

> **`6：封装Promise`**
```javascript
function ajax (options) {
    /* 获取请求地址 */
    let url = options.url;

    /* 获取请求方法 */
    const method = options.method.toLocaleLowerCase() || 'get';

    /* 默认异步 */
    const async = options.async != false;

    /* 获取请求request数据 */
    const data = options.data;

    /* 实例化XMLHttpRequest */
    const xhr = new XMLHttpRequest();

    /* 设置超时时间 */
    if (options.timeout && options.timeout > 0) {
        xhr.timeout = options.timeout
    }

    return new Promise ( (resolve, reject) => {

        /* 添加超时回调 */
        xhr.ontimeout = () => reject && reject('请求超时');

        /* 成功回调 */
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    resolve && resolve(xhr.responseText);
                } else {
                    reject && reject();
                }
            }
        }

        /* 失败回调 */
        xhr.onerror = err => reject && reject(err);

        /* 拼接参数 */
        let paramArr = [];
        let encodeData;
        if (data instanceof Object) {
            for (let key in data) {
                paramArr.push( encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) );
            }
            encodeData = paramArr.join('&');
        }

        /* get请求 */
        if (method === 'get') {
            const index = url.indexOf('?')
            if (index === -1) url += '?'
            else if (index !== url.length -1) url += '&'
            url += encodeData
        }

        /* 初始化请求 */
        xhr.open(method, url, async);

        /* get直接发送拼接的URL */
        if (method === 'get') xhr.send(null);

        if (method === 'post') {
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8')
            xhr.send(encodeData)
        }
    } )
}
```

> **`7：总结`**
```css
本节课介绍了Javascript中XMLHttpRequest对象的基本属性和方法, 从实例化、初始化、发送和接受四个阶段完成了Ajax网络请求核心内容封装
```