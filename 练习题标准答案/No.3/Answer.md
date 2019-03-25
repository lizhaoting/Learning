> 1 
    
- A

> 2

- E

> 3

- D
```css
.header, body {
  border: 1px solid #ddd;
}

body {
  color: green;
  color: orange;
}

.header, body {
  color: red;
  color: yellow;
}
```

> 4

- 4种
```css
nested 嵌套缩进的css代码

expanded 没有缩进的css代码

compact 简洁格式的css代码

compressed 压缩格式的css代码
```

> 5
```css
@mixin css3($property, $value) {
  @each $item in -webkit-,
  -moz-,
  -ms-,
  -o-,
  '' {
      #{$item}#{$property}: $value;
  }
}
```

> 6
```css
$max: 100;
$type-width: 20px;

@while $max > 0 {
    .background-#{$max}{
        background-image: url("/image/#{$max}.jpg");
    }
    $max: $max - 1;
}
```