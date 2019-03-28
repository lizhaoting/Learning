##  （二十六）SSE与WebSocket

> **`1：基本概念`**

- `广义短连接`
```css
建立连接 —— 数据传输 —— 关闭连接

建立连接 —— 数据传输 —— 关闭连接
```

- `广义长连接`
```css
建立连接
数据传输
...
...
关闭连接
```

- `单个 TCP 连接上全双工通讯协议 - 允许服务端主动向客户端推送数据`

- `SSE(Server-Sent Events) - WebSocket 轻量代替方案`

> **`2：浏览器兼容`**

![image](./browser.png)

> **`3：SSE与WebSocket`**
- `WebSocke`
    - `全双工通道, 可以双向通信`
    - `全新协议, 需要服务器端支持`
    - `不会主动断开`

- `SSE`
    - `单向通道,服务端向客户端推送`
    - `部署在HTTP协议之上, 都支持`
    - `支持自定义数据类型`
    - `轻量级协议`
    - `静置 15 秒后自动断开(草案标准)`

> **`4：基本用法`**
- `建立连接`
    ```css
    const SSEClient = new EventSource('http://localhost:3000/sse');

    SSEClient.addEventListener('open', () => {
        console.log('连接成功！');
    }, false);
    ```

> **`5：数据格式`**
- `纯文本的简单协议`

- `包含回车符和换行符的空行来分隔`
    ```css
    data: Hello

    data: Word
    id: 1

    event: eventName
    data: Hello
    data: Word
    id: 2
    ```

- `类型`
    - `空白 - :开头 - 作为注释忽略 - 维持服务器和客户端的长连接`
    - `data - data开头`
    - `id - 事件的标识符 - 重连标识(Last-Event-ID)`
    - `event - 消息事件类型 - 未匹配触发默认messages事件`
    - `retry - 重连等待时间(ms) - 只接受整数`

- `数据 - 纯文本`


> **`5：课后练习`**

> **`6：总结`**
```css
本节课介绍WebWorker特殊应用场景, 扩展了WebWorker的能力, 为跨页面通信提供了另外一种思路
```