##  （三十四）Video

> **`1：基本语法`**
```css
<video
  src="xxxx.mp4"
  controls="controls"
  loop="loop"
  autoplay="autoplay"
>
    您的浏览器不支持html5的video标签
</video>
```
- `src - 源 - mp4 - webm - ogg`
- `autoplay - 自动播放`
- `controls	- 控制器`
- `height`
- `width`
- `loop	- 循环播放`。
- `muted - 静音`
- `poster - 预览图`
- `preload - 预加载 - autoplay时失效`

> **`2：Video对象`**
- `currentTime - 获取当前播放时间`

- `duration - 获取视频的总时间`

- `play - 播放`
    ```css
    video.addEventListener("play", () => {});
    video.onplay = () => {}
    ```
- `pause - 暂停`

- `loadstart - 开始加载`

- `durationchange - 时长数据变化`

- `loadedmetadata - 元数据已加载`

- `loadeddata - 当前帧的数据已加载, 无法播放下一帧`

- `progress - 加载中`

- `canplay - 可以播放`

- `canplaythrough - 边缓冲边播放`

- `play() - 播放视频 - Promise`

- `pause() - 暂停视频`

- `load() - 重新加载视频`

> **`3：视频格式与流媒体`**
- `视频格式`
    - `mp4`
    - `ogg`
    - `webm`

- `流媒体 - Video标签不支持`
    - `rtmp - Adobe - TCP协议 - 稳定性好`
    - `rtsp - Netscape - DUP协议 - 实时性好`
    - `flv - 苹果公司 - TCP协议 - 切成一段段m3u文件`

> **`4：Video.js`**
```css
<link href="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.3.0/video-js.min.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.3.0/video.min.js"></script>

const player = videojs('video', options, function onPlayerReady() {
    this.play();
    this.on('ended', function() {
        videojs.log('播放结束');
    });
});
```

- `支持流媒体格式`
    - `ftmp`
    - `rtsp`
    - `flv`

> **`5：总结`**
```css
本节课介绍了Video元素的基本使用方法, 介绍了Video对象的属性和方法, 最后结合流媒体格式介绍了Video.js播放器插件
```