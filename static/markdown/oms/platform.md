# oms-platform-web

> Operations management platform main project

# 说明
> 为保证主平台与其它子系统无缝融合，在主平台和子系统开发阶段基于webpack的构建环境开发，在build阶段会将主平台和各个子系统的代码转为umd模式。通过浏览器端的模块化加载器requirejs [here](http://requirejs.org/)相互之间加载，其中每个项目下资源之间的依赖关系会生成在build/build-manifest.js文件内

# 站点搭建说明：
> 站点index.html主要由三部分组成:<br>
> 1.FRAME_CONFIG_PATH：站点的配置文件路径<br>
> 2.stationConfig.json 内含站点所需资源的配置（主项目路径，版本，依赖的子系统路径，版本等）<br>
> 3.build-station.js 根据配置各种策略加载资源的js，最终会存放在全局的FRAME_CONFIG<br>
> 4.stationConfig.json内容如下<br>

``` bash
{
  "api": "http://10.2.20.62:3000",  --后端交互的api
  "env": "subSystem",  --只在开发环境使用，区分当前开发环境是子系统还是主项目，其它环境去除此项
  "mainFrame": {  --主项目的资源配置
    "version": "1.3.0",
    "staticPath": "http://10.2.20.62:9002/operating-platform/main"
  },
  "subSystem": {  --依赖的子系统及资源
    "business": {
      "version": "1.4.0",
      "staticPath": "http://10.2.20.62:9002/operating-platform/business"
    },
    "product": {
      "version": "1.4.0",
      "staticPath": "http://10.2.20.62:9002/operating-platform/product"
    }
  }
}
```

# 依赖
> [vue.js](https://cn.vuejs.org/)<br>
> [element-ui](http://element.eleme.io/#/zh-CN)<br>
> [axios](https://github.com/mzabriskie/axios)<br>
> [requirejs](http://requirejs.org/)<br><br>
>
> 运营平台子系统开发说明 [here](http://git.server.gingkoo/wei.wang/operating-platform-subweb)


#目录结构说明
``` bash
.
├── README.md
├── api
│   └── appMenu.js	--主平台左侧菜单api
├── build
│   ├── build-commtoumd.js
│   ├── build-manifest.js	--生成项目下各个资源依赖关系
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.commtoumd.conf.js	--将公共组件转换为umd，便于各个子系统调用
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js	--externals打包排出公共组件，并定义amd加载的模块id
│   └── webpack.test.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── index.html
├── node_modules
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── bus.js
│   ├── common	--公共组件构建策略
│   │   ├── ElementUI.js
│   │   ├── Vue.js
│   │   └── VueResource.js
│   ├── components
│   │   └── platform	--平台逻辑相关代码
│   ├── devBroswerBootstrap.js	--主平台开发模式时需定义amd加载的模块id，便于与其它子系统集成
│   ├── mainFramework.js	--主平台主入口
│   └── utils.js
├── static
│   └── require.js	--浏览器端amd加载器
├── test
```
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for common components examples
npm run examples

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
