# [oms-zoo-web](http://git.server.gingkoo/oms/oms-web/oms-zoo-web)

> Operations management platform sub project

# 说明
> 本项目为运营平台子系统开发模板，开发子系统时需将此模板拷贝到创建的子系统git上进行开发，拷贝操作[here](http://blog.csdn.net/u010261981/article/details/52367420)</br>
> 开发模式：</br>
> 本地开发:webpack+vue+vue-router开发。通过配置文件加载。</br>
> 线上环境集成：各个模块build转换为umd模式，同时生成项目下各个模块资源依赖文件manifest.json，通过主平台requirjs按需加载集成。

# 依赖
> [vue.js](https://cn.vuejs.org/)<br>
> [element-ui](http://element.eleme.io/#/zh-CN)<br>
> [GkAjax]基于[axios](https://github.com/mzabriskie/axios)封装的ajax模块<br>
> [Vuex](https://vuex.vuejs.org/zh-cn/intro.html)
> [requirejs](http://requirejs.org/)<br>
> [GKutils]平台工具类，注册到每个vue实例里
> [GkUI]平台公共组件，自动注册到vue的全局组件里，标签以<gk>开头
><br><br>
> 运营平台主项目说明 [here](http://git.server.gingkoo/wei.wang/operating-platform-web)

# 开发说明
> 子系统必须具备唯一项目名（重要），它作用如下<br>
> 1.与主项目打通（主项目左侧菜单返回）<br>
> 2.如子状态存在自己的store，需通过项目名挂载到主项目中，主项目提供的状态参照开发文档<br>
> 3.子系统开发规范，组件内部style标签必须加上scoped，如果该组件可复用推荐使用[BEM规范](http://www.w3cplus.com/blog/tags/325.html)，如内部元素需要id那么推荐以本系统的项目名为前缀（总的来说无论是类名和id都需避免命名污染


# store（必须）
1.每个子系统具备一个store，为主平台store下子module，module名为项目名,必须在文档中列出详细的state，mutation，action。以便外部调用

# 目录结构
```bash
.
├── README.md
├── build
│   ├── build-manifest.js	--各个模块资源对应关系生成
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js	--模块抓换为umd模式
│   └── webpack.test.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── index.html	--依赖主平台的公共组件需在此处通过script标签引入
├── node_modules
├── package.json
├── src
│   ├── App.vue
│   ├── AppMenu.vue	--开发环境路由菜单，读取router/routerConfig.js的配置
│   ├── assets
│   │   └── logo.png
│   ├── main.js
│   ├── modules	--子系统的各个模块。文件名唯一且与路由对应
│   │   ├── chartManage
│   │   ├── home
│   │   ├── loanSearchManage
│   │   ├── productManage
│   │   └── syncComponents
│   └── router
│       ├── index.js
│       └── routerConfig.js	--各个模块的路由配置
├── static
│   ├── css
│   │   └── defaultTheme.css
│   └── echarts
│       └── echarts-all.js
├── test	--测试模块
│   ├── e2e
│   │   ├── custom-assertions
│   │   ├── nightwatch.conf.js
│   │   ├── runner.js
│   │   └── specs
│   └── unit
│       ├── index.js
│       ├── karma.conf.js
│       └── specs
```

# Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
