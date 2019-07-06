##  （五十七）ES6新特征 - Set与Map

> **`1：Set基本概念`**
- `类数组对象, 内部元素唯一`
```javascript
let set = new Set([1, 2, 3, 2, 1]);

console.log(set);
/* Set(3){ 1, 2, 3 } */

[...set];
/* [1, 2, 3] */
```

- `接收数组或迭代器对象`
```javascript
let set = new Set(document.getElementsByName('div'));
set.size;
/* 10 */


let set = new Set([1, 2, 3, 2, 1]);
```

- `不存在隐式转换`
```javascript
let set = new Set([5, '5']);
set;
/* Set(3){ 5, '5' } */

let set = new Set([NaN, NaN]);
set;
/* Set(3){ NaN } */

let set = new Set([{}, {}]);
set;
/* Set(3){ {...}, {...} } */


let set = new Set('abcdabcd');
set;
/* Set(3){ 'a', 'b', 'c', 'd' } */
```

> **`2：Set属性与方法`**
- `size - 返回当前Set元素总数`
```javascript
let set = new Set([1, 2, 3, 4]);
set.size;
/* 4 */
```

- `add - 添加元素 - 返回新的Set`
```javascript
let set = new Set([1, 2, 3, 4]);
set.add(5);
/* Set(3){ 1, 2, 3， 4， 5 } */
```

- `delete - 删除元素 - 返回成功与否`
```javascript
let set = new Set([1, 2, 3, 4]);
set.delete(4);
/* true */
```

- `has - 是否包含某个元素`
```javascript
let set = new Set([1, 2, 3, 4]);
set.has(4);
/* true */
```

- `clear - 清空Set`
```javascript
let set = new Set([1, 2, 3, 4]);
set.clear();

set;
/* Set(0){ } */
```

> **`3：Set遍历`**
- `keys()`
```javascript
let set = new Set(['Eric', 'Iven', 'David']);

set.keys();
/* SetIterator {"Eric", "Iven", "David"} */
```

- `values()`
```javascript
let set = new Set(['Eric', 'Iven', 'David']);

set.values();
/* SetIterator {"Eric", "Iven", "David"} */
```

- `entries()`
```javascript
let set = new Set(['Eric', 'Iven', 'David']);

set.entries();
/* SetIterator {"Eric" => "Eric", "Iven" => "Iven", "David" => "David"} */
```

- `forEach()`
```javascript
let set = new Set(['Eric', 'Iven', 'David']);

set.forEach(s => s);
/*
Eric
Iven
David
*/
```

> **`4：WeakSet`**
- `只能放置对象的弱引用Set`

- `其他对象不再引用该对象(DOM), 垃圾回收机制会自动回收该对象所占用的内存`

- `适合临时存放一组对象`

- `无size`

- `不可遍历`

- `add`

- `delete`

- `has`

> **`5：Map基本概念`**
- `各种类型的值(包括对象)都可以当作键的键值对结构`
```javascript
let map = new Map();
let names = ['Eric', 'Iven'];

map.set(names, 'Eric and Iven');
map.get(names);
/* Eric and Iven */
```

- `接收迭代器对象`
```javascript
let map = new Map([
  ['name', 'Eric'],
  ['name', 'Iven']
]);

map;
/* Map(1) {"name" => "Iven"} */
```

- `特殊值处理`
```javascript
let map = new Map();

map.set(-0, 1);
map.get(+0);
/* 1 */

map.set(true, 1);
map.set('true', 2);
map.get(true);
/* 1 */

map.set(undefined, 1);
map.set(null, 2);
map.get(undefined);
/* 1 */

map.set(NaN, 1);
map.get(NaN);
/* 1 */
```

- `同一个键多次赋值, 后面的值将覆盖前面的值`

> **`6：Map属性与方法`**
- `size`

- `set(key, value) - 返回新Map`
```javascript
let map = new Map();

map.set(1, 1).set(2, 2);
/* Map(2) {1 => 1, 2 => 2} */
```

- `get - 不存在返回undefined`

- `has - 返回是否包含键值`

- `delete - 返回成功与否`

- `clear - 清空`

> **`7：Map遍历`**
- `keys()`

- `values()`

- `entries()`

- `forEach() - 第二个参数绑定this`
```javascript
let map = new Map([
  ['name', 'Eric'],
  ['name', 'Iven']
]);

let customLog = {
  info: function(key, value) {
    console.log(value);
  }
};

map.forEach(function(value, key, map) {
  this.info(key, value);
}, customLog);
/* Iven */
```

> **`8：WeakMap`**
- `只能放置对象的弱引用Map`

- `其他对象不再引用该对象, 垃圾回收机制会自动回收该对象所占用的内存`

- `存放DOM`

- `处理私有属性`
```javascript
const _totalCount = new WeakMap();

class Cat {
  constructor(count) {
    _totalCount.set(this, count);
  }
  getCount() {
    let count = _totalCount.get(this);
    /* ... */
    return count;
  }
}

const number = 123456;
const cat = new Cat(number);
``` 

- `适合临时存放一组对象`

- `无size`

- `不可遍历`

- `get()`

- `set()`

- `delete`

- `has`

> **`9：课后练习`**
- `实现一个dedupe函数, 完成对数组的去重`
```javascript
function dedupe(array) {
  ...
}

dedupe([1, 1, 1, 2]);
/* [1, 2] */
```

- `利用Set实现取并集与取交集函数`
```javascript
let set1 = new Set([1, 2, 3]);
let set2 = new Set([1, 2, 3, 4, 5, 6]);
```

- `下列函数的执行结果是`
```javascript
let map = new Map();

map.set(['Eric'], 'Eric');

map.get(['Eric']);
```

- `实现一个函数, 将Map转变为普通的对象`

> **`10：总结`**
```css
本节课介绍了ES6新特征中Map与Set的基本概念、属性方法及遍历方法, 并简要介绍了WeakSet与WeakMap
```