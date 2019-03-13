##  （十八）淘宝Rem布局方案

> **`1：lib-flexible`**

```css
(function flexible (window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  function setRemUnit () {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
```

- `手淘多年总结出的移动端适配方案`

    - `动态改写<meta>标签`

    - `并且动态改写font-size`

> **`2：使用lib-flexible`**
- `普通项目使用`
```css
<script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
```

- `工程化项目使用`
```css
npm install lib-flexible --save

入口文件引入
import 'lib-flexible/flexible.js'
```

> **`3：手动px -> rem转换`**

![image](./1.png)

- `设置基准 - 设置 - 扩展 - px to rem`

- `Alt + z自动转换`
> **`4：自动px -> rem转换`**

- postcss-px2rem

> **`5：字体不做rem处理`**
- `避免出现奇数或小数px, 导致文字模糊`
    ```css
    .main {
        font-size: 12px;
    }

    [data-dpr="2"] .main {
        font-size: 24px;
    }

    [data-dpr="3"] .main {
        font-size: 36px;
    }
    ```

> **`6：课后练习`**
- `使用淘宝Rem布局方案实现如下设计图`

  ![image](./2.png)

  - `说明`
  ```css
  请按照设计图高比例还原
  ```
- `使用淘宝vw/vh布局方案实现如下设计图`

  ![image](./2.png)

> **`7：总结`**

```
本节课介绍了淘宝移动端适配方案的基本原理和使用方法, 介绍了实际开发中px到rem的转换方法, 最后介绍了字体在Rem布局中的特殊处理
```