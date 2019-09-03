##  （三十六）JavaScript原型链

> **`1：基本概念`**
- `JavaScript 只有一种结构：对象`

- `JavaScript - 基于原型的语言 (prototype-based language)`
    - `每个对象拥有一个原型对象, 从中继承方法和属性`

    - `原型对象也可能拥有原型, 并从中继承方法和属性`

    - `以此类推形成一个链路 - 原型链`

- `__proto__( Object.getPrototypeOf() )-  私有属性`
    - `对象属性`

    - `指向构造该对象的构造函数原型的指针(构造函数的prototype)`

    ```css
    /* 定义数字类型 */
    const num = 1234;

    /* 包含toString()、toFixed()等方法 */
    num.toFixed(2);

    /* 查看num的构造函数 */
    num.__proto__
    /*
    Number {
        toPrecision: ƒ, …}
        constructor: ƒ Number()
        toExponential: ƒ toExponential()
        toFixed: ƒ toFixed()
        toLocaleString: ƒ toLocaleString()
        toPrecision: ƒ toPrecision()
        toString: ƒ toString()
        valueOf: ƒ valueOf()
        __proto__: Object
    }
    */

    /* Number的构造函数 */
    num.__proto__.__proto__
    /*
    {
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
    */

    /* 继续查找 */
    num.__proto__.__proto__.__proto__
    /* null */
    ```

- `prototype - 原型`
    - `函数特有属性`

    - `指向原型对象的指针`

    - `包含所有实例共享的属性和方法`

    ```css
    function fun() {}

    fun.prototype
    /*
    {
        constructor: ƒ fun(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
    */
    ```

- `Object.getPrototypeOf(new Fun()) === Fun.prototype`

> **`2：追溯原型链`**
- `hasOwnProperty - 判断一个对象是否具有某个属性或对象`
    ```css
    function Person(name) {
        this.name = name,
        this.getName = function() {
            return this.name;
        }
    }

    const Eric = new Person('Eric');

    Eric.hasOwnProperty('getName'); /* true */
    Eric.hasOwnProperty('name'); /* true */

    Eric.hasOwnProperty('toString'); /* false */
    ```
- `isPrototypeOf - 判断一个对象是否是另一个对象的原型`
    - `对象直接量 - Object.prototype`

    - `构造函数 - 构造函数的prototype` 
    ```css
    function Person(name) {
        this.name = name,
        this.getName = function() {
            return this.name;
        }
    }

    const Eric = new Person('Eric');

    Person.prototype.isPrototypeOf(Eric); /* true */

    ```
- `instanceof - 判断一个对象是否是一个对象的实例`
    ```css
    function Person(name) {
        this.name = name,
        this.getName = function() {
            return this.name;
        }
    }

    const Eric = new Person('Eric');

    Eric instanceof Person; /* true */
    ```

> **`3：修改原型`**
```css
function Person(name) {
	this.name = name;
	this.getName = function() {
		return this.name;
	}
}

const Eric = new Person('Eric');

Person.prototype.getFullName = function() {
	return 'This is' + this.name;
}

Eric.getFullName(); /* This is Eric */

Person.prototype;
/*
{
    constructor: ƒ fun(),
    getFullName: ƒ fun(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
*/
```
> **`4：课后练习`**
- `将公用方法getName提取到prototype级`
    ```css
    function Student(name) {
        this.type = 'student',
        this.class = '侠课岛',
        this.name = name,
        getName: function() {
            return this.name;
        }
    }
    function Teacher(name) {
        this.type = 'teacher',
        this.name = name,
        this.area = '长沙',
        getName: function() {
            return this.name;
        }
    }
    ```

- `思考下列代码的执行结果`
    ```css
    function Person() {  
        this.name = 'Eric';    
    }  
    Person.prototype.getName = function() {  
        return this.name;  
    }  
    function Student() {}

    Student.prototype = new Person();
    Student.prototype = {
        getAge: function() {
            return 28;
        }
    }

    const Eric = new Student();

    Eric.name;
    Eric.getName();
    Eric.getAge();
    ```

- `思考下列代码的执行结果`
    ```css
    function Person() {  
        this.name = 'Eric';    
    }  
    Person.prototype.getName = function() {  
        return this.name;  
    }  
    function Student() {
        this.getName = function() {
            return 'Davy';
        }
    }

    Student.prototype = new Person();

    Student.prototype = {
        getName: function() {
            return 'Micheal';
        }
    };

    const Eric = new Student();

    Eric.name;
    Eric.getName();
    ```

> **`5：总结`**
```css
本节课介绍了JavaScript原型链, 从对象属性入手介绍了__proto__与prototype, 讲解了原型链的追溯方式, 最后结合练习题引入原型链继承概念
```