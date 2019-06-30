> 1

```css
function m1({x = 0, y = 0} = {}) {
  return [x, y];
}


function m2({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

/*
m2传参数时无法取到默认值
*/
```

> 2
```javascript
4

s1:  3
s2:  0
```