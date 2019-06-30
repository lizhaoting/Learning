##  （五十五）ES6 - 函数的扩展

> **`1：参数的默认值`**
```javascript
function log(x, y = 'World') {
    console.log(x, y);
}

log('Hello');
/* Hello World */

log('Hello', 'China');
/* Hello China */

log('Hello', '');
/* Hello */

function week({ x, y = 5 }) {
    console.log(x, y);
}

week({});
/* undefined 5 */

week({x: 1});
/* 1 5 */

week({x: 1, y: 2});
/* 1 2 */

week();
/* TypeError: Cannot read property 'x' of undefined */

function week({x, y = 5} = {}) {
    console.log(x, y);
}

week();
/* undefined 5 */
```
- `参数变量已经默认声明, 不能用let或const再次声明`
    ```javascript
    function week(x = 5) {
        let x = 1;
        const x = 2;
    }
    /* SyntaxError: Identifier 'x' has already been declared */
    ```

- `函数不能有同名参数`
    ```javascript
    function week(x, x, y = 1) {
        /* ... */
    }
    /* SyntaxError: Duplicate parameter name not allowed in this context */
    ```

- `参数默认值是惰性求值`
    ```javascript
    let x = 99;
    function week(p = x + 1) {
        console.log(p);
    }

    week();
    /* 100 */

    x = 100;
    week();
    /* 101 */
    ```

- `参数默认值一般用于尾部`

- `length属性 - 返回没有指定默认值的参数个数`
    ```javascript
    (function (a) {}).length;
    /* 1 */
    (function (a = 5) {}).length;
    /* 0 */
    (function (a, b, c = 5) {}).length;
    /* 2 */

    (function (a = 0, b, c) {}).length;
    /* 0 */
    (function (a, b = 1, c) {}).length;
    /* 1 */

    (function(...args) {}).length;
    /* 0 */
    ```

- `设置了参数的默认值, 参数会形成一个单独的作用域`
    ```javascript
    var x = 1;

    function f(x, y = x) {
        console.log(y);
    }

    f(2);
    /* 2 */


    let x = 1;

    function f(y = x) {
        let x = 2;
        console.log(y);
    }

    f();
    /* 1 */

    function month(func = () => week) {
        let week = 'inner';
        console.log(func());
    }

    month();
    /* ReferenceError: week is not defined */

    var x = 1;
    function week(x, y = function() { x = 2; }) {
        var x = 3;
        y();
        console.log(x);
    }

    week();
    /* 3 */
    x;
    /* 1 */


    function throwIfMissing() {
        throw new Error('Missing parameter');
    }

    function week(mustBeProvided = throwIfMissing()) {
        return mustBeProvided;
    }

    week();
    /* Error: Missing parameter */
    ```
> **`2：rest 参数 - 只能有一个参数 - 部分场景可以代替arguments`**
```javascript
function add(...values) {
let sum = 0;

for (var val of values) {
    sum += val;
}

return sum;
}

add(2, 5, 3);
/* 10 */

function sortNumbers() {
    return Array.prototype.slice.call(arguments).sort();
}

const sortNumbers = (...numbers) => numbers.sort();
```
> **`3：严格模式 - 使用了默认值、解构赋值、或者扩展运算符不能使用严格模式`**


> **`4：name - 返回函数名`**
```javascript
function week() {}
week.name;
/* "week" */

var f = function () {};
f.name // ""
// ES6
f.name // "f"
```
> **`5：箭头函数`**
```javascript
/* 单个参数 */
var f = v => v;
var f = function (v) {
    return v;
};

/* 多个参数 */
var sum = (num1, num2) => num1 + num2;
var sum = function(num1, num2) {
    return num1 + num2;
};

/* return */
var sum = (num1, num2) => { return num1 + num2; }

/* 返回对象 */
let getTempItem = id => { id: id, name: "Temp" };
/* Unexpected token : */
let getTempItem = id => ({ id: id, name: "Temp" });

/* 结合解构 */
const full = ({ first, last }) => first + ' ' + last;

/* rest */
const numbers = (...nums) => nums;
numbers(1, 2, 3, 4, 5);
/* [1,2,3,4,5] */
```
- `函数体内的this对象指向定义时所在的对象而不是使用时所在的对象`
    ```javascript
    function week() {
        setTimeout(() => {
            console.log('id:', this.id);
        }, 100);
    }

    var id = 21;

    week.call({ id: 42 });
    /* 42 */

    function week() {
        return () => {
            return () => {
                return () => {
                    console.log('id:', this.id);
                };
            };
        };
    }

    var f = week.call({id: 1});

    var t1 = f.call({id: 2})()();
    var t2 = f().call({id: 3})();
    var t3 = f()().call({id: 4});
    /* 1 */

    /* 对象不构成作用域 */
    const cat = {
        lives: 9,
        jumps: () => {
            this.lives--;
        }
    }
    ```

- `不可以当作构造函数`

- `不可以使用arguments对象(rest代替)`

- `不可以使用yield命令`

> **`6：尾调用优化(严格模式) - 最后一步是调用另一个函数 - 不适用外部变量时只保留内层函数的调用帧`**
```javascript
function f(x) {
    return g(x);
}
```

> **`7：尾递归`**
```javascript
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

factorial(5);

/* 尾递归 */
function factorial(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}

factorial(5, 1)
```
> **`8：函数参数的尾逗号 - 方便代码版本管理`**
```javascript
func(
    'week',
    'month',
);
```
> **`9：课后练习`**
- `下面两种写法有什么差别`
```javascript
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}

function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
```

- `下面代码的执行结果是`
```javascript
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  setInterval(() => this.s1++, 1000);
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
```
> **`10：总结`**
```css
本节课介绍了ES6关于函数的扩展, 重点内容包括函数参数的默认值与箭头函数
```