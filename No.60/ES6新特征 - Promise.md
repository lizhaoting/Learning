##  （六十）ES6新特征 - Promise

> **`1：基本概念`**
- `表示一个异步操作的最终状态(完成或失败), 以及该异步操作的结果值`
  ```javascript
  new Promise(
    function(resolve, reject) {
      /* executor */
    }
  );
  ```

- `三种状态`
  - `pending - 进行中`

  - `fulfilled - 已成功`

  - `rejected - 已失败`

- `状态一旦确定就不再改变`
  - `pending -> fulfilled`

  - `pending -> rejected`

  - `状态确定之后称之为resolved`

  - `resolved之后添加回调会立即执行得到结果`

  - `resolved一般指fulfilled状态`

- `一旦新建会立即执行, 无法中途取消`

- `Promise构造函数执行时立即调用executor函数`

> **`2：基本用法`**
- `Promise接受一个函数作为参数, 该函数的参数分别是resolve和reject`
```javascript
let promise = new Promise(function(resolve, reject) {
    console.log('new promise');

    setTimeout(function() {
        console.log('promise resolved');
        return resolve("success");
    }, 1000);
});
```
- `Promise实例生成后在then方法中指定resolved状态和rejected(可选)状态的回调函数`
```javascript
promise.then(function(value) {
    console.log('resolved callback', value);
});
```
- `Promise传递`
```javascript
const promise1 = new Promise(function (resolve, reject) {
  /* ... */
});

const promise2 = new Promise(function (resolve, reject) {
  /* ... */
  resolve(promise1);
})
```
> **`3：属性和方法`**
- `Promise.prototype.then`
  - `Promise状态改变时回调函数`
    - `resolved回调函数`
    - `rejected回调函数(可选)`

  - `返回的是一个新的Promise(链式调用)`

  - `顺次调用`

  ```javascript
  let promise1 = new Promise(function(resolve, reject) {
      console.log('new promise1');

      setTimeout(function() {
          console.log('promise1 resolved');
          return resolve("promise1 success");
      }, 2000);
  });

  let promise2 = new Promise(function(resolve, reject) {
      console.log('new promise2');

      setTimeout(function() {
          console.log('promise2 resolved');
          return resolve("promise2 success");
      }, 4000);
  });

  promise1
    .then(function(value) {
      console.log('then1 callback', value);
      return value;
    })
    .then(function(value) {
      console.log('then2 callback', value);
      return promise2;
    })
    .then(function(value) {
      console.log('then3 callback', value);
      return '';
    })
  ```

- `Promise.prototype.catch`
  - `错误发生时的回调函数 - .then(null/undefined, reject)别名`

  - `捕获reject以及then回调中运行时错误`

  - `resolved状态无法捕捉错误`

  - `Promise 内部的错误不会影响到 Promise 外部的代码`

  - `顺次调用`

  ```javascript
  let promise = new Promise(function(resolve, reject) {
    throw new Error('Error');
  });
  promise.catch(function(error) {
    console.log(error);
  });

  /* Error: Error */
  ```

- `Promise.prototype.finally`
  - `无论状态如何都会执行的方法`

  - `不接受任何参数`

  - `与状态无关, 不依赖Promise执行结果`

- `Promise.all`
  - `包装多个Promise为一个新的Promise`

  - `fulfilled条件是所有包装的Promise全部fulfilled`

  ```javascript
  const promise1 = new Promise((resolve, reject) => {
    resolve({
      code: 200,
      data: [],
    });
  })
    .then(result => result)
    .catch(err => ({
      code: 200,
      data: [],
    }));


  const promise2 = new Promise((resolve, reject) => {
    throw new Error('Error');
  })
    .then(result => result)
    .catch(err => ({
      code: 200,
      data: [],
    }));

  Promise.all([promise1, promise2])
    .then(result => console.log(result))
    .catch(e => console.log(e));
  ```

- `Promise.race`
  - `包装多个Promise为一个新的Promise`

  - `返回第一个fulfilled`

  ```javascript
  const promise = Promise.race([
    fetch('/url'),
    new Promise(function (resolve, reject) {
      setTimeout(() => {
        return reject(new Error('request timeout'));
      }, 5000);
    })
  ]);

  p
    .then(console.log)
    .catch(console.error);
  ```
- `Promise.resolve`
  - `将现有对象转为 Promise 对象`

  - `状态为fulfilled`

  ```javascript
  const promise = Promise.resolve('hello');

  promise.then(res => alert(res));
  ```

- `Promise.reject`
  - `将现有对象转为 Promise 对象`

  - `状态为rejected`

  ```javascript
  const promise = Promise.reject('word');

  promise.then(res => alert(res)).catch(err => alert(err));
  ```
- `Promise.try - 提案`
  - `模拟try catch代码块`

  - `捕捉同步错误`

  ```javascript
  Promise.try(function() {
    /* ... */
    database.users.get({
      id: userID
    })
  })
    .then(
      /* ... */
    )
    .catch(
      /* ... */
    )
  ```
> **`4：课后练习`**
- `使用Promise封装一个加载图片函数`
```javascript
const image = new Image();
image.src = url;

image.onload = function() {
  /* 图片加载成功 */
};

image.onerror = function() {
  /* 图片加载失败 */
};
```
- `下列函数的执行结果是`
```javascript
const promise = new Promise(function (resolve, reject) {
  resolve('success');
  setTimeout(function () {
    throw new Error('Error');
  }, 0)
});

promise.then(function (value) {
  console.log(value);
});
```
- `下列代码中为何有错误没有被catch捕获, 如何改写可以正确捕获错误`
```javascript
const promise = new Promise(function (resolve, reject) {
  resolve(x + 2)
});

promise
  .catch(error => console.warn(error))
  .then(function (value) {
    console.log(value);
    return(y + 2);
  });
```
> **`5：总结`**
```css
本节课介绍了ES6新特征中Promise的基本概念与常用属性和方法, 重点在于Promise不同状态与链式调用
```