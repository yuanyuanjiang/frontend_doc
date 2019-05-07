#### node环境配置
<br>

#### node与npm版本
> node:v6.11.2 <br>
> npm:5.4.2
> node:v6.11.2 (历史版)<br>
> node:v8.11.1（升级版，推荐） <br>
<br>

#### 常用npm镜像汇总及切换
> 公司npm：http://10.1.2.32/nexus/repository/npm <br>
> cnpmjs: http://r.cnpmjs.org/ <br>
> 淘宝镜像：http://registry.npm.taobao.org/ <br>
> 查看当前镜像：npm config list<br>
> 镜像切换：npm config set registry http://r.cnpmjs.org

#### 相关依赖安装慢或者报错解决方案：
> (window环境下必须安装ruby,'ruby -v'查看ruby版本)<br>
> 项目根目录下添加文件.npmrc，容易报错的依赖指定镜像来源，内容如下：
```bash
phantomjs_cdnurl=http://cnpmjs.org/downloads
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
```
> 参考资料：https://segmentfault.com/a/1190000010984731

#### package-lock.json 记录依赖版本号
> 确定当前安装的包的依赖，以便后续重新安装的时候生成相同的依赖，而忽略项目开发过程中有些依赖已经发生的更新<br>
> npm install 默认安装最新版本依赖，自动生成的package-lock.json记录了版本号和安装地址，如需低版本，重新指定版本安装依赖，如下
```bash 
npm install vue@2.4.4 vue-template-compiler@2.4.4 --save-dev
```
> package-lock.json 将以上两个依赖版本号降为2.4.4

#### node版本切换：
> node版本切换： http://www.jianshu.com/p/37e30a72583d <br>
> npm 版本切换：npm install npm@4 -g <br>

#### 常用命令
> node_modules 删除:npm install rimraf -g,rimraf node_modules <br>
> npm 缓存清除：npm cache clean <br>
> 升级当前目录下的项目的所有模块: npm update <br>

#### 其它
>运行
```
npm cache clean --force
```
即可解决pm install出现”Unexpected end of JSON input while parsing near”错误。
