importScripts('./one.js', './two.js');

let result = 0;

const fibonacci = (n) => {
    if ( n <= 1 ) {
        return 1
    };
    return fibonacci(n - 1) + fibonacci(n - 2);
}

result = fibonacci(10);

console.log('result', result);

// this.close();

this.addEventListener('message', event => {
    console.log('received main worker data', event.data);
}, false);

throw new Error('未知错误！');

// const getResult = n => fibonacci(n);

// this.addEventListener('message', event => {
//     const returnValue = getResult(event.data.number);
//     this.postMessage(returnValue);
// }, false);
