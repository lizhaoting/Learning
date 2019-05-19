##  （四十一）JavaScript函数式编程(上)
> **`1：基本概念`**

- `函数式编程`
    - `一种编程思维方式`

    - `对复用性高的功能代码进行函数封装`

    - `实现代码的高复用性`

- `函数式编程特点`
    - `函数是第一等公民`

    - `只用表达式, 不用语句`

    - `没有副作用`

    - `不修改状态`

    - `引用透明`

> **`2：函数是一等公民`**
- `函数应用`
    ```css
    /* 声明函数 */
    function getName() {  
    }

    /* 表达式函数 */
    var getName = function() {
    }

    /* 匿名函数 */
    setTimeout(function() {
    }, 1000);

    /* 自执行函数(IIFE) */
    (function() {
    })();
    ```

- `函数声明优先级高于变量声明和函数表达式`
    ```css
    console.log(getName);

    getName();

    var getName;

    getName = 'Eric';

    function getName(){
        console.log('function getName');
    }

    console.log(getName);
    ```

> **`3：纯函数`**
- `对于相同的输入，永远会得到相同的输出`
    ```css
    function getNumber(num) {
        return num + Math.random();
    }
    ```

- `不改变输入值`
    ```css
    function getGirlGift(list) {
        /* 输入值改变 */
        list = list.map(girl => {
            girl.gift = girl.age > 18 ? 'big' : 'small';
        });
        return list;
    }
    ```

- `不包含副作用(网络、I/O)`

    ```css
    var array = [1,2,3,4,5];
    array.slice(0, 3);
    array.slice(0, 3);

    /* 改变原数组 */
    array.splice(0, 3);
    array.splice(0, 3);

    /* 网络请求 */
    asiox.get('https://www.xxxx.com').then(res => {

    })

    /* 时间 */
    function getDate() {
        return new Date();
    }
    ```

- `Array函数举例`
    ```css
    /* 不纯 */
    array.push();       /* 数组尾部插入 */
    array.pop();        /* 删除并返回数组最后一个元素 */
    array.unshift();    /* 数组头部插入 */
    array.shift();      /* 删除并返回数组第一元素 */
    array.splice();     /* 删除元素，并向数组添加元素 */
    array.reverse();    /*/ 颠倒数组元素的顺序 */
    array.sort();       /* 排序数组元素 */
    /* 纯函数 */
    array.slice();      /* 数组中返回选定的元素 */
    array.concat();     /* 连接数组，并发挥新数组 */
    array.join();       /* 按分隔符连接数组，返回字符串 */
    ```
> **`4：函数柯里化`**
- `传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数`
    ```css
    /* 普通函数 */
    function add(x, y) {
        return x + y;
    }
    add(1, 2);

    /* 柯里化改编 */
    function addX(y) {
        return function (x) {
            return x + y;
        };
    }
    addX(2)(1);


    /* 函数不纯 - 硬编码 - 依赖min参数 */
    var min = 90; 
    var isWell = score => score > min;

    /* 柯里化改编 */
    var min = 90; 
    var chekoLevel = baseLine => (score => score > baseLine);
    var isWell = chekoLevel(90);
    ```

- `一种对参数的缓存`

    - `用在一些区分环境的函数预缓存`

    - `已获取某些耗时操作结果缓存`

