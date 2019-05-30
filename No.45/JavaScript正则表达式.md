> **`2：命名空间`**
- `命名空间只是另一个包含方法、属性和对象的对象`

    - `创建全局变量`

    - `所有的变量、方法和功能成为该对象的属性`
    ```css
    var myNameScape = myNameScape || {};

    /* 子命名空间 */
    myNameScape.event = {};

    /* 定义方法和属性 */
    myNameScape.commonMethods = {
        name: '',
        validateName: function(name){
            /* name格式验证 */
        },
    };

    /* 定义方法 */
    myNameScape.event = {
        addListener: function(el, type, fn) {
            /* ... */
        },
        removeListener: function(el, type, fn) {
            /* ... */
        },
    }
    ```

- `内置对象`
    - `Math`

    - `Array`

    - `Object`

    - `...`

> **`3：类(构造函数)`**
- `JavaScript是一种基于原型的语言, 没有类声明语句`

- `用方法作类`
    ```css
    function Person() {

    } 

    var Person = function() {

    }
    ```

> **`4：对象(类的实例)`**
```css
function Person() {

}

var person1 = new Person();

var person2 = new Person();
```

> **`5：构造器`**
- `构造器是对象中的一个方法`

- `实例化时构造器被调用`

- `JavaScript中函数可以作为构造器使用`
    ```css
    ```

> **`10：课后练习`**
- `实现一个匹配11位电话号码的正则表达式`
    - `以1为开头`

    - `第二位可为3,4,5,7,8,中的任意一位`

    - `最后以0-9的9个整数结尾`


> **`11：总结`**
```css
本节课介绍了Javascript中正则表达式的基本概念, 介绍了常用的特殊符号, 最后结合实例介绍了正则表达式的常用方法
```