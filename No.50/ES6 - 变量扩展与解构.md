##  （五十）ES6 - 变量扩展与解构
> **`1：基本概念`**

- `ES6 --> ECMAScript6`

- `1996年网景（Netscape）提交给国际标准组织（ECMA）的新语言，希望成为国际标准。`

- `第二年发布了Javascript并称为ECMAScript`
    - `商标问题，只有网景公司可以使用Javascript`
    - `体现标准的制作者不是个人或者公司`

- `ES6在5.1版本之后更新迭代`

- `ES6第一个版本在2015年6月发布，后续每年六月份发布一次，ES2015、ES2016、ES2017、ES2018`

- `ES6泛指下一代Javascript语言`

> **`2：为什么学习ES6`**
- `大幅度提高开发效率`

- `流行的JavaScript开源框架都使用ES6编写`

- `ES6是下一代JavaScript标准`

> **`3：变量的扩展`**
- `变量的扩展`
    - `let - 声明变量 - 只在let命令所在的代码块内有效 - 块级作用域 - 不存在变量提升`
        ```javascript
        {
            let a = 10;
            var b = 10;
        }
        a  /* ReferenceError: a is not defined. */
        b  /* 10 */


        for(var i = 0; i < 5; i++) {
            setTimeout(function() {
                console.log(i);
            }, i * 100);
        }
        ```
    - `const - 只读常量 - 保证该变量指向得内存地址不变(复杂类型只读特征可能失效)`
        ```javascript
        const a = 10;

        a = 3;  /* TypeError: Assignment to constant variable. */
        ```

> **`4：解构`**

- `解构 - 按照一定模式从数组和对象中提取值对变量进行赋值 - 解构失败返回undefined`

    - `数组的解构`
        ```javascript
        let [a, b, c] = [1, 2, 3];
        /* a = 1; b = 2; c = 3 */

        let [week, [[month], year]] = [1, [[2], 3]];
        /* week = 1; month = 2; year = 3 */

        let [ , , third] = ["week", "month", "year"];
            /* third = 'year' */

        let [x, , y] = [1, 2, 3];
        /* x = 1; y = 3 */

        let [head, ...tail] = [1, 2, 3, 4];
        /* head = 1; tail = [2, 3, 4] */

        let [a, [b], d] = [1, [2, 3], 4];
        /* a = 1; b = 2; d = 4 */

        [a, b] = [b, a];
        /* 位置互换 */

        /* 指定默认值 */
        let [x, y = 'b'] = ['a'];
        /* x = 'a'; y = 'b' */

        function f() {
            console.log('参数错误！');
        }

        let [x = f()] = [];
        ```

    - `对象的解构 - 没有顺序, 匹配属性名`
        ```javascript
        let { month, week } = { week: 'aaa', month: 'bbb' };
        /* week = 'aaa'; month = 'bbb' */

        let { log, sin, cos } = Math;
        /* log = Math.log; sin = Math.sin; cos = Math.cos */

        let obj = {
            p: [
                'Hello',
                { y: 'World' }
            ]
        };
        let { p: [x, { y }] } = obj;
        /* x = 'hello'; y = 'word'; */

        let  { week: { month } } = { year: 'year' };
        /* TypeError: Cannot destructure property `month` of 'undefined' or 'null'. */
        ```

> **`5：课后练习`**
- `下列代码的执行结果是`
```javascript
let obj = {
    a: 1,
    b: 2,
    c: {
        d: {
            e: 5,
        },
    },
};

let { a, b, c: { d } } = obj;

console.log(d);
```

- `下列代码的执行结果是`
```javascript
let [x = 1, y = x] = [];
console.log(x);
console.log(y);

let [x = 1, y = x] = [2];
console.log(x);
console.log(y);

let [x = 1, y = x] = [1, 2];
console.log(x);
console.log(y);

let [x = y, y = 1] = [];
console.log(x);
console.log(y);
```

- `改写下列函数, 使输出变为0 - 9`
```javascript
var funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)l
    })
};

funcs.forEach(function(func) {
    func();
});
```
> **`6：总结`**
```css
本节课从ES6的发展历史入手, 简要介绍了ES6的主要优势, 重点介绍了ES6中变量的扩展与解构两个常用概念
```