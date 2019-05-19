##  （四十二）JavaScript函数式编程(下)
> **`5：函数组合`**
- `函数嵌套`
    ```css
    function1(function2(function13(x)));
    ```

- `函数组合`
    ```css
    var compose = (function1, function2) => (x => function1(function2(x)));

    var function1 = param => param + 1;
    var function2 = param => param + 2;
    var final = compose(function1, function2);
    final(1);
    /* 4 */
    ```

> **`6：Point Free`**

- `不要命名转瞬即逝的中间变量`

    ```css
    var getSplitWord = str => str.toUpperCase().split(' ');
    ```

- `柯里化封装`

    ```css
    var toUpperCase = word => word.toUpperCase();
    var split = x => str => str.split(x);

    var getSplitWord = compose(split(' '), toUpperCase);
    ```

> **`7：声明式代码`**
```javascript
var students = [{
        name: 'Eric',
        score: 99,
    },
    {
        name: 'Iven',
        score: 59,
    }];

/* 命令式 */
const getWell = students => {
    let result = []
    for (let i = 0; i < students.length; i++) { 
        if (students[i].score >= 90) {
            result.push(students[i])
        }
    }
    return result
};

/* 声明式 */
const getWell = students => return students.filter(student => student.score >= 90);
```

> **`8：高阶函数`**
- `把函数当参数，把传入的函数做一个封装`
```css
function add(x, y, f) {
    return f(x) + f(y);
}
```

- `常见的高阶函数`
    - `Array.map`
    ```css
    var array = [1, 2, 3];
    array.map(s => s + 1);
    ```
    - `Array.sort`

    - `Array.filter`

- `react中应用比较广泛`
    - `属性代理`

    - `反向继承`

> **`9：总结`**
```css
本节课从函数式编程的基本概念出发, 介绍了函数式编程的特点, 最后结合实例介绍了函数式编程中核心概念
```