> 1
```css
    function Sum(a, b){  
        this.p = a + b;
        this.getResult = function() {
            return this.p;
        }
        return this.p;
    }
    const eight = new Sum(3, 5);
    console.log(eight.getResult());
    /* 8 */
    const seven = Sum(3, 5);
    console.log(seven);
    /* 8 */
```

> 2
```css
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.eat = function() {
            console.log(age + "岁的" + name + "在吃饭。");
        }
    }
    const p1 = new Person("Eric", 24);
    const p2 = new Person("Vico", 24);
    console.log(p1.eat === p2.eat);
    /* false */
```

> 3

    每一个构造函数存在一部分相同的代码，继承可以优雅的处理这个问题