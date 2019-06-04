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
    - `变量的扩展：let、const(块级作用域)`
    - `变量的解构`
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
    - `数组的扩展`
    - `函数的扩展`
    - `对象的扩展`
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