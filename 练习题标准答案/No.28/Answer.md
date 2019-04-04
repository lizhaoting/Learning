> 1 

```css
R：红色值。正整数 | 百分数

G：绿色值。正整数 | 百分数

B：蓝色值。正整数 | 百分数

A：Alpha透明度。取值0~1之间。(颜色的透明度)

RGB只可以设置背景颜色
RGBA可以设置透明度, 且透明度不会作用在里面的元素上
Opacity可以设置透明度, 但透明度会作用在里面的元素上
```

> 2 
```css

```

> 3

```javascript
const canvas = document.getElementById('canvas');

/* 获得 2d 上下文对象 */
const ctx = canvas.getContext('2d');

for (var i = 0; i < 10; i++){
    for (var j = 0; j < 10; j++) {
        ctx.fillStyle = 'rgb(' + Math.floor(255 - 25.5 * i) + ',' + Math.floor(255 - 25.5 * j) + ', 10)';
        ctx.fillRect(j * 60, i * 60, 60, 60);
    }
}
```
