##  （五十）ES6简介
> **`1：基本概念`**

- `ES6 --> ECMAScript6`

- `1996年网景（Netscape）提交给国际标准组织（ECMA）的新语言，希望成为国际标准。`

- `第二年发布了Javascript并称为ECMAScript`
    - `商标问题，只有网景公司可以使用Javascript`
    - `提现标准的制作者不是个人或者公司`

- `ES6在5.1版本之后更新迭代`

- `ES6第一个版本在2015年6月发布，后续每年六月份发布一次，ES2015、ES2016、ES2017、ES2018`

- `ES6泛指下一代Javascript语言`

> **`2：为什么学习ES6`**
- `大幅度提高开发效率`

- `流行的JavaScript开源框架都使用ES6编写`

- `ES6是下一代JavaScript标准`

> **`3：ES6新特征`**
- `扩展`
    - `变量的扩展`
        - `let - 声明变量 - 只在let命令所在的代码块内有效 - 块级作用域 - 不存在变量提升`
            ```javascript
            {
                let a = 10;
                var b = 10;
            }
            a  /* ReferenceError: a is not defined. */
            b  /* 10 */
            ```
        - `const - 只读常量 - 保证该变量指向得内存地址不变(复杂类型只读特征可能失效)`
            ```javascript
            const a = 10;

            a = 3;  /* TypeError: Assignment to constant variable. */
            ```
    - `解构 - 按照一定模式从数组和对象中提取值对变量进行赋值 - 解构失败返回undefined`

        - `数组的解构`
            ```javascript
            let [a, b, c] = [1, 2, 3];
            /* a = 1; b = 2; c = 3 */

            let [foo, [[bar], baz]] = [1, [[2], 3]];
            /* foo = 1; bar = 2; baz = 3 */

            let [ , , third] = ["foo", "bar", "baz"];
             /* third = 'baz' */

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
            let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
            /* foo = 'aaa'; bar = 'bbb' */

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

            let {foo: {bar}} = {baz: 'baz'};
            /* TypeError: Cannot destructure property `bar` of 'undefined' or 'null'. */
            ```
    - `字符串的扩展`
        - `Unicode - \u0000 ~ \uFFFF`
        ```javascript
        '\{u0061}'

        /* a * /

        '\uD842\uDFB7'
        "\u{20BB7}"

        /* 𠮷 */
        ```


        - `字符串遍历器 - 识别大于0xFFFF`
        ```javascript
        let text = String.fromCodePoint(0x20BB7);

        for (let i = 0; i < text.length; i++) {
            console.log(text[i]);
        }
        // " "
        // " "

        for (let i of text) {
        console.log(i);
        }
        // "𠮷"
        ```


        - `模板字符串 - 保留所有空格与换行`
        ```javascript
        const getName = () => 'Iven';
        const myName = 'Eric';
        
        `\`Hello\` ${getName()}, I am ${myName}`
        ```


        - `标签模板`
        ```javascript
        alert`111`;
        /* alert(111); */

        func`This ${ a + b } is ${ a * b }`;
        /* func(['This ', ' is ', ''], a + b, a * b); */

        jsx`
            <div>
                <span>1111</span>
            </div>
        `
        ```
        - `新增方法`

            - `fromCodePoint - 从Unicode码点返回对应字符`
            ```javascript
            String.fromCodePoint(0x78, 0x1f680, 0x79);
            ```


            - `String.raw - 返回一个包括\在内的字符串`
            ```javascript
            String.raw`\`Hello\` I am`;
            /* \`Hello\` I am */

            `\`Hello\` I am`
            /* `Hello` I am */

            String.raw({ raw: 'test' }, 1, 2, 3, 4);
            String.raw({ raw: ['t','e','s','t'] }, 1, 2, 3, 4;);
            /* t1e2s3t */
            ```


            - `codePointAt - 返回一个字符的码点(10进制)`
            ```javascript
            let s = '𠮷a';

            s.codePointAt(0).toString(16);
            s.codePointAt(2).toString(16);

            /* 配合遍历器使用更准确 */
            ```


            - `includes - 是否包含参数字符串`
            ```javascript
            const string = 'Hello world';

            string.includes('wo');
            ```


            - `startsWith`
            ```javascript
            const string = 'Hello world';

            string.includes('He');
            ```


            - `endsWith`
            ```javascript
            const string = 'Hello world';

            string.includes('world');
            ```


            - `repeat - 将原字符串重复n次`
            ```javascript
            'Hello'.repeat(2.9);
            /* HelloHello */

            'Hello'.repeat(-0.9);
            /* '' */
            ```


            - `padStart - 字符串补全长度`
            ```javascript
            'hello'.padStart(10, '0123456789');
            /* 01234hello */
            ```

            - `padEnd`
            ```javascript
            'hello'.padEnd(10, '0123456789');
            /* hello01234 */
            ```

            - `trimStart、trimEnd - 去除空格、换行、Tab`
            ```javascript
            '  abc  '.trimStart();
            /* 'abc  ' */
            ```

            - `matchAll - 返回正则表达式所有匹配`
            ```javascript
            for(s of 'abcabcabc'.matchAll('ab')) {
                console.log(s)
            }
            ```
    - `正则的扩展`
        - `RegExp - 指定修饰符`
        ```javascript
        new RegExp(/abc/ig, 'i');
        /* /abc/i */
        ```

        - `字符串正则 - 内部改为调用RegExp方法`
        ```javascript
        RegExp.prototype[Symbol.match];
        RegExp.prototype[Symbol.replace];
        RegExp.prototype[Symbol.search];
        RegExp.prototype[Symbol.split];
        ```


        - `y修饰符 - 全局粘连匹配`
            - `g修饰符只要剩余位置中存在匹配就可`
            - `y修饰符确保匹配必须从剩余的第一个位置开始`
        ```javascript
        const s = 'abcdabcdabc';
        const reg1 = new RegExp('abc', 'g');
        const reg2 = new RegExp('abc', 'y');

        reg1.exec(s);
        reg2.exec(s)
        ```

        - `sticky - 是否使用了y修饰符`
        ```javascript
        const reg = /hello\d/y;
        reg.sticky;
        
        /* true */
        ```


        - `flags - 返回正则表达式的修饰符`
        ```javascript
        /abc/ig.flags
        
        /* gi */
        ```


        - `s - 匹配一切字符(.不能匹配回车、换行等行终止符)`
        ```javascript
        /foo.bar/s.test('foo\nbar');
        ```

        - `组别名`
        ```javascript
        const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

        const matchObj = RE_DATE.exec('1999-12-31');

        const year = matchObj.groups.year;
        matchObj[1];
        /* 1999 */

        const month = matchObj.groups.month;
        matchObj[2];
        /* 12 */

        const day = matchObj.groups.day;
        matchObj[3];
        /* 31 */


        let { groups: { one, two } } = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
        ```


        - `matchAll - 返回正则表达式所有匹配 - 迭代器`
        ```javascript
        for(s of 'abcabcabc'.matchAll('ab')) {
            console.log(s)
        }
        ```
    - `数值的扩展`
        - `二进制、八进制表示法`
        ```javascript
        /* 0b(0B) */
        Number('0b111');

        /* 0o(0O) */
        Number('0o10');
        ```


        - `Number.isFinite - 检查一个数值是否为有限 - 不做隐式转换`
        ```javascript
        Number.isFinite(15);
        /* true */
        Number.isFinite(NaN);
        /* false */
        Number.isFinite(Infinity);
        /* false */
        Number.isFinite(true);
        /* false */


        isFinite("25");
        /* true */
        ```

        - `Number.isNaN - 检查一个值是否为NaN - 不做隐式转换`
        ```javascript
        Number.isNaN(15);
        /* false */
        Number.isNaN(NaN);
        /* true */
        Number.isNaN('NaN');
        /* false */


        isNaN('NaN');
        /* true */
        ```

        - `Number.parseInt、Number.parseFloat - 全局方法移植`


        - `Number.isInteger - 判断一个数值是否为整数`
        ```javascript
        Number.isInteger(25);
        /* true */

        Number.isInteger('15');
        /* false */

        Number.isInteger(3.0000000000000002);
        /* true */
        ```


        - `Number.EPSILON - JavaScript 能够表示的最小精度`
        ```javascript
        Number.EPSILON === Math.pow(2, -52);
        /* true */
        ```

        - `Number.isSafeInteger - 安全 '整数'`
        ```javascript
        Math.pow(2, 53) === Math.pow(2, 53) + 1
        /* true */

        Number.isSafeInteger('a');
        /* false */
        Number.isSafeInteger(null);
        /* false */
        Number.isSafeInteger(NaN);
        /* false */
        Number.isSafeInteger(3);
        /* true */
        Number.isSafeInteger(1.2);
        /* false */
        ```


        - `Math.trunc - 去除小数部分 - Number隐式转换`
        ```javascript
        Math.trunc(-4.9);
        /* -4 */

        Math.trunc('123.456');
        /* 123 */

        Math.trunc('foo');
        /* NAN */
        ```

        - `Math.sign - 判断正数、负数与0 - Number隐式转换`
            - `参数为正数 - 返回+1`

            - `参数为负数 - 返回-1`

            - `参数为 0 - 返回0`

            - `参数为-0 - 返回-0`

            - `其他值 - 返回NaN`
        ```javascript
        Math.sign(true);
        /* +1 */
        Math.sign(false);
        /* 0 */
        Math.sign(null);
        /* 0 */
        Math.sign('9');
        /* 9 */
        ```

        - `Math.cbrt - 立方根 - Number隐式转换`


        - `Math.clz32() - 返回32 位无符号整数 - Number隐式转换`


        - `对数方法 - Number隐式转换`


        - `指数运算符`
        ```javascript
        2 ** 2
        /* 4 */
        2 ** 3
        /* 8 */
        
        2 ** 3 ** 2
        /* 2 ** (3 ** 2) */
        ```
    - `数组的扩展`
        - `扩展运算符 - 将一个数组转为用逗号分隔的参数序列`
            ```javascript
            console.log(1, ...[2, 3, 4], 5);
            /* 1 2 3 4 5 6 */
            ```


            - `浅拷贝`
            ```javascript
            const array1 = [ 1, 2 ];

            const array2 = [ ...array1 ];
            ```


            - `合并数组`
            ```javascript
            [...arr1, ...arr2, ...arr3];
            ```


            - `解构`
            ```javascript
            const [first, ...rest] = [1, 2, 3, 4, 5];
            first
            /* 1 */
            rest
            /* [2, 3, 4, 5] */
            ```


            - `拆分字符串 - 识别四字节编码`
            ```javascript
            [...'hello']
            /* [ "h", "e", "l", "l", "o" ] */
            ```


            - `转换Iterator接口的对象`
            ```javascript
            [...'abcabcabc'.matchAll('ab')];
            let nodeList = document.querySelectorAll('div');
            let array = [...nodeList];
            ```

        - `Array.from - 类数组(包含length)的对象和迭代器对象转换为数组`
            ```javascript
            let arrayLike = {
                '0': 'a',
                '1': 'b',
                '2': 'c',
                length: 3
            };

            Array.from(arrayLike);
            /* ['a', 'b', 'c'] */


            let divList = document.querySelectorAll('div');
            Array.from(divList);

            Array.from([1, 2, 3])
            /* [1, 2, 3] */

            Array.from({ length: 3 });
            /* [ undefined, undefined, undefined ] */

            Array.from([1, 2, 3], (x) => x * x);

            ```

        - `Array.of - 将一组值, 转换为数组`
            ```javascript
            ```
    - `函数的扩展`
    - `对象的扩展`
        - `属性的简洁表示法`
        ```javascript
        const foo = 'bar';
        const baz = {
            foo,
            hello() {
                console.log('我的名字是', this.name);
            }
        };
        baz;
        /* { foo: "bar", hello: ƒ } */
        ```

        - `属性名表达式`
        ```javascript
        const obj = {};
        obj['a' + 'bc'] = 123;

        obj;
        /* { abc: 123 } */
        ```

        `方法的name属性`
        ```javascript
        const person = {
            sayName() {
                console.log('hello!');
            },
        };

        person.sayName.name;
        /* "sayName" */
        ```


        - `可枚举性 - enumerable`
            - `for...in - 忽略`
            - `Object.keys() - 忽略`
            - `JSON.stringify() - 忽略`
            - `Object.assign() - 忽略`
        ```javascript
        let obj = { foo: 123 };
        Object.getOwnPropertyDescriptor(obj, 'foo');

        /*
        {
            value: 123,
            writable: true,
            enumerable: true,
            configurable: true
        }
        */
        ```

        - `属性遍历`
            - `for...in - 遍历对象自身的和继承的可枚举属性(不含 Symbol)`
            ```javascript
            for ( s in { [Symbol()]:0, b:0, 10:0, 2:0, a:0 }) {
                console.log(s)
            }
            /* 2 10 b a */
            ```

            - `Object.keys - 包括对象自身的(不含继承的)所有可枚举属性(不含 Symbol 属性)的键名`
            ```javascript
            Object.keys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 });
            /* ["2", "10", "b", "a"] */
            ```

            - `Object.getOwnPropertyNames - 包含对象自身的所有(不可枚举属性)属性(不含 Symbol)的键名`
            ```javascript
            Object.getOwnPropertyNames({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
            /* ["2", "10", "b", "a"] */
            ```

            - `Object.getOwnPropertySymbols - 对象自身的所有Symbol属性的键名`
            ```javascript
            Object.getOwnPropertySymbols({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
            /* [Symbol()] */
            ```

            - `Reflect.ownKeys - 包含对象自身的所有键名`
            ```javascript
            Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
            /* ['2', '10', 'b', 'a', Symbol()] */
            ```

            - `顺序 - 数字 - 字符 - Symbol`

        - `super 关键字 - 指向当前对象的原型对象`
        ```javascript
        const proto = {
            foo: 'hello'
        };

        const obj = {
            foo: 'world',
            find() {
                return super.foo;
            }
        };

        Object.setPrototypeOf(obj, proto);

        obj.find();
        /* "hello" */
        ```
- `新特征`
    - `Symbol`
    - `Set、Map`
    - `Proxy`
    - `Reflect`
    - `Promise`
    - `Iterator`
    - `Generator`
    - `Async`
    - `Class`

> **`7：总结`**
```css
本节课介绍了Javascript中XMLHttpRequest对象的基本属性和方法, 从实例化、初始化、发送和接受四个阶段完成了Ajax网络请求核心内容封装
```