> 1
```javascript
function* flat(array) {
  if (Array.isArray(array)) {
    for(let i=0; i < array.length; i++) {
      yield* flat(array[i]);
    }
  } else {
    yield array;
  }
}

const array = [ 1, [2, 3], [4, 5] ];
console.log([...flat(array)]);
```
