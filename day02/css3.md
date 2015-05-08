##2D、3D转换
1. 通过css3转换，可以对元素进行移动、缩放、转动
拉长或拉伸转换，以使元素改变形状、尺寸、和位置的一种效果
2. 2D转换方法：translate() rotate() scale() skew() matrix()
3. 3D转换方法：rotateX() rotateY()

##过渡
1. CSS3过渡是元素从一种样式转换到另外一种样式
动画效果的CSS
动画执行的时间
2. 属性：transition(transition-property(名称) t-duration(花费的时间) t-timing-function(时间曲线) t-delay(开始时间))

##动画
通过CSS3创建的动画需要遵循@keyframes规则，规定动画的时长，规定动画的名称。

##多列
1. CSS3中，可以创建多列来对文本或者区域进行布局，实现瀑布流等效果
2. 属性：column-count column-gap column-rule

##音频播放
1. Audio(音频) HTML5提供了播放音频文件的标准
2. control(控制器) 属性供添加播放、暂停和音量控件
<audio>定义声音 <source>规定多媒体资源，可以多个
转码工具[FFmpeg](http://ffmpeg.org/)

##视频播放
1. Video control
2. video(定义声音) source(规定多媒体资源，可以是多个)
3. 属性 weight height