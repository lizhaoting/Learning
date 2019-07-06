> 1

```css
function dedupe(array) {
  return Array.from(new Set(array));
}
```

> 2
```javascript
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
```

> 3
```javascript
undefined
```

> 4
```javascript
function strMapToObj(strMap) {
  let obj = Object.create(null);
  for (let [k,v] of strMap) {
    obj[k] = v;
  }
  return obj;
}
```