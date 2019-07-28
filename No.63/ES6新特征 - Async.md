##  （六十三）ES6新特征 - Async

> **`1：基本概念`**
- `封装了自动化执行并返回一个Promise的Generator函数语法糖`
  - `封装了自动化执行脚本`
  
  - `返回Promise`

  - `Generator函数语法糖`

  ```javascript
  function resolveAfter2Seconds(value) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, 2000);
    });
  };
  
  const generator = function* () {
    const value1 = yield resolveAfter2Seconds(1);
    const value2 = yield resolveAfter2Seconds(2);
    console.log(value1);
    console.log(value2);
  };

  function co(generatorFunction) {
    return new Promise(function(resolve, reject) {
      const generator = generatorFunction();
      function step(nextF) {
        let next;
        try {
          next = nextF();
        } catch(e) {
          return reject(e);
        }
        if(next.done) {
          return resolve(next.value);
        }
        Promise.resolve(next.value).then(function(v) {
          step(function() {
            return generator.next(v);
          });
        }, function(e) {
          step(function() {
            return generator.throw(e);
          });
        });
      }
      step(function() {
        return generator.next(undefined);
      });
    });
  }

  co(generator);

  /*
  (4s后)
  1
  2
  */
  const async = async function () {
    const value1 = await resolveAfter2Seconds(1);
    const value2 = await resolveAfter2Seconds(2);
    console.log(value1);
    console.log(value2);
  };
  async().then(res => {
    console.log(res);
  })

  /*
  (4s后)
  1
  2
  */

  async function asyncFunc() {};

  const asyncFunc = async function () {};

  const asyncFunc = async () => {};

  const obj = {
    async asyncFunc() {}
  }
  ```

> **`2：Async 语法`**
- `返回 Promise 对象, async返回值作为then回调参数`
  ```javascript
  async function asyncFunc() {
    return 'Eric';
  }

  asyncFunc().then(value => console.log(value));

  /* Eric */
  ```

- `await非Promise直接返回`
  ```javascript
  async function asyncFunc() {
    return await 'Eric';
  }

  asyncFunc().then(value => console.log(value));

  /* Eric */

- `thenable对象(定义then方法)等同于Promise`
  ```javascript
  class Thenable {
    constructor(timeout) {
      this.timeout = timeout;
    }
    then(resolve, reject) {
      setTimeout(
        () => resolve('resolve'),
        this.timeout
      );
    }
  }

- `async函数任何一个await返回reject状态导致async中断执行`
  ```javascript
  async function asyncFunc() {
    await Promise.reject('reject');
    return await Promise.resolve('resolve');
  }

  asyncFunc()
    .then(value => console.log(value))
    .catch(err => console.log(err))

  /* reject */
  


  async function asyncFunc() {
    try {
      await Promise.reject('reject');
    } catch(err) {

    }
    return await Promise.resolve('resolve');
  }

  asyncFunc()
    .then(value => console.log(value))
    .catch(err => console.log(err))

  /* resolve */



  async function asyncFunc() {
    await Promise.reject('reject')
      .catch(err => console.log(err))
    return await Promise.resolve('resolve');
  }

  asyncFunc()
    .then(value => console.log(value))
    .catch(err => console.log(err))

  /*
  reject
  resolve
  */
  ```

> **`3：注意事项`**
- `尽量使用try...catch代码块`

- `非继发await同时执行`
  ```javascript
  function resolveAfter2Seconds(value) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, 2000);
    });
  };

  const async = async function () {
    const value1 = await resolveAfter2Seconds(1);
    const value2 = await resolveAfter2Seconds(2);
    console.log(value1);
    console.log(value2);
  };
  async().then(res => {})
  /* 4s后输出 */



  function resolveAfter2Seconds(value) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, 2000);
    });
  };

  const async = async function () {
    const [value1, value2] = await Promise.all([resolveAfter2Seconds(1), resolveAfter2Seconds(2)])
    console.log(value1);
    console.log(value2);
  };
  async().then(res => {})
  /* 2s后输出 */



  function resolveAfter2Seconds(value) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, 2000);
    });
  };

  const async = async function () {
    const value1Promise = resolveAfter2Seconds(1);
    const value2Promise = resolveAfter2Seconds(2);
    const value1 = await value1Promise;
    const value2 = await value2Promise;
    console.log(value1);
    console.log(value2);
  };
  async().then(res => {})
  /* 2s后输出 */
  ```

> **`6：课后练习`**
- `实现一个函数, 间隔1秒输出0-9十个数字, 要求使用Async函数实现一个sleep函数`

> **`7：总结`**
```css
本节课介绍了ES6新特征中Async的基本概念、语法规则与注意事项, 重点理解Async自动化执行包装器
```