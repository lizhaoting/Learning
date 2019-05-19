##  （三十九）JavaScript中的this

> **`1：基本概念`**

- `this - 当前执行代码的环境对象 - 上下文`

- `严格模式 - 具有限制性JavaScript变体`
    - `通过抛出错误来消除了一些原有静默错误`

    - `修复了一些导致JavaScript引擎难以执行优化的缺陷`

    - `禁用了在ECMAScript的未来版本中可能会定义的一些语法`

    ```css
    /* 为脚本开启严格模式 */
    "use strict";
    var v = "Hi!  I'm a strict mode script!";

    /* 为函数开启严格模式 */
    function strict() {
        'use strict';
        function nested() { 
            return "And so am I!"; 
        }

        return "Hi!  I'm a strict mode function!  " + nested();
    }
    ```
> **`2：全局环境`**
- `无论是否在严格模式下，在全局执行环境中(任何函数体外部)this指向全局对象`

    ```css
    /* 浏览器环境 */

    var name = 'Eric';

    console.log(window.name === this.name);  /* true */

    console.log(window === this);  /* true */
    ```
> **`3：函数体内部`**
- `this的值取决于函数被调用的方式`

- `简单调用`

    - `非严格模式 - this默认指向全局对象`
    ```css
    /* 浏览器环境 */

    function simple() {
        return this;
    }

    console.log(simple() === window);  /* true */
    ```
    - `严格模式 - 保持进入执行环境时的值 - 没有指定时默认值为undefined`
    ```css
    /* 浏览器环境 */

    function simple(){
        "use strict";
        return this;
    }

    simple() === undefined;  /* true */

    window.simple() === window;  /* true */
    ```

- `this传递`
    - `call / apply - 绑定值是一个对象, 存在ToObject过程`
    ```css
    /* 浏览器环境 */

    var object = {
        name: 'Eric'
    };

    var name = 'Iven';

    function getName(arg) {
        return this.name;
    }

    getName(); /* Iven */

    getName.call(object); /* Eric */
    getName.apply(object); /* Eric */
    ```

    - `bind - 柯里化的call / apply - 只能被绑定一次`
    ```css
    name: 'Davy';

    function bindThis(){
        return this.name;
    }

    var getName1 = bindThis.bind({ name: "Eric" });
    console.log(getName1()); /* Eric */

    var getName2 = getName1.bind({ name: "Iven" });
    console.log(getName2()); /* Eric */
    ```

- `箭头函数 - this与封闭词法环境(封闭作用域)的this保持一致 - call / apply / bind将被忽略`

    ```css
    /* 浏览器环境 */

    var globalThis = this;

    var arrowsFunction = () => this;
    
    console.log(arrowsFunction() === globalObject); /* true */
    ```

- `作为对象方法被调用 - 靠近原则`
    ```css
    /* 浏览器环境 */

    var object = {
        name: 'Eric',

        getName: function() {
            return this.name;
        }
    };
    console.log(object.getName()); /* Eric */



    function getName2() {
        return this.name;
    }
    object.getName = getName2;
    console.log(object.getName()); /* Eric */


    object.object = {
        getName: getName2,
        name: 'Iven'
    };
    console.log(object.object.getName()); /* Iven */
    ```
> **`4：全局函数`**
- `setTimeout`

- `setInterval`

- `alert`

> **`5：课后练习`**
- `下列代码的输出结果是`
    ```css
    var name = "window";

    function getName() {
        var name = "inner";
        console.log(this.name);
    }

    getName();
    ```

- `下列代码的输出结果是`
    ```css
    var name = "window";

    var person = {
        name: "inner",
        getName1: function () {
            console.log(this.name);
        },
        getName2: () => {
            console.log(this.name);
        }
    }

    person.getName1();
    person.getName2();
    ```

- `下列代码的输出结果是`
    ```css
    function foo() {
        setTimeout(() =>{
            console.log(this.id);

            setTimeout(() =>{
                console.log(this.id);
            }, 100);
            
        }, 100);
    }

    foo.call( {id: 123 });
    ```

> **`6：总结`**
```css
本节课从严格模式与非严格模式两个角度出发，介绍了JavaScript中this在全局环境和函数体内部的指向
```