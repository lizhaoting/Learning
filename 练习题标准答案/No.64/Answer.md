> 1
```javascript
class Cash {
  constructor(value) {
    this.value = value;
  }

  static add(...cashes) {
    const sum = cashes.reduce((pre, cur) => pre + cur) + '';
    return new Cash(sum);
  }

  add(cash) {
    return Cash.add(this, cash);
  }

  toString() {
    const sum = (this + '').padStart(3, 0);
    return `${sum[0]}元${sum[1]}角${sum[2]}分`;
  }

  valueOf() {
    return this.value;
  }
}

const cash1 = new Cash(105);
console.log(cash1 instanceof Cash);

const cash2 = new Cash(66);
console.log(cash2 instanceof Cash);

const cash3 = cash1.add(cash2);
console.log(cash3 instanceof Cash);

const cash4 = Cash.add(cash1, cash2);
console.log(cash4 instanceof Cash);

const cash5 = new Cash(cash1 + cash2);
console.log(cash5 instanceof Cash);


console.log(`${cash3}`, `${cash4}`, `${cash5}`);
```
