##  （六十四）ES6新特征 - Class

> **`1：基本概念`**
- `构造函数语法糖`
  - `更加清晰的写法`

  - `面向对象编程`

  ```javascript
  function Position(x, y) {
    this.x = x;
    this.y = y;
  }

  const position = new Position(1, 1);


  class Position {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  Position === Position.prototype.constructor;
  /* true */
  const position = new Position(1, 1);
  ```

- `类的所有方法定义在类的prototype属性`
  ```javascript
  class Position {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    scan() {
      console.log(this.x, this.y);
    }
  }

  Position.prototype;
  /*
  {
    constructor: class Position
    scan: ƒ scan()
    __proto__: Object
  }
  */
  ```
- `内部方法不可枚举`
  ```javascript
  class Position {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    scan() {
      console.log(this.x, this.y);
    }
  }

  Object.keys(Position.prototype);
  /* [] */
  Object.getOwnPropertyNames(Position.prototype);
  /* ["constructor", "scan"] */
  ```

- `this指向 - 默认指向实例本身`
  ```javascript
  class Position {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    scan() {
      console.log(this.x, this.y);
    }
  }

  const position = new Position(1, 1);
  const { scan } = position;
  scan();
  /* Cannot read property 'x' of undefined */



  class Position {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.scan = this.scan.bind(this);
    }

    scan() {
      console.log(this.x, this.y);
    }
  }

  const position = new Position(1, 1);
  const { scan } = position;
  scan();
  /* 1 1 */



  class Position {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    scan = () => {
      console.log(this.x, this.y);
    }
  }

  const position = new Position(1, 1);
  const { scan } = position;
  scan();
  /* 1 1 */
  ```

> **`2：方法属性`**
- `constructor - required - 默认为空函数`
  - `new命令使用时调用一次constructor`
  ```javascript
  class Position {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      console.log('constructor');
    }
  }

  const position = new Position(1, 1);
  /* constructor */
  ```
  - `默认返回实例对象`
  ```javascript
  class Position {
    constructor(x, y) {
      return Object.create({ name: 'Eric' });
    }
  }

  const position = new Position(1, 1);
  position instanceof Position;
  /* false */
  ```

- `类的实例`
  - `new命令创建`

  - `实例的属性除this之外全部定义在原型对象上`
  ```javascript
  hasOwnProperty();
  ```

- `getter与setter - 拦截某个属性属性的存取行为`
  ```javascript
  class Position {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    get z() {
      return this.x;
    }

    set z(value) {
      this.x = 2;
    }
  }

  const position = new Position(1, 1);
  ```
- `static - 静态方法 - 不能被实例继承 - this指向类`
  ```javascript
  class Position {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.z = 100;
    }

    static scan() {
      console.log(this);
    }
  }

  const position = new Position(1, 1);

  position.scan();
  /* position.scan is not a function */

  Position.scan();
  /*
  class Position {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.z = 100;
    }

    static scan() {
      console.log(this);
    }
  }
  */
  ```

- `属性新写法`
  ```javascript
  class Count {
    x = 0;

    reduce() {
      this.x = this.x - 1;
      console.log(this.x);
    }

    increment() {
      this.x = this.x + 1;
      console.log(this.x);
    }
  }

  const count = new Count();

  count.increment();
  count.increment();
  count.increment();
  count.increment();
  ```

> **`3：类的继承`**
```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  scan = () => {
    console.log(this.x, this.y);
  }
}

class SubPoint extends Point {

}
const subPoint = new SubPoint(1, 1);

subpoint;
/*
{
  scan: () => { console.log(this.x, this.y); }
  x: 1
  y: 1
  __proto__: Point
}
*/
```
- `子类必须调用super方法`
  ```javascript
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    scan = () => {
      console.log(this.x, this.y);
    }
  }

  class SubPoint extends Point {
    constructor(...rest) {
      // super(...rest)
    }
  }
  const subPoint = new SubPoint(1, 1);

  /* Must call super constructor in derived class before accessing 'this' or returning from derived constructor */
  ```
- `Object.getPrototypeOf - 可以在类中获取父类实例`
  ```javascript
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    scan = () => {
      console.log(this.x, this.y);
    }
  }

  class SubPoint extends Point {
    constructor(...rest) {
      super(...rest)
    }
  }
  const subPoint = new SubPoint(1, 1);

  Object.getPrototypeOf(subPoint);
  /*
  Point {
    constructor: class SubPoint
    __proto__: Object
  }
  */
  ```

> **`4：课后练习`**
- `补全下列代码`
```javascript
class Cash {
   /* ... */
}

const cash1 = new Cash(105);
const cash2 = new Cash(66);

const cash3 = cash1.add(cash2);
const cash4 = Cash.add(cash1, cash2);

console.log(`${cash3}`, `${cash4}`);
/* 输出结果为：1元7角1分 1元7角1分 */
```

> **`5：总结`**
```css
本节课介绍了ES6新特征中Class的基本用法与属性方法, 介绍了Class继承的基本用法
```