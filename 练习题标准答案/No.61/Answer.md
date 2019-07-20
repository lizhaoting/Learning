> 1
```javascript
function iterator() {
  let index = 0;

  return {
    next: function() {
      return {
        value: index++,
        done: false,
      };
    }
  };
}
```
