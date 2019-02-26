##  （十一）Transform变换

> **`1：基本概念 (Grid Layout)`**

- **`应用于元素的2D或3D转换`**

- **`允许将元素旋转，缩放，移动，倾斜`**

- **`坐标系` - 左手坐标系**

    ![image](./left.png)

- **`Transform-origin` - 基准点**

- **`Transform-style` - 元素呈现方式**

- **Rotate - 旋转**

- **Scale - 缩放**

- **Skew - 倾斜**

- **Translate - 移动**

> **`2：浏览器兼容`**
- **完全支持Transform第一个浏览器版本**

	![image](./bowser1.png)

- **完全支持Transform-origin第一个浏览器版本**

	![image](./bowser2.png)

- **完全支持Transform第一个浏览器版本**

	![image](./bowser3.png)

> **`3：Rotate`**
- `rotate(angle)` - 2D 旋转

    ```css
    transform: rotate(45deg);
    ```

- `rotateX(angle)` - 沿X轴3D旋转 

    ```css
    transform: rotate(45deg);
    ```

- `rotateY(angle)` - 沿Y轴3D旋转 

    ```css
    transform: rotate(45deg);
    ```

- `rotate3d(x, y, z, angle)` - 3D旋转
    - x y z - 介于0-1之间, 确定三维空间唯一坐标点
    - angle - 围绕原点与x y z坐标点连线的旋转角度
    ```css
    transform: rotate(45deg);
    ```

