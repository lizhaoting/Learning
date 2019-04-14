##  （三十三）Audio

> **`1：基本语法`**
```css
<audio
  src="xxxx.mp3"
  controls="controls"
  loop="loop"
  autoplay="autoplay"
>
    您的浏览器不支持html5的audio标签
</audio>
```
- `src - 歌曲路径 - mp3 - ogg - wav`
- `controls - 播放控制器`
- `loop - 歌曲循环`
- `autoplay - 自动播放 - 主流浏览器已关闭 - JS触发`
- `preload - 预加载 - autoplay时忽略此属性`

> **`2：Audio对象`**
- `currentTime - 获取当前播放时间`

- `duration - 获取歌曲的总时间`

- `play - 播放`
    ```css
    audio.addEventListener("play", () => {});
    audio.onplay = () => {}
    ```
- `pause - 暂停`

- `loadstart - 开始加载`

- `durationchange - 时长数据变化`

- `loadedmetadata - 元数据已加载`

- `loadeddata - 当前帧的数据已加载, 无法播放下一帧`

- `progress - 加载中`

- `canplay - 可以播放`

- `canplaythrough - 边缓冲边播放`

- `play() - 播放歌曲 - Promise`

- `pause() - 暂停歌曲`

- `load() - 重新加载歌曲`

> **`3：Audio.js`**
- `http://kolber.github.io/audiojs/`

- `标准浏览器使用Audio标签`

- `旧浏览器使用Flash`

- `可以通过 CSS 定义外观`

```css
<script src="/audiojs/audio.min.js"></script>

<script>
  audiojs.events.ready(function() {
    const as = audiojs.createAll();
  });
</script>

<audio style="display:none" src="./music.mp3" preload="auto" />
```

> **`4：总结`**
```css
本节课介绍了Audio元素的基本使用方法, 介绍了Audio对象的属性和方法
```