##  （五十八）ES6新特征 - Proxy

> **`1：基本概念`**
- `用于定义基本操作的自定义行为(如属性查找，赋值，枚举，函数调用等)`

- `元编程 - 对编程语言进行编程`

- `属性代理 - 拦截`

- `this关键字指向Proxy代理`

- `new Proxy(target, handler)`
  - `target - 用Proxy包装的目标对象`

  - `handler - 代理的行为的函数`

```javascript
let handler = {
    get: function(target, name) {
        return name in target ? target[name] : 'Eric';
    }
};

let p = new Proxy({}, handler);
p.name;
/* Eric */



let proxy = new Proxy({}, {
  get: function(target, property) {
    return 'Eric';
  }
});

let obj = Object.create(proxy);
obj.name;
/* Eric */
```

> **`2：Proxy代理操作`**
- `get - 拦截某个属性的读取操作`
  - `target - 目标对象`

  - `property - 属性名`

  - `receiver - Proxy对象本身(可选)`

  ```javascript
  let teacher = {
    name: "Eric"
  };

  let proxy = new Proxy(teacher, {
    get: function(target, property) {
      if (property in target) {
        return target[property];
      } else {
        throw new ReferenceError("\"" + property + "\" does not exist.");
      }
    }
  });

  proxy.name;
  /* Eric */
  proxy.age;
  /* ReferenceError: "age" does not exist. */
  ```

  - `get属性拦截可以继承`

  - `某个对象不可配置(configurable)或者不可写(writable)使用get会报错`

- `set - 拦截某个属性的赋值操作`
  - `target - 目标对象`

  - `property - 属性名`

  - `value - 属性值`

  - `receiver - Proxy实例本身(可选)`

  ```javascript
  let handler = {
    set: function(obj, prop, value) {
      if (!Number.isInteger(value)) {
        throw new TypeError('The value must an integer');
      }

      /* document.getElementById(prop).innerHTML = value */
      obj[prop] = value;
    }
  };

  let teacher = new Proxy({}, handler);

  teacher.name = 'Eric';
  /* TypeError: The value must an integer */
  ```
  - `不可配置(configurable)或者不可写(writable)使用set不生效`

- `apply - 函数调用、call和apply拦截`
  - `target - 目标对象`

  - `thisArg - 目标对象this`

  - `argumentsList - 目标对象参数数组`
  ```javascript
  var handler = {
    apply (target, ctx, args) {
      return Reflect.apply(...arguments);
    }
  };
  ```
  ```javascript
  let target = function () {
    return 'I am Eric';
  };

  let handler = {
    apply: function () {
      return 'I am Iven';
    }
  };

  let teacher = new Proxy(target, handler);

  teacher();
  /* I am Iven */
  ```

- `has - 拦截对象是否具有某个属性 - hasProperty`
  - `target - 目标对象`

  - `prop - 查询的属性名`
  ```javascript
  let handler = {
    has (target, key) {
      if (key.startsWith('_')) {
        return false;
      }
      return key in target;
    }
  };
  let target = {
    _property: 'private',
    property: 'public'
  };

  let proxy = new Proxy(target, handler);
  '_property' in proxy;
  /* false */
  ```

  - `不拦截for in循环`

  - `对象不可配置(configurable)使用has会报错`

- `construct - 拦截new操作符`
  - `target - 目标对象`

  - `argumentsList - 构造函数参数`

  - `newTarget - 最初被调用的构造函数`

  ```javascript
  var handler = {
    construct (target, args, newTarget) {
      return new target(...args);
    }
  };
  ```
  ```javascript
  var teacher = new Proxy(
    function () {},
    {
      construct: function(target, args) {
        return { name: 'Eric' };
      }
    }
  );
  new teacher();
  /* { name: 'Eric' } */
  ```

  - `返回值必须是对象`

- `ownKeys - 拦截属性遍历`
  - `target - 目标对象`

  ```javascript
  let target = {
    Eric: 100,
    Iven: 200,
  };

  let handler = {
    ownKeys(target) {
      return Reflect.ownKeys(target).filter(key => target[key] < 150);
    }
  };

  let proxy = new Proxy(target, handler);

  Object.keys(proxy);
  /* Eric */
  ```

- `deleteProperty - 拦截删除操作`
  - `target - 目标对象`

  - `property - 删除的属性名`

  - `对象不可配置(configurable)使用deleteProperty会报错`

- `defineProperty - 拦截Object.defineProperty`
  - `target - 目标对象`

  - `property - 属性名`

  - `descriptor - 描述符`

  - `属性不可扩展(non-extensible)会报错`

  - `不可配置(configurable)或者不可写(writable)使用defineProperty不生效`

- `getOwnPropertyDescriptor - 拦截Object.getOwnPropertyDescriptor`
  - `target - 目标对象`

  - `prop - 属性名称`

- `getPrototypeOf - 拦截获取对象原型`
  - `target - 目标对象`

  - `必须返回对象或null`

- `isExtensible - 拦截Object.isExtensible`
  - `target - 目标对象`

  - `必须返回布尔值`

- `preventExtensions - 拦截Object.preventExtensions`
  - `target - 目标对象`

  - `必须返回一个布尔值`

- `setPrototypeOf - 拦截Object.setPrototypeOf`
  - `target - 目标对象`

  - `proto - 原型对象`

> **`3：Proxy代理取消`**
- `revocable`
```javascript
let target = {};

let handler = {};

let { proxy, revoke } = Proxy.revocable(target, handler);

revoke();
proxy.name;
/* ypeError: Cannot perform 'get' on a proxy that has been revoked */
```

> **`4：课后练习`**

- `实现一个createArray可以使用负数index访问`
```javascript
const newArray = createArray(1, 2, 3, 4);

newArray(-1);
/* 4 */
```

- `实现一个has代理, 当分数score小于60时返回文字"不及格"`
```javascript
let student = {
  name: 'Eric',
  score: 59,
};
/* ... */
student.score;
/* 不及格 */
```

- `下列函数的执行结果是`
```javascript
const target = new Date();

const handler = {};

const proxy = new Proxy(target, handler);

proxy.getDate();
```

- `如何改写上述handler函数使其可以正确读取`

> **`5：总结`**
```css
本节课介绍了ES6新特征中Proxy的基本概念与常见的代理设置, 重点关注Proxy代理内部的this指向Proxy本身
```