##  （六十二）ES6新特征 - Generator函数

> **`1：基本概念`**
- `遍历器对象生成器`
  - `function与函数名之间有一个星号`

  - `函数体内部包含yield表达式`
  ```javascript
  function* generator() {
    yield 1;
    yield 2;
    return 3;
  }

  const firstGenerator = generator();

  /*
  firstGenerator.next()
  { value: 1, done: false }
  firstGenerator.next()
  { value: 2, done: false }
  firstGenerator.next()
  { value: 3, done: true }
  firstGenerator.next()
  { value: undefined, done: true }
  firstGenerator.next()
  { value: undefined, done: true }
  */
  ```

> **`2：执行过程`**
- `调用 Generator 函数后并不执行`
  ```javascript
  function* generator() {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    return 3;
    console.log(4);
  }

  const g = generator();
  ```
- `调用next方法开始执行, 指针移向下一个状态`
  ```javascript
  function* generator() {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    return 3;
    console.log(4);
  }

  const g = generator();

  g.next();
  /*
  1
  { value: 1, done: false }
  */
  ```
- `执行到yield或return语句`
  ```javascript
  function* generator() {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    return 3;
    console.log(4);
  }

  const g = generator();

  g.next();
  g.next();
  /*
  1
  2
  { value: 2, done: false }
  */
  ```
- `从上一次暂停位置开始执行, 直到return`
  ```javascript
  function* generator() {
    console.log(1);
    yield 1;
    console.log(2);
    yield 2;
    console.log(3);
    return 3;
    console.log(4);
  }

  const g = generator();

  g.next();
  g.next();
  g.next();
  g.next();

  /*
  1
  2
  3
  { value: undefined, done: true }
  */
  ```
> **`3：Generator方法`**
- `next - 参数被当作上一个yield表达式的返回值`
    ```javascript
    function* generator(x) {
      var y = 3 * (yield (x + 3));
      var z = yield (y / 2);
      return (x + y + z) * 2;
    }

    const g1 = generator();
    g1.next();
    /* { value: NaN, done: false } */
    g1.next();
    /* { value: NaN, done: false } */
    g1.next();
    /* { value: NaN, done: false } */
    g1.next();
    /* { value: undefined, done: true } */
    ```
    ```javascript
    function* generator(x) {
      var y = 3 * (yield (x + 3));
      var z = yield (y / 2);
      return (x + y + z) * 2;
    }

    const g2 = generator(10);
    g2.next();
    /* { value: 13, done: false } */

    /*
    x = 10
    13 = 10 + 3
    */

    g2.next(10);
    /* { value: 15, done: false } */

    /*
    y = 30
    15 = 3 * 10 / 2
    */

    g2.next(10);
    /* { value: 100, done: false } */

    /*
    z = 10
    100 = (10 + 10 + 30) * 2
    */
    ```
- `throw - 函数外抛出错误在 Generator 函数体内捕获`
  - `必须执行一次next函数`
  
  - `内部throw只执行一次`
  ```javascript
  function* generator(x) {
    try {
      yield;
    } catch (err) {
      console.log('inner error', err);
    }
  }

  const g = generator();
  g.next();
  /*
  { value: undefined, done: false }
  */

  g.throw(new Error('123'))
  /*
  inner error Error: 123
  */
  ```
- `return - 终结Generator函数`
> **`4：Generator函数嵌套`**
- `yield* - 在Generator函数内部调用另一个Generator函数, 无需手动遍历`
  ```javascript
  function* generator1(){
    yield* [1, 2, 3];
  }
  generator1().next();
  /* { value: 1, done: false } */

  function* generator2(){
    yield [1, 2, 3];
    /*
    for (var value of [1, 2, 3]) {
      yield value;
    }
    */
  }
  generator2().next();
  /* { value: Array(3), done: false } */
  ```
> **`5：Generator函数应用`**
- `for of - 遍历return前数据`
  ```javascript
  function* generator() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
  }

  for (let s of generator()) {
    console.log(s);
  }

  /*
  1
  2
  3
  */
  ```
- `状态机`
  ```javascript
  const status = function* () {
    while (true) {
      console.log('On');
      yield true;
      console.log('Off');
      yield false;
    }
  }();
  status.next();
  ```
- `网络请求`
  ```javascript
  import axios from 'axios';

  function* generator(){
    const url = 'https://xxx.xxx.com';
    const result = yield fetch(url);
    return result();
  }
  ```
- `异步操作(文件流)`
> **`6：课后练习`**
- `利用Generator函数实现数组的flat方法(不需要传递展开层级)`
```javascript
function* flat(array) {
  if (Array.isArray(array)) {

  } else {
    yield array;
  }
}

const array = [ 1, [2, 3], [4, 5] ];
console.log([...flat(array)]);
/* [1, 2, 3, 4, 5] */
```

> **`7：总结`**
```css
本节课介绍了ES6新特征中Generator的基本概念、执行过程与常用方法, 之后结合实例介绍了Generator的主要应用场景
```