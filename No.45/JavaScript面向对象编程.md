##  （四十五）JavaScript面向对象编程(OOP)
> **`1：基本概念`**

- `用抽象方式创建基于现实世界模型的一种编程模式`

    - `每个对象能够接收消息，处理数据和发送消息给其他对象`

    - `每个对象都可以被看作是一个拥有清晰角色或责任的独立个体`

    - `促进更好的灵活性和可维护性`

- `Namespace - 命名空间`

- `Class - 类 - 定义对象的特征(属性和方法)`

- `Object - 对象 - 类的一个实例`

- `Property - 属性 - 对象的特征`

- `Method - 方法 - 对象的能力`

- `Constructor - 构造函数 - 对象初始化的瞬间被调用的方法`

- `Inheritance - 继承 - 继承另一个类的特征`

- `Encapsulation - 封装 - 把数据和相关的方法绑定在一起使用`

- `Polymorphism - 多态 - 不同类可以定义相同的方法或属性`

- `面向过程`
    - `开门(冰箱)`

    - `装进(冰箱, 大象)`

    - `关门(冰箱)`

- `面向对象`
    - `冰箱.开门()`

    - `冰箱.装进(大象)`

    - `冰箱.关门()`

> **`2：Namespace - 命名空间`**
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

> **`3：Class - 类(构造函数)`**
- `JavaScript是一种基于原型的语言, 没有类声明语句`

- `用方法作类`
    ```css
    function Person() {

    } 

    var Person = function() {

    }
    ```

> **`4：Object - 对象(类的实例)`**
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

- `每个声明的函数都可以在实例化后被调用执行`
    ```javascript
    function Person() {
        console.log('Person created!');
    }

    var person1 = new Person();

    var person2 = new Person();
    ```

> **`6：Property - 属性`**

- `类中包含的变量`
    ```javascript
    function Person(firstName) {
        this.firstName = firstName;
        console.log('Person created!');
    }

    var person1 = new Person('Alice');

    var person2 = new Person('Bob');
    ```

> **`7：Method - 方法`**
- `方法与属性相似`

- `方法是函数，属性可以被定义为函数`
    ```javascript
    function Person(firstName) {
        this.firstName = firstName;
    }

    Person.prototype.sayHello = function() {
        console.log("Hello, I'm " + this.firstName);
    };

    var person1 = new Person("Alice");

    var person2 = new Person("Bob");
    ```

> **`8：Inheritance - 继承`**
```
...
```

> **`9：Encapsulation - 封装`**
- `把数据和相关的方法绑定在一起使用`
    ```javascript
    function Person(name, age, sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Person.prototype.show = function (){
        console.log(this.name + ' ' + this.sex + ' ' + this.age);
    }
    var person = new Person('Eric', 18, '男');
    ```

> **`10：Polymorphism - 多态`**
- `同一操作作用于不同的对象, 可以有不同的解释, 产生不同的执行结果`

```javascript
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function() {
    return "I am a Person, my name is " + this.name;
}

function Man(name, age){
    Person.apply(this, arguments);
}

Man.prototype = Object.create(Person.prototype);

Man.prototype.toString = function() {
    return "I am a Man, my name is"+this.name;
}

var person = new Person("Neo", 19);

var man1 = new Man("Davin", 18);

var man2 = new Man("Jack", 19);
```
> **`11：课后练习`**
- `下列函数的输出结果是`
    ```css
    function Person(firstName) {
        this.firstName = firstName;
    }

    Person.prototype.sayHello = function() {
        alert("Hello, I'm " + this.firstName);
    };

    var person1 = new Person("Alice");
    var person2 = new Person("Bob");
    var helloFunction = person1.sayHello;

    person1.sayHello();
    person2.sayHello();
    helloFunction(); 
    ```

- `下列代码的输出结果是`
    ```javascript
    function Person(firstName) {
        this.firstName = firstName;
    }

    Person.prototype.walk = function() {
        alert("I am walking!");
    };
    
    Person.prototype.sayHello = function() {
        alert("Hello, I'm " + this.firstName);
    };

    function Student(firstName, subject) {
        Person.call(this, firstName);
        this.subject = subject;
    };

    Student.prototype = Object.create(Person.prototype);

    Student.prototype.constructor = Student;

    Student.prototype.sayHello = function() {
        console.log("Hello, I'm " + this.firstName + ". I'm studying " + this.subject + ".");
    };

    Student.prototype.sayGoodBye = function(){
        console.log("Goodbye!");
    };

    var student1 = new Student("Janet", "Applied Physics");
    student1.sayHello();
    student1.walk();
    student1.sayGoodBye();

    console.log(student1 instanceof Person);
    console.log(student1 instanceof Student);
    ```

- `使用面向对象思想实现一个购物车模块`
    - `item格式 - { item: 'bread', price: '0.5' }`
    - `addItem - 添加到购物车`
    - `getItemCount - 获取购物车的item数目`
    - `getTotal - 获取总价格`


> **`12：总结`**
```css
本节课介绍了Javascript面向对象编程的基本概念, 从Namespace、Class、Object、Property、Method、Constructor、Inheritance、Encapsulation和Polymorphism几个方面介绍了面向对象编程中的核心概念
```