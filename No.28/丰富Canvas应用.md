##  （二十八）丰富Canvas应用

> **`1：添加样式`**
- `fillStyle - 填充`
    - `颜色 - CSS 颜色值`
    ```css
    ctx.fillStyle = '#329FD9';
    ctx.fillRect(0, 0, 400, 100);
    ```
    - `渐变对象 - Gradient`
        - `createLinearGradient`
        ```css
        const linearGradient = ctx.createLinearGradient(0, 300, 400, 0);
        linearGradient.addColorStop(0, "#8A469B");
        linearGradient.addColorStop(0.5, "#FFFFFF");
        linearGradient.addColorStop(1, "#EA7F26");
        ctx.fillStyle = linearGradient;

        ctx.fillRect(0, 100, 400, 100);
        ```
        - `createRadialGradient`

            ![image](./radius.png)
        ```css
        /* 径向渐变 - 同心圆 */
        const radialGradient1 = ctx.createRadialGradient(200, 250, 10, 200, 250, 60);
        radialGradient1.addColorStop(0, "#8A469B");
        radialGradient1.addColorStop(1, "#EA7F26");
        ctx.fillStyle = radialGradient1;

        ctx.fillRect(0, 200, 400, 100);


        /* 径向渐变 - 非同心圆 */
        const radialGradient2 = ctx.createRadialGradient(60, 350, 10, 350, 350, 60);
        radialGradient2.addColorStop(0, "#8A469B");
        radialGradient2.addColorStop(1, "#EA7F26");
        ctx.fillStyle = radialGradient2;

        ctx.fillRect(0, 300, 400, 100);
        ```
    - `图案(视频)对象 - Pattern`

        - `ctx.createPattern(image, "repeat | repeat-x | repeat-y | no-repeat");`
        ```css
        const img = new Image();
        img.src = "./backup.png";
        img.onload = () => {
            const pattern = ctx.createPattern(img, 'repeat');
            ctx.fillStyle = pattern;

            ctx.fillRect(0, 400, 400, 100);
        }
        ```
    - `设置之后成为默认属性`

- `strokeStyle - 轮廓`
    - `颜色`
    - `渐变对象`
    - `图案(视频)对象`
    - `设置之后成为默认属性`

- `transparency - 透明度`
    ```css
    ctx.globalAlpha = 0.1;
    ```

- `line style - 线条样式`
    - `lineWidth - 线条宽度`
        ```css
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.moveTo(10, 10);
        ctx.lineTo(50, 50);
        ctx.closePath();
        ctx.stroke();
        ```
    - `lineCap - 线条端样式`
        ```css
        ctx.beginPath();
        ctx.moveTo(20, 150);
        ctx.lineTo(20, 250);
        ctx.lineWidth = 20;
        ctx.lineCap = 'round';
        ctx.stroke();
        ```
        - `butt - 平直的边缘 - 默认`
        - `round - 圆形线帽 - 宽度一半`
        - `square - 正方形线帽 - 宽度一半`
    - `lineJoin - 线条连接处端样式 - 同一path`
        - `miter - 尖角 - 默认`
        - `bevel - 斜角`
        - `round - 圆角`
    - `miterLimit - 斜接长度(不做介绍)`
    - `setLineDash - [实线长度, 间隙长度] - 虚线样式`
    - `lineDashOffset - 起始偏移量`
        ```css
        ctx.lineWidth = 1;
        ctx.setLineDash([45, 5]);
        ctx.lineDashOffset = -5;
        ctx.strokeRect(10, 450, 500, 100);
        ```

> **`2：绘制文本`**

> **`11：课后练习`**

- `了解RGB、RGBA和Opacity的关系与区别`

- `使用Canvas绘制下图形状`

  ![image](./line.png)

  - `宽度300px`
  - `高度150px`
  - `40% black - 40% green - 20% yellow`

- `使用Canvas绘制下图形状`

  ![image](./split.png)

  - `宽度600px`
  - `高度600px`
  - `Math.floor(255 - 25.5 * i)`

> **`12：总结`**
```css
本节课介绍了Canvas元素基本概念和坐标系统, 从线段、三角形、圆和贝塞尔曲线四个示例介绍了Canvas元素的基本绘制方法
```