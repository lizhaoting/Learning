##  （四十三）JavaScript闭包
> **`1：基本概念`**

- `函数和声明该函数的词法环境的组合`

    ```javascript
    function count() {
        let count = 0;
        return function() {
            count = count + 1;
            console.log(count);
        }
    }

    var getCount = count();

    getCount();
    getCount();
    ```

- `将函数与其所操作的某些数据(环境)关联起来`

- `能够访问另一个函数作用域的变量的函数`

> **`2：闭包的特点`**
- `函数嵌套函数`

- `函数内部可以引用外部的参数和变量`

- `参数和变量不会被垃圾回收机制回收`

> **`3：用途`**
- `匿名自执行函数 - 只需要执行一次，其内部变量无需维护`
    ```javascript
    (function(){    
    /* ... */
    })();
    ```

- `封装回调保存作用域(缓存结果)`
    ```javascript
    for(var i = 1; i < 5; i++) {
        setTimeout((function(i) {
            return function() {
                console.log(i);        
            } 
        })(i), i * 1000)
    }
    ```

- `模拟私有方法`
    ```javascript
    var myNameSpace = (function () {
        /* 私有计数器变量 */
        var myPrivateVar = 0;

        /* 记录所有参数的私有函数 */
        var myPrivateMethod = function (foo) {
            console.log(foo + myPrivateVar);
        };

        return {
            /* 公有变量 */
            myPublicVar: 'foo',

            /* 调用私有变量和方法的公用函数 */
            myPublicFunction: function (bar) {

                /* 增加私有计数器值 */
                myPrivateVal ++;

                myPrivateMethod(bar);
            }
        };
    })();
    ```

> **`4：常见误区`**

- `在循环中创建闭包`
    ```javascript
    for (var i = 1; i <= 5; i++) {
        setTimeout(function() {
            console.log(i)
        }, i * 1000)
    }
    ```

- `添加监听事件`
    ```javascript
    function func() {
        var element = document.getElementById("app");
        element.onclick = function() {
            alert(element.id);
        }
    }
    ```

    ```javascript
    function func() {
        var element = document.getElementById("app");
        var id = element.id;
        element.onclick = function() {
            alert(id);
        }
        element = null;
    }
    ```

> **`5：课后练习`**
- `下列代码的输出结果是`
    ```javascript
    function fn() {
        var max = 10;
        function bar(x) {
            if (x > max) {    
                console.log(x)
            }
        }
        return bar;
    }
    var f1 = fn();
    var max = 100;

    f1(20); 
    ```

- `下列代码的输出结果是`
    ```javascript
    var object = {
        name: 'Eric',
        getName: function() {
            return function() {
                console.log(this.name)
            }
        }
    }
    object.getName()();
    ```
- `下列代码的输出结果是`
    ```javascript
    function circle(n, o) {
        console.log(o);
        return {
            circle: function(m) {
                return circle(m, n);
            }
        };
    }

    var a = circle(0);
    a.circle(1);
    a.circle(2);
    a.circle(3);

    var b = circle(0)
        .circle(1)
        .circle(2)
        .circle(3);

    var c = circle(0).circle(1);
    c.circle(2);
    c.circle(3);
    ```
> **`6：总结`**
```css
本节课从典型的闭包出发, 介绍了闭包的基本概念、特点和应用场景，最后结合具体例子介绍了闭包的主要用途和常见的误区
```