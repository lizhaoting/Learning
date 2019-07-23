##  （六十二）ES6新特征 - Async

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
  ```
> **`6：课后练习`**

> **`7：总结`**
```css
本节课介绍了ES6新特征中Generator的基本概念、执行过程与常用方法, 之后结合实例介绍了Generator的主要应用场景
```