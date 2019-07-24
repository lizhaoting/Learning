> 1
```javascript
function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  })
}

// 用法
async function asyncFunc() {
  for(let i = 0; i <= 9; i++) {
    console.log(i);
    await sleep(1000);
  }
}

asyncFunc();
```
