> 1
- `setTimeout宏任务执行时主任务中变量已经变为6`
```css
    6
    6
    6
    6
    6
```
> 2
```css
/* 立即执行形成封闭作用域 */
for(var i = 0;i<5;i ++) {
  (function(i){
    setTimeout(function timer() {
      console.log(i)
    }, i * 1000);
  })(i);
}

/* let关键字 */
for(let i = 0;i<5;i++) {
  setTimeout(function timer(){
    console.log(i);
  }, i * 1000);
}

/* bind */
for (var i=1; i<=5; i++) {
  setTimeout( function timer(i) {
    console.log(i);
  }.bind(null,i), i*1000 );
}

/* setTimeout第三个参数 */
for (var i=1; i<=5; i++) {
  setTimeout( function timer(i) {
    console.log(i);    
   }, i*1000,i );
}
```
> 3
```css
    global
    1
    2
    3
    4
    5
    promise1
    promise2
    then1
    then2
    /* 延迟1s */
    6
    timeout2
    timeout2_promise
    timeout2_then
    /* 延迟1s */
    timeout1
    17 timeout1_promise
    20 timeout1_then
    6
    /* 每隔1s输出3个6 */
```
 - `首先执行整体代码, "global"会被第一个打印出来, 这是第一个输出`

 - `执行到第一个setTimeout时, 发现它是宏任务, 此时会新建一个setTimeout类型的宏任务队列并派发当前这个setTimeout的回调函数到刚建好的这个宏任务队列中去, 并且轮到它执行时要延迟2秒后再执行`

- `代码继续执行走到for循环, 发现是循环5次setTimeout(), 那就把这5个setTimeout中的回调函数依次派发到上面新建的setTimeout类型的宏任务队列中去, 注意, 这5个setTimeout的延迟分别是1到5秒, 此时这个setTimeout类型的宏任务队列中应该有6个任务了, 再执行for循环里的console.log(i), 很简单, 直接输出1,2,3,4,5, 这是第二个输出`

- `再执行到new Promise, Promise构造函数中的第一个参数在new的时候会直接执行, 因此不会进入任何队列, 所以第三个输出是"promise1", 上面有说到Promise.then是微任务, 那么这里会生成一个Promise.then类型的微任务队列, 这里的then回调会被push进这个队列中`

- `再继续走, 执行到第二个setTimeout, 发现是宏任务, 派发它的回调到上面setTimeout类型的宏任务队列中去`

- `再走到最后一个new Promise, 很明显, 这里会有第四个输出："promise2", 然后它的then中的回调也会被派发到上面的Promise.then类型的微任务队列中去`

- `第一轮事件循环的宏任务执行完成(整体代码可以看做宏任务), 此时微任务队列中只有一个Promise.then类型微任务队列, 它里面有两个任务, 宏任务队列中也只有一个setTimeout类型的宏任务队列`

- `下面执行第一轮事件循环的微任务, 很明显, 会分别打印出"then1", 和"then2", 分别是第五和第六个输出, 此时第一轮事件循环完成`

- `开始第二轮事件循环：执行setTimeout类型队列(宏任务队列)中的所有任务, 发现都有延时, 但延时最短的是for循环中第一次循环push进来的那个setTimeout和上面第5个步骤中的第二个setTimeout, 它们都只延时1s, 它们会被同时执行, 但前者先被push进来, 所以先执行它！它的作用就是打印变量i, 在当前作用域没有找到变量i, 去它上层作用域(这里是全局作用域)找, 但此时的i是6, 所以这里第七个输出是延时1s后打印出6`

- `紧接着执行第二个setTimeout, 它会先后打印出"timeout2"和"timeout2_promise", 这分别是第八和第九个输出, 但这里发现了then, 又把它push到上面已经被执行完的then队列中去`

- `这里要注意, 因为出现了微任务then队列, 所以这里会执行该队列中的所有任务(此时只有一个任务), 即打印出"timeout2_then", 这是第十个输出`

- `继续回过头来执行宏任务队列, 此时是执行延时为2s的第一个setTimeout和for循环中第二次循环的那个setTimeout, 跟上面一样, 前者是第一个被push进来的, 所以它先执行, 这里会延时1秒分别输出"timeout1"和"timeout1_promise", 但发现了里面也有一个then, 于是push到then微任务队列并立即执行, 输出了"timeout1_then", 紧接着执行for中第二次循环的setTimeout, 输出6, 注意这三个几乎是同时被打印出来的, 他们分别是第十一到十三个输出`

- `省下的for循环中后面三次循环被push进来的setTimeout依次执行, 于是每隔1s输出一个6, 连续输出3次`

- `第二轮事件循环结束, 全部代码执行完毕`