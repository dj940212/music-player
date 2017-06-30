# vue-music

>   移动端音乐播放器

预览：http://huxiaofei.me/vue-music

## 运行项目

``` bash
# 安装项目依赖
npm install

# 在localhost:8080 运行
npm run dev

# 构建
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## 项目依赖

+ `fastclick` 消除移动浏览器发生轻敲和点击之间的300毫秒延迟
```javascript
main.js
import fastclick from fastclick
fastclick.attach(document.body);
```

+ `vue-lazyload` vue图片懒加载组件
```javascript
main.js
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    loading: require('common/image/default.png')
})
```

```html
*.vue
<img v-lazy="item.imgurl">
```

+ `better-scroll` 实现滚动列表，轮播图