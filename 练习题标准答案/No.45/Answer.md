> 1
```css
  alert('Hello, I'm Alice');

  alert('Hello, I'm Bob');

  alert('Hello, I'm undefined');
```
> 2
```css
  Hello, I'm Janet. I'm studying Applied Physics.

  alert('I am walking!');

  Goodbye!

  true

  true
```

> 3
```css
var basketModule = (function () {
    /* 私有 */
    var basket = [];

    function doSomethingPrivate () {
        /* ... */ 
   };

    function doSOmeThingElsePrivate () {
        /* ... */ 
    };

    /* 返回一个暴露出的公有对象 */
    return {
        /* 添加item到购物车 */
        addItem: function (values) {
            basket.push(values);
        },
        /* 获取购物车的item数目 */
        getItemCount: function () {
            return basket.length;
        },
        /* 私有函数的公有函数命名 */
        doSomething: doSomethingPrivate,
        /* 获取购物车所有商品总价 */
        getTotal: function() {
            var itemCount = this.getItemCount();
            var total = 0;
            
            while(itemCount--) {
                total += basket[itemCount].price;
            }

            return total;
        },
    };
})();

/* 使用 */
basketModule.addItem({ item: 'bread', price: '0.5' });
basketModule.getItemCount();
```