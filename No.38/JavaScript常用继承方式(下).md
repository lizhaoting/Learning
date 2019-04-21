##  （三十八）JavaScript常用继承方式(下)

> **`5：寄生式继承`**
- `寄生新的方法属性`
- `Object.createNew()`
    ```css
    Object.prototype.createNew = function(obj) {
        var newObj = Object.create(obj);
        newObj.getLength = function() { ... };
        return newObj;
    }
    ```

- `无法传递参数`

- `引用类型存在污染`

> **`6：寄生组合继承`**
```css
function Super(name) {
  this.name = name;
  this.value = ["Hello", "Word"];
}

Super.prototype.getName = function() {
  return this.name;
};

function Sub(name, age) {
  Super.call(this, name);
  this.age = age;
}

let prototype = Object.create(Super.prototype);

prototype.constructor = Sub;
Sub.prototype = prototype;

Sub.prototype.getAge = function(){
  return this.age;
}

const instance1 = new Sub("Eric", 23);
const instance2 = new Sub("Vico", 23);

instance1.value.push("!");
instance2.value.push("!!");
```

- `Super只执行一次`

> **`7：继承多个对象`**
```css
function 

ClassOne.prototype = Object.create(SuperClass.prototype);

Object.assign(ClassOne.prototype, ClassTwo.prototype);

ClassOne.prototype.constructor = ClassOne;
```

> **`8：课后练习`**
- `下列代码的输出结果是`
    ```css
    function A() {
        this.name = 'a';
        this.color = ['green', 'yellow'];
    }
    function B() {

    }
    B.prototype = new A();
    var b1 = new B();
    var b2 = new B();

    b1.name = 'change';
    b1.color.push('black');

    console.log(b1.name);
    console.log(b2.name);
    console.log(b1.color);
    console.log(b2.color);
    ```

- `已知如下类Animal，要求设计一个Cat类继承自Animal，并实现如下功能(头条面试题)`
    ```css

    /* Animal */
    function Animal() {
        this.name = "Animal";
        this.showName = function() {
            console.log(this.name);
        }
    }
    
    /* Cat */
    function Cat() {
        this.name = "Cat";
        this.showName1 = function() {
            console.log(this.name); 
        }
        this.showName2 = function() {
            console.log(this.name); 
        } 
        this.showName3 = function() {
            console.log(this.__super.name + "=>" + this.name); 
        }
    }
    ```
    - `输出`
    ```css
    var cat = new Cat();
    console.log(cat instanceof Animal );  /* true */
    cat.showName1();                      /* Cat */
    cat.showName2();                      /* Animal */
    cat.showName3();                      /* Animal => Cat */
    ```
> **`9：总结`**
```css
本节课在JS原型链与JS构造函数基础上介绍了原型链继承、构造函数继承、组合继承、原型式继承、寄生式继承、寄生组合继承与继承多个父类
```