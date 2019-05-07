## [oms-subsystem-template](http://git.server.gingkoo/oms/oms-web/oms-subsystem-template)

>运营管理平台--子系统项目开发模板

## 说明
> 本项目为运营平台子系统开发模板，开发子系统时需将此模板拷贝到创建的子系统git上进行开发，拷贝操作[here](http://blog.csdn.net/u010261981/article/details/52367420)<br>
>
> 开发模式<br>
> 本地开发:webpack+vue+vue-router开发。通过配置文件加载。<br>
> 线上环境集成：各个模块build转换为umd模式，同时生成项目下各个模块资源依赖文件manifest.json，通过主平台requirjs按需加载集成。

## 依赖（内部已做集成）
> [vue.js](https://cn.vuejs.org/)<br>
> [element-ui](http://element.eleme.io/#/zh-CN)<br>
> [GkAjax]基于[axios](https://github.com/mzabriskie/axios)封装的ajax模块<br>
> [Vuex](https://vuex.vuejs.org/zh-cn/intro.html)
> [requirejs](http://requirejs.org/)<br>
> [GKutils]平台工具类，注册到每个vue实例里
> [GkUI]平台公共组件，自动注册到vue的全局组件里，标签以<gk>开头
><br><br>
> 运营平台主项目说明 [here](http://git.server.gingkoo/wei.wang/operating-platform-web)

## 开发说明
> 子系统必须具备唯一项目名（重要），它作用如下<br>
> 1.与主项目打通（主项目左侧菜单返回）<br>
> 2.如子状态存在自己的store，需通过项目名挂载到主项目中，主项目提供的状态参照开发文档<br>
> 3.子系统开发规范，组件内部style标签必须加上scoped，如果该组件可复用推荐使用[BEM规范](http://www.w3cplus.com/blog/tags/325.html)，如内部元素需要id那么推荐以本系统的项目名为前缀（总的来说无论是类名和id都需避免命名污染


## store（必须）
> 每个子系统具备一个store，为主平台store下子module，module名为项目名,必须在文档中列出详细的state，mutation，action。以便外部调用

## 目录结构
```bash
├── README.md
├── build  --构建线上环境时会生成子项目各个页面与资源的对应关系
│   ├── ...
├── config
│   ├── ...
├── index.html  --开发阶段使用，内涵主平台样式版本指定
├── package.json
├── projectConfig.json
├── src
│   ├── App.vue
│   ├── AppMenu.vue
│   ├── api
│   │   ├── base.js  --api的基类
│   │   ├── blackUser.js
│   │   ├── datadic.js
│   │   └── notice  --多级api
│   ├── assets
│   │   └── css
│   ├── common  --主平台加载此项目任何一个页面都会检测是否加载了此项目的index文件，一些项目的前置条件可以写在这里，如数据字典之类
│   │   ├── datadic.js
│   │   └── index.js
│   ├── devMain.js
│   ├── main.js
│   ├── mixin  --此处为项目公共的混合宏，是对项目内重复代码的抽取
│   │   ├── delOper.js
│   │   ├── formatterDataDic.js
│   │   ├── pageResize.js
│   │   ├── pagination.js
│   │   └── resetForm.js
│   ├── modules  --此处放了两个demo，模块支持多级划分，模块的内部结果必须与例子一致
│   │   ├── blackUser
│   │   └── notice
│   ├── router
│   │   ├── index.js
│   │   └── routerConfig.js --开发阶段使用，用来配置页面
│   └── store
│       └── index.js --会将store挂在主屏的store上，其命名空间为子项目的项目编码
├── static
│   ├──...
├── stationConfig.json --开发阶段使用，配置子系统依赖主平台的资源版本
├── test
│   ├── ...
```

## Build Setup
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
