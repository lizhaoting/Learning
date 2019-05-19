> 1
```css
    var name = "window";

    function getName() {
        var name = "inner";
        console.log(this.name);
    }

    getName(); /* window */

    /* 非严格模式指向调用者window */
```

> 2
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

    person.getName1();  /* inner */
    person.getName2();  /* window */

    /* 箭头函数定义但并未执行, 没有形成封闭作用域 */
```

> 3 
```css
    var id = 123;

    function foo() {
        setTimeout(() => {
            console.log(this.id);

            setTimeout(() =>{
                console.log(this.id);
            }, 100);
            
        }, 100);
    }

    foo.call({ id: 456 }); /* 456  456 */
```