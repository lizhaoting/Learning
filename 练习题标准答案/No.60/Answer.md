> 1
```javascript
function loadImage(url) {
  return new Promise(function(resolve, reject) {
    const image = new Image();
    image.src = url;
    image.onload = function() {
      resolve(image);
    };
    image.onerror = function() {
      reject(new Error('load image at ' + url + 'failed'));
    };
  });
}
```
> 2
```javascript
/*
success

Uncaught Error: Error
*/
```
> 3
```javascript
const promise = new Promise(function (resolve, reject) {
  resolve(x + 2)
});

promise
    .then(function (value) {
    console.log(value);
        return(y + 2);
    })
    .catch(error => console.warn(error))
```