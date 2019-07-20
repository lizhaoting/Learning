##  （六十）ES6新特征 - Iterator迭代器

> **`1：基本概念`**

- `为各种不同的数据结构提供统一的访问机制`

- `按某种次序排列数据结构`

- `为for of遍历提供支持`

- `遍历过程`
  - `新建指针, 指向数据结构起始位置`

  - `调用next()方法, 返回如下对象`
  ```javascript
  {
    /* 当前位置数据值 */
    value: 'value',
    /* 是否遍历完成标识 */
    done: false,
  }
  {
    value: undefined,
    done: true,
  }
  ```

- `默认部署在数据结构Symbol.iterator属性上`
  ```javascript
  let array = ['a', 'b', 'c', 'd'];

  let Iterator = array[Symbol.iterator]();

  /*
  Iterator.next()
  { value: "a", done: false }
  Iterator.next()
  { value: "b", done: false }
  Iterator.next()
  { value: "c", done: false }
  Iterator.next()
  { value: "d", done: false }
  Iterator.next()
  { value: undefined, done: true }
  Iterator.next()
  { value: undefined, done: true }
  */
  ```
- `默认包含迭代器对象`
  - `Array`
  - `Map`
  - `Set`
  - `String`
  - `arguments`
  - `NodeList`

> **`2：使用场景`**
- `for...of`
- `结构赋值`
  ```javascript
  let set = new Set().add('aa').add('bb');

  let [a, b] = set;

  /*
  a: 'aa'
  b: 'bb'
  */
  ```
- `扩展运算符`
- `generator函数`
  ```javascript
  let generator = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  };

  let iterator = generator();

  /*
  iterator.next()
  { value: 1, done: false }
  iterator.next()
  { value: 2, done: false }
  iterator.next()
  { value: 3, done: false }
  iterator.next()
  { value: 4, done: false }
  iterator.next()
  { value: 5, done: false }
  iterator.next()
  { value: undefined, done: true }
  iterator.next()
  { value: undefined, done: true }
  */
  ```
> **`3：数组遍历`**
- `遍历器覆盖`
  ```javascript
  const array = ['a', 'b', 'c'];

  for(let s of array) {
    console.log(s);
  }

  /*
  a
  b
  c
  */

  const object = {};

  object[Symbol.iterator] = () => {
    return array[Symbol.iterator].call(array);
  }

  for(let s of object) {
    console.log(s);
  }
  /*
  a
  b
  c
  */
  ```
- `获取键值与键名`
  ```javascript
  const array = ['a', 'b', 'c'];

  for(let s of array) {
    console.log(s);
  }
  /*
  a
  b
  c
  */

  for(let s in array) {
    console.log(s);
  }
  /*
  1
  2
  3
  */
  ```
> **`4：课后练习`**
- `实现一个可以无限运行的遍历器例子, 输出自然数`
> **`5：总结`**
```css
本节课介绍了ES6新特征中Iterator的基本概念, 简要介绍了Iterator的主要应用场景
```