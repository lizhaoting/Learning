##  （五十一）ES6 - 字符串与正则的扩展
> **`1：字符串的扩展`**
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
> **`2：正则的扩展`**
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
/week.month/s.test('week\nbar');
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


let { groups: { one, two } } = /^(?<one>.*):(?<two>.*)$/u.exec('week:month');
```


- `matchAll - 返回正则表达式所有匹配 - 迭代器`
```javascript
for(s of 'abcabcabc'.matchAll('ab')) {
    console.log(s)
}
```
> **`5：课后练习`**
- `实现一个函数, 过滤恶意的HTML标签字符串`
    - `过滤掉&、<、>, 编码自行查询`

    - `使用标签模板调用`

```css
const dangerHTML = '<script>alert(123)</script>';
```

- `下列函数的执行结果是`
```javascript
let { groups: { one, two } } = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');

console.log(one);
console.log(two);
```

> **`6：总结`**
```css
本节课介绍了ES6关于字符串与正则的扩展, 并介绍了字符串的新增方法
```