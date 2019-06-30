##  （五十四）ES6 - 对象的扩展

> **`1：属性的简洁表示法`**
```javascript
const week = 'week';
const year = {
    week,
    hello() {
        console.log('我的名字是', this.name);
    }
};
year;
/* { week: "week", hello: ƒ } */
```
> **`2：属性名表达式`**
```javascript
const obj = {};
obj['a' + 'bc'] = 123;

obj;
/* { abc: 123 } */
```
> **`3：方法name属性`**
```javascript
const person = {
    speakName() {
        console.log('hello!');
    },
};

person.speakName.name;
/* "speakName" */
```

> **`4：可枚举性 - enumerable`**
- `for...in - 忽略`
- `Object.keys() - 忽略`
- `JSON.stringify() - 忽略`
- `Object.assign() - 忽略`
```javascript
let obj = { week: 123 };
Object.getOwnPropertyDescriptor(obj, 'week');

/*
{
    value: 123,
    writable: true,
    enumerable: true,
    configurable: true
}
*/
```
> **`5：属性遍历`**
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

> **`6：super 关键字 - 指向当前对象的原型对象(只能用在对象的方法之中)`**
```javascript
const proto = {
    week: 'hello'
};

const obj = {
    week: 'world',
    find() {
        return super.week;
    }
};

obj.__proto__ = proto;
// Object.setPrototypeOf(obj, proto);

obj.find();
/* "hello" */


const obj = {
    week: super.week
}
/* SyntaxError: 'super' keyword unexpected here */


const obj = {
    week: () => super.week
}
/* SyntaxError: 'super' keyword unexpected here */


const obj = {
    week: function () {
        return super.week
    }
}
/* SyntaxError: 'super' keyword unexpected here */
```
> **`7：解构赋值 - 浅拷贝 - 不能复制继承自原型对象的属性`**

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

> **`8：扩展运算符`**
```javascript
let z = { a: 3, b: 4 };
let n = { ...z };
n;
/* { a: 3, b: 4 } */

let week = { ...['a', 'b', 'c'] };
week
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
> **`9：新增方法`**
- `Object.is - 比较两个值是否严格相等`
    ```javascript
    Object.is('week', 'week')
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
        get week() { return 1 }
    };
    const target = {};

    Object.assign(target, source);
    /* { week: 1 } */
    ```
- `Object.getOwnPropertyDescriptors - 返回所有自身属性(非继承属性)的描述对象`
    ```javascript
    const obj = {
        week: 123,
        get month() {
            return 'abc'
        }
    };

    Object.getOwnPropertyDescriptors(obj);
    /*
    { 
        week: {
            value: 123,
            writable: true,
            enumerable: true,
            configurable: true },
        month: {
            get: [Function: get month],
            set: undefined,
            enumerable: true,
            configurable: true
        }
    }
    */


    /* 拷贝set、get */
    const source = {
        set week(value) {
            console.log(value);
        }
    };

    const target2 = {};
    Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));

    /* 继承 */
    const obj = Object.create(
        prot,
        Object.getOwnPropertyDescriptors({
            week: 123,
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
    Object.setPrototypeOf('week', {}) === 'week';
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
    var obj = { week: 'month', year: 42 };
    Object.keys(obj)
    /* ["week", "year"] */
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
    Object.values({ [Symbol()]: 123, week: 'abc' });
    /* ['abc'] */

    Object.values('week')
    /* ['f', 'o', 'o'] */

    Object.values(42)；
    /* [] */
    Object.values(true);
    /* [] */
    ```
- `entries - 返回参数对象自身的(不含继承的)所有可遍历属性的键值对`
    ```javascript
    const obj = { week: 'month', year: 42 };
    Object.entries(obj)
    /* [ ["week", "month"], ["year", 42] ] */

    const obj = { week: 'month', year: 42 };
    const map = new Map(Object.entries(obj));
    map;
    /* Map { week: "month", year: 42 } */
    ```

- `fromEntries - entries逆操作`
    ```javascript
    Object.fromEntries([
        ['week', 'month'],
        ['year', 42]
    ])
    /* { week: "month", year: 42 } */

    const entries = new Map([
        ['week', 'month'],
        ['year', 42]
    ]);

    Object.fromEntries(entries);
    /* { week: "month", year: 42 } */

    Object.fromEntries(new URLSearchParams('week=month&year=qux'))
    /* { week: "month", year: "qux" } */
    ```
> **`10：课后练习`**
- `下列代码的输出结果是`
```javascript
function Person() {   
			
}     
Person.prototype = {
	speak() {       
		console.log('hello');  
	}
};
let zhang = new Person(); 		
zhang.speak();				  
Object.setPrototypeOf(  
	zhang,            
	{
		speak() {
            console.log('hi');
        }  
	}
);
zhang.speak();
```
- `实现一个方法将下列数组对象中extend对象中value小于0的值替换成null`
```javascript
let obj = [
    {
        name: 'Eric',
        extend: {
            value: 0,
            level: 1,
        }
    },
    {
        name: 'Iven',
        extend: {
            value: -4,
            level: 3,
        }
    },
    {
        name: 'David',
        extend: {
            value: -2,
            level: 5,
        }
    },
];
```
> **`11：总结`**
```css
本节课介绍了ES6关于对象的扩展和对象的新增方法
```