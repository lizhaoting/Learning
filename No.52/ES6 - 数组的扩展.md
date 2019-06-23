##  （五十二）ES6 - 数组的扩展
> **`1：数组的扩展`**
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
> **`2：课后练习`**

- `给定一个整数数组 inits 和一个值 result, 在数组中找出和为result的两个整数下标)`
```javascript
inits = [1, 2, 5, 6];
result = 8;
```

> **`3：总结`**
```css
本节课介绍了ES6关于数组的扩展, 重点在于ES6中数组方法并不会改变原数组
```