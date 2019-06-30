##  （五十六）ES6新特征 - Symbol

> **`1：基本概念`**
- `Symbol - 表示独一无二的值 - 类字符串数据类型`

> **`2：基本用法`**
- `undefined、null、Boolean、String、Number、Object、Symbol`
    ```javascript
    let symbol = Symbol();

    typeof symbol
    /* symbol */

    /* 接收参数 - 仅作为描述 */
    let symbol1 = Symbol('week');

    symbol1;
    /* Symbol(week) */

    symbol1.toString();
    /* "Symbol(week)" */

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
    let symbol1 = Symbol.for('week');
    let symbol2 = Symbol.for('week');

    symbol1 === symbol2;
    /* true */
    ```

- `Symbol.keyFor - 返回已登记的Symbol的key`
    ```javascript
    let symbol1 = Symbol.for("symbol1");
    Symbol.keyFor(symbol1);
    /* symbol1 */

    let symbol2 = Symbol("week");
    Symbol.keyFor(symbol2);
    /* undefined */
    ```
> **`3：内置的 Symbol`**
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
    week() {
        return 1;
    }
    get [Symbol.unscopables]() {
        return { week: true };
    }
}

var week = function () { return 2; };

with (MyClass.prototype) {
    week();
    /* 2 */
}
```
> **`4：总结`**
```css
本节课介绍了ES6新特征中Symbol的基本用法与内置Symbol
```