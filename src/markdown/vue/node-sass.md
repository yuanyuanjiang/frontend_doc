## node-sass安装
<br>

#### 安装sass的依赖包
npm install sass-loader node-sass --save-dev

#### 在build文件夹下的webpack.base.conf.js的rules里面添加配置
``` javascript
{
  test: /\.scss$/,
  loaders: ['style', 'css', 'sass']
}
```

##### 在.vue文件中修改style标签
``` javascript
<style lang="scss">
```

##### 参考资料
[在vue中使用sass的配置的方法](http://blog.csdn.net/lily2016n/article/details/75309492)
