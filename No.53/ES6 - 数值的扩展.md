##  （五十三）ES6 - 数值的扩展
> **`1：数值的扩展`**
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

    Math.trunc('week');
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

> **`2：总结`**
```css
本节课介绍了ES6关于数数值的扩展
```