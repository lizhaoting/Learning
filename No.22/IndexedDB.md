##  （二十二）IndexedDB

> **`1：背景技术`**
- `Storage不适合储存大量数据`

- `Storage不提供搜索功能`

- `Storage不能建立索引`

- `IndexedDB - 250MB 以上`

> **`2：基本概念`**
- `非关系型数据库 - NoSQL`

- `特点`

	- `键值对储存 - 允许所有类型 - 主键重复报错`

	- `异步操作 - 不阻塞浏览器线程`

	- `支持事务 - 一系列操作有一步失败, 数据库回滚到事务发生之前的状态`

	- `同源限制`

	- `支持二进制储存`

- `IDBDatabase - 数据库`

- `IDBObjectStore - 对象仓库`

- `IDBIndex - 索引`

- `IDBRequest - 操作请求`

- `IDBCursor - 指针`

- `IDBKeyRange - 主键集合`

> **`3：IDBDatabase`**
- `数据的容器`

- `每个不同源可以新建多个数据库`

- `版本`
	- `同一个时刻只能有一个版本存在`
	- `修改数据库结构只能通过升级数据库版本`

- `打开数据库`
	```css
	/* databaseName不存在则创建 */
	/* version为整数, 新建时为1 */

	let database;
	let userStore;
	const request = window.indexedDB.open(databaseName, version);

	/* 成功打开数据库 */
	request.onsuccess = event => {
        database = request.result;
	}

	/* 打开数据库失败 */
	request.onerror = error => {
        console.log(error);
	}

	/* 版本号大于当前数据库版本 */
	request.upgradeneeded = event => {
        database = event.target.result;
	}
	```

> **`4：IDBObjectStore`**
- `数据库表`

- `创建表 - 在upgradeneeded中执行`

- `指定主键`
	- `autoIncrement: true`
	- `keyPath: 'id'`

	```css
	const createStore = () => {
        if(!db.objectStoreNames.contains('user')) {
            userStore = database.createObjectStore('user', { keyPath: 'id' });
        }
	}
	```
- `指定索引`
	```css
	const createStore = () => {
        if(!database.objectStoreNames.contains('user')) {
	        userStore = database.createObjectStore('user', { keyPath: 'id' });
	        userStore.createIndex('name', 'name', { unique: true });
	    }
	}
	```

