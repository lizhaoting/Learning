##  （二十三）Web存储技术(下)

> **`8：关闭IndexedDB数据库连接`**

```css
const closeDataBase = () => {
    database.close();
}
```

> **`9：删除IndexedDB数据库`**
- `先关闭数据库连接`
```css
const deleteDataBase = () => {
    indexedDB.deleteDatabase('first_database');
}
```

> **`10：WebSQL基本概念`**
- `非 HTML5 规范 - 独立的规范`

- `SQL 语句操作客户端数据库`

- `openDatabase - 使用现有数据库 - 新建数据库`

- `transaction - 事务`

- `executeSql - 执行SQL语句`

> **`11：openDatabase`**
- `数据库名称`
- `版本号`
- `描述文本`
- `数据库大小`
- `创建回调 - 只在第一次创建调用`
```css
const database = openDatabase('my_database', '1.0', 'first', 2 * 1024 * 1024, function() {

});
```

> **`12：transaction`**
- `创建表`
	```javascript
	const createTable = () => {
        database.transaction(function (content) {  
            content.executeSql('CREATE TABLE IF NOT EXISTS USER (id unique, name)');
        });
	}
	```

- `添加数据`
	```javascript
	const addData = () => {
        database.transaction(function (content) {  
            content.executeSql('INSERT INTO USER (id, name) VALUES (1, "Eric")');
        });
	}
	```

- `查询数据`
	```javascript
	const searchData = () => {
        database.transaction(function (content) {  
            content.executeSql('SELECT * FROM USER');
        });
	}
	```
- `更新数据`
	```javascript
	const updateData = () => {
        database.transaction(function (content) {  
            content.executeSql('UPDATE USER SET name=\'David\' WHERE id=1');
        });
	}
	```


- `删除数据`
	```javascript
	const deleteData = () => {
        database.transaction(function (content) {  
            content.executeSql('DELETE FROM USER WHERE id = 1');
        });
    }
	```

- `删除数据库表`
	```javascript
	const deleteDataBase = () => {
        database.transaction(function (content) {  
            content.executeSql('DROP TABLE USER');
        });
    }
	```

> **`13：课后练习`**

- `使用IndexedDB创建下列数据库表并添加增删改查功能`

	- `要求`
		- `创建数据库表 - mission_finished`
		- `创建数据库表 - mission_unfinished`
		- `包含增删改查`
	- `表结构`
		```css
		id： Date.parse(new Date())

		content: '完成侠客岛No.23小节学习',
		```

> **`14：总结`**
```css
本节课从浏览器存储技术的历史讲起, 介绍了cookie、sessionStorage、localStorage、IndexedDb、WebSQL的技术背景和技术特征, 最后结合实例了四种Web存储技术的使用方法
```