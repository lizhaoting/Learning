##  （三十七）JavaScript常用继承方式(上)

> **`1：原型链继承`**
- `重写原型对象, 赋予一个新对象的实例`
```css
function Super() {
    this.text = 'Hello';
}

Super.prototype.getSuperText = function() {
    return this.text;
}

function Sub() {
    this.subText = 'Word';
}

Sub.prototype = new Super();

const instance = new Sub();
console.log(instance);
```

- `优点 - 简单易操作`

- `缺点 - 对引用类型数据操作会互相影响`
    ```css
    function Super() {
        this.value = [1, 2, 3, 4];
    }

    Super.prototype.getSuperValue = function() {
        return this.value;
    }

    function Sub() {
        this.subText = 'Word';
    }

    Sub.prototype = new Super();

    const instance1 = new Sub();
    const instance2 = new Sub();

    instance1.value.push(5);
    console.log(instance2.value);
    ```

> **`2：构造函数继承`**
```css
function Super(){
    this.value = [1, 2, 3, 4];
}

Super.prototype.getSuperValue = function() {
    return this.value;
}

function Sub(){
    Super.call(this);
}

const instance1 = new Sub();
instance1.value.push(5);
console.log(instance1.value);

const instance2 = new Sub();
console.log(instance2.value);
```

- `构造函数执行时申请新的内存空间`

- `只能继承父类的实例属性和方法, 不能继承原型属性和方法`

> **`3：组合继承`**
- `保留构造函数继承与原型链继承优点`
```css
function Person(name) {
    this.name = name;
    this.value = ["head", "body", "legs"];
}

Person.prototype.getName = function() {
    return this.name;
};

/* 构造函数继承 */
function Teacher(name, school){
    Person.call(this, name);
    this.school = school;
}

/* 原型链继承 */
Teacher.prototype = new Person(); 

/* prototype构造器指回自己 */
Teacher.prototype.constructor = Teacher;

Teacher.prototype.getSchool = function() {
    return this.school;
};

```
- `执行了两次Person - 属性重复`

> **`4：原型式继承`**
- `利用一个空对象作为中介`
```css
const lakers = {
    name: "lakers",
    value: ["Micheal", "Wade", "Kobe"]
};

const lakers1 = Object.create(lakers);
const lakers2 = Object.create(lakers);

lakers1.value.push('Fish');

console.log(lakers);
```

- `模拟Object.create()`
    ```css
    Object.prototype.create = function(obj) {
        function Fun() {}
        Fun.prototype = obj;
        return new Fun();
    }
    ```

- `无法传递参数`

- `引用类型存在污染`