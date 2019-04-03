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

- `line style - 线条样式`
```css
```

> **`11：课后练习`**
- `使用Canvas绘制下图形状`

  ![image](./line.png)

  - `宽度300px`
  - `高度150px`
  - `40% black - 40% green - 20% yellow`

> **`12：总结`**
```css
本节课介绍了Canvas元素基本概念和坐标系统, 从线段、三角形、圆和贝塞尔曲线四个示例介绍了Canvas元素的基本绘制方法
```