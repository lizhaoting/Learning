##  （六十五）ES6新特征 - Module

> **`1：基本概念`**

- `编译时模块(module)体系`

> **`2：export - 规定模块的对外接口`**
```javascript
export const name = 'Eric';
export const age = 28;



const name = 'Eric';
const age = 28;
export default { name, age };



const name = 'Eric';
const age = 28;
export default function getProperty() {
  return `name: ${name} age: ${age}`
};



const name = 'Eric';
const age = 28;
export default {
  name as customName,
  age as customAge
};
```

> **`3：import - 加载模块`**
```javascript
import { name, age } from '../xxx.js';


import { name as customName } from '../xxx.js';


import getProperty from '../xxx.js';


import 'lodash';
import 'lodash';


import { name } from '../xxx.js';
import { age } from '../xxx.js';


import * as utils from '../xxx.js';
```

> **`4：export 与 import 复合`**
```javascript
import { foo, bar } from '../xxx.js';
export { foo, bar };

/* 等同于 */
export { foo, bar } from '../xxx.js';



export * from '../xxx.js';



export { default } from '../xxx.js';



import { es6 } from '../xxx.js';
export default es6;

/* 等同于 */
export { es6 as default } from '../xxx.js';



export { default as es6 } from '../xxx.js';
```

> **`5：import() - 动态加载`**
- `按需加载`
  ```javascript
  button.addEventListener('click', event => {
    import('./xxx.js')
    .then(value => {
      console.log(value);
    })
    .catch(error => {
      /* Error */
    })
  });
  ```
- `条件加载`
  ```javascript
  if (condition === 1) {
    import('./xxx.js').then(module => {
      console.log(module.default);
    });
  } else if (condition === 2) {
    import('./xxx.js').then(({ name, age }) => {
      console.log(name, age);
    });
  } else {
    import('./xxx.js').then(({ name: customName, age }) => {
      console.log(customName, age);
    });
  }
  ```

> **`6：总结`**
```css
本节课介绍了ES6新特征中Module的基本用法, 重点在于理解import与export的复合调用, 最后介绍了import()动态加载
```