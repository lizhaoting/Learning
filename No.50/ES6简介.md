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
            Array();
            /* [] */

            Array(3);
            /* [, , ,] */

            Array(3, 11, 8);
            /* [3, 11, 8] */


            Array.of();
            /* [] */

            Array.of(undefined);
            /* [undefined] */

            Array.of(1);
            /* [1] */

            Array.of(1, 2);
            /* [1, 2] */
            ```


        - `copyWithin - 将指定位置的成员复制到其他位置 - 修改当前数组`
            - `Array.prototype.copyWithin(target, start = 0, end = this.length)`

            - `target(必需)：从该位置开始替换数据(负值表示倒数)`

            - `start(可选)：从该位置开始读取数据(默认为 0), 负值表示从末尾开始计算`

            - `end(可选)：到该位置前停止读取数据(默认为数组长度), 负值表示从末尾开始计算`

            ```javascript
            [1, 2, 3, 4, 5].copyWithin(0, 3);
            /* [4, 5, 3, 4, 5] */

            [1, 2, 3, 4, 5].copyWithin(0, 3, 4);
            /* [4, 2, 3, 4, 5] */

            [1, 2, 3, 4, 5].copyWithin(0, -2, -1);
            /* -2 + length = 3 */
            /* -1 + length = 4 */
            /* [4, 2, 3, 4, 5] */
            ```

        - `find - 找出第一个符合条件的数组成员`
        ```javascript
        [1, 4, -5, 10].find((value, index, arr) => value < 0);
        /* -5 */
        ```

        - `findIndex - 找出第一个符合条件的数组成员位置`
        ```javascript
        [1, 4, -5, 10].findIndex((value, index, arr) => value < 0);
        /* 2 */
        ```

        - `fill - 使用给定值填充一个数组`
        ```javascript
        ['a', 'b', 'c'].fill(7);
        /* [7, 7, 7] */

        new Array(3).fill(7);
        /* [7, 7, 7] */

        ['a', 'b', 'c'].fill(7, 1, 2);
        /* ['a', 7, 'c'] */
        ```


        - `entries、keys、values - 遍历数组, 返回一个遍历器对象`
        ```javascript
        for (let index of ['a', 'b'].keys()) {
            console.log(index);
        }
        /* 0 */
        /* 1 */

        for (let elem of ['a', 'b'].values()) {
            console.log(elem);
        }
        /* 'a' */
        /* 'b' */

        for (let [index, elem] of ['a', 'b'].entries()) {
            console.log(index, elem);
        }
        /* 0 "a" */
        /* 1 "b" */

        let letter = ['a', 'b', 'c'];
        let entries = letter.entries();
        console.log(entries.next().value);
        /* [0, 'a'] */
        console.log(entries.next().value);
        /* [1, 'b'] */
        console.log(entries.next().value);
        /* [2, 'c'] */
        ```


        - `includes - 某个数组是否包含给定的值 - 第二个参数表示起始位置`
        ```javascript
        [1, 2, 3].includes(4);
        /* false */

        [1, 2, NaN].includes(NaN);
        /* true */

        [1, 2, 3].includes(3, 3);
        /* false */

        [1, 2, 3].includes(3, -1);
        /* true */
        ```


        - `flat - 数组降低维度`
        ```javascript
        [1, 2, [3, 4]].flat();
        /* [1, 2, 3, 4] */

        [1, 2, [3, [4, 5]]].flat(2);
        /* [1, 2, 3, 4, 5] */

        [1, [2, [3]]].flat(Infinity);
        /* [1, 2, 3] */

        [1, 2, , 4, 5].flat();
        /* [1, 2, 4, 5] */

        [2, 3, 4].flatMap((x) => [x, x * 2]);
        /* [2, 4, 3, 6, 4, 8] */
        ```


        - `flatMap - 执行map再执行flat`
        ```javascript
        [2, 3, 4].flatMap((x) => [x, x * 2]);
        /* [2, 4, 3, 6, 4, 8] */
        ```

        - `数组空位 - ES6将空位转为undefined, ES5不同方法处理方式不一致`
        ```javascript
        Array(3);
        /* [, , ,] */

        Array.from(['a',,'b']);
        /* [ "a", undefined, "b" ] */

        [...['a',,'b']];
        /* [ "a", undefined, "b" ] */
        ```
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

        - `方法的name属性`
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

        - `super 关键字 - 指向当前对象的原型对象(只能用在对象的方法之中)`
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

            obj.__proto__ = proto;
            // Object.setPrototypeOf(obj, proto);

            obj.find();
            /* "hello" */


            const obj = {
                foo: super.foo
            }
            /* SyntaxError: 'super' keyword unexpected here */


            const obj = {
                foo: () => super.foo
            }
            /* SyntaxError: 'super' keyword unexpected here */


            const obj = {
                foo: function () {
                    return super.foo
                }
            }
            /* SyntaxError: 'super' keyword unexpected here */
            ```


        - `解构赋值 - 浅拷贝 - 不能复制继承自原型对象的属性`
            ```javascript
            let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
            x;
            /* 1 */
            y;
            /* 2 */
            z;
            /* { a: 3, b: 4 } */


            let { ...z } = null;
            /* TypeError: Cannot destructure 'undefined' or 'null'. */
            let { ...z } = undefined;
            /* TypeError: Cannot destructure 'undefined' or 'null'. */

            let { ...x, y, z } = { x: 1, y: 2, a: 3, b: 4 };
            /* Uncaught SyntaxError: Rest element must be last element */
            ```

        - `扩展运算符`
            ```javascript
            let z = { a: 3, b: 4 };
            let n = { ...z };
            n;
            /* { a: 3, b: 4 } */

            let foo = { ...['a', 'b', 'c'] };
            foo
            /* { 0: "a", 1: "b", 2: "c" } */

            {...'hello'}
            /* { 0: "h", 1: "e", 2: "l", 3: "l", 4: "o" } */

            let ab = { ...a, ...b };
            let ab = Object.assign({}, a, b);

            let aWithXGetter = {
                ...a,
                get x() {
                    throw new Error('not throw yet');
                }
            };
            /*  */
            ```

        - `新增方法`
            - `Object.is - 比较两个值是否严格相等`
                ```javascript
                Object.is('foo', 'foo')
                /* true */

                Object.is({}, {})
                /* false */

                +0 === -0;
                /* true */
                NaN === NaN;
                /* false */

                Object.is(+0, -0);
                /* false */
                Object.is(NaN, NaN);
                /* true */
                ```


            - `Object.assign - 对象可枚举属性合并 - 后面的属性会覆盖前面的属性 - 隐式转换`
                ```javascript
                let target = { a: 1, b: 1 };

                const source1 = { b: 2, c: 2 };
                const source2 = { c: 3 };

                Object.assign(target, source1, source2);
                target;
                /* {a:1, b:2, c:3} */

                target = { ...target, ...source1, ...source2 };


                Object.assign(undefined);
                Object.assign(null);
                /* Cannot convert undefined or null to object */

                /* 非首位跳过 */
                Object.assign(obj, undefined) === obj;
                Object.assign(obj, null) === obj;

                /* 非对象只有字符串有效果 */
                const v1 = 'abc';
                const v2 = true;
                const v3 = 10;

                const obj = Object.assign({}, v1, v2, v3);
                /* { "0": "a", "1": "b", "2": "c" } */

                /* 处理数组 */
                Object.assign([1, 2, 3], [4, 5])
                /* [4, 5, 3] */


                /* 取值函数 */
                const source = {
                    get foo() { return 1 }
                };
                const target = {};

                Object.assign(target, source);
                /* { foo: 1 } */
                ```
            - `Object.getOwnPropertyDescriptors - 返回所有自身属性(非继承属性)的描述对象`
                ```javascript
                const obj = {
                    foo: 123,
                    get bar() {
                        return 'abc'
                    }
                };

                Object.getOwnPropertyDescriptors(obj);
                /*
                { 
                    foo: {
                        value: 123,
                        writable: true,
                        enumerable: true,
                        configurable: true },
                    bar: {
                        get: [Function: get bar],
                        set: undefined,
                        enumerable: true,
                        configurable: true
                    }
                }
                */


                /* 拷贝set、get */
                const source = {
                    set foo(value) {
                        console.log(value);
                    }
                };

                const target2 = {};
                Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));

                /* 继承 */
                const obj = Object.create(
                    prot,
                    Object.getOwnPropertyDescriptors({
                        foo: 123,
                    })
                );
                ```
            - `__proto__ - 读取或设置当前对象的prototype对象`
                ```javascript
                // ES5
                const obj = {
                    method: function() { ... }
                };
                obj.__proto__ = someOtherObj;

                // ES6
                var obj = Object.create(someOtherObj);
                obj.method = function() { ... };
                ```

            - `setPrototypeOf - ES6 正式推荐的设置原型对象的方法`
                ```javascript
                let proto = {};
                let obj = { x: 10 };
                Object.setPrototypeOf(obj, proto);

                proto.y = 20;
                proto.z = 40;

                obj.x;
                /* 10 */
                obj.y;
                /* 20 */
                obj.z;
                /* 40 */

                Object.setPrototypeOf(1, {}) === 1;
                /* true */
                Object.setPrototypeOf('foo', {}) === 'foo';
                /* true */
                Object.setPrototypeOf(true, {}) === true;
                /* true */

                Object.setPrototypeOf(undefined(null), {})
                /* TypeError: Object.setPrototypeOf called on null or undefined */
                ```
            - `getPrototypeOf - 读取一个对象的原型对象 - 隐式转换`
                ```javascript
                function Rectangle() {
                    /* ... */
                }

                const rec = new Rectangle();

                Object.getPrototypeOf(rec) === Rectangle.prototype;
                /* true */

                Object.getPrototypeOf(null)
                /* TypeError: Cannot convert undefined or null to object */
                ```

            - `Object.keys - 返回参数对象自身的(不含继承的)所有可遍历属性的键名`
                ```javascript
                var obj = { foo: 'bar', baz: 42 };
                Object.keys(obj)
                /* ["foo", "baz"] */
                ```

            - `Object.values - 返回参数对象自身的(不含继承的)所有可遍历属性的键值`
                ```javascript
                const obj = { 100: 'a', 2: 'b', 7: 'c' };
                Object.values(obj);
                /* ["b", "c", "a"] */

                /* Object.create方法的第二个参数添加的对象属性如果不显式声明默认不可遍历 */
                const obj = Object.create(
                    {},
                    {
                        p: {
                                value: 42,
                                enumerable: true
                        }
                    }
                );
                Object.values(obj);
                /* [42] */

                /* 过滤Symbol */
                Object.values({ [Symbol()]: 123, foo: 'abc' });
                /* ['abc'] */

                Object.values('foo')
                /* ['f', 'o', 'o'] */

                Object.values(42)；
                /* [] */
                Object.values(true);
                /* [] */
                ```
            - `entries - 返回参数对象自身的(不含继承的)所有可遍历属性的键值对`
                ```javascript
                const obj = { foo: 'bar', baz: 42 };
                Object.entries(obj)
                /* [ ["foo", "bar"], ["baz", 42] ] */

                const obj = { foo: 'bar', baz: 42 };
                const map = new Map(Object.entries(obj));
                map;
                /* Map { foo: "bar", baz: 42 } */
                ```

            - `fromEntries - entries逆操作`
                ```javascript
                Object.fromEntries([
                    ['foo', 'bar'],
                    ['baz', 42]
                ])
                /* { foo: "bar", baz: 42 } */

                const entries = new Map([
                    ['foo', 'bar'],
                    ['baz', 42]
                ]);

                Object.fromEntries(entries);
                /* { foo: "bar", baz: 42 } */

                Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
                /* { foo: "bar", baz: "qux" } */
                ```
    - `函数的扩展`

        - `参数的默认值`
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

            function foo({ x, y = 5 }) {
                console.log(x, y);
            }

            foo({});
            /* undefined 5 */

            foo({x: 1});
            /* 1 5 */

            foo({x: 1, y: 2});
            /* 1 2 */

            foo();
            /* TypeError: Cannot read property 'x' of undefined */

            function foo({x, y = 5} = {}) {
                console.log(x, y);
            }

            foo();
            /* undefined 5 */
            ```
            - `参数变量已经默认声明, 不能用let或const再次声明`
            ```javascript
            function foo(x = 5) {
                let x = 1;
                const x = 2;
            }
            /* SyntaxError: Identifier 'x' has already been declared */
            ```

            - `函数不能有同名参数`
            ```javascript
            function foo(x, x, y = 1) {
                /* ... */
            }
            /* SyntaxError: Duplicate parameter name not allowed in this context */
            ```

            - `参数默认值是惰性求值`
            ```javascript
            let x = 99;
            function foo(p = x + 1) {
                console.log(p);
            }

            foo();
            /* 100 */

            x = 100;
            foo();
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

            function bar(func = () => foo) {
                let foo = 'inner';
                console.log(func());
            }

            bar();
            /* ReferenceError: foo is not defined */

            var x = 1;
            function foo(x, y = function() { x = 2; }) {
                var x = 3;
                y();
                console.log(x);
            }

            foo();
            /* 3 */
            x;
            /* 1 */


            function throwIfMissing() {
                throw new Error('Missing parameter');
            }

            function foo(mustBeProvided = throwIfMissing()) {
                return mustBeProvided;
            }

            foo();
            /* Error: Missing parameter */
            ```

        - `rest 参数 - 只能有一个参数 - 部分场景可以代替arguments`
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
        - `严格模式 - 使用了默认值、解构赋值、或者扩展运算符不能使用严格模式`

        - `name - 返回函数名`
            ```javascript
            function foo() {}
            foo.name;
            /* "foo" */

            var f = function () {};
            f.name // ""
            // ES6
            f.name // "f"
            ```

        - `箭头函数`
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
            function foo() {
                setTimeout(() => {
                    console.log('id:', this.id);
                }, 100);
            }

            var id = 21;

            foo.call({ id: 42 });
            /* 42 */

            function foo() {
                return () => {
                    return () => {
                        return () => {
                            console.log('id:', this.id);
                        };
                    };
                };
            }

            var f = foo.call({id: 1});

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

        - `尾调用优化(严格模式) - 最后一步是调用另一个函数 - 不适用外部变量时只保留内层函数的调用帧`
        ```javascript
        function f(x) {
            return g(x);
        }
        ```

        - `尾递归`
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

        - `函数参数的尾逗号 - 方便代码版本管理`
        ```javascript
        func(
            'foo',
            'bar',
        );
        ```

- `新特征`
    - `Symbol - 表示独一无二的值 - 类字符串数据类型`
        - `undefined、null、Boolean、String、Number、Object、Symbol`
            ```javascript
            let symbol = Symbol();

            typeof symbol
            /* symbol */

            /* 接收参数 - 仅作为描述 */
            let symbol1 = Symbol('foo');

            symbol1;
            /* Symbol(foo) */

            symbol1.toString();
            /* "Symbol(foo)" */

            let symbol1 = Symbol();
            let symbol2 = Symbol();

            symbol1 === symbol2;
            /* false */

            let symbol1 = Symbol('object');
            let symbol2 = Symbol('object');

            symbol1 === symbol2;
            /* false */

            /* 隐式转换 */
            const obj = {
                toString() {
                    return 'object';
                }
            };
            const symbol = Symbol(obj);
            symbol;
            /* Symbol(object) */

            /* 不能参与运算 */
            let symbol = Symbol('symbol');

            "hello" + symbol;
            /* TypeError: Cannot convert a Symbol value to a string */

            /* 类型转换 */
            String(symbol);
            symbol.toString();
            /* Symbol(symbol) */

            let symbol = Symbol();
            Boolean(symbol);
            /* true */

            Number(symbol);
            /* TypeError: Cannot convert a Symbol value to a number */
            ```
        - `description - Symbol描述`
            ```javascript
            const symbol = Symbol('symbol');
            sym.description;
            /* "symbol" */
            ```

        - `对象属性名`
            ```javascript
            let symbol = Symbol();

            let a = {};
            a[symbol] = 'Hello!';

            let a = {
                [symbol]: 'Hello!'
            };

            let a = {};
            Object.defineProperty(
                a,
                symbol,
                {
                    value: 'Hello!'
                }
            );
            ```
        - `属性遍历`
            - `for...in/for...of/Object.keys()/Object.getOwnPropertyNames()/JSON.stringify()不会返回Symbol`

            - `Object.getOwnPropertySymbols`
            ```javascript
            const obj = {};
            let symbol1 = Symbol('symbol1');
            let symbol2 = Symbol('symbol2');

            obj[symbol1] = 'symbol1';
            obj[symbol2] = 'symbol1';

            Object.getOwnPropertySymbols(obj);
            /* [Symbol(symbol1), Symbol(symbol2)] */

            Reflect.ownKeys(obj);
            /* [Symbol(symbol1), Symbol(symbol2)] */

            /* 可以作为非私有的内部方法 */
            ```

        - `Symbol.for - 返回当前索引Symbol`
            ```javascript
            let symbol1 = Symbol.for('foo');
            let symbol2 = Symbol.for('foo');

            symbol1 === symbol2;
            /* true */
            ```

        - `Symbol.keyFor - 返回已登记的Symbol的key`
            ```javascript
            let symbol1 = Symbol.for("symbol1");
            Symbol.keyFor(symbol1);
            /* symbol1 */

            let symbol2 = Symbol("foo");
            Symbol.keyFor(symbol2);
            /* undefined */
            ```
        - `内置的 Symbol`
            - `Symbol.hasInstance - instanceof运算符调用`
            ```javascript
            class MyClass {
                [Symbol.hasInstance](obj) {
                    return obj instanceof Array;
                }
            }

            [1, 2, 3] instanceof new MyClass();
            /* true */
            ```

            - `Symbol.isConcatSpreadable - 控制数组concat时是否展开`
            ```javascript
            let array1 = [1, 2];
            [3, 4].concat(array1, 5);
            /* ['a', 'b', 'c', 'd', 'e'] */
            array1[Symbol.isConcatSpreadable];
            /* undefined */

            let array2 = [1, 2];
            array2[Symbol.isConcatSpreadable] = false;
            [3, 4].concat(array2, 5);
            /* [3, 4, [1, 2], 5] */
            ```

            - `Symbol.species - 为衍生类指定原型`
            ```javascript
            class MyArray extends Array {
            }

            const one = new MyArray(1, 2, 3);
            const two = a.map(x => x);
            const three = a.filter(x => x = 1);

            b instanceof MyArray;
            /* true */
            c instanceof MyArray;
            /* true */

            class MyArray extends Array {
                static get [Symbol.species]() { return Array; }
            }

            const one = new MyArray(1, 2, 3);
            const two = a.map(x => x);
            const three = a.filter(x => x = 1);

            b instanceof MyArray;
            /* false */
            c instanceof Array;
            /* true */
            ```

            - `Symbol.match - str.match调用`
            ```javascript
            class Mather {
                [Symbol.match](string) {
                    return 'hello world';
                }
            }

            'e'.match(new Mather());
            /* 'hello world' */
            ```

            - `Symbol.replace - replace调用`
            ```javascript
            const demo = {};
            demo[Symbol.replace] = () => 'hello word';

            'Hello'.replace(demo, 'World');
            /* hello word */
            ```

            - `Symbol.search - search调用`

            - `Symbol.split - split`

            - `Symbol.iterator - 默认遍历器`
            ```javascript
            const diyIterable = {};
            diyIterable[Symbol.iterator] = function* () {
                yield 'hello';
                yield 'word';
            };

            [...diyIterable];
            /* ['hello', 'word'] */
            ```

            - `Symbol.toPrimitive - 类型转换调用`
            ```javascript
            let object = {
                [Symbol.toPrimitive](hint) {
                    switch (hint) {
                    case 'number':
                        return 1;
                    case 'string':
                        return 'hello';
                    case 'default':
                        return 'word';
                    default:
                        throw new Error('Cannot convert');
                    }
                }
            };

            2 * object;
            /* 2 */
            3 + object;
            /* '3word' */
            object == 'word';
            /* true */
            String(object);
            /* hello */
            ```

        - `Symbol.toStringTag - 指定[object Object]或[object Array]中object后面字符串`
        ```javascript
        ({
            [Symbol.toStringTag]: 'Hello'
        }.toString())
        /* "[object Hello]" */
        ```

        - `Symbol.unscopables - 指定被with排除的属性`
        ```javascript
        /* with语句 扩展一个语句的作用域链 */
        var a, x, y;
        var r = 10;

        with (Math) {
            a = PI * r * r;
            x = r * cos(PI);
            y = r * sin(PI / 2);
        }

        class MyClass {
            foo() {
                return 1;
            }
            get [Symbol.unscopables]() {
                return { foo: true };
            }
        }

        var foo = function () { return 2; };

        with (MyClass.prototype) {
            foo();
            /* 2 */
        }
        ```
    - `Set、Map`
    - `Proxy`
    - `Reflect`
    - `Promise`
    - `Iterator`
    - `Generator`
    - `Async`
    - `Class`

> **`练习题`**
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

> **`7：总结`**
```css
本节课介绍了Javascript中XMLHttpRequest对象的基本属性和方法, 从实例化、初始化、发送和接受四个阶段完成了Ajax网络请求核心内容封装
```