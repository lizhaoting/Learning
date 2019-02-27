##  （十一）Transform变换

> **`1：基本概念 (Grid Layout)`**

- **`应用于元素的2D或3D转换`**

- **`允许将元素旋转，缩放，移动，倾斜`**

- **`透视投影`**

  ![image](./camera.png)

- **`坐标系` - 左手坐标系**

    ![image](./left.png)

- **`Transform-origin` - 基准点**

- **`Transform-style` - 元素呈现方式**

- **Rotate - 旋转**

- **Scale - 缩放**

- **Skew - 倾斜**

- **Translate - 移动**

- **Perspective - 透视**

> **`2：浏览器兼容`**
- **完全支持Transform第一个浏览器版本**

	![image](./bowser1.png)

- **完全支持Transform-origin第一个浏览器版本**

	![image](./bowser2.png)

- **完全支持Transform-style第一个浏览器版本**

	![image](./bowser3.png)

> **`3：Rotate`**
- `rotate(angle)` - 2D 旋转

    ```css
    transform: rotate(45deg);
    ```

- `rotateX(angle)` - 沿 X 轴3D旋转 

    ```css
    transform: rotateX(45deg);
    ```

- `rotateY(angle)` - 沿 Y 轴3D旋转 

    ```css
    transform: rotateY(45deg);
    ```
- `rotateZ(angle)` - 沿 Z 轴3D旋转 

    ```css
    transform: rotateZ(45deg);
    ```

- `rotate3d(x, y, z, angle)` - 3D旋转
    - x y z - 介于0-1之间, 确定三维空间唯一坐标点

    - angle - 围绕原点与x y z坐标点连线的旋转角度

    - 欧拉角与四元数 (了解)

    ```css
    transform: rotate3d(1, 1, 1, 45deg);
    ```

> **`4：Scale`**
- `scale(x[, y])` - 2D 缩放

    ```css
    transform: scale(2);
    ```

- `scaleX(x)` - 沿 X 轴缩放

    ```css
    transform: scaleX(2);
    ```

- `scaleY(y)` - 沿 Y 轴缩放

    ```css
    transform: scaleY(2);
    ```

- `scaleZ(z)` - 沿 Z 轴缩放 - 单独使用时没有任何效果

    ```css
    transform: scaleZ(2);
    ```

- `scale3d(x, y, z)` - 定义每个方向上的缩放 - Z方向单独使用时没有任何效果
    ```css
    transform: rotate(2, 2, 2);
    ```

> **`5：Skew`**
- `skewX(angle)` - 沿 X 轴的 2D 倾斜

    ```css
    transform: skewX(45deg);
    ```

- `skewY(angle)` - 沿 Y 轴的 2D 倾斜

    ```css
    transform: skewY(45deg);
    ```

- `skew(angle-x, angle-y)` - 沿 X Y 轴的 2D 倾斜

    ```css
    transform: skewY(45deg, 45deg);
    ```

> **`6：Translate`**

- `translateX(x)` - 沿 X 轴位移

    ```css
    transform: translateX(20px);
    ```

- `translateY(y)` - 沿 Y 轴位移

    ```css
    transform: translateY(20px);
    ```

- `translateZ(z)` - 沿 Z 轴位移

    ```css
    transform: translateZ(20px);
    ```

- `translate(x, y)` - 沿 X Y 轴位移

    ```css
    transform: translate(20px, 20px);
    ```

- `translate3d(x, y, z)` - 沿 X Y Z 轴位移

    ```css
    transform: translate(20px, 20px, 20px);
    ```

> **`7：Perspective` - 视觉和元素3D空间Z平面之间的距离**

```css
transform: perspective(200px);
```

> **`8：Transform-origin` - 基准点**
  - `基本语法`
    ```css
    transform-origin: x-axis y-axis z-axis;
    ```
  - `默认值`  -  `50% 50% 0`

  - `x-axis`
    - `left`
    - `center`
    - `right`
    - `length`
    - `%`

  - `y-axis`
    - `top`
    - `center`
    - `bottom`
    - `length`
    - `%`

  - `z-axis`
    - `length`

> **`9：Transform-style` - 三维空间呈现形式**

  - `flat` - `2D形式`

  - `preserve-3d` - `3D形式`