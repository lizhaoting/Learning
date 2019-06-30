> 1

```css
hello

hi
```

> 2
```javascript
obj => obj.map(s => {
    if (s.extand && s.extand.value < 0) return { ...s, extend: { ...s.extand, value: null } }
    return s;
})
```